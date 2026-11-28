---
tags:
  - portfolio
  - dev
  - nextjs
  - routing
---

# Pages και Layouts

Το page.tsx ορίζει το περιεχόμενο μιας διαδρομής. Το layout.tsx ορίζει κοινό περίβλημα και λαμβάνει το περιεχόμενο της σελίδας ως children.

## Με απλά λόγια

Το page είναι αυτό που βλέπω σε μια συγκεκριμένη διεύθυνση. Το layout είναι το κοινό πλαίσιο γύρω από τις σελίδες, όπως η πλοήγηση που παραμένει ίδια.

## Χρήση

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return <h1>Σχετικά με εμένα</h1>;
}
```

Ο φάκελος `about` δίνει το τμήμα `/about` στη διεύθυνση. Το `page.tsx` δίνει το περιεχόμενο. Το `default export` εξάγει τη συνάρτηση που χρησιμοποιεί το Next.js ως σελίδα.

Το `children` του layout είναι η θέση στην οποία μπαίνει το περιεχόμενο της κάθε σελίδας. Το root layout περιλαμβάνει τα `<html>` και `<body>`. Ένα αρχείο μέσα στο `components/` δεν δημιουργεί route από μόνο του.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/getting-started/layouts-and-pages)
