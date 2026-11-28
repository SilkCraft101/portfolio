---
tags:
  - portfolio
  - dev
  - nextjs
  - routing
  - typescript
  - essays
---

# Dynamic Routes

Ένα `page.tsx` εξυπηρετεί πολλά URLs όταν μέρος του ονόματος της διαδρομής είναι μεταβλητό. Στο Portfolio το `app/essays/[category]/[slug]/page.tsx` είναι η σελίδα ανάγνωσης για όλες τις κατηγορίες και τα δοκίμια.

Για το `/essays/learning/i-techni-tou-na-mathaineis`, η `category` είναι `learning` και το `slug` είναι `i-techni-tou-na-mathaineis`.

```tsx
type EssayPageProps = PageProps<"/essays/[category]/[slug]">;
```

Ο τύπος `PageProps` προκύπτει από τη διαδρομή. Μέσα στην ασύγχρονη σελίδα, το `await params` δίνει τις δύο τιμές ως strings. Η εφαρμογή ελέγχει την κατηγορία και το slug πριν καλέσει τη `getEssay`. Το `generateMetadata` ακολουθεί τους ίδιους ελέγχους.

Η διαδρομή `/essays/learning` έχει δικό της `page.tsx` για τον κατάλογο. Για σελίδα ανάγνωσης, στο URL χρειάζεται και το slug.

**Δοκιμή κατανόησης.** Διαβάζω το URL ενός δοκιμίου από την κατηγορία Philosophy και δείχνω ποιος φάκελος στον κώδικα αντιστοιχεί σε κάθε μεταβλητή τιμή.

- [Next.js - Slug Validation](Next.js%20-%20Slug%20Validation.md)
- [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)
- [Next.js — Dynamic Route Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)
- [Next.js — Route-Aware Type Helpers](https://nextjs.org/docs/app/api-reference/config/typescript#route-aware-type-helpers)
