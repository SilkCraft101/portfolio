---
tags:
  - portfolio
  - javascript
  - conditionals
  - fundamentals
---
# Πώς αποφασίζει ποιος κώδικας θα εκτελεστεί;

Με το `if` ελέγχω μια συνθήκη που αξιολογείται ως `true` ή `false`. 
- `if`: εκτελεί τον κώδικα αν η συνθήκη είναι αληθής.
- `else if`: Ελέγχει μια επιπλέον συνθήκη, εφόσον οι προηγούμενες ήταν ψευδείς.
- `else`: Εκτελείται όταν καμία προηγούμενη συνθήκη δεν ήταν αληθής.

```js
const day = 17;

if (day < 18) {
  console.log("Τα γενέθλιά μου πλησιάζουν.");
} else {
  console.log("Τα γενέθλιά μου είναι σήμερα ή έχουν περάσει.");
}
```

Με `day = 17` εκτελείται το πρώτο block. Με `day = 18` εκτελείται το `else`, επειδή η σύγκριση `18 < 18` επιστρέφει `false`.

## Πότε χρησιμοποιώ `else if`;

Όταν χρειάζεται να εξετάσω περισσότερες από μία περιπτώσεις.

```javascript
const day = 18;

if (day < 18) {
  console.log("Πριν από τα γενέθλιά μου.");
} else if (day === 18) {
  console.log("Σήμερα έχω γενέθλια!");
} else {
  console.log("Τα γενέθλιά μου πέρασαν.");
}
```

Η JavaScript ελέγχει τις συνθήκες από πάνω προς τα κάτω.

Μόλις βρει την πρώτη αληθή συνθήκη, εκτελεί το αντίστοιχο block και παραλείπει τα υπόλοιπα της ίδιας αλυσίδας.

Το `else if` αντιστοιχεί στο `elif` της Python.

## Με απλά λόγια

Το `if` είναι η πρώτη ερώτηση που κάνω στο πρόγραμμα.

Αν η απάντηση είναι «όχι», μπορώ να κάνω μια δεύτερη ερώτηση με `else if`.

Αν όλες οι απαντήσεις είναι «όχι», μπορώ να ορίσω μια τελευταία ενέργεια με `else`.

Το `else` δεν είναι υποχρεωτικό. Αν δεν χρειάζεται να συμβεί κάτι όταν όλες οι συνθήκες είναι ψευδείς, μπορώ να το παραλείψω.

## Άσκηση ημερομηνίας

Έχω γεννηθεί στις **18 Δεκεμβρίου 1997**.

Η αφαίρεση των ετών δίνει την ηλικία που συμπληρώνω μέσα στο τρέχον έτος. Για να υπολογίζω την πραγματική ηλικία μου, χρειάζεται να ελέγχω αν έχουν περάσει τα γενέθλιά μου.

```javascript
function getAge() {
  const today = new Date();

  const month = today.getMonth();
  const day = today.getDate();

  let age = today.getFullYear() - 1997;

  if (month < 11) {
    age = age - 1;
  } else if (day < 18) {
    age = age - 1;
  }

  return age;
}

console.log(getAge());
```

**Πώς λειτουργεί;**
1. Η `new Date()` καταγράφει την τρέχουσα χρονική στιγμή. Οι getters του παραδείγματος χρησιμοποιούν τη ζώνη ώρας του περιβάλλοντος. Το Portfolio ορίζει ρητά `Europe/Athens`.
2. Υπολογίζω αρχικά την ηλικία αφαιρώντας τα έτη.
3. Αν ο μήνας είναι πριν από τον Δεκέμβριο (`11`), αφαιρώ ένα έτος.
4. Διαφορετικά, αν είμαστε στον Δεκέμβριο αλλά πριν από τις 18, αφαιρώ επίσης ένα έτος.
5. Αν τα γενέθλια έχουν φτάσει ή περάσει, διατηρώ την αρχική ηλικία.
6. Η `return age` επιστρέφει το τελικό αποτέλεσμα.

> [!IMPORTANT]
> **Γιατί χρησιμοποιώ `let age`;**
>
> Επειδή ενδέχεται να χρειαστεί να αναθέσω διαφορετική τιμή στην `age`.
> 
> Με `const` δεν θα μπορούσα να γράψω `age = age - 1`.

> [!NOTE]
> **Μια σημαντική λεπτομέρεια**
>
> Το `else if (day < 18)` λειτουργεί εδώ επειδή ο Δεκέμβριος είναι ο τελευταίος μήνας του έτους.
> 
> Αν δεν ισχύει `month < 11`, τότε ο μήνας είναι αναγκαστικά Δεκέμβριος, αφού η `getMonth()` επιστρέφει τιμές από `0` έως `11`.
> 
> Αυτή η λογική είναι προσαρμοσμένη στη δική μου ημερομηνία γέννησης και δεν αποτελεί γενικό αλγόριθμο για οποιαδήποτε ημερομηνία.

### Έλεγχος με τρεις ημερομηνίες

|Ημερομηνία|Συνθήκη που ισχύει|Ηλικία|
|---|---|---|
|30 Νοεμβρίου 2026|`month < 11`|28|
|17 Δεκεμβρίου 2026|`day < 18`|28|
|18 Δεκεμβρίου 2026|Καμία|29|

## Συνηθισμένα λάθη

- Να χρησιμοποιώ `=` αντί για `===` όταν θέλω να συγκρίνω τιμές.
- Να ξεχνάω ότι ελέγχεται μόνο η πρώτη αληθής συνθήκη μιας αλυσίδας.
- Να χρησιμοποιώ `const` σε μεταβλητή που χρειάζεται επαναανάθεση.
- Να γράφω `else:` όπως στην Python. Στη JavaScript γράφω `else { ... }`.

## Πηγές

**MDN — if...else**

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

Sections: Syntax, Description

**MDN — Date()**

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#no_parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#no_parameters)

**MDN — Date methods**

- [getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear#return_value)
- [getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth#return_value)
- [getDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate#return_value)
