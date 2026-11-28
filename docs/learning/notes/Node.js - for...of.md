---
tags:
  - portfolio
  - nodejs
  - loops
---
# `for...of`

## Με απλά λόγια

Η `for...of` είναι μία δομή επανάληψης της JavaScript. Μας επιτρέπει να περάσουμε διαδοχικά από τις τιμές ενός **iterable**, όπως ένα array ή ένα string.

## Χρήση

```js
const files = ["first.md", "second.md", "third.md"];

for (const file of files) {
	console.log(file);
}
```

Αποτέλεσμα:

```text
first.md
second.md
third.md
```

- `for`: Ξεκινά τη δομή επανάληψης
- `const file`: Δηλώνει μια μεταβλητή για την τιμή της τρέχουσας επανάληψης.
- `of files`: Παίρνει διαδοχικά τις τιμές του array `files`.
- `{ ... }`: Περιέχει τον κώδικα που εκτελείται σε κάθε επανάληψη.

> [!IMPORTANT]
> Η `for...of` διατρέχει τις **τιμές** ενός array, όχι τους δείκτες (indexes) του.

> [!NOTE]
> Μπορούμε να χρησιμοποιούμε `const` επειδή κάθε επανάληψη δημιουργεί τη δική της μεταβλητή `file`.

## Εφαρμογή στο Portfolio

Το παράδειγμα είναι άσκηση με ονόματα αρχείων. Ο σημερινός κατάλογος Essays ξεκινά με `list()` από το Vercel Blob. [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)

## Πηγή

[MDN — for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
