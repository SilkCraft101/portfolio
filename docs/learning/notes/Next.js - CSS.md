---
tags:
  - portfolio
  - dev
  - nextjs
  - css
  - styling
---

# CSS

Το global CSS εφαρμόζεται σε όλο το σχετικό περιεχόμενο. Τα CSS Modules δίνουν τοπικά ονόματα κλάσεων που εισάγονται από component.

## Με απλά λόγια

Το global CSS αφορά γενικούς κανόνες της εφαρμογής. Ένα CSS Module δίνει κλάσεις με τοπική εμβέλεια.

## Χρήση

```tsx
// Global import στο root layout:
import "./globals.css";

// CSS Module import σε component:
import styles from "./page.module.css";

// <main className={styles.page}>...</main>
```

Το πρώτο import φορτώνει το γενικό stylesheet. Το δεύτερο δίνει αντικείμενο με ονόματα κλάσεων. Ένα module αρχείο που υπάρχει στον φάκελο αλλά δεν εισάγεται, δεν εφαρμόζεται αυτόματα στη σελίδα.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/getting-started/css)
