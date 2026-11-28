---
tags:
  - portfolio
  - dev
  - vercel
  - nextjs
  - storage
  - vercel-blob
  - essays
---

# Τι αποθηκεύω στο Blob

Το Vercel Blob κρατά αρχεία χωριστά από τον κώδικα. Κάθε αρχείο έχει pathname. Για παράδειγμα, το `essays/learning/my-note.md` βρίσκεται κάτω από το prefix `essays/learning/`.

Στο Portfolio, το `list()` διαβάζει τις εγγραφές και το `get()` το περιεχόμενο ενός επιλεγμένου αρχείου. Ο κώδικας ζητά `access: "public"`. Τα αρχεία δημόσιου store μπορούν να αναγνωστούν μέσω του URL τους. Η εγγραφή και η διαγραφή απαιτούν πρόσβαση στο store.

Το Portfolio διατηρεί επίσης ένα συγκεκριμένο δοκίμιο μέσα στο repository. Η εφαρμογή διαβάζει απομακρυσμένα Markdown, ενώ η μεταφόρτωση από σελίδα διαχείρισης παραμένει σχεδιασμός.

- [Vercel - Server Uploads](Vercel%20-%20Server%20Uploads.md)
- [Vercel — Blob](https://vercel.com/docs/vercel-blob)
- [Vercel — SDK Reference](https://vercel.com/docs/vercel-blob/using-blob-sdk)

**Κύρια ανάγνωση για τη ροή των Essays**

[Vercel Blob - Ανάκτηση με list() και get()](Vercel%20Blob%20-%20%CE%91%CE%BD%CE%AC%CE%BA%CF%84%CE%B7%CF%83%CE%B7%20%CE%BC%CE%B5%20list%28%29%20%CE%BA%CE%B1%CE%B9%20get%28%29.md). Εδώ ανατρέχω για τις έννοιες του store και της πρόσβασης.
