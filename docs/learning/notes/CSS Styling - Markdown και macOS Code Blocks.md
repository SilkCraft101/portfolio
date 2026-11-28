---
tags:
  - portfolio
  - css
  - markdown
  - typography
  - code-blocks
  - essays
---

# Πώς μορφοποιώ τον κώδικα μέσα σε δοκίμιο

Η σελίδα ανάγνωσης βάζει το περιεχόμενο μέσα σε `className="essay-markdown"`. Έτσι ο κανόνας `.essay-markdown pre` αφορά τα code blocks των Essays.

```css
.essay-markdown pre {
  position: relative;
  padding: 3.5rem 1.25rem 1.25rem;
  overflow-x: auto;
}
```

Το μεγάλο πάνω padding αφήνει χώρο για την μπάρα. Το `pre::before` τοποθετείται στην κορυφή του block και χρησιμοποιεί τρία radial gradients για τις διακοσμητικές κουκκίδες. Η προσαρμογή γίνεται στο `app/globals.css`, ενώ το αρχικό Markdown κρατά τους συνηθισμένους φράχτες κώδικα.

Ο κανόνας `.essay-markdown pre code` χρησιμοποιεί monospace και `white-space: pre`. Αν μια γραμμή ξεπερνά το διαθέσιμο πλάτος, το `overflow-x: auto` του `pre` επιτρέπει κύλιση.

**Άσκηση.** Στον Inspector εντοπίζω το `pre`, το εσωτερικό `code` και το `::before`. Βλέπω ποιος κανόνας αντιστοιχεί σε καθένα.

- [CSS - Selectors](CSS%20-%20Selectors.md)
- [WebKit - Elements Inspector](WebKit%20-%20Elements%20Inspector.md)
- [W3C — Generated content pseudo-elements](https://www.w3.org/TR/css-pseudo-4/#generated-content)
- [W3C — CSS Overflow](https://www.w3.org/TR/css-overflow-3/#overflow-properties)
