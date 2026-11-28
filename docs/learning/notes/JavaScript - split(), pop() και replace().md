---
tags:
  - portfolio
  - javascript
  - strings
  - arrays
---

# Με απλά λόγια

Οι μέθοδοι `split()`, `pop()` και `replace()` μπορούν να χρησιμοποιηθούν συνδυαστικά για την επεξεργασία ενός ονόματος ή μιας διαδρομής. 
- `split()`: Χωρίζει μια συμβολοσειρά σε τμήματα και επιστρέφει ένα array.
- `pop()`: Αφαιρεί και επιστρέφει το τελευταίο στοιχείο ενός array.
- `replace()`: Με συμβολοσειρά ως μοτίβο, αντικαθιστά την πρώτη εμφάνιση μέσα στο κείμενο.

## String.split()

Η `split()` χωρίζει μια συμβολοσειρά χρησιμοποιώντας έναν διαχωριστή.

```js
const pathname = "essays/learning/my-first-essay.md";

const parts = pathname.split("/");

console.log(parts);
// ["essays", "learning", "my-first-essay.md"]
```

Ο χαρακτήρας `/` χρησιμοποιείται ως διαχωριστής.

Η `split()` επιστρέφει νέο array και δεν τροποποιεί την αρχική συμβολοσειρά.

## 2. Array.pop()

Η `pop()` αφαιρεί το τελευταίο στοιχείο ενός array και το επιστρέφει.

```js
const parts = ["essays", "learning", "my-first-essay.md"];

const filename = parts.pop();

console.log(filename);
// "my-first-essay.md"

console.log(parts);
// ["essays", "learning"]
```

> [!IMPORTANT]
> Η `pop()` τροποποιεί το αρχικό array. Αν το array είναι κενό, επιστρέφει `undefined`.

## 3. String.replace()

Η `replace()` αντικαθιστά ένα τμήμα ενός string.

```js
const filename = "my-first-essay.md";

const slug = filename.replace(".md", "");

console.log(slug);
// "my-first-essay"
```

Όταν χρησιμοποιείται string ως πρώτο argument, αντικαθίσταται μόνο η πρώτη εμφάνιση.

Η `replace()` επιστρέφει νέο string και δεν τροποποιεί το αρχικό.

## Άσκηση με διαδρομή Blob

Στο Portfolio χρειάζομαι να μπορώ να μετατρέπω ένα Blob pathname σε slug.

```js
const pathname = "essays/learning/my-first-essay.md";

const filename = pathname.split("/").pop();

const slug = filename?.replace(".md", "");

console.log(slug);
// "my-first-essay"
```

Η έκφραση `filename?.replace()` χρησιμοποιεί optional chaining, ώστε να μην επιχειρείται η εκτέλεση της μεθόδου όταν το `filename` είναι `undefined`.

Το `replace(".md", "")` αφαιρεί την πρώτη εμφάνιση και μπορεί να πειράξει μέρος του ονόματος. Στην υλοποίηση, η `slugFromBlobPathname` ελέγχει πρώτα το prefix και την κατάληξη, μετά αφαιρεί την κατάληξη με `slice(0, -3)` και ελέγχει το slug. [JavaScript - String.slice()](JavaScript%20-%20String.slice%28%29.md)

## Πηγές

- [MDN — String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) — Syntax, Return value, Examples.
- [MDN — Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) — Description, Return value, Examples.
- [MDN — String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) — Description, Return value, Examples.
- [MDN — Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) — Description, Short-circuiting.