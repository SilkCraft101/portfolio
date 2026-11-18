import { readFile } from "node:fs/promises";
import path from "node:path";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";

export default async function EssayPage({
  params,
}: PageProps<"/essays/[category]/[slug]">) {
  const { category, slug } = await params;

  // Επιτρέπω μόνο τις δύο κατηγορίες του Portfolio.
  if (category !== "learning" && category !== "philosophy") {
    notFound();
  }

  // Περιορίζω τα ονόματα αρχείων σε ασφαλή slugs.
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    notFound();
  }

  const essayFilePath = path.join(
    process.cwd(),
    "content",
    "essays",
    category,
    `${slug}.md`,
  );

  let content: string;

  try {
    content = await readFile(essayFilePath, "utf8");
  } catch (error) {
    if (error instanceof Error && "code" in error && error.code === "ENOENT") {
      notFound();
    }

    throw error;
  }

  return <Markdown>{content}</Markdown>;
}
