import "server-only";
import matter from "gray-matter";

export const MAX_ESSAY_BYTES = 1024 * 1024;

type ParsedEssay = {
  data: Record<string, unknown>;
  content: string;
};

export function parseEssay(markdown: string): ParsedEssay {
  if (Buffer.byteLength(markdown, "utf8") > MAX_ESSAY_BYTES) {
    throw new Error("Το δοκίμιο υπερβαίνει το επιτρεπόμενο μέγεθος.");
  }

  const source = markdown.replace(/^\uFEFF+/, "");
  const openingLineEnd = source.search(/\r?\n/);
  const openingLine =
    openingLineEnd === -1 ? source : source.slice(0, openingLineEnd);

  if (source.startsWith("---") && source.charAt(3) !== "-") {
    if (openingLine !== "---") {
      throw new Error("Μόνο YAML Frontmatter επιτρέπεται.");
    }

    const lineBreakLength = source.startsWith("\r\n", 3)
      ? 2
      : source.startsWith("\n", 3)
        ? 1
        : 0;
    const frontmatterStart = 3 + lineBreakLength;
    const hasClosingDelimiter = source
      .slice(frontmatterStart)
      .split(/\r?\n/)
      .some((line) => line === "---");

    if (!hasClosingDelimiter) {
      return { data: {}, content: source };
    }

    const parsed = matter(source, { language: "yaml" }) as {
      data: unknown;
      content: string;
    };

    if (
      parsed.data === null ||
      typeof parsed.data !== "object" ||
      Array.isArray(parsed.data)
    ) {
      throw new Error("Τα YAML Frontmatter metadata πρέπει να είναι αντικείμενο.");
    }

    return {
      data: parsed.data as Record<string, unknown>,
      content: parsed.content,
    };
  }

  return { data: {}, content: source };
}
