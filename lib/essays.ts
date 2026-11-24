import "server-only";
import { cache } from "react";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { get, list, type ListBlobResultBlob } from "@vercel/blob";
import { parseEssay, MAX_ESSAY_BYTES } from "@/lib/essay-parser";
import {
  collectPages,
  isValidEssaySlug,
  mapSettledBatches,
  selectBlobEssayEntries,
  type EssayCategory,
} from "@/lib/essay-utils";

export type { EssayCategory } from "@/lib/essay-utils";

const LOCAL_LEARNING_SLUG = "i-techni-tou-na-mathaineis";
const MAX_METADATA_READS = 4;

export type EssaySummary = {
  slug: string;
  title: string;
  subtitle: string;
  pathname: string;
};

export type EssayCatalog = {
  essays: EssaySummary[];
  blobUnavailable: boolean;
  localUnavailable: boolean;
  failedEntries: number;
};

export type EssayDocument = EssaySummary & {
  category: EssayCategory;
  content: string;
};

function getLocalPath(category: EssayCategory, slug: string): string {
  return path.join(process.cwd(), "content", "essays", category, slug + ".md");
}

function getErrorCode(error: unknown): string | undefined {
  if (typeof error !== "object" || error === null || !("code" in error)) {
    return undefined;
  }

  return typeof error.code === "string" ? error.code : undefined;
}

function getSafeErrorMessage(error: unknown): string {
  if (!(error instanceof Error)) {
    return "UnknownError";
  }

  let message = error.message;
  for (const [name, value] of Object.entries(process.env)) {
    if (
      !/(TOKEN|SECRET|PASSWORD|CREDENTIAL|PRIVATE|KEY|URL)/i.test(name) ||
      !value ||
      value.length < 4
    ) {
      continue;
    }

    message = message.replaceAll(value, "[REDACTED]");
  }

  return `${error.name}: ${message}`;
}

function toSummary(
  slug: string,
  pathname: string,
  markdown: string,
): EssaySummary {
  const { data } = parseEssay(markdown);
  const title =
    typeof data.title === "string" &&
    data.title.trim().length > 0 &&
    data.title.length <= 200
      ? data.title.trim()
      : slug;
  const subtitle =
    typeof data.subtitle === "string" && data.subtitle.length <= 500
      ? data.subtitle.trim()
      : "";

  return { slug, title, subtitle, pathname };
}

async function readBlobMarkdown(
  pathname: string,
  listedSize?: number,
): Promise<string | null> {
  if (typeof listedSize === "number" && listedSize > MAX_ESSAY_BYTES) {
    throw new Error("Το Blob υπερβαίνει το επιτρεπόμενο μέγεθος.");
  }

  const blob = await get(pathname, { access: "public" });
  if (!blob) {
    return null;
  }

  if (blob.statusCode !== 200 || blob.blob.size > MAX_ESSAY_BYTES) {
    throw new Error(
      "Το Blob δεν είναι διαθέσιμο ή υπερβαίνει το όριο μεγέθους.",
    );
  }

  const markdown = await new Response(blob.stream).text();
  if (Buffer.byteLength(markdown, "utf8") > MAX_ESSAY_BYTES) {
    throw new Error("Το Blob υπερβαίνει το επιτρεπόμενο μέγεθος.");
  }

  return markdown;
}

async function listAllEssays(category: EssayCategory) {
  return collectPages<ListBlobResultBlob>(async (cursor) => {
    const page = await list({
      prefix: "essays/" + category + "/",
      limit: 1000,
      ...(cursor ? { cursor } : {}),
    });

    return {
      items: page.blobs,
      cursor: page.cursor,
      hasMore: page.hasMore,
    };
  });
}

export async function getEssayCatalog(
  category: EssayCategory,
): Promise<EssayCatalog> {
  const catalog: EssayCatalog = {
    essays: [],
    blobUnavailable: false,
    localUnavailable: false,
    failedEntries: 0,
  };

  const localSlug = category === "learning" ? LOCAL_LEARNING_SLUG : null;
  if (localSlug) {
    try {
      const localPath = getLocalPath(category, localSlug);
      const fileInfo = await stat(localPath);
      if (fileInfo.size > MAX_ESSAY_BYTES) {
        throw new Error(
          "Το τοπικό δοκίμιο υπερβαίνει το επιτρεπόμενο μέγεθος.",
        );
      }

      const markdown = await readFile(localPath, "utf8");
      catalog.essays.push(
        toSummary(
          localSlug,
          "content/essays/" + category + "/" + localSlug + ".md",
          markdown,
        ),
      );
    } catch (error) {
      catalog.localUnavailable = true;
      console.error(
        "[essays] Local essay could not be listed:",
        category,
        localSlug,
        error instanceof Error ? error.name : "UnknownError",
      );
    }
  }

  let blobs: ListBlobResultBlob[] = [];
  try {
    blobs = await listAllEssays(category);
  } catch (error) {
    catalog.blobUnavailable = true;
    console.error(
      "[essays] Blob listing failed:",
      category,
      getSafeErrorMessage(error),
    );
  }

  const candidates = selectBlobEssayEntries(blobs, category, [
    ...catalog.essays.map((essay) => essay.slug),
    ...(localSlug ? [localSlug] : []),
  ]);

  for (let index = 0; index < candidates.length; index += MAX_METADATA_READS) {
    const batch = candidates.slice(index, index + MAX_METADATA_READS);
    const results = await mapSettledBatches(
      batch,
      MAX_METADATA_READS,
      async ({ blob, slug }) => {
        const markdown = await readBlobMarkdown(blob.pathname, blob.size);
        if (markdown === null) {
          return null;
        }

        return toSummary(slug, blob.pathname, markdown);
      },
    );

    catalog.essays.push(
      ...results.flatMap((result, resultIndex) => {
        if (result.status === "rejected") {
          const pathname = batch[resultIndex].blob.pathname;
          catalog.failedEntries += 1;
          console.error(
            "[essays] Blob essay could not be listed:",
            pathname,
            result.reason instanceof Error
              ? result.reason.name
              : "UnknownError",
          );
          return [];
        }

        return result.value === null ? [] : [result.value];
      }),
    );
  }

  return catalog;
}

export const getEssay = cache(
  async (
    category: EssayCategory,
    slug: string,
  ): Promise<EssayDocument | null> => {
    if (!isValidEssaySlug(slug)) {
      return null;
    }

    if (category === "learning" && slug === LOCAL_LEARNING_SLUG) {
      const localPath = getLocalPath(category, slug);
      try {
        const fileInfo = await stat(localPath);
        if (fileInfo.size > MAX_ESSAY_BYTES) {
          throw new Error(
            "Το τοπικό δοκίμιο υπερβαίνει το επιτρεπόμενο μέγεθος.",
          );
        }

        const markdown = await readFile(localPath, "utf8");
        return {
          ...toSummary(
            slug,
            "content/essays/" + category + "/" + slug + ".md",
            markdown,
          ),
          category,
          content: parseEssay(markdown).content,
        };
      } catch (error) {
        if (getErrorCode(error) !== "ENOENT") {
          throw error;
        }
      }
    }

    const pathname = "essays/" + category + "/" + slug + ".md";
    const markdown = await readBlobMarkdown(pathname);
    if (markdown === null) {
      return null;
    }

    return {
      ...toSummary(slug, pathname, markdown),
      category,
      content: parseEssay(markdown).content,
    };
  },
);
