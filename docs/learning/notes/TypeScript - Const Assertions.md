---
tags:
  - portfolio
  - typescript
  - dev
  - types
---
# Const Assertions

## Με απλά λόγια 

Το `as const` είναι μια ειδική μορφή type assertion της TypeScript.

Επιτρέπει στο TypeScript να διατηρεί συγκεκριμένους literal types αντί να τους γενικεύει, για παράδειγμα, σε `string`.

## Χρήση

```typescript
const category = "learning";
// Type: "learning"
```

Σε ένα array:

```typescript
const categories = ["learning", "philosophy"];

// Type: string[]
```

Με `as const`:

```typescript
const categories = ["learning", "philosophy"] as const;

// Type: readonly ["learning", "philosophy"]
```

Το TypeScript πλέον γνωρίζει τις συγκεκριμένες τιμές και ότι πρόκειται για readonly tuple.

> [!IMPORTANT]
> Το `as const` επηρεάζει τον έλεγχο τύπων. Δεν κάνει runtime freeze στο array ή στο αντικείμενο.

> [!NOTE]
> Το `const` αφορά τη δυνατότητα επαναανάθεσης μιας μεταβλητής, ενώ το `as const` επηρεάζει τον τρόπο με τον οποίο το TypeScript συμπεραίνει τους τύπους.

## Εφαρμογή στο Portfolio

Ο παρακάτω πίνακας είναι άσκηση με τις δύο πραγματικές κατηγορίες των Essays.

```typescript
const essayCategories = [
  "learning",
  "philosophy",
] as const;
```

Η σελίδα ανάγνωσης του Portfolio ελέγχει τις ίδιες δύο τιμές με την `isEssayCategory`. Το `as const` δίνει πληροφορία στον compiler. Ο έλεγχος της τιμής από το URL γίνεται κατά την εκτέλεση.

## Πηγή

[TypeScript Handbook — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

**Section:** Literal Types — const assertions.