---
tags:
  - portfolio
  - javascript
  - arrays
---
# `Array.filter()`

## Με απλά λόγια

Η `filter()` είναι μία μέθοδος της JavaScript που δημιουργεί νέο array, κρατώντας μόνο τα στοιχεία που ικανοποιούν μια συγκεκριμένη συνθήκη.  Η συνθήκη ελέγχεται μέσω μιας συνάρττησης που εκτελείται για κάθε υπάρχον στοιχείο του array. 

## Σύνταξη

```js
array.filter(callbackFn);
```

- `array`: Το αρχικό array.
- `callbackFn`: Η συνάρτηση που ελέγχει κάθε στοιχείο.
- **Επιστρέφει:** Ένα νέο array με όσα στοιχεία πέρασαν τον έλεγχο.

## Χρήση

```js
const numbers = [5, 10, 15, 20];

const filtered = numbers.filter((number) => number > 10);

console.log(filtered); // [15, 20]
```

Η `filter()` εξετάζει διαδοχικά κάθε αριθμό και διατηρεί μόνο όσους είναι μεγαλύτεροι από `10`.

### Πώς λειτουργεί η callback function

Η callback function επιστρέφει μια τιμή που καθορίζει αν το στοιχείο θα διατηρηθεί.

- `true` ή άλλη αληθής τιμή: Το στοιχείο διατηρείται.
- `false` ή άλλη ψευδής τιμή: Το στοιχείο παραλείπεται.

```javascript
const files = ["essay.md", "notes.txt", "article.md"];

const markdownFiles = files.filter((file) => file.endsWith(".md"));

console.log(markdownFiles);
// ["essay.md", "article.md"]
```

> [!IMPORTANT]
> Η `filter()` επιστρέφει **νέο array**. Δεν αφαιρεί στοιχεία από το αρχικό array.

```javascript
const numbers = [1, 2, 3];

const filtered = numbers.filter((number) => number > 1);

console.log(numbers);  // [1, 2, 3]
console.log(filtered); // [2, 3]
```

> [!NOTE]
> Αν κανένα στοιχείο δεν ικανοποιεί τη συνθήκη, η `filter()` επιστρέφει ένα κενό array `[]`.

## Διαφορά από την Array.find()

Η `find()` υπάρχει ήδη στις σημειώσεις μας.

|`filter()`|`find()`|
|---|---|
|Επιστρέφει νέο array.|Επιστρέφει ένα στοιχείο ή `undefined`.|
|Διατηρεί όλα τα στοιχεία που ικανοποιούν τη συνθήκη.|Επιστρέφει το πρώτο στοιχείο που ικανοποιεί τη συνθήκη.|

> [!WARNING]
> Η `filter()` δεν σταματά μόλις βρει ένα στοιχείο που ικανοποιεί τη συνθήκη. Συνεχίζει να εξετάζει τα υπόλοιπα στοιχεία του array.

## Εφαρμογή στο Portfolio

Στο `app/paintings/page.tsx`, το `value.resources.filter(isPainting)` κρατά τα αποτελέσματα με έγκυρα στοιχεία εικόνας. Στα Essays, η επιλογή κατηγορίας ξεκινά από το prefix στο αίτημα προς το Blob. [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)

## Πηγή

[MDN — Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

**Ενότητες:** Syntax, Parameters, Return value, Description, Filtering out all small values.