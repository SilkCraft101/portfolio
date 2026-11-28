---
tags:
  - portfolio
  - javascript
  - arrays
  - loops
  - cloudinary
  - gallery
---

# Συγκέντρωση αποτελεσμάτων με cursor

## Τι κρατάω από κάθε παρτίδα

Αν η πρώτη απάντηση έχει Α και Β και δίνει cursor, η επόμενη αναζήτηση ξεκινά από εκεί. Αν η δεύτερη έχει Γ και δεν δίνει συνέχεια, η λίστα γίνεται Α, Β, Γ.

Στην `getPaintings` του `app/paintings/page.tsx`, το πρώτο αίτημα τρέχει χωρίς cursor. Τα επόμενα στέλνουν το `next_cursor` που έδωσε το Cloudinary. Η `readPaintingPage` ελέγχει τη δομή της απάντησης πριν προσθέσω τις έγκυρες ζωγραφιές:

```ts
const page = readPaintingPage(await search.execute());
paintings.push(...page.paintings);
```

Το spread περνά κάθε ζωγραφιά στο `push` ως χωριστό όρισμα. Η helper κρατά τους cursors που έχει ήδη συναντήσει και απορρίπτει επανάληψη. Όταν υπάρχει συνέχεια και έχει φτάσει το όριο των 10.000 εγγραφών, επιστρέφει κομμένη λίστα και η σελίδα εμφανίζει σχετικό μήνυμα.

Στα Essays ακολουθώ την ίδια γενική ιδέα, αλλά το Blob SDK δίνει `hasMore` και `cursor`. [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)

## Πότε τελειώνει η αναζήτηση

Το `do...while` εκτελεί το σώμα τουλάχιστον μία φορά. Όταν η απάντηση δεν έχει επόμενο cursor, η συνάρτηση επιστρέφει τα αποτελέσματα. Αν υπάρχει cursor, το `Set.has()` ελέγχει αν εμφανίστηκε ξανά και το `Set.add()` καταγράφει την πρώτη εμφάνισή του. Έτσι μια επαναλαμβανόμενη σελίδα γίνεται εμφανές σφάλμα αντί για ατέρμονα επανάληψη. Ο έλεγχος των 10.000 γίνεται μόνο όταν υπάρχει επόμενος cursor. Αν η τελευταία παρτίδα ανεβάσει το σύνολο πάνω από 10.000, ο κώδικας επιστρέφει ολόκληρη τη λίστα πριν ελέγξει το όριο.

## Πηγές και όριο μελέτης

- [Cloudinary — Search API](https://cloudinary.com/documentation/search_method): παράδειγμα επόμενης σελίδας με `next_cursor`.
- [MDN — do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while): **Syntax**, **Description**.
- [MDN — Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax): **Spread in function calls**. Εδώ το spread χρησιμοποιείται στα ορίσματα του push.

- [ECMAScript — Set](https://tc39.es/ecma262/multipage/keyed-collections.html#sec-properties-of-the-set-prototype-object) για τις μεθόδους `has()` και `add()`.

Η σημείωση επεξηγεί τον υπάρχοντα κώδικα και χρησιμεύει ως οδηγός μελέτης.
