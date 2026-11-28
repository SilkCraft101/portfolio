---
tags:
  - portfolio
  - dev
  - chakra
  - layout
  - css
---

# Flex και Grid Style Props

Τα gap, alignItems και justifyContent εκφράζουν αποστάσεις και ευθυγραμμίσεις σε flex ή grid περιβάλλοντα.

## Με απλά λόγια

Οι επιλογές διάταξης καθορίζουν πώς μοιράζονται τον χώρο τα παιδιά. Χρειάζεται πρώτα ο γονέας να χρησιμοποιεί flex ή grid.

## Χρήση

```tsx
<Box display="flex" gap={4} alignItems="center" justifyContent="space-between">
  <Text>Όνομα</Text>
  <Text>Links</Text>
</Box>
```

Το `display="flex"` κάνει το Box flex container. Το `alignItems` ευθυγραμμίζει στον εγκάρσιο άξονα. Το `justifyContent` μοιράζει χώρο στον κύριο άξονα. Το `gap` χωρίζει τα άμεσα παιδιά.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/styling/style-props/flex-and-grid)
