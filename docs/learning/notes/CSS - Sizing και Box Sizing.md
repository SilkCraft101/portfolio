---
tags:
  - portfolio
  - dev
  - css
  - layout
---

# Sizing και Box Sizing

Το box-sizing ελέγχει τι περιλαμβάνει μια δηλωμένη διάσταση. Με border-box υπολογίζονται μέσα της και padding και border.

## Με απλά λόγια

Με border-box το δηλωμένο πλάτος χωρά ήδη μέσα του το padding και το border. Δεν χρειάζεται να τα προσθέτω από πάνω για το συνολικό μέγεθος.

## Χρήση

```css
* {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}
```

Το `*` επιλέγει όλα τα στοιχεία. Το `border-box` αλλάζει τον υπολογισμό των διαστάσεων. Το margin παραμένει έξω.

Το `min-height: 100%` δεν εγγυάται μόνο του ύψος ίσο με την οθόνη. Το ποσοστό εξαρτάται από το ύψος του containing block και τους κανόνες υπολογισμού του.

## Πηγή

- [Τεκμηρίωση](https://www.w3.org/TR/css-sizing-3/)
