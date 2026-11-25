import type { Metadata } from "next";
import Markdown from "react-markdown";
import { notFound } from "next/navigation";
import { Separator, Container, Text } from "@chakra-ui/react";
import Link from "next/link";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import { getEssay, type EssayCategory } from "@/lib/essays";
import { isValidEssaySlug } from "@/lib/essay-utils";
import remarkGfm from "remark-gfm";

type EssayPageProps = PageProps<"/essays/[category]/[slug]">;

function isEssayCategory(category: string): category is EssayCategory {
  return category === "learning" || category === "philosophy";
}

export async function generateMetadata({
  params,
}: EssayPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  if (!isEssayCategory(category) || !isValidEssaySlug(slug)) {
    notFound();
  }

  const essay = await getEssay(category, slug);
  if (!essay) {
    notFound();
  }

  return {
    title: essay.title,
    description:
      essay.subtitle ||
      "Δοκίμιο στην κατηγορία " +
        (category === "learning" ? "Learning" : "Philosophy") +
        ".",
  };
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { category, slug } = await params;
  if (!isEssayCategory(category) || !isValidEssaySlug(slug)) {
    notFound();
  }

  const essay = await getEssay(category, slug);
  if (!essay) {
    notFound();
  }

  return (
    <main id="main-content" lang="el">
      <Container maxW="3xl" py={8} className="essay-markdown">
        <Text mb={6}>
          <Link href={`/essays/${category}`}>
            ← Πίσω{" "}
            {category === "learning"
              ? "στα δοκίμια για τη μάθηση"
              : "στα φιλοσοφικά δοκίμια"}
          </Link>
        </Text>
        <h1>{essay.title}</h1>
        {essay.subtitle && (
          <p>
            <em>{essay.subtitle}</em>
          </p>
        )}
        <Separator borderColor="border.subtle" my={6} />
        <Markdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          components={{
            table: ({ children }) => (
              <div className="essay-table-scroll">
                <table>{children}</table>
              </div>
            ),
          }}
        >
          {essay.content}
        </Markdown>
      </Container>
    </main>
  );
}
