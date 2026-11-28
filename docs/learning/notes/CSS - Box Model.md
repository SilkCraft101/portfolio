---
tags:
  - portfolio
  - dev
  - css
  - layout
---

# Box Model

Το περιεχόμενο περιβάλλεται από padding, border και margin. Τα τρία εξυπηρετούν διαφορετικό είδος απόστασης.

## Με απλά λόγια

Ένα στοιχείο μοιάζει με κουτί: περιεχόμενο στο κέντρο, padding γύρω του, μετά border και έξω margin.

## Χρήση

```css
.example {
  width: 200px;
  padding: 16px;
  border: 1px solid;
  margin: 20px;
}
```

Με `content-box` το κουτί μέχρι το περίγραμμα έχει πλάτος 234px. Ξεκινάω από τα 200px και προσθέτω 16px padding και 1px border από κάθε πλευρά. Με το `border-box` του `app/globals.css`, τα 200px περιλαμβάνουν και τα δύο. Το margin μένει έξω σε κάθε περίπτωση. [CSS - Sizing και Box Sizing](CSS%20-%20Sizing%20%CE%BA%CE%B1%CE%B9%20Box%20Sizing.md)

## Πηγή

- [W3C — Box Edges](https://www.w3.org/TR/css-box-3/#box-edges)
- [W3C — Box Edges for Sizing](https://www.w3.org/TR/css-sizing-3/#box-sizing)
