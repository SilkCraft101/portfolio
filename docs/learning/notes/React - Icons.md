---
tags:
  - portfolio
  - dev
  - react
  - icons
---

# React Icons

Το react-icons παρέχει React components για εικονίδια από διαφορετικές συλλογές.

## Με απλά λόγια

Αντί να σχεδιάζω κάθε μικρό εικονίδιο, εισάγω το αντίστοιχο React component.

## Χρήση

```tsx
import { LuMoon, LuSun } from "react-icons/lu";

function ThemeIcon({ dark }: { dark: boolean }) {
  return dark ? <LuMoon /> : <LuSun />;
}
```

Το `/lu` επιλέγει τη συλλογή Lucide. Τα ονόματα μέσα στις αγκύλες είναι named imports. Τα components αποδίδουν SVG. Την αλλαγή θέματος την εκτελεί ο χειριστής του κουμπιού.

## Πηγή

- [React Icons](https://react-icons.github.io/react-icons/)
- [Lucide — Άδεια](https://lucide.dev/license)
