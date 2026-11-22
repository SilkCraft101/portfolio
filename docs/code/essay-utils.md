# `lib/essay-utils.ts`

## Ρόλος

Το module περιέχει καθαρές συναρτήσεις για τη μορφή slug/pathname, deduplication, περιορισμένη παράλληλη εργασία και pagination. Οι συναρτήσεις ελέγχονται χωρίς πρόσβαση σε Vercel.

- `isValidEssaySlug`: πεζά λατινικά, αριθμοί και μονές παύλες ανάμεσα σε τμήματα.
- `slugFromBlobPathname`: δέχεται μόνο ακριβές prefix κατηγορίας και flat filename `.md`.
- `selectBlobEssayEntries`: κρατά ένα entry ανά slug και δέχεται slugs που υπερισχύουν από τοπική πηγή.
- `mapSettledBatches`: εκτελεί mapper σε batches και επιστρέφει `PromiseSettledResult`, άρα μεμονωμένη απόρριψη δεν ακυρώνει τα άλλα αποτελέσματα.
- `collectPages`: ακολουθεί `cursor` όσο `hasMore` και απορρίπτει αν λείπει ή επαναλαμβάνεται cursor.

## Έλεγχοι και πηγές

`npm test` ελέγχει path validation, deduplication, cursor termination και μέγιστο concurrency. APIs: [MDN `Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled), [Vercel Blob SDK — list](https://vercel.com/docs/vercel-blob/using-blob-sdk#list), πεδία `hasMore` και `cursor`.
