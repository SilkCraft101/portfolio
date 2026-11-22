import test from "node:test";
import assert from "node:assert/strict";
import {
  collectPages,
  isValidEssaySlug,
  mapSettledBatches,
  selectBlobEssayEntries,
  slugFromBlobPathname,
} from "../lib/essay-utils.ts";

test("accepts only normalized lowercase essay slugs", () => {
  assert.equal(isValidEssaySlug("hello-world-2"), true);
  for (const slug of ["", "../secret", "a/b", "Upper", "-start", "end-"]) {
    assert.equal(isValidEssaySlug(slug), false);
  }
});

test("accepts only a flat Markdown pathname under the requested category", () => {
  assert.equal(
    slugFromBlobPathname("essays/learning/hello.md", "learning"),
    "hello",
  );
  for (const pathname of [
    "essays/learning/nested/hello.md",
    "essays/philosophy/hello.md",
    "essays/learning/hello.MD",
    "essays/learning/../hello.md",
  ]) {
    assert.equal(slugFromBlobPathname(pathname, "learning"), null);
  }
});

test("filters nested paths and collapses duplicate and local slugs", () => {
  const entries = selectBlobEssayEntries(
    [
      { pathname: "essays/learning/local.md" },
      { pathname: "essays/learning/remote.md" },
      { pathname: "essays/learning/remote.md" },
      { pathname: "essays/learning/nested/ignored.md" },
    ],
    "learning",
    ["local"],
  );

  assert.deepEqual(
    entries.map((entry) => entry.slug),
    ["remote"],
  );
});

test("collects every page using the returned cursor", async () => {
  const cursors: Array<string | undefined> = [];
  const items = await collectPages(async (cursor) => {
    cursors.push(cursor);
    if (!cursor) {
      return { items: [1, 2], hasMore: true, cursor: "next" };
    }
    return { items: [3], hasMore: false };
  });

  assert.deepEqual(items, [1, 2, 3]);
  assert.deepEqual(cursors, [undefined, "next"]);
});

test("rejects a missing cursor when more pages are reported", async () => {
  await assert.rejects(
    () => collectPages(async () => ({ items: [], hasMore: true })),
    /μη έγκυρο cursor/,
  );
});

test("settles each essay independently and limits concurrent reads", async () => {
  let activeReads = 0;
  let maximumActiveReads = 0;
  const results = await mapSettledBatches([1, 2, 3, 4, 5], 2, async (value) => {
    activeReads += 1;
    maximumActiveReads = Math.max(maximumActiveReads, activeReads);
    await new Promise((resolve) => setTimeout(resolve, 1));
    activeReads -= 1;

    if (value === 3) {
      throw new Error("simulated unavailable essay");
    }

    return value * 2;
  });

  assert.equal(maximumActiveReads, 2);
  assert.equal(results.length, 5);
  assert.deepEqual(
    results.map((result) => result.status),
    ["fulfilled", "fulfilled", "rejected", "fulfilled", "fulfilled"],
  );
});
