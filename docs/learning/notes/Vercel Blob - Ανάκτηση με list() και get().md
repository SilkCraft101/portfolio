---
tags:
  - portfolio
  - vercel
  - vercel-blob
  - nextjs
  - typescript
  - storage
  - essays
---

# Βρίσκω ένα αρχείο και μετά το διαβάζω

Για τον κατάλογο Learning, η `list()` ζητά εγγραφές με prefix `essays/learning/`. Η απάντηση έχει στοιχεία όπως pathname και μέγεθος. Η πρώτη κλήση γίνεται χωρίς cursor. Όσο το SDK επιστρέφει `hasMore: true`, η `collectPages` περνά τον αδιαφανή `cursor` της απάντησης στην επόμενη κλήση με το ίδιο prefix. Τερματίζει με `hasMore: false` και απορρίπτει απάντηση που υπόσχεται επόμενη σελίδα χωρίς cursor ή επαναλαμβάνει ήδη χρησιμοποιημένο cursor.

Το `get()` χρησιμοποιεί το pathname ενός επιλεγμένου δοκιμίου:

```ts
const result = await get("essays/learning/my-note.md", {
  access: "public",
});
```

Αν το αρχείο λείπει, το SDK μπορεί να επιστρέψει `null`. Η `readBlobMarkdown` στο `lib/essays.ts` ελέγχει το status και το μέγεθος πριν διαβάσει το stream. Η μετατροπή σε string εξηγείται στη σημείωση [JavaScript - Response και Streams](JavaScript%20-%20Response%20%CE%BA%CE%B1%CE%B9%20Streams.md).

**Δοκιμή κατανόησης.** Βλέπω μια εγγραφή στο `list()`. Τι μπορώ να μάθω από αυτή πριν ζητήσω τα bytes του αρχείου;

- [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)
- [Vercel — List pagination](https://vercel.com/docs/vercel-blob/using-blob-sdk#pagination)
- [Vercel — Get a blob](https://vercel.com/docs/vercel-blob/using-blob-sdk#get)
