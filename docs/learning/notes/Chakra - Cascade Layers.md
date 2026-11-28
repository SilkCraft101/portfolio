---
tags:
  - portfolio
  - dev
  - chakra
  - css
  - debugging
---

# Cascade Layers

Το Chakra οργανώνει CSS σε layers με καθορισμένη προτεραιότητα.

## Με απλά λόγια

Τα layers χωρίζουν τους κανόνες CSS σε ομάδες με συγκεκριμένη προτεραιότητα. Έτσι η σειρά τους δεν εξαρτάται μόνο από το πότε φόρτωσε κάθε αρχείο.

## Χρήση

```css
@layer reset, base, tokens, recipes;
```

Η δήλωση αυτή δείχνει τη σειρά των βασικών layers του Chakra. Για κανονικές δηλώσεις της ίδιας προέλευσης και στο ίδιο πλαίσιο, ένα μεταγενέστερο layer έχει προτεραιότητα έναντι προηγούμενου, πριν εξεταστεί η specificity. Για δηλώσεις με `!important` η σειρά προτεραιότητας των layers αντιστρέφεται.

Ένα καθολικό reset εκτός layer μπορεί να υπερκαλύψει κανονικά styles του Chakra. Αυτό εξηγεί γιατί τα `margin: 0` και `padding: 0` στο `*` μπορούσαν να χαλάσουν το Container.

## Πηγή

- [Chakra UI — Cascade Layers](https://chakra-ui.com/docs/styling/cascade-layers)
- [W3C — Layer Ordering](https://www.w3.org/TR/css-cascade-5/#layer-ordering)
