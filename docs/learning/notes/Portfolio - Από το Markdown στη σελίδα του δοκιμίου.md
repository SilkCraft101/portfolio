---
tags:
  - portfolio
  - essays
  - markdown
  - nextjs
---

# Από το Markdown στη σελίδα του δοκιμίου

**Πού ψάχνω όταν ένα δοκίμιο λείπει από τον κατάλογο;** Ξεκινάω από το όνομα του αρχείου και μετά κοιτάω αν διαβάστηκε το περιεχόμενό του.

Για την πρώτη άσκηση ανοίγω το `i-techni-tou-na-mathaineis`. Στο `getEssay` ο συνδυασμός κατηγορίας και slug επιλέγει το τοπικό Markdown. Μετά το `readFile()` ακολουθώ το `parseEssay` και βλέπω πού ο renderer λαμβάνει το σώμα. Αν λείπει το γνωστό τοπικό αρχείο, ο κώδικας δοκιμάζει το αντίστοιχο Blob.

**Πώς προκύπτει ο απομακρυσμένος κατάλογος**

1. Το `lib/essays.ts` ζητά από το Vercel Blob τα αρχεία κάτω από το prefix της κατηγορίας. Αν η λίστα έχει συνέχεια, κρατά τον `cursor` και ζητά την επόμενη σελίδα.
2. Το `lib/essay-utils.ts` κρατά μόνο έγκυρα ονόματα Markdown στο πρώτο επίπεδο της κατηγορίας. Το `essays/learning/my-note.md` δίνει το slug `my-note`. Ένας υποφάκελος κάτω από το `learning` αποκλείεται.
3. Το `lib/essay-parser.ts` χωρίζει τα YAML metadata από το κείμενο. Ο κατάλογος χρησιμοποιεί τον τίτλο και τον υπότιτλο. Μια ανάγνωση metadata που αποτυγχάνει μπορεί να αφήσει τις υπόλοιπες εγγραφές διαθέσιμες.
4. Στη σελίδα ανάγνωσης το Next.js δίνει `category` και `slug` με `await params`. Η σελίδα και το `generateMetadata` καλούν την ίδια συνάρτηση `getEssay`, η οποία χρησιμοποιεί το React `cache` για επαναχρησιμοποίηση του αποτελέσματος στο ίδιο server request. Το `react-markdown` αποδίδει το κείμενο με τα plugins της διαδρομής.

Το `i-techni-tou-na-mathaineis` είναι ειδική περίπτωση του Learning. Στον κατάλογο προέρχεται από το τοπικό αρχείο και το ίδιο slug αποκλείεται από τις εγγραφές Blob. Στη σελίδα ανάγνωσης, αν λείπει το τοπικό αρχείο (`ENOENT`), γίνεται αναζήτηση στο Blob. Άλλα σφάλματα ανάγνωσης προωθούνται στο error boundary.

**Δοκιμή κατανόησης.** Τι διαφορά έχει ένα έγκυρο slug χωρίς αρχείο από ένα αρχείο που υπάρχει αλλά αποτυγχάνει στην ανάγνωση; Δείχνω στον κώδικα πού επιστρέφεται `null` και πού προωθείται το σφάλμα.

- [Next.js - Slug Validation](Next.js%20-%20Slug%20Validation.md)
- [Node.js - gray-matter](Node.js%20-%20gray-matter.md)
- [Vercel Blob SDK — List pagination](https://vercel.com/docs/vercel-blob/using-blob-sdk#pagination)
- [Next.js — Dynamic Route Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)
- [React — cache](https://react.dev/reference/react/cache)
