---
tags:
  - portfolio
  - javascript
  - operators
  - fundamentals
---
# Τι είναι οι τελεστές σύγκρισης;

Είναι τελεστές που χρησιμοποιούνται για να συγκρίνουν δύο τιμές.

Το αποτέλεσμα μιας σύγκρισης είναι μια boolean τιμή, όταν η αξιολόγηση ολοκληρωθεί με επιτυχία:
- `true` - Η σύγκριση είναι αληθής.
- `false` - Η σύγκριση είναι ψευδής.

## Με απλά λόγια

Οι τελεστές σύγκρισης επιτρέπουν στο πρόγραμμα μου να απαντά σε ερωτήσεις όπως:
- Είναι ένας αριθμός μικρότερος από κάποιον άλλον;
- Είναι μεγαλύτερος;
- Είναι δύο τιμές ακριβώς ίδιες;

Η JavaScript εξετάζει τη σύγκριση και επιστρέφει `true` ή `false`.

## Οι τρεις βασικοί τελεστές

|Operator|Σημασία|Παράδειγμα|Αποτέλεσμα|
|---|---|---|---|
|`<`|Μικρότερο από|`5 < 10`|`true`|
|`>`|Μεγαλύτερο από|`5 > 10`|`false`|
|`===`|Αυστηρή ισότητα|`5 === 5`|`true`|

Ο τελεστής `===` ελέγχει αν δύο τιμές είναι ίσες χωρίς να μετατρέπει αυτόματα τον τύπο τους για τη σύγκριση.

## Παράδειγμα

```js
const currentMonth = 10;
const birthMonth = 11;

const isBeforeBirthdayMonth = currentMonth < birthMonth;

console.log(isBeforeBirthdayMonth);
```

**Αποτέλεσμα:**

```text
true
```

**Τι συμβαίνει;**
1. Η `currentMonth` περιέχει τον Νοέμβριο (`10`).
2. Η `birthMonth` περιέχει τον Δεκέμβριο (`11`).
3. Ο τελεστής `<` συγκρίνει τις δύο τιμές.
4. Το αποτέλεσμα `true` αποθηκεύεται στη μεταβλητή `isBeforeBirthdayMonth`.

## Άσκηση ημερομηνίας

Έχω γεννηθεί στις 18 Δεκεμβρίου 1997.

Για τον αυτόματο υπολογισμό της ηλικίας μου χρειάζεται να ελέγχω αν έχει φτάσει η ημερομηνία των γενεθλίων μου.

Οι comparison operators θα μας βοηθήσουν να συγκρίνουμε:
- Τον τρέχοντα μήνα με τον μήνα γέννησης.
- Την τρέχουσα ημέρα με την ημέρα γέννησης.

Για παράδειγμα:

```js
const currentMonth = 10;
const birthMonth = 11;

console.log(currentMonth < birthMonth);
```

Το αποτέλεσμα είναι `true`, επειδή ο Νοέμβριος προηγείται του Δεκεμβρίου.

Αργότερα θα συνδυάσουμε αυτές τις συγκρίσεις με συνθήκες `if`, ώστε να υπολογίζουμε σωστά την ηλικία.

## Συνηθισμένα λάθη

**1. Σύγχυση μεταξύ** `=` **και** `===`

```javascript
const age = 28;

console.log(age === 28);
```

- `=` → Ανάθεση τιμής.
- `===` → Σύγκριση αυστηρής ισότητας.

**2. Σύγκριση διαφορετικών τύπων**

```javascript
console.log(28 === "28");
```

Αποτέλεσμα: `false`.

Το `28` είναι αριθμός (number), ενώ το `"28"` είναι κείμενο (string).

**3. Λάθος κατεύθυνση σύγκρισης**

```javascript
const currentMonth = 10;
const birthMonth = 11;

console.log(currentMonth > birthMonth);
```

Αποτέλεσμα: `false`, επειδή το `10` δεν είναι μεγαλύτερο από το `11`.

> [!IMPORTANT]
> **Να θυμάμαι**
>
> Οι τελεστές σύγκρισης δεν αλλάζουν τις τιμές που συγκρίνουν.
> 
> Επιστρέφουν ένα αποτέλεσμα, το οποίο μπορώ να αποθηκεύσω σε μεταβλητή ή να χρησιμοποιήσω αργότερα σε μια συνθήκη.

## Πηγές

**MDN — Expressions and operators**

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators)

Section:
- Comparison operators

**MDN — Strict equality (**`**===**`**)**

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

Sections:
- Description
- Examples