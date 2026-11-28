---
tags:
  - portfolio
  - dev
  - nextjs
  - typography
---

# Fonts

Το next/font φορτώνει και βελτιστοποιεί γραμματοσειρές. Η επιλογή variable δίνει το όνομα CSS μεταβλητής που θέλω να δημιουργηθεί.

## Με απλά λόγια

Πρώτα κάνω μια γραμματοσειρά διαθέσιμη και μετά επιλέγω πού θα χρησιμοποιηθεί. Το ότι τη φόρτωσα δεν σημαίνει ότι όλα τα γράμματα εμφανίζονται με αυτή.

## Χρήση

```tsx
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Στο layout:
// <body className={geist.variable}>{children}</body>
```

Το `Geist()` δημιουργεί τη ρύθμιση γραμματοσειράς. Το `variable` ονομάζει μια CSS μεταβλητή και το `geist.variable` δίνει την κλάση που την κάνει διαθέσιμη.

Στο CSS τη χρησιμοποιώ με `font-family: var(--font-geist-sans), sans-serif;`. Το `subsets` επιλέγει τα σύνολα χαρακτήρων που θα γίνουν preload. Δεν προσθέτει χαρακτήρες που δεν διαθέτει η γραμματοσειρά. Για ελληνικά ή styles του Chakra ελέγχω την πραγματική απόδοση στον browser.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/api-reference/components/font)
