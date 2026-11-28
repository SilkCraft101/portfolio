---
tags:
  - portfolio
  - dev
  - chakra
  - nextjs
  - architecture
---

# Provider στο Nextjs

Το ChakraProvider δίνει το σύστημα styling στο περιεχόμενο που περιβάλλει. Ένας κοινός Provider μπορεί να συνδυάζει το Chakra με το ColorModeProvider.

## Με απλά λόγια

Ο provider δίνει τις κοινές ρυθμίσεις στα στοιχεία που βρίσκονται μέσα του. Έτσι δεν χρειάζεται να τις δίνω ξανά σε κάθε component.

## Χρήση

```tsx
<ChakraProvider value={system}>
  <ColorModeProvider>{children}</ColorModeProvider>
</ChakraProvider>
```

Το `value={system}` δίνει το σύστημα styling στο Chakra. Το `ColorModeProvider` διαχειρίζεται το θέμα. Το `children` είναι το περιεχόμενο που δέχεται αυτές τις ρυθμίσεις.

Το απόσπασμα δείχνει τη σύνθεση των providers. Ο ορισμός και τα imports του `system` βρίσκονται στη [Chakra - Theming System](Chakra%20-%20Theming%20System.md).

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/get-started/frameworks/next-app)
