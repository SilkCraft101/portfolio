---
tags:
  - portfolio
  - dev
  - css
  - theming
  - responsive
---

# Prefers Color Scheme

Το prefers-color-scheme επιτρέπει στο CSS να αντιδρά στην προτίμηση φωτεινού ή σκοτεινού θέματος του συστήματος.

## Με απλά λόγια

Μπορώ να ζητήσω από το CSS να ακολουθήσει την προτίμηση θέματος του συστήματος.

## Χρήση

```css
@media (prefers-color-scheme: dark) {
  body {
    background: #1B1214;
    color: #F4E8D6;
  }
}
```

Ο κανόνας εφαρμόζεται όταν το περιβάλλον δηλώνει προτίμηση dark. Δεν παρακολουθεί αυτομάτως οποιοδήποτε δικό μου κουμπί αλλαγής θέματος.

Αν η εφαρμογή διαχειρίζεται ρητή επιλογή με next-themes, αυτή μπορεί να διαφέρει από την προτίμηση συστήματος. Χρειάζεται συνεπής στρατηγική θέματος.

## Πηγή

- [Τεκμηρίωση — prefers color scheme](https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme)
