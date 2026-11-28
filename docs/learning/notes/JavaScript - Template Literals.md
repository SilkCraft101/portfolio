---
tags:
  - portfolio
  - javascript
  - strings
  - template-literals
---
# Με απλά λόγια

Τα **Template Literals** είναι ένας τρόπος δημιουργίας συμβολοσειρών στη JavaScript. 
Σε αντίθεση με τα συνηθισμένα strings, χρησιμοποιούν **backticks** (\`) αντί για μονά (`'`) ή διπλά (`"`) εισαγωγικά.

Το σημαντικότερο χαρακτηριστικό τους είναι ότι μπορούμε να ενσωματώσουμε μεταβλητές και εκφράσεις απευθείας μέσα σε μια συμβολοσειρά.

Αυτή η δυνατότητα ονομάζεται **String Interpolation**.
## Σύνταξη

```javascript
const name = "Alex";

const message = `Hello, ${name}!`;

console.log(message); // Hello, Alex!
```
### Πώς λειτουργεί

- Τα backticks ορίζουν την αρχή και το τέλος ενός Template Literal.
- Η σύνταξη `${...}` επιτρέπει την ενσωμάτωση μιας JavaScript expression.
- Η JavaScript αξιολογεί την expression και μετατρέπει το αποτέλεσμά της σε κείμενο.
- Χωρίς tag, το αποτέλεσμα είναι string. Σε tagged template το αποτέλεσμα ορίζεται από τη συνάρτηση που το επεξεργάζεται.

> [!IMPORTANT]
> Το `${...}` χρησιμοποιείται για String Interpolation μόνο μέσα σε Template Literals.
>
> Αν γράψουμε `"Hello, ${name}!"` με διπλά εισαγωγικά, η JavaScript θα αντιμετωπίσει το `${name}` ως κυριολεκτικό κείμενο.

## String Interpolation

Μέσα στο `${...}` μπορούμε να χρησιμοποιήσουμε μεταβλητές αλλά και JavaScript expressions.

```javascript
const a = 5;
const b = 10;

const result = `Το άθροισμα είναι ${a + b}`;

console.log(result); // Το άθροισμα είναι 15
```

Η έκφραση `a + b` αξιολογείται και το αποτέλεσμα της ενσωματώνεται σε συμβολοσειρά. 
Δεν χρειάζεται να χρησιμοποιήσουμε τον τελεστή `+` για να ενώσουμε διαφορετικά τμήματα κειμένου.

## Άσκηση με διαδρομή δοκιμίου

Σε μια δοκιμαστική διεύθυνση `/essays/learning/test-essay`, το Next.js δίνει το `test-essay` ως slug. Η αντιστοίχιση του URL μπορεί να γίνει ακόμη και όταν το δοκίμιο λείπει.

```js
const slug = "test-essay";
```


Στην άσκηση το αναμενόμενο όνομα του Markdown αρχείου είναι:

`test-essay.md`

Για να δημιουργήσω δυναμικά το όνομα του αρχείου, μπορώ να δοκιμάσω String Interpolation:

```js
const filename = `${slug}.md`;
```

Το αποτέλεσμα είναι:

```javascript
"test-essay.md"
```

Έτσι, το όνομα του αρχείου προκύπτει από την τιμή του `slug`, χωρίς να χρειάζεται να γράφω ξεχωριστό όνομα αρχείου για κάθε δοκίμιο.
### Συνδυασμός με την path.join()

Η ίδια σύνταξη μπορεί να χρησιμοποιηθεί ως argument της `path.join()`.

```javascript
const essayFilePath = path.join(
  process.cwd(),
  "content",
  "essays",
  "learning",
  `${slug}.md`
);
```

Αν το `slug` είναι `"test-essay"`, η διαδρομή θα καταλήγει στο αρχείο:

`content/essays/learning/test-essay.md`

Η `path.join()` κατασκευάζει τη διαδρομή, ενώ το Template Literal δημιουργεί το όνομα του αρχείου.

> [!WARNING]
> Τα Template Literals δημιουργούν strings. Δεν ελέγχουν αν το αρχείο υπάρχει ή αν η διαδρομή είναι ασφαλής.
>
> Επειδή το `slug` προέρχεται από το URL, χρειάζεται έλεγχος εγκυρότητας πριν χρησιμοποιηθεί για πρόσβαση στο file system.

## Τι δεν χρειάζομαι ακόμη

Τα Template Literals υποστηρίζουν και άλλες δυνατότητες:

- **Multi-line strings:** Δημιουργία strings που εκτείνονται σε πολλές γραμμές.
- **Tagged templates:** Επεξεργασία Template Literals μέσω συναρτήσεων.
- **Nested templates:** Τοποθέτηση Template Literals μέσα σε άλλα Template Literals.

Η άσκηση δοκιμάζει την ίδια κατασκευή ονόματος με interpolation. Στο `getLocalPath` του Portfolio η έκφραση είναι `slug + ".md"` και η τοπική ανάγνωση αφορά το γνωστό δοκίμιο Learning. [Next.js - Dynamic Routes](Next.js%20-%20Dynamic%20Routes.md)

## Πηγές

### MDN — Template Literals

[MDN — Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

**Ενότητες μελέτης:**

- Syntax
- Description
- String interpolation
