# `lib/essays.ts`

## Σκοπός

Το αρχείο παρέχει server-side λειτουργίες για την ανάκτηση δημοσιευμένων δοκιμίων από το Vercel Blob.

## Υλοποίηση

### `server-only`

Το import `server-only` αποτρέπει τη χρήση του module από Client Components.

### `EssayCategory`

Ο TypeScript τύπος περιορίζει τις επιτρεπόμενες κατηγορίες:

- `learning`
- `philosophy`

### `getPublishedEssays(category)`

Η asynchronous συνάρτηση ανακτά τα αποθηκευμένα αρχεία της επιλεγμένης κατηγορίας.

Χρησιμοποιεί:

- `list()` από το `@vercel/blob`.
- `prefix`: Περιορίζει την αναζήτηση στον αντίστοιχο φάκελο.
- `filter()`: Διατηρεί μόνο αρχεία με επέκταση `.md`.
- `pathname`: Παρέχει τη διαδρομή κάθε αποθηκευμένου αρχείου.

## Χρήση

Η συνάρτηση χρησιμοποιείται στη σελίδα Learning:

`getPublishedEssays("learning")`

## Έλεγχοι — 20/11/2026

- TypeScript: Επιτυχής.
- Production build: Επιτυχές.
- Η σύνδεση με το Blob Store έχει ελεγχθεί προηγουμένως με κενή λίστα αντικειμένων.

Η ανάκτηση πραγματικών δημοσιευμένων δοκιμίων δεν έχει ακόμη επιβεβαιωθεί.

## Τεχνικές πηγές

- [Vercel Blob — SDK](https://vercel.com/docs/vercel-blob/using-blob-sdk)
- [Next.js — Server Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
