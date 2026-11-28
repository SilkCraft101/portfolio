---
tags:
  - portfolio
  - dev
  - chakra
  - theming
  - debugging
---

# Προεπιλεγμένα semantic colors

Ο πηγαίος κώδικας του Chakra δείχνει πώς ορίζονται πραγματικά τα semantic colors του default theme.

## Με απλά λόγια

Πριν αλλάξω μια προεπιλογή, κοιτάζω πώς έχει γραφτεί. Αν αλλάξω διαφορετικό πεδίο, μπορεί η παλιά ρύθμιση να συνεχίσει να κερδίζει.

## Χρήση

```text
// Απόσπασμα μέσα στο theme.semanticTokens.colors:
bg: {
  DEFAULT: {
    value: {
      _light: "#F4E8D8",
      _dark: "#1B1214",
    },
  },
}
```

Το `bg.DEFAULT` αντιστοιχεί στο βασικό `bg`. Οι συνθήκες `_light` και `_dark` αντικαθιστούν τις αντίστοιχες προεπιλογές. Ένα `base` δεν αφαιρεί αυτομάτως συνθήκες που υπάρχουν ήδη στο συγχωνευμένο config.

Το source στο branch `main` μπορεί να αλλάζει. Για debugging κοιτάζω και την έκδοση της βιβλιοθήκης που χρησιμοποιεί το project.

## Πηγή

- [Τεκμηρίωση](https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/semantic-tokens/colors.ts)
