---
tags:
  - portfolio
  - dev
  - npm
  - terminal
---

# Run Scripts

Το npm run εκτελεί ένα script που έχει δηλωθεί στο package.json.

## Με απλά λόγια

Το npm run ζητά να εκτελεστεί μια εργασία με το όνομα που έγραψα στα scripts.

## Χρήση

```sh
npm run dev
npm run build
npm run lint
```

Το `dev`, το `build` και το `lint` είναι κλειδιά στο package.json. Το npm εκτελεί την αντίστοιχη τιμή. Δεν υπάρχει αυτομάτως test script αν δεν έχει δηλωθεί.

Το `npm run` χωρίς όνομα εμφανίζει διαθέσιμα scripts. Το `npm run package.json` δεν σημαίνει «τρέξε το αρχείο package.json».

## Πηγή

- [Τεκμηρίωση](https://docs.npmjs.com/cli/v11/commands/npm-run/)
