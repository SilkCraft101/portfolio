import "server-only";
import { list } from "@vercel/blob";
import { get } from "@vercel/blob";
import matter from "gray-matter";

export type EssayCategory = "learning" | "philosophy";

export async function getPublishedEssays(category: EssayCategory) {
  // Ανακτώ τα αρχεία Markdown της συγκεκριμένης κατηγορίας.
  const { blobs } = await list({
    prefix: `essays/${category}/`,
  });

  // Διατηρώ μόνο αρχεία Markdown.
  return blobs.filter((blob) => blob.pathname.endsWith(".md"));
}

export async function getEssayMetadata(pathname: string) {
  // Ανακτώ το δημοσιευμένο αρχείο Markdown.
  const blob = await get(pathname, { access: "public" });

  if (!blob) {
    return null;
  }

  // Διαβάζω το περιεχόμενο του αρχείου.
  const markdown = await new Response(blob.stream).text();

  // Διαχωρίζω τα YAML μεταδεδομένα από το περιεχόμενο Markdown.
  const { data } = matter(markdown);

  return {
    title:
      typeof data.title === "string" && data.title.trim()
        ? data.title
        : (pathname.split("/").pop()?.replace(/\.md$/, "") ?? ""),
    subtitle: typeof data.subtitle === "string" ? data.subtitle : "",
  };
}
