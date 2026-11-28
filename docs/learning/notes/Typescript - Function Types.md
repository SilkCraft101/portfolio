---
tags:
  - portfolio
  - dev
  - typescript
  - types
---

# Function Types

Η function type expression περιγράφει παραμέτρους και τύπο επιστροφής μιας συνάρτησης.

## Με απλά λόγια

Περιγράφω τι δέχεται μια συνάρτηση και τι επιστρέφει, χωρίς να γράφω ακόμη τη δουλειά που κάνει.

## Χρήση

```ts
type ColorMode = "light" | "dark";

type SetColorMode = (mode: ColorMode) => void;
type ToggleColorMode = () => void;
```

Το `(mode: ColorMode)` περιγράφει μία παράμετρο. Το `()` σημαίνει ότι δεν χρειάζονται παράμετροι. Το `void` δηλώνει ότι δεν χρησιμοποιώ κάποιο αποτέλεσμα επιστροφής. Οι γραμμές αυτές περιγράφουν τύπους συναρτήσεων, δεν καλούν συναρτήσεις.

## Πηγή

- [Τεκμηρίωση](https://www.typescriptlang.org/docs/handbook/2/functions.html)
