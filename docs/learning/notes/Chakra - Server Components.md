---
tags:
  - portfolio
  - dev
  - chakra
  - nextjs
  - architecture
---

# Server Components

Η χρήση των Chakra components με Server Components διαφέρει από τη χρήση hooks που χρειάζονται client component.

## Με απλά λόγια

Ένα component μπορεί να χρησιμοποιεί μια βιβλιοθήκη με client λειτουργίες, χωρίς όλη η σελίδα που το περιέχει να χρειάζεται να γίνει client αρχείο.

## Χρήση

```tsx
// Σε Server Component:
import { Box, Text } from "@chakra-ui/react";

export default function ExamplePage() {
  return <Box><Text>Περιεχόμενο σελίδας</Text></Box>;
}
```

Δεν προσθέτω `"use client"` μόνο επειδή χρησιμοποιώ Box ή Text. Χρειάζεται όταν το δικό μου αρχείο χρησιμοποιεί client λειτουργίες όπως state, event handlers ή browser APIs.

Σε Server Components προτιμώ τα exports που επιτρέπει η βιβλιοθήκη. Για σύνθετα namespaced APIs ελέγχω τις ειδικές οδηγίες της τεκμηρίωσης.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/components/concepts/server-components)
