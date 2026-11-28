---
tags:
  - portfolio
  - dev
  - chakra
  - styling
---

# Conditional Styles

Τα conditional styles εφαρμόζονται όταν ισχύει μια κατάσταση ή συνθήκη. Το `_hover` αφορά το hover και το `_icon` στοχεύει σε εικονίδια μέσα στο στοιχείο.

## Με απλά λόγια

Ορίζω τι θα αλλάξει όταν ισχύει μια συνθήκη, για παράδειγμα όταν ο δείκτης βρίσκεται πάνω στο στοιχείο.

## Χρήση

```tsx
<Text
  color="fg"
  _hover={{ color: "accent" }}
>
  About
</Text>
```

Το βασικό `color` είναι το κανονικό χρώμα. Το `_hover` περιέχει τα styles της κατάστασης hover. Το Chakra περικλείει αυτόν τον κανόνα σε `@media (hover: hover)`. Για διαδραστικά στοιχεία ορίζω χωριστά την κατάσταση εστίασης πληκτρολογίου, όταν χρειάζεται.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/styling/conditional-styles)
