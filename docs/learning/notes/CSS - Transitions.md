---
tags:
  - portfolio
  - dev
  - css
  - styling
---

# Transitions

Το transition είναι shorthand για τις ιδιότητες μιας σταδιακής μετάβασης, όπως property, duration και timing function.

## Με απλά λόγια

Μια μετάβαση χρειάζεται δύο διαφορετικές τιμές και χρόνο για να περάσει από τη μία στην άλλη.

## Χρήση

```css
a {
  color: #2B1B23;
  transition: color 0.2s ease;
}

a:hover {
  color: #8C405F;
}
```

Το `color` είναι η ιδιότητα που μεταβάλλεται. Το `0.2s` είναι η διάρκεια και το `ease` η καμπύλη της μετάβασης. Χωρίς αλλαγή χρώματος δεν υπάρχει μετάβαση να φανεί.

## Πηγή

- [Τεκμηρίωση](https://www.w3.org/TR/css-transitions-1/)
