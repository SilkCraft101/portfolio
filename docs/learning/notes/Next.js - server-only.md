---
tags:
  - portfolio
  - nextjs
  - react
  - server-components
  - server-only
  - security
  - essays
---

# Όριο ανάμεσα σε server και client

Στα `lib/essays.ts` και `lib/essay-parser.ts` υπάρχει:

```ts
import "server-only";
```

Αν ένα Client Component εισαγάγει κατά λάθος ένα από αυτά τα αρχεία, το Next.js αναφέρει σφάλμα. Έτσι, το module που διαβάζει τοπικά αρχεία ή χρησιμοποιεί το Blob SDK μένει στον server. Το `lib/essay-utils.ts` κρατά βοηθητικές συναρτήσεις που δεν χρειάζονται αυτές τις υπηρεσίες.

Το όριο προστατεύει τη σύνθεση των modules. Για να αποφασίσω ποιος χρήστης μπορεί να προσπελάσει ή να αλλάξει δεδομένα, χρειάζομαι έλεγχο στην αντίστοιχη λειτουργία.

- [Next.js - Server και Client Components](Next.js%20-%20Server%20%CE%BA%CE%B1%CE%B9%20Client%20Components.md)
- [Next.js — Preventing environment poisoning](https://nextjs.org/docs/app/getting-started/server-and-client-components#preventing-environment-poisoning)
