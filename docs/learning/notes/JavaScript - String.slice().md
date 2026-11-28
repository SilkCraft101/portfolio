---
tags:
  - portfolio
  - javascript
  - strings
---
# `String.slice()`

## Με απλά λόγια

Η `slice()` είναι μία μέθοδος της JavaScript που εξάγει ένα τμήμα από ένα string και το επιστρέφει ως **νέο string**. Το αρχικό string δεν τροποποιείται.

## Σύνταξη

```js
string.slice(indexStart, indexEnd);
```

- `indexStart`: Η θέση από την οποία ξεκινά η εξαγωγή.
- `indexEnd`: Προαιρετική θέση στην οποία σταματά η εξαγωγή, χωρίς να περιλαμβάνεται ο χαρακτήρας αυτής της θέσης.
- **Επιστρέφει:** Ένα νέο string. 

## Χρήση

```js
const filename = "essay.md";

console.log(filename.slice(0, 5)); // "essay"
console.log(filename.slice(5)); //".md"
console.log(filename.slice(0, -3)); // "essay"
```

Οι δείκτες ξεκινούν από το 0 και μετρούν μονάδες κώδικα UTF‑16. Ορισμένοι χαρακτήρες, όπως πολλά emoji, καταλαμβάνουν δύο μονάδες.

> [!IMPORTANT]
> Η `slice()` περιλαμβάνει τον χαρακτήρα στη θέση `indexStart`, αλλά όχι εκείνον στη θέση `indexEnd`.

Οι αρνητικοί δείκτες μετρούν από το τέλος του string. 

```js
const filename = "first-essay.md";

console.log(filename.slice(-3)); //".md"
console.log(filename.slice(0, -3)); // "first-essay"
```

> [!NOTE]
> Ο αρνητικός δείκτης μετρά από το τέλος του string.
>
> Αν παραλείψουμε το `indexEnd`, η `slice()` επιστρέφει τους χαρακτήρες από το `indexStart` μέχρι το τέλος του string. 

> [!WARNING]
> Η `slice()` δεν ελέγχει αν ένα αρχείο υπάρχει ούτε αφαιρεί πραγματικά την επέκταση από κάποιο αρχείο στον δίσκο. Επεξεργάζεται αποκλειστικά το string που της δίνουμε.

## Εφαρμογή στο Portfolio

Στο Essays χρησιμοποιώ τη `slice()` για να αφαιρέσω την επέκταση `.md` από το όνομα των Markdown αρχείων.

```js
const filename = "how-we-learn.md"

if (filename.endsWith(".md")) {
	const slug = filename.slice(0, -3);
	
	console.log(slug); // "how-we-learn"
}
```

Έτσι, το όνομα `how-we-learn.md` μετατρέπεται σε `how-we-learn`, το οποίο μπορούμε να χρησιμοποιήσουμε ως μέρος της διεύθυνσης ενός δοκιμίου.

## Πηγή

[MDN — String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

**Ενότητες:** Syntax, Description, Using slice() with negative indexes.