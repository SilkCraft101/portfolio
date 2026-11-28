---
tags:
  - portfolio
  - typescript
  - error-handling
---
# Type Narrowing και unknown

## Με απλά λόγια

Το Type Narrowing επιτρέπει στο TypeScript να προσδιορίζει τον τύπο μιας τιμής μέσω ελέγχων. Ο τύπος unknown σημαίνει ότι *δεν γνωρίζουμε ακόμη τον τύπο της τιμής*. Πρέπει να τον ελέγξουμε πριν χρησιμοποιήσουμε συγκεκριμένες ιδιότητες της.

## Type Guards

Οι **Type Guards** είναι έλεγχοι που περιορίζουν τον πιθανό τύπο μιας μεταβλητής.
- `typeof`: Ελέγχει βασικούς τύπους, όπως `string` και `number`.
- `instanceof`: Ελέγχει αν μια τιμή είναι instance συγκεκριμένης κλάσης.
- `in`: Ελέγχει αν υπάρχει μια ιδιότητα σε ένα αντικείμενο ή στην prototype chain του.

## Παράδειγμα - Error Handling

```typescript
try {
  // Λειτουργία που μπορεί να αποτύχει.
} catch (error) {
  if (
    error instanceof Error &&
    "code" in error &&
    typeof error.code === "string"
  ) {
    console.log(error.code);
  }
}
```

**Τι συμβαίνει:**
1. Με `strict` και χωρίς απενεργοποίηση του `useUnknownInCatchVariables`, το `error` αντιμετωπίζεται ως `unknown`.
2. Το `instanceof Error` επιβεβαιώνει ότι είναι αντικείμενο `Error`.
3. Το `"code" in error` ελέγχει την ύπαρξη της ιδιότητας.
4. Το `typeof` επιβεβαιώνει ότι το `code` είναι string.

## Εφαρμογή στο Portfolio

Η `readFile()` μπορεί να αποτύχει κατά την ανάγνωση Markdown αρχείων. Χρησιμοποιώ Type Narrowing για να εξετάζω με ασφάλεια το `error.code`. 

Δύο σημαντικές τιμές:
- `ENOENT`: Δεν βρέθηκε το αρχείο ή μέρος της διαδρομής.
- `EACCES`: Δεν επιτρέπεται η πρόσβαση.

Έτσι, μπορώ να διακρίνω ένα ανύπαρκτο δοκίμιο από ένα πρόβλημα πρόσβασης. 

## Πηγές

### TypeScript — Narrowing

[https://www.typescriptlang.org/docs/handbook/2/narrowing.html](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

**Ενότητες:**
- `typeof` type guards
- The `in` operator narrowing
- `instanceof` narrowing

### TypeScript — useUnknownInCatchVariables

[https://www.typescriptlang.org/tsconfig/useUnknownInCatchVariables.html](https://www.typescriptlang.org/tsconfig/useUnknownInCatchVariables.html)

**Ενότητα:** useUnknownInCatchVariables

### Node.js — Errors

[https://nodejs.org/api/errors.html](https://nodejs.org/api/errors.html)

**Ενότητες:**
- SystemError
- error.code
- Common system errors