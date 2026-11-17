import { readFile } from "node:fs/promises";
import path from "node:path";
import Markdown from "react-markdown";

export default async function TestEssayPage() {
  const essayFilePath = path.join(
    process.cwd(),
    "content",
    "essays",
    "test-essay.md",
  );

  const content = await readFile(essayFilePath, "utf8");

  return <Markdown>{content}</Markdown>;
}
