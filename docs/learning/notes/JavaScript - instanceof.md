---
tags:
  - portfolio
  - javascript
  - operators
---
# `instanceof`

## Με απλά λόγια

Με τον συνήθη έλεγχο, το `instanceof` αναζητά το `prototype` του constructor στην αλυσίδα πρωτοτύπων του αντικειμένου. Ο constructor μπορεί να προσαρμόσει τον έλεγχο μέσω `Symbol.hasInstance`.

Επιστρέφει `true` ή `false`.

## Σύνταξη

```javascript
object instanceof Constructor
```

## Χρήση

```javascript
const date = new Date();

console.log(date instanceof Date); // true
```

Άλλο παράδειγμα:

```javascript
const title = "Learning";

console.log(title instanceof Date); // false
```

> [!IMPORTANT]
> Το `instanceof` δεν εξετάζει απλώς αν δύο μεταβλητές έχουν παρόμοια πεδία. Βασίζεται κυρίως στη prototype chain.

> [!NOTE]
> Για τον έλεγχο απλών τύπων, όπως `string` ή `number`, χρησιμοποιούμε συνήθως τον operator `typeof`.

## Εφαρμογή στο Portfolio

Στο `lib/essays.ts`, το `instanceof Error` βοηθά στον χειρισμό σφαλμάτων. Για άσκηση, η ίδια ιδέα εφαρμόζεται σε μια τιμή ημερομηνίας που ίσως έχει μετατραπεί σε αντικείμενο `Date`.

Μπορούμε να ελέγξουμε τον τύπο της τιμής:

```javascript
const date = metadata.date;

if (date instanceof Date) {
  if (Number.isFinite(date.getTime())) {
    console.log(date.toISOString());
  }
}
```

Έτσι μπορούμε να χειριστούμε διαφορετικά ένα αντικείμενο `Date` από ένα απλό string.

> [!WARNING]
> Το `instanceof Date` δεν εγγυάται ότι η ημερομηνία είναι έγκυρη. Για παράδειγμα, το `new Date("invalid")` εξακολουθεί να είναι αντικείμενο `Date`.

## Πηγή

[MDN — instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

**Sections:** Syntax, Description, Examples.