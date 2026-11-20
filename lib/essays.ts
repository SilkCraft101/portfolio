import "server-only";
import { list } from "@vercel/blob";

export type EssayCategory = "learning" | "philosophy";

export async function getPublishedEssays(category: EssayCategory) {
  // Ανακτώ τα αρχεία Markdown της συγκεκριμένης κατηγορίας.
  const { blobs } = await list({
    prefix: `essays/${category}/`,
  });

  // Διατηρώ μόνο αρχεία Markdown.
  return blobs.filter((blob) => blob.pathname.endsWith(".md"));
}
