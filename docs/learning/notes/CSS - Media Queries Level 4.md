---
tags:
  - portfolio
  - dev
  - css
  - responsive
---

# Media Queries Level 4

Τα media queries εφαρμόζουν κανόνες όταν ισχύουν συνθήκες όπως πλάτος, δυνατότητα hover και ακρίβεια pointer.

## Με απλά λόγια

Ένας κανόνας μπορεί να εφαρμόζεται μόνο όταν ισχύει κάποια συνθήκη, όπως αρκετός διαθέσιμος χώρος ή συσκευή με hover.

## Χρήση

```css
@media (min-width: 768px) {
  .title { font-size: 2rem; }
}

@media (hover: hover) and (pointer: fine) {
  a:hover { text-decoration: underline; }
}
```

Το πρώτο query αφορά το πλάτος. Το δεύτερο τις δυνατότητες του κύριου μηχανισμού εισόδου. Το `and` απαιτεί να ισχύουν και οι δύο συνθήκες.

Το μεγάλο πλάτος δεν εγγυάται ποντίκι. Δεν κρύβω αναγκαίες λειτουργίες πίσω από hover που ίσως δεν υπάρχει σε οθόνη αφής.

## Πηγή

- [Τεκμηρίωση](https://www.w3.org/TR/mediaqueries-4/)
