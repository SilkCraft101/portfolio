---
tags:
  - portfolio
  - dev
  - eslint
  - tooling
---

# Ignore Files

Οι κανόνες ignore εξαιρούν αρχεία ή φακέλους από τον έλεγχο του ESLint. Το globalIgnores δηλώνει καθολικές εξαιρέσεις.

## Με απλά λόγια

Κάποια αρχεία είναι παραγόμενα ή δεν θέλω να τα ελέγχει το ESLint. Οι εξαιρέσεις αφορούν τον έλεγχο, όχι το Git.

## Χρήση

```js
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([".next/**", "out/**"]),
]);
```

Το `globalIgnores` προσθέτει καθολικές εξαιρέσεις. Τα patterns περιγράφουν τις διαδρομές που αγνοούνται. Το .gitignore έχει διαφορετικό ρόλο: αφορά τι αρχίζει να παρακολουθεί το Git.

## Πηγή

- [Τεκμηρίωση](https://eslint.org/docs/latest/use/configure/ignore)
