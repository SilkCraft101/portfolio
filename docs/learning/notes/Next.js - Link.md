---
tags:
  - portfolio
  - dev
  - nextjs
  - navigation
---

# Link

Το Link επεκτείνει το HTML anchor για πλοήγηση ανάμεσα σε routes του Next.js. Το href ορίζει τον προορισμό.

## Με απλά λόγια

Το Link είναι ο τρόπος του Next.js να μετακινούμαι ανάμεσα σε σελίδες της εφαρμογής.

## Χρήση

```tsx
import Link from "next/link";

function ExampleLinks() {
  return (
    <>
      <Link href="/about">About</Link>
      <Link href="/works">Works</Link>
      <Link href="/about#my-journey">Η διαδρομή μου</Link>
    </>
  );
}
```

Το `href="/about"` οδηγεί στη σελίδα About. Το `href="/works"` ανοίγει τον κατάλογο projects. Το `href="/about#my-journey"` ανοίγει το About και οδηγεί στον τίτλο με `id="my-journey"`. [HTML - Anchor links](HTML%20-%20Anchor%20links.md)

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/api-reference/components/link)
