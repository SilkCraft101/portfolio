---
tags:
  - portfolio
  - dev
  - css
  - typography
---

# Text Decoration

Το text-decoration ελέγχει διακοσμητικές γραμμές όπως η υπογράμμιση.

## Με απλά λόγια

Η υπογράμμιση είναι μέρος της εμφάνισης του link. Η λειτουργία του συνδέσμου υπάρχει λόγω του href.

## Χρήση

```css
a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

Το `inherit` παίρνει χρώμα από τον γονέα. Το `none` αφαιρεί τη διακοσμητική γραμμή και το `underline` την προσθέτει. Κρατάω τους συνδέσμους αναγνωρίσιμους και χωρίς hover.

## Πηγή

- [Τεκμηρίωση](https://www.w3.org/TR/css-text-decor-3/)
