---
tags:
  - portfolio
  - nodejs
  - filesystem
---
# fsPromises.readdir()

## Με απλά λόγια

Η `readdir()` είναι μια ασύγχρονη συνάρτηση του Node.js που διαβάζει τα περιεχόμενα ενός φακέλου. 
Επιστρέφει ένα `Promise` που, από προεπιλογή, επιλύεται σε ένα `array` με τα ονόματα των αρχείων και των υποφακέλων.

## Χρήση

```js
import { readdir } from "node:fs/promises";

const files = await readdir("./content/essays/learning");

console.log(files);
```

Αν ο φάκελος περιέχει τα `first-essay.md` και `second-essay.md`, το αποτέλεσμα μπορεί να είναι:

```
["first-essay.md", "second-essay.md"]
```

- `readdir(path)`: Διαβάζει τα περιεχόμενα του φακέλου που δηλώνει το `path`.
- `await`: Περιμένει να ολοκληρωθεί η ασύγχρονη λειτουργία.
- `files`: Περιέχει τα ονόματα που επιστράφηκαν.

Η `readdir()` **δεν διαβάζει το περιεχόμενο των αρχείων**. Για την ανάγνωση χρησιμοποιούμε `readFile()`.

## Εφαρμογή στο Portfolio

Το παράδειγμα δείχνει πώς παρατηρώ τα περιεχόμενα ενός τοπικού φακέλου. Στον σημερινό κατάλογο τα απομακρυσμένα αρχεία εντοπίζονται με `list()`. Το τοπικό δοκίμιο διαβάζεται από γνωστή διαδρομή. [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)

## Πηγή

[Node.js Documentation — fsPromises.readdir()](https://nodejs.org/api/fs.html#fspromisesreaddirpath-options)
