---
tags:
  - portfolio
  - javascript
  - strings
---

# String.prototype.endsWith()

## Με απλά λόγια

Η `endsWith()` είναι μία μέθοδος της JavaScript που ελέγχει αν ένα string τελειώνει με συγκεκριμένους χαρακτήρες.

Επιστρέφει μία Boolean τιμή:
- `true`: Το string τελειώνει με τους συγκεκριμένους χαρακτήρες.
- `false`: Το string δεν τελειώνει με αυτούς τους χαρακτήρες.

## Χρήση

```js
const filename = "first-essay.md";

console.log(filename.endsWith(".md"));  // true
console.log(filename.endsWith(".txt")); // false
```

### Σύνταξη

```js
string.endsWith(searchString, endPosition);
```

- `string`: Το string που εξετάζουμε.
- `searchString`: Οι χαρακτήρες που αναζητούμε στο τέλος του string.
- `endPosition` (προαιρετικό): Η θέση μέχρι την οποία εξετάζουμε το string. Από προεπιλογή χρησιμοποιείται το συνολικό μήκος του.
- **Επιστρέφει:** `true` ή `false`.

### Σημαντικό — Case sensitivity

Η `endsWith()` είναι **case-sensitive**, δηλαδή διακρίνει πεζά και κεφαλαία γράμματα.

```js
const filename = "essay.MD";

console.log(filename.endsWith(".md")); // false
```

> [!NOTE]
> Η `endsWith()` δεν τροποποιεί το αρχικό string.  Ελέγχει μόνο την κατάληξή του.

## Εφαρμογή στο Portfolio

Χρησιμοποιώ την `endsWith()` για να ξεχωρίζω τα Markdown αρχεία από τα υπόλοιπα.

### Παράδειγμα με array

```js
const files = ["essay.md", "notes.txt", "article.md"];

for (const file of files) {
  if (file.endsWith(".md")) {
    console.log(file);
  }
}
```

Αποτέλεσμα:

```text
essay.md
article.md
```

### Πού το βρίσκω στον κώδικα

Η `slugFromBlobPathname` στο `lib/essay-utils.ts` χρησιμοποιεί το `pathname.endsWith(".md")` ως έναν από τους ελέγχους για υποψήφιο δοκίμιο. Έτσι το `essays/learning/hello.MD` απορρίπτεται. Η μέθοδος ελέγχει χαρακτήρες. Για να γίνει αποδεκτό το pathname, χρειάζονται επίσης σωστό prefix κατηγορίας, αρχείο στο πρώτο επίπεδο και έγκυρο slug. [Next.js - Slug Validation](Next.js%20-%20Slug%20Validation.md)

## Πηγή

[MDN — String.prototype.endsWith()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

Ενότητες:
- **Syntax**
- **Parameters**
- **Return value**
- **Description**
- **Examples**