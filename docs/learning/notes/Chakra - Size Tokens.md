---
tags:
  - portfolio
  - dev
  - chakra
  - theming
  - layout
---

# Size Tokens

Η κλίμακα sizes δίνει ονόματα σε επαναχρησιμοποιήσιμες διαστάσεις.

## Με απλά λόγια

Ένα όνομα μεγέθους είναι συντόμευση για μια συγκεκριμένη τιμή. Το τι σημαίνει εξαρτάται από την ιδιότητα στην οποία το χρησιμοποιώ.

## Χρήση

```tsx
<Container maxW="3xl">
  <Heading fontSize="3xl">Projects</Heading>
</Container>
```

Το πρώτο `3xl` προέρχεται από sizes και αφορά πλάτος. Το δεύτερο από fontSizes και αφορά γράμματα. Για να ερμηνεύσω ένα όνομα, κοιτάζω την κλίμακα tokens της ιδιότητας.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/theming/sizes)
