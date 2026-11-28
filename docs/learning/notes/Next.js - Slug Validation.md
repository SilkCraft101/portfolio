---
tags:
  - portfolio
  - nextjs
  - javascript
  - security
  - routing
  - essays
---

# Πρώτα ελέγχω την κατηγορία και το slug

Μια τιμή από το URL πρέπει να ταιριάζει στους κανόνες του Portfolio πριν χρησιμοποιηθεί στην αναζήτηση δοκιμίου.

- Η κατηγορία πρέπει να είναι `learning` ή `philosophy`. Το `isEssayCategory` βρίσκεται στη σελίδα ανάγνωσης.
- Το slug αποτελείται από ομάδες μικρών λατινικών γραμμάτων και ψηφίων. Μία παύλα μπορεί να χωρίζει δύο ομάδες. Το `isValidEssaySlug` βρίσκεται στο `lib/essay-utils.ts`.

| Τιμή | Αποτέλεσμα |
| --- | --- |
| `how-we-learn` | Δεκτή μορφή |
| `how-we-learn-2` | Δεκτή μορφή |
| `How-We-Learn` | Απορρίπτεται λόγω κεφαλαίων |
| `how--we-learn` | Απορρίπτεται λόγω συνεχόμενων παυλών |

Η έγκυρη μορφή επιτρέπει την αναζήτηση. Η ύπαρξη του δοκιμίου ελέγχεται από τη `getEssay`. Αν λείπει η εγγραφή ή αν η κατηγορία ή το slug έχουν άκυρη μορφή, η σελίδα καλεί `notFound()`.

Ο κατάλογος εφαρμόζει αντίστοιχο έλεγχο στο pathname που παίρνει από το Blob. Η `slugFromBlobPathname` ελέγχει το prefix της κατηγορίας, την κατάληξη `.md`, την απουσία υποφακέλου και τελικά το slug.

**Δοκιμή κατανόησης.** Βρίσκω στα tests ποια παραδείγματα ελέγχουν τη μορφή του slug και ποια ελέγχουν αν ένα pathname ανήκει στην κατηγορία.

- [Next.js - Dynamic Routes](Next.js%20-%20Dynamic%20Routes.md)
- [Node.js - Regression tests του Portfolio](Node.js%20-%20Regression%20tests%20%CF%84%CE%BF%CF%85%20Portfolio.md)
- [Next.js — Runtime validation of dynamic params](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes#typescript)
- [Next.js — notFound()](https://nextjs.org/docs/app/api-reference/functions/not-found)
