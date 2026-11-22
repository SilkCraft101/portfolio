import { readFile } from "node:fs/promises";
import path from "node:path";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import { Container } from "@chakra-ui/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { get } from "@vercel/blob";
import matter from "gray-matter";

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
    // Διαβάζω πρώτα το υπάρχον τοπικό Markdown αρχείο.
    content = await readFile(essayFilePath, "utf8");
  } catch (error) {
    if (!(
      error instanceof Error &&
      "code" in error &&
      error.code === "ENOENT"
    )) {
      throw error;
    }

    // Αν δεν υπάρχει τοπικό αρχείο, αναζητάω το δοκίμιο στο Vercel BLob.
    const blob = await get(`essays/${category}/${slug}.md`, {
      access: "public",
    });

    if (!blob) {
      notFound();
    }

    content = await new Response(blob.stream).text();
  }

  // Διαχωρίζω τα μεταδεδομένα από το κυρίως περιεχόμενο Markdown.
  const { data, content: markdownContent } = matter(content);

  const title =
    typeof data.title === "string" && data.title.trim() ? data.title : slug;

  const subtitle = typeof data.subtitle === "string" ? data.subtitle : "";
  return (
    <Container maxW="3xl" py={8} className="essay-markdown">
      <h1>{title}</h1>
      {subtitle && (
        <p>
          <em>{subtitle}</em>
        </p>
      )}
      <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {markdownContent}
      </Markdown>
    </Container>
  );
}
