---
tags:
  - portfolio
  - dev
  - chakra
  - styling
  - theming
---

# Background

Το bg ορίζει το φόντο και μπορεί να αναφέρεται σε χρωματικά tokens.

## Με απλά λόγια

Το background είναι το φόντο του στοιχείου. Το χρώμα του κειμένου ορίζεται ξεχωριστά.

## Χρήση

```tsx
<Box bg="accent/10" color="fg" px={4} py={3}>
  Χαίρετε!
</Box>
```

Το `bg` είναι συντομογραφία για background. Το `accent/10` αναμειγνύει 10% του χρώματος έμφασης με διαφάνεια. Το `accent` είναι semantic token του Portfolio. Το `color="fg"` αφορά το κείμενο.

Αν χρησιμοποιώ `bg="bg"`, το πρώτο bg είναι prop και το δεύτερο όνομα semantic token. Το ίδιο token μπορεί να αλλάζει τιμή στο light και dark mode.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/styling/style-props/background)
