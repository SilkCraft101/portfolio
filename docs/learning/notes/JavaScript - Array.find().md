---
tags:
  - portfolio
  - javascript
  - arrays
  - functions
  - fundamentals
---
# Τι είναι η `.find()`;

Είναι μια μέθοδος των arrays που αναζητά το **πρώτο στοιχείο** το οποίο ικανοποιεί μια συνθήκη.
- Αν βρει κατάλληλο στοιχείο, το επιστρέφει.
- Αν δεν βρει κανένα, επιστρέφει `undefined`.

## Με απλά λόγια

Φαντάζομαι ένα array με αριθμούς και θέλω να βρω τον πρώτο αριθμό που είναι μεγαλύτερος από 10.

Αντί να ελέγξω χειροκίνητα κάθε αριθμό, χρησιμοποιώ τη `.find()` και της δίνω μια function που περιγράφει τι ψάχνω.

Η `.find()` ελέγχει τα στοιχεία με τη σειρά και σταματά μόλις βρει το πρώτο που ταιριάζει.

### Παράδειγμα

```js
const numbers = [5, 12, 8, 20];

function isGreaterThanTen(number) {
	return number > 10;
}

const result = numbers.find(isGreaterThanTen);

console.log(result); // 12
```

**Τι συμβαίνει;**
1. Η `numbers` περιέχει τέσσερις αριθμούς.
2. Η `isGreaterThanTen()` ελέγχει αν ένας αριθμός είναι μεγαλύτερος από `10`.
3. Η `numbers.find()` χρησιμοποιεί αυτή τη function για να ελέγξει τα στοιχεία.
4. Το `5` δεν ικανοποιεί τη συνθήκη.
5. Το `12` την ικανοποιεί, οπότε η αναζήτηση σταματά.

Το αποτέλεσμα είναι `12`, όχι `20`, επειδή η `.find()` επιστρέφει μόνο το πρώτο κατάλληλο στοιχείο.

## Τι είναι η Callback Function;

Μια callback function είναι μια function που περνάμε ως argument σε μια άλλη function.

Στο παράδειγμα μου:
`numbers.find(isGreaterThanTen);`

Η `isGreaterThanTen` είναι η callback function.

Η `.find()` την καλεί για κάθε στοιχείο που εξετάζει, περνώντας τον αντίστοιχο αριθμό ως argument.

> [!IMPORTANT]
> Γράφω `find(isGreaterThanTen)` και όχι `find(isGreaterThanTen())`.
> 
> Στην πρώτη περίπτωση δίνω τη function στη `.find()` για να την εκτελέσει εκείνη.
> 
> Στη δεύτερη προσπαθώ να καλέσω ο ίδιος τη function.

## Σύνδεση με το Portfolio

Η `formatToParts()` επιστρέφει ένα array με ξεχωριστά τμήματα ημερομηνίας.

Κάθε τμήμα είναι ένα object με properties όπως `type` και `value`.

Θέλω να χρησιμοποιήσω τη `.find()` για να εντοπίσω:
- Το τμήμα με `type: "year"`.
- Το τμήμα με `type: "month"`.
- Το τμήμα με `type: "day"`.

Η βασική λογική είναι ίδια με το παράδειγμα των αριθμών. Αυτό που αλλάζει είναι η συνθήκη αναζήτησης.

Αυτό είναι προαιρετική άσκηση πάνω στο [JavaScript - formatToParts()](JavaScript%20-%20formatToParts%28%29.md). Το `components/about.tsx` υπολογίζει την ηλικία με χωριστές κλήσεις `Intl.DateTimeFormat.prototype.format()` για έτος, μήνα και ημέρα.

## Συνηθισμένα λάθη

- Να περιμένω ότι η `.find()` επιστρέφει όλα τα κατάλληλα στοιχεία.
- Να ξεχνάω ότι μπορεί να επιστρέψει `undefined`.
- Να καλώ τη callback function αντί να την περνάω ως argument.

## Πηγές

**MDN — Array.prototype.find()**

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

Sections:
- Syntax → Parameters → callbackFn
- Return value
- Description
- Examples → Find an object in an array by one of its properties

**MDN — Callback function**

[https://developer.mozilla.org/en-US/docs/Glossary/Callback_function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

Μελετώ μόνο τον αρχικό ορισμό. Δεν χρειάζομαι ακόμη asynchronous callbacks.

Δεν μελετώ ακόμη arrow functions, `filter()`, `findIndex()` ή destructuring.