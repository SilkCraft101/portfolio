import test from "node:test";
import assert from "node:assert/strict";
import { parseEssay } from "../lib/essay-parser.ts";

// 1. Έγκυρο YAML Frontmatter.
test("parses valid YAML frontmatter", () => {
  const markdown = `---
title: "Δοκιμαστικό δοκίμιο"
subtitle: "Δοκιμαστικός υπότιτλος"
---
Κυρίως περιεχόμενο.`;

  const result = parseEssay(markdown);

  assert.equal(result.data.title, "Δοκιμαστικό δοκίμιο");
  assert.equal(result.data.subtitle, "Δοκιμαστικός υπότιτλος");
  assert.equal(result.content, "Κυρίως περιεχόμενο.");
});

// 2. Απόρριψη JavaScript Frontmatter.
test("rejects JavaScript frontmatter", () => {
  const markdown = `---javascript
({ title: "JavaScript" })
---
Κυρίως περιεχόμενο.`;

  assert.throws(
    () => parseEssay(markdown),
    /Μόνο YAML Frontmatter επιτρέπεται\./,
  );
});

test("does not execute JavaScript frontmatter", () => {
  const globalWithMarker = globalThis as typeof globalThis & {
    __essayParserWasExecuted?: boolean;
  };
  globalWithMarker.__essayParserWasExecuted = false;

  try {
    assert.throws(() =>
      parseEssay(
        "---js\n(globalThis.__essayParserWasExecuted = true)\n---\nContent",
      ),
    );
    assert.equal(globalWithMarker.__essayParserWasExecuted, false);
  } finally {
    delete globalWithMarker.__essayParserWasExecuted;
  }
});

// 3. Markdown χωρίς Frontmatter.
test("parses Markdown without frontmatter", () => {
  const markdown = "# Τίτλος\n\nΚυρίως περιεχόμενο.";

  const result = parseEssay(markdown);

  assert.deepEqual(result.data, {});
  assert.equal(result.content, markdown);
});

// 4. Απόρριψη άλλων engines και παραλλαγών του delimiter.
test("rejects unsupported frontmatter declarations", () => {
  const engines = ["json", "toml", "js", "yaml", " javascript"];

  for (const engine of engines) {
    const markdown = `---${engine}\ntitle: Test\n---\nContent`;

    assert.throws(
      () => parseEssay(markdown),
      /Μόνο YAML Frontmatter επιτρέπεται\./,
    );
  }
});

// 5. Υποστήριξη UTF-8 BOM.
test("parses YAML frontmatter with UTF-8 BOM", () => {
  const markdown = "\uFEFF---\ntitle: Test\n---\nContent";

  const result = parseEssay(markdown);

  assert.equal(result.data.title, "Test");
  assert.equal(result.content, "Content");
});

test("parses YAML frontmatter with multiple UTF-8 BOM characters", () => {
  const markdown = "\uFEFF\uFEFF---\ntitle: Test\n---\nContent";
  const result = parseEssay(markdown);

  assert.equal(result.data.title, "Test");
  assert.equal(result.content, "Content");
});

// 6. Απόρριψη JavaScript Frontmatter με UTF-8 BOM.
test("rejects JavaScript frontmatter with UTF-8 BOM", () => {
  const markdown = '\uFEFF---javascript\n({ title: "Test" })\n---\nContent';

  assert.throws(
    () => parseEssay(markdown),
    /Μόνο YAML Frontmatter επιτρέπεται\./,
  );
});

// 7. Υποστήριξη CRLF line endings.
test("parses YAML frontmatter with CRLF line endings", () => {
  const markdown = "---\r\ntitle: Test\r\n---\r\nContent";

  const result = parseEssay(markdown);

  assert.equal(result.data.title, "Test");
  assert.equal(result.content, "Content");
});

// 8. Απόρριψη κακοσχηματισμένου YAML.
test("rejects malformed YAML frontmatter", () => {
  const markdown = "---\ntitle: [invalid\n---\nContent";

  assert.throws(() => parseEssay(markdown));
});

// 9. Απόρριψη μη ασφαλών YAML tags.
test("rejects executable YAML tags", () => {
  const markdown =
    "---\ntitle: !!js/function 'function () { return 1; }'\n---\nContent";

  assert.throws(() => parseEssay(markdown));
});

// 10. Επιβεβαίωση ότι ο parser δεν επαναχρησιμοποιεί cached αποτελέσματα.
test("does not reuse cached parsing results", () => {
  const markdown = "---\ntitle: Cache test\n---\nContent";

  const first = parseEssay(markdown);
  first.data.title = "Modified";

  const second = parseEssay(markdown);

  assert.equal(second.data.title, "Cache test");
  assert.notStrictEqual(first.data, second.data);
});
