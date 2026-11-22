export type EssayCategory = "learning" | "philosophy";

const VALID_SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isValidEssaySlug(slug: string): boolean {
  return VALID_SLUG.test(slug);
}

export function slugFromBlobPathname(
  pathname: string,
  category: EssayCategory,
): string | null {
  const prefix = "essays/" + category + "/";
  if (!pathname.startsWith(prefix) || !pathname.endsWith(".md")) {
    return null;
  }

  const filename = pathname.slice(prefix.length);
  if (filename.includes("/")) {
    return null;
  }

  const slug = filename.slice(0, -3);
  return isValidEssaySlug(slug) ? slug : null;
}

export function selectBlobEssayEntries<T extends { pathname: string }>(
  blobs: T[],
  category: EssayCategory,
  excludedSlugs: Iterable<string>,
): Array<{ blob: T; slug: string }> {
  const seenSlugs = new Set(excludedSlugs);

  return blobs.flatMap((blob) => {
    const slug = slugFromBlobPathname(blob.pathname, category);
    if (!slug || seenSlugs.has(slug)) {
      return [];
    }

    seenSlugs.add(slug);
    return [{ blob, slug }];
  });
}

export async function mapSettledBatches<T, R>(
  items: T[],
  concurrency: number,
  mapper: (item: T) => Promise<R>,
): Promise<PromiseSettledResult<R>[]> {
  if (!Number.isInteger(concurrency) || concurrency < 1) {
    throw new Error("Concurrency must be a positive integer.");
  }

  const results: PromiseSettledResult<R>[] = [];
  for (let index = 0; index < items.length; index += concurrency) {
    const batch = items.slice(index, index + concurrency);
    results.push(...(await Promise.allSettled(batch.map(mapper))));
  }
  return results;
}

type Page<T> = {
  items: T[];
  cursor?: string;
  hasMore: boolean;
};

export async function collectPages<T>(
  readPage: (cursor?: string) => Promise<Page<T>>,
): Promise<T[]> {
  const items: T[] = [];
  const seenCursors = new Set<string>();
  let cursor: string | undefined;

  while (true) {
    const page = await readPage(cursor);
    items.push(...page.items);

    if (!page.hasMore) {
      return items;
    }

    if (!page.cursor || seenCursors.has(page.cursor)) {
      throw new Error("Η σελιδοποίηση επέστρεψε μη έγκυρο cursor.");
    }

    seenCursors.add(page.cursor);
    cursor = page.cursor;
  }
}
