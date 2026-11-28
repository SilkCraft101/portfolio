---
tags:
  - portfolio
  - javascript
  - arrays
---
# `Array.sort()`

## Με απλά λόγια

Η `sort()` είναι μία μέθοδος της JavaScript που ταξινομεί τα στοιχεία ενός array. Από προεπιλογή ταξινομεί τις τιμές ως strings, σε σειρά βάσει των μονάδων UTF-16.

> [!IMPORTANT]
> Η `sort()` τροποποιεί το αρχικό array και επιστρέφει αναφορά στο ίδιο array. 

## Σύνταξη

```js
array.sort(compareFn);
```

- `array`: Το array που θέλουμε να ταξινομίσουμε.
- `compareFn`: Προαιρετική συνάρτηση που καθορίζει τη σειρά ταξινόμισης.
- **Επιστρέφει:** το ίδιο array, ταξιονομημένο.

## Χρήση

**Ταξινόμηση strings**

```js
const files = ["zebra.md", "apple.md", "notes.md"];

files.sort();

console.log(files);
// ["apple.md", "notes.md", "zebra.md"]
```

**Ταξινόμηση αριθμών**

```js
const numbers = [10, 2, 30];

numbers.sort();

console.log(numbers);
// [10, 2, 30]
```

> [!WARNING]
> Χωρίς `compareFn`, η `sort()` δεν ταξινομεί απαραίτητα τους αριθμούς με αριθμητική σειρά. Τους συγκρίνει ως strings.

Για αριθμητική ταξινόμηση χρησιμοποιούμε μια `compareFn`:

```javascript
const numbers = [10, 2, 30];

numbers.sort((a, b) => a - b);

console.log(numbers);
// [2, 10, 30]
```

### Πώς λειτουργεί η compareFn

Η `compareFn` συγκρίνει δύο στοιχεία, `a` και `b`.
- **Αρνητικό αποτέλεσμα:** Το `a` προηγείται του `b`.
- **Θετικό αποτέλεσμα:** Το `b` προηγείται του `a`.
- **Μηδέν:** Τα στοιχεία θεωρούνται ισοδύναμα ως προς την ταξινόμηση.

Για φθίνουσα αριθμητική σειρά:

```javascript
const numbers = [10, 2, 30];

numbers.sort((a, b) => b - a);

console.log(numbers);
// [30, 10, 2]
```

> [!NOTE]
> Αν θέλουμε να διατηρήσουμε το αρχικό array, μπορούμε να χρησιμοποιήσουμε τη `toSorted()`, η οποία επιστρέφει νέο array.

## Άσκηση ταξινόμησης

Η σειρά `public_id` στη gallery ορίζεται στο Cloudinary με `sort_by`. Για να δοκιμάσω τη `sort()` τοπικά, ταξινομώ το δοκιμαστικό array αριθμών και ελέγχω τι έχει αλλάξει στο αρχικό array μετά την κλήση.

## Πηγή

[MDN — Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

**Ενότητες:** Syntax, Parameters, Return value, Description, Sorting array of objects.