---
tags:
  - portfolio
  - nodejs
  - filesystem
---
# fsPromises.readFile()

## Με απλά λόγια

Η `readFile()` διαβάζει το περιεχόμενο ενός αρχείου από το filesystem. Ανήκει στο ενσωματωμένο module `node:fs/promises` του Node.js και επιστρέφει ένα `Promise`.

## Σύνταξη

```js
import { readFile } from "node:fs/promises";

const content = await readFile("example.md", "utf8");
```

- `readFile`: Function ανάγνωσης αρχείου.
- `path`: Διαδρομή προς το αρχείο.
- `"utf8"`: Encoding για επιστροφή του περιεχομένου ως string.
- `await`: Λήψη του αποτελέσματος από το Promise.

Αν δεν ορίσουμε encoding, το αποτέλεσμα επιστρέφεται ως `Buffer`. Αν η ανάγνωση αποτύχει, το Promise γίνεται rejected. 

## Χρήση

Στο `lib/essays.ts` η `readFile(localPath, "utf8")` διαβάζει το γνωστό τοπικό δοκίμιο του Learning. Τα δοκίμια στο Blob διαβάζονται από το SDK. [JavaScript - Response και Streams](JavaScript%20-%20Response%20%CE%BA%CE%B1%CE%B9%20Streams.md)

## Πηγή

[Node.js — fsPromises.readFile()](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options)

**Sections:**
- `fsPromises.readFile(path[, options])`
- `path`
- `options` → `encoding`
- `Returns`