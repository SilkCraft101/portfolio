---
tags:
  - portfolio
  - dev
  - chakra
  - styling
  - theming
---

# Border

Τα borderWidth, borderColor και borderRadius ελέγχουν πάχος, απόχρωση και καμπυλότητα περιγράμματος.

## Με απλά λόγια

Το border είναι η γραμμή γύρω από ένα στοιχείο. Μπορώ να αλλάξω το πάχος, το χρώμα και πόσο στρογγυλές είναι οι γωνίες.

## Χρήση

```tsx
<Box
  borderWidth="1px"
  borderStyle="solid"
  borderColor="border.subtle"
  borderRadius="10px"
>
  Περιεχόμενο
</Box>
```

Το `borderWidth` δίνει πάχος και το `borderStyle="solid"` ορίζει συνεχή γραμμή. Το `borderColor` χρησιμοποιεί χρωματικό token. Το `borderRadius` στρογγυλεύει τις γωνίες. Για γραμμή μόνο κάτω μπορώ να χρησιμοποιήσω `borderBottomWidth`.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/styling/style-props/border)
