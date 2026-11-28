---
tags:
  - portfolio
  - dev
  - typescript
  - modules
---

# Modules

Τα exports κάνουν δηλώσεις διαθέσιμες σε άλλα αρχεία. Τα named και default exports έχουν διαφορετική σύνταξη import. Το import type αφορά μόνο τύπους.

## Με απλά λόγια

Το export κάνει κάτι διαθέσιμο έξω από το αρχείο. Το import το φέρνει στο αρχείο που θέλω να το χρησιμοποιήσω.

## Χρήση

```tsx
// Named import:
import { Box, Flex } from "@chakra-ui/react";

// Default import:
import Image from "next/image";

// Μόνο τύπος:
import type { NextConfig } from "next";
```

Τα `{}` επιλέγουν named exports. Το default import δεν έχει αγκύλες. Το `import type` εισάγει μόνο πληροφορία τύπου. Δεν μπορώ να αλλάζω αυθαίρετα τη μορφή του import: εξαρτάται από το export της πηγής.

## Πηγή

- [Τεκμηρίωση](https://www.typescriptlang.org/docs/handbook/2/modules.html)
