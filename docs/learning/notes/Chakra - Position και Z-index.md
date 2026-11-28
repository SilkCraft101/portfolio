---
tags:
  - portfolio
  - dev
  - chakra
  - layout
  - css
---

# Position και Z-index

Το position ορίζει τον τρόπο τοποθέτησης, το top τη σχετική απόσταση και το zIndex συμμετέχει στη σειρά επικάλυψης.

## Με απλά λόγια

Το sticky αφήνει ένα στοιχείο να ακολουθήσει την κύλιση μέχρι ένα όριο. Το z-index βοηθά να καθοριστεί ποιο στοιχείο βρίσκεται μπροστά από άλλο.

## Χρήση

```tsx
<Box as="nav" position="sticky" top={0} zIndex={10}>
  Πλοήγηση
</Box>
```

Το `position="sticky"` ενεργοποιεί τη συμπεριφορά. Το `top={0}` ορίζει το πάνω όριο και το `zIndex` επηρεάζει τη στοίβαξη.

Το sticky περιορίζεται από το περιβάλλον του και την κύλιση των προγόνων. Μεγαλύτερο z-index δεν ξεπερνά αυθαίρετα όλα τα stacking contexts.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/styling/style-props/layout)
