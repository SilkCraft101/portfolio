---
tags:
  - portfolio
  - dev
  - chakra
  - theming
  - react
---

# Color Mode

Το color-mode snippet συνδέει το Chakra με το next-themes και παρέχει hooks και κουμπί εναλλαγής θέματος.

## Με απλά λόγια

Το κουμπί αλλάζει την επιλογή light ή dark. Η παλέτα αποφασίζει ποια χρώματα αντιστοιχούν σε κάθε επιλογή.

## Χρήση

```tsx
const { resolvedTheme, setTheme } = useTheme();
const toggleColorMode = () => {
  setTheme(resolvedTheme === "dark" ? "light" : "dark");
};
```

Η εναλλαγή βρίσκεται στο `components/ui/color-mode.tsx`. Το `useTheme` προέρχεται από το `next-themes`. Το τοπικό `useColorMode` χρησιμοποιεί `forcedTheme` ή `resolvedTheme` για το εικονίδιο. Για τα χρώματα των σελίδων χρησιμοποιώ [Chakra - Semantic Tokens](Chakra%20-%20Semantic%20Tokens.md).

Το `ColorModeButton` χρησιμοποιεί αυτή τη λειτουργία σε έτοιμο κουμπί. Η εμφάνιση που εξαρτάται από το θέμα χρειάζεται προσοχή πριν γίνει γνωστή η επιλογή του browser.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/components/concepts/color-mode)
