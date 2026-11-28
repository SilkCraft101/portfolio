---
tags:
  - portfolio
  - dev
  - nextjs
  - routing
---
# `generateStaticParams()`

## Με απλά λόγια

Η `generateStaticParams()` είναι μια συνάρτηση του Next.js που δηλώνει ποιες τιμές dynamic routes γνωρίζουμε κατά το build. Το Next.js μπορεί να δημιουργήσει εκ των προτέρων τις αντίστοιχες σελίδες.

## Χρήση

```tsx
export function generateStaticParams() {
  return [
    { slug: "first-essay" },
    { slug: "second-essay" },
  ];
}
```

Για τη διαδρομή:

```text
app/essays/[slug]/page.tsx
```

μπορούν να δημιουργηθούν οι σελίδες:

```text
/essays/first-essay
/essays/second-essay
```

### Δυναμική παραγωγή παραμέτρων

```tsx
export async function generateStaticParams() {
  const essays = await getEssays();

  return essays.map((essay) => ({
    slug: essay.slug,
  }));
}
```

Η `getEssays()` εδώ είναι δική μας βοηθητική function, όχι ενσωματωμένη API του Next.js.

> [!IMPORTANT]
> Η `generateStaticParams()` πρέπει να επιστρέφει array αντικειμένων. Κάθε αντικείμενο περιέχει τις παραμέτρους μιας διαδρομής.

> [!NOTE]
> Η συνάρτηση επιστρέφει τις γνωστές παραμέτρους για προαπόδοση κατά το build. Η αναδημιουργία μιας σελίδας μέσω ISR δεν καλεί ξανά τη `generateStaticParams()`.

## Εφαρμογή στο Portfolio

Το επόμενο απόσπασμα είναι άσκηση για γνωστές κατηγορίες και slugs. Στον σημερινό κώδικα των Essays η σελίδα διαβάζει τα στοιχεία την ώρα του αιτήματος και δεν εξάγει `generateStaticParams`.

Για τη δομή `/essays/[category]/[slug]`, κάθε αντικείμενο θα περιέχει και τις δύο παραμέτρους.

```tsx
return [
  { category: "learning", slug: "how-we-learn" },
  { category: "philosophy", slug: "on-solitude" },
];
```

## Πηγή

[Next.js — generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params)

**Sections:** Returns, Multiple Dynamic Segments, Static Rendering.