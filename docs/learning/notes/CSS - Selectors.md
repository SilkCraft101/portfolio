---
tags:
  - portfolio
  - dev
  - css
  - styling
---

# Selectors

Οι selectors επιλέγουν τα στοιχεία στα οποία εφαρμόζονται κανόνες CSS. Οι class selectors ξεκινούν με τελεία και οι descendant selectors αφορούν απογόνους.

## Με απλά λόγια

Ο selector λέει ποια στοιχεία θα αλλάξω. Οι ιδιότητες μέσα στα άγκιστρα `{ }` λένε πώς θα εμφανιστούν.

## Χρήση

```css
.page {
  padding: 16px;
}

.page a:hover {
  color: brown;
}
```

Το `.page` επιλέγει στοιχεία με αυτή την κλάση. Το κενό στο `.page a` σημαίνει απογόνους τύπου a. Το `:hover` περιορίζει τον κανόνα στην αντίστοιχη κατάσταση.

## Πηγή

- [Τεκμηρίωση](https://www.w3.org/TR/selectors-4/)
