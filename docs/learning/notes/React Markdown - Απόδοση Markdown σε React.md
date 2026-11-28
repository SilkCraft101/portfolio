---
tags:
  - portfolio
  - react
  - markdown
  - react-markdown
  - essays
---

# Πώς περνάει ένας πίνακας από το Markdown στη σελίδα

Η βασική απόδοση εξηγείται στη σημείωση [React - react-markdown](React%20-%20react-markdown.md). Στα Essays υπάρχουν τρία βήματα για τους πίνακες:

1. Το [Remark - remark-gfm](Remark%20-%20remark-gfm.md) αναγνωρίζει τη σύνταξη του πίνακα.
2. Το `components.table` στο `app/essays/[category]/[slug]/page.tsx` βάζει το `table` μέσα σε `div.essay-table-scroll`.
3. Το `overflow-x: auto` στο `app/globals.css` επιτρέπει κύλιση όταν ο πίνακας περισσεύει.

Αν ο πίνακας εμφανίζεται ως απλό κείμενο, κοιτάζω πρώτα τη σύνταξη και το plugin. Αν έχει κανονικά κελιά αλλά ξεφεύγει από την οθόνη, κοιτάζω τον wrapper και το CSS. [React - Custom Markdown Rendering](React%20-%20Custom%20Markdown%20Rendering.md)

- [react-markdown — Components](https://github.com/remarkjs/react-markdown#components)
