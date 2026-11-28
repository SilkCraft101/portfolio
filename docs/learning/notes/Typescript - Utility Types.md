---
tags:
  - portfolio
  - dev
  - typescript
  - types
---

# Utility Types

Το `Readonly<Type>` κάνει readonly τις ιδιότητες του συγκεκριμένου τύπου. Το `Omit<Type, Keys>` δημιουργεί τύπο χωρίς τα επιλεγμένα πεδία. Τα `Type` και `Keys` είναι παράμετροι τύπου. Στο `Omit<User, "age">`, τα ορίσματα τύπου είναι το `User` και ο τύπος literal `"age"`. Για περισσότερα πεδία μπορώ να δώσω ένωση όπως `"name" | "age"`.

## Με απλά λόγια

Μπορώ να φτιάξω έναν τύπο από άλλον τύπο, κρατώντας ή αλλάζοντας συγκεκριμένα χαρακτηριστικά του.

## Χρήση

```ts
type User = { name: string; age: number };
type UserName = Omit<User, "age">;
type ReadonlyUser = Readonly<User>;
```

Το `Omit` αφαιρεί το `age` από την περιγραφή του νέου τύπου. Το `Readonly` κάνει τις ιδιότητες readonly για τον έλεγχο TypeScript. Δεν διαγράφει πεδία από πραγματικά αντικείμενα και δεν τα παγώνει στη JavaScript. Το `Readonly` είναι ρηχό. Αν μια ιδιότητα περιέχει αντικείμενο, οι δικές του ιδιότητες διατηρούν τον αρχικό τύπο τους.

Στο κουμπί θέματος το `Omit<IconButtonProps, "aria-label">` αφαιρεί από τον τύπο αυτό το prop, ώστε το component να ορίζει τη δική του ετικέτα.

## Πηγή

- [Τεκμηρίωση](https://www.typescriptlang.org/docs/handbook/utility-types.html)
