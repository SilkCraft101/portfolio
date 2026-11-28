---
tags:
  - portfolio
  - javascript
  - date
  - fundamentals
---
# Τι είναι το `Date`

Το `Date` είναι ένα ενσωματωμένο αντικείμενο (built-in object) της JavaScript που χρησιμοποιούμε για να εργαζόμαστε με ημερομηνίες και ώρες.

## Με απλά λόγια 

Το `Date` μας επιτρέπει να γνωρίζουμε ποια ημερομηνία έχουμε και να παίρνουμε συγκεκριμένες πληροφορίες από αυτήν, όπως το έτος.

Έτσι, δεν χρειάζεται να ενημερώνουμε χειροκίνητα το έτος μέσα στον κώδικα μας.

## Δημιουργία ημερομηνίας

```js
const today = new Date();
```

- `const today`: Δηλώνουμε μια μεταβλητή.
- `new Date()`: Δημιουργούμε ένα νέο αντικείμενο ημερομηνίας που αντιπροσωπεύει την τρέχουσα ημερομηνία και ώρα.
- `today`: Αποθηκεύει το αντικείμενο που δημιουργήθηκε.

## Η μέθοδος `getFullYear()`

Η `getFullYear()` επιστρέφει το έτος στη ζώνη ώρας του περιβάλλοντος εκτέλεσης ή `NaN` για μη έγκυρη ημερομηνία. Το `components/about.tsx` υπολογίζει την ηλικία στη ζώνη `Europe/Athens` μέσω `Intl.DateTimeFormat`.

```js
const today = new Date();
const currentYear = today.getFullYear();

console.log(currentYear);
```

Αν εκτελέσουμε τον κώδικα μέσα στο 2026, το αποτέλεσμα θα είναι:

```bash
2026
```

Η έκφραση `today.getFullYear()` καλεί τη μέθοδο `getFullYear()` πάνω στο αντικείμενο `today`.

## Σύνδεση με το Portfolio

Ως άσκηση, έστω ότι γράφω το τρέχον έτος με το χέρι:

```js
const currentYear = 2026;
```

Αυτό δημιουργεί πρόβλημα επειδή το έτος παραμένει σταθερό.

Με το `Date` μπορώ να λαμβάνω το πραγματικό έτος κατά την εκτέλεση του κώδικα.

```js
const birthYear = 1997;
const today = new Date();
const currentYear = today.getFullYear();

const age = currentYear - birthYear;
```

> [!WARNING]
> **Προσοχή**
>
> Η αφαίρεση των ετών δεν αρκεί για τον ακριβή υπολογισμό ηλικίας.
> 
> Έχω γεννηθεί στις 18 Δεκεμβρίου 1997. Πριν από τα γενέθλιά μου το 2026 είμαι 28 ετών, παρότι η αφαίρεση `2026 - 1997` δίνει `29`.
> 
> Θα χρειαστεί να εξετάσουμε και τον μήνα και την ημέρα γέννησης.

## Συνηθισμένα λάθη

**Παράλειψη του** `new`**:**

```js
const today = Date();
```

Αυτό επιστρέφει ένα `string` με την ημερομηνία και ώρα, όχι ένα αντικείμενο `Date`.

**Παράλειψη των παρενθέσεων στη μέθοδο:**

```js
const today = new Date();
const currentYear = today.getFullYear;
```

Εδώ αποθηκεύουμε μια αναφορά στη μέθοδο αντί να την εκτελέσουμε.

Για να πάρουμε το έτος, γράφουμε `today.getFullYear()`.

## Πηγές

1. [MDN — Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
    - Description

2. [MDN — Date() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
    - Syntax
    - Examples: Using Date()

3. [MDN — getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)
    - Return value
    - Examples