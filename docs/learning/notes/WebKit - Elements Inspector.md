---
tags:
  - portfolio
  - dev
  - webkit
  - debugging
  - css
---

# Elements Inspector

Ο Inspector επιτρέπει έλεγχο DOM και CSS. Τα Styles δείχνουν κανόνες, το Computed τις τελικές τιμές και το Font στοιχεία για τη γραμματοσειρά.

## Με απλά λόγια

Ο Inspector δείχνει τι δημιούργησε τελικά ο browser και ποιοι κανόνες καθορίζουν την εμφάνιση.

## Χρήση

```css
/* Παράδειγμα τιμών που αναζητώ στο Computed: */
.example {
  max-width: 768px;
  margin-left: 0px;
  padding-left: 0px;
}
```

Στο Elements επιλέγω το πραγματικό στοιχείο. Στα Styles κοιτάζω τους κανόνες και ποιοι είναι διαγραμμένοι. Στο Computed κοιτάζω την τελική τιμή.

Μπορώ να απενεργοποιήσω προσωρινά έναν κανόνα για δοκιμή. Για να παραμείνει η αλλαγή, την κάνω και στο αρχείο. Το παράδειγμα είναι ένδειξη ελέγχου, όχι προτεινόμενο CSS.

## Πηγή

- [Τεκμηρίωση — details sidebar](https://webkit.org/web-inspector/elements-tab/#details-sidebar)
