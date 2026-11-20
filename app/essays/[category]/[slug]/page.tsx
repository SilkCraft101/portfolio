import { readFile } from "node:fs/promises";
import path from "node:path";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import { Container } from "@chakra-ui/react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { get } from "@vercel/blob";

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

  return (
    <Container maxW="3xl" py={8} className="essay-markdown">
      <Markdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </Markdown>
    </Container>
  );
}
