---
tags:
  - portfolio
  - dev
  - typescript
  - types
---

# Object Types

Οι object types περιγράφουν πεδία και μεθόδους. Το ? δηλώνει optional πεδίο και το extends επιτρέπει επέκταση ενός interface.

## Με απλά λόγια

Ο τύπος αντικειμένου είναι μια περιγραφή των πεδίων που πρέπει ή επιτρέπεται να έχει ένα αντικείμενο.

## Χρήση

```ts
interface Person {
  name: string;
  nickname?: string;
}

interface Student extends Person {
  school: string;
}
```

Το `name` είναι υποχρεωτικό string. Το `?` κάνει το `nickname` προαιρετικό. Το `Student extends Person` κρατά τα πεδία του `Person` και προσθέτει το `school`.

## Πηγή

- [Τεκμηρίωση](https://www.typescriptlang.org/docs/handbook/2/objects.html)
