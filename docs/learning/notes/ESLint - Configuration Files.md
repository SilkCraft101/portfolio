---
tags:
  - portfolio
  - dev
  - eslint
  - tooling
---

# Configuration Files

Το ESLint flat config περιγράφει σύνολα κανόνων και το πεδίο εφαρμογής τους με configuration objects.

## Με απλά λόγια

Στο ESLint αποφασίζω ποιοι κανόνες ισχύουν και για ποια αρχεία.

## Χρήση

```js
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    rules: { "no-unused-vars": "warn" },
  },
]);
```

Το `files` επιλέγει αρχεία. Το `rules` δίνει ρυθμίσεις κανόνων και το `warn` ζητά προειδοποίηση. Το `error` θα ζητούσε σφάλμα.

Το παράδειγμα δείχνει ένα μικρό flat config για JavaScript. Για TypeScript χρησιμοποιώ τις αντίστοιχες ρυθμίσεις, όχι αδιάκριτα όλους τους βασικούς κανόνες.

## Πηγή

- [Τεκμηρίωση](https://eslint.org/docs/latest/use/configure/configuration-files)
