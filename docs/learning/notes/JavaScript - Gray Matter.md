---
tags:
  - portfolio
  - javascript
  - gray-matter
  - yaml
  - parsing
  - metadata
  - essays
---

# Ανάλυση metadata με gray-matter

Η βασική διαδρομή και το παράδειγμα του Portfolio βρίσκονται στη σημείωση [Node.js - gray-matter](Node.js%20-%20gray-matter.md).

Αν έχω ήδη ένα Markdown string, μπορώ να γράψω `const { data, content } = matter(rawMarkdown)`. Άλλα πεδία του αποτελέσματος είναι τα `orig`, `language` και `matter`. Στο Portfolio διαβάζω τα `data` και `content`. Η παρουσία μιας τιμής μέσα στο `data` αφήνει ανοιχτό τον έλεγχο του τύπου ή του μήκους της.

- [gray-matter — Returned object](https://github.com/jonschlinkert/gray-matter#returned-object)
