---
tags:
  - portfolio
  - dev
  - typescript
  - eslint
  - debugging
---

# Empty Object Types

Ο κανόνας no-empty-object-type εντοπίζει δηλώσεις όπως ένα κενό interface που δεν προσθέτει πληροφορία στον γονικό τύπο.

## Με απλά λόγια

Αν ένας τύπος δεν προσθέτει τίποτα σε άλλον τύπο, μπορώ να του δώσω απλώς νέο όνομα.

## Χρήση

```ts
import type { ThemeProviderProps } from "next-themes";

// Ενδεικτική παράβαση του κανόνα:
// interface ColorModeProviderProps extends ThemeProviderProps {}

export type ColorModeProviderProps = ThemeProviderProps;
```

Ο κανόνας ελέγχει επίσης το `{}` ως τύπο. Το `{}` δέχεται και πρωτογενείς τιμές όπως αριθμούς ή strings, εφόσον δεν είναι `null` ή `undefined`.

Το alias κρατά τον τύπο `ThemeProviderProps`. Ο κανόνας `no-empty-object-type` επισημαίνει το κενό interface που δεν προσθέτει μέλη. Δεν αντικαθιστώ τον τύπο με `string`, γιατί τότε θα περιέγραφα άλλο είδος δεδομένων.

## Πηγή

- [Τεκμηρίωση](https://typescript-eslint.io/rules/no-empty-object-type/)
