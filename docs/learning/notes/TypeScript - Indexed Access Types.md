---
tags:
  - portfolio
  - typescript
  - dev
  - types
---
# Indexed Access Types

## Με απλά λόγια

Τα indexed access types επιτρέπουν να πάρουμε έναν τύπο από κάποιο πεδίο ενός ήδη υπάρχοντος τύπου.

Χρησιμοποιούμε τη σύνταξη με αγκύλες `[]`.

## Χρήση

```typescript
type Essay = {
  title: string;
  date: string;
};

type EssayTitle = Essay["title"];
```

Ο `EssayTitle` είναι τύπου `string`.

### Indexed Access σε arrays

```typescript
type Categories = ["learning", "philosophy"];

type Category = Categories[number];
```

Ο τύπος `Category` είναι:

`"learning" | "philosophy"`

Το `number` εδώ δηλώνει ότι θέλουμε τον τύπο των στοιχείων που μπορούμε να προσπελάσουμε με αριθμητικό index.

> [!IMPORTANT]
> Τα indexed access types λειτουργούν στο σύστημα τύπων της TypeScript. Δεν διαβάζουν πραγματικές τιμές κατά την εκτέλεση.

## Εφαρμογή στο Portfolio

Ως άσκηση με τις δύο κατηγορίες του Portfolio, μπορώ να συνδυάσω indexed access types με `as const`.

```typescript
const essayCategories = [
  "learning",
  "philosophy",
] as const;

type EssayCategory =
  (typeof essayCategories)[number];
```

Το `EssayCategory` δέχεται μόνο `"learning"` ή `"philosophy"`.

- `typeof essayCategories`: Παίρνει τον τύπο της μεταβλητής στο επίπεδο της TypeScript.
    
- `[number]`: Παίρνει τον τύπο των στοιχείων του tuple.
    

> [!NOTE]
> Αυτό το `typeof` χρησιμοποιείται σε type context. Διαφέρει από τη χρήση του JavaScript `typeof` για έλεγχο τιμών κατά την εκτέλεση.

## Πηγές

- [TypeScript — Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)
    
- [TypeScript — Typeof Type Operator](https://www.typescriptlang.org/docs/handbook/2/typeof-types.html)
    

**Sections:** Indexed Access Types, The typeof type operator.