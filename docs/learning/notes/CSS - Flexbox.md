---
tags:
  - portfolio
  - dev
  - css
  - layout
---

# Flexbox

Το flexbox οργανώνει παιδιά ενός flex container σε κύριο και εγκάρσιο άξονα, με ρυθμίσεις direction και ευθυγράμμισης.

## Με απλά λόγια

Ο γονέας οργανώνει τα παιδιά του σε έναν βασικό άξονα. Μπορώ να αλλάξω αν αυτός είναι οριζόντιος ή κάθετος.

## Χρήση

```css
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
```

Το `display: flex` ενεργοποιεί το flex layout. Από προεπιλογή η direction είναι row. Το `justify-content` αφορά τον κύριο άξονα και το `align-items` τον εγκάρσιο.

Τα άμεσα παιδιά που βρίσκονται στην κανονική ροή γίνονται flex items. Ένα παιδί με `position: absolute` δεν συμμετέχει σε αυτή τη διάταξη. Αν θέλω και τα δικά τους παιδιά σε διάταξη flex, χρειάζεται ξεχωριστή ρύθμιση στο δικό τους επίπεδο.

## Πηγή

- [Τεκμηρίωση](https://www.w3.org/TR/css-flexbox-1/)
