---
tags:
  - portfolio
  - javascript
  - nodejs
  - error-handling
  - nextjs
---

# Τι κάνω όταν μια ανάγνωση αποτύχει

Όταν βάζω `await` μέσα στο `try`, μια απόρριψη του Promise με πηγαίνει στο `catch`. Μπορώ εκεί να αποφασίσω αν υπάρχει εναλλακτική ή αν το σφάλμα πρέπει να προχωρήσει.

Στη `getEssay` του `lib/essays.ts`, για το γνωστό τοπικό δοκίμιο προηγείται έλεγχος μεγέθους και ανάγνωση αρχείου. Αν η ανάγνωση αποτύχει, ο κώδικας εξετάζει το `error.code`.

| Περίπτωση | Τι κάνει η σελίδα ανάγνωσης |
| --- | --- |
| `ENOENT` από το τοπικό αρχείο | Συνεχίζει την αναζήτηση στο Blob. |
| Άλλο σφάλμα ανάγνωσης, όπως `EACCES` | Προωθεί το σφάλμα στο error boundary. |
| Το δοκίμιο λείπει και από το Blob | Η `getEssay` επιστρέφει `null` και η σελίδα καλεί `notFound()`. |

Η `notFound()` διακόπτει το rendering μέσω ειδικού σφάλματος του Next.js. Τη βρίσκω στη σελίδα, μετά το `await getEssay(...)`. Έτσι ξεχωρίζω την απουσία περιεχομένου από την αποτυχία ανάγνωσης.

- [TypeScript - Type Narrowing and unknown](TypeScript%20-%20Type%20Narrowing%20and%20unknown.md)
- [Next.js - Error boundaries στο Portfolio](Next.js%20-%20Error%20boundaries%20%CF%83%CF%84%CE%BF%20Portfolio.md)
- [ECMAScript — The try statement](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-try-statement)
- [Node.js — Common system errors](https://nodejs.org/api/errors.html#common-system-errors)
- [Next.js — notFound()](https://nextjs.org/docs/app/api-reference/functions/not-found)
