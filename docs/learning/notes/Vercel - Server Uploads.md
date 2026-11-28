---
tags:
  - portfolio
  - dev
  - nextjs
  - vercel
  - vercel-blob
  - storage
  - server-actions
  - essays
---

# Ανέβασμα αρχείου μέσω server

Η μορφή που περιγράφει η Vercel είναι απλή. Ο browser στέλνει το αρχείο σε Server Action ή Route Handler. Ο server ελέγχει την πρόσβαση και το αρχείο, καλεί το `put()` και παίρνει το pathname και το URL του Blob.

Για παράδειγμα, σε μια μελλοντική φόρμα δημοσίευσης, το pathname πρέπει να ακολουθεί τη μορφή `essays/<category>/<slug>.md` που περιμένει ο σημερινός αναγνώστης. Διατηρώ το `addRandomSuffix: false`, που είναι και η προεπιλογή του SDK 2.9.0, ώστε το pathname να αντιστοιχεί στο προβλεπόμενο slug. Η Vercel τεκμηριώνει όριο 4,5 MB για το σώμα του αιτήματος σε Vercel Functions. Ο parser του Portfolio έχει χωριστό όριο 1 MiB για το Markdown.

Στον τρέχοντα κώδικα υπάρχουν ανάκτηση και εμφάνιση από το Blob. Η φόρμα διαχείρισης και η μεταφόρτωση μέσα από το Portfolio παραμένουν ιδέες για μελλοντική μελέτη.

- [Vercel Blob - Βασικές Έννοιες](Vercel%20Blob%20-%20%CE%92%CE%B1%CF%83%CE%B9%CE%BA%CE%AD%CF%82%20%CE%88%CE%BD%CE%BD%CE%BF%CE%B9%CE%B5%CF%82.md)
- [Next.js - Slug Validation](Next.js%20-%20Slug%20Validation.md)
- [Vercel — Server Uploads](https://vercel.com/docs/vercel-blob/server-upload)
