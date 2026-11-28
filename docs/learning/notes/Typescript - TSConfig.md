---
tags:
  - portfolio
  - dev
  - typescript
  - tooling
---

# TSConfig

Το tsconfig.json περιγράφει πώς η TypeScript ελέγχει και επιλύει τα αρχεία του project.

## Με απλά λόγια

Το tsconfig λέει στην TypeScript ποια αρχεία να εξετάσει και με ποιους κανόνες.

## Χρήση

```json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "paths": { "@/*": ["./*"] }
  },
  "include": ["**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

Το `strict` ενεργοποιεί αυστηρότερους ελέγχους. Το `noEmit` ζητά έλεγχο χωρίς παραγωγή JavaScript. Το `paths` περιγράφει αντιστοίχιση διαδρομών για την επίλυση τύπων. Τα include και exclude καθορίζουν ποια αρχεία αναζητούνται.

Αυτό είναι μικρό απόσπασμα ρυθμίσεων, όχι αντικατάσταση του tsconfig του Next.js. Το exclude δεν απαγορεύει οπωσδήποτε τη συμμετοχή αρχείου που εισάγεται από άλλο αρχείο.

## Πηγή

- [Τεκμηρίωση](https://www.typescriptlang.org/tsconfig/)
