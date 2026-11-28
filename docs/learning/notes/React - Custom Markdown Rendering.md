---
tags:
  - portfolio
  - dev
  - react
  - markdown
  - essays
---

# Πώς βάζω κύλιση γύρω από έναν Markdown πίνακα

Με το `components` του `react-markdown` επιλέγω τι θα αποδοθεί για ένα στοιχείο που έχει ήδη αναγνωριστεί. Στο Portfolio ο πίνακας τυλίγεται έτσι:

```tsx
<Markdown
  components={{
    table: ({ children }) => (
      <div className="essay-table-scroll">
        <table>{children}</table>
      </div>
    ),
  }}
>
  {essay.content}
</Markdown>
```

Το παράδειγμα απομονώνει το wrapper. Στον πλήρη κώδικα το `remark-gfm` αναγνωρίζει τη σύνταξη του πίνακα. Το CSS δίνει οριζόντια κύλιση στο `div`. Το `children` κρατά τις γραμμές και τα κελιά.

Αν αλλάξω τον renderer ενός συνδέσμου, χρειάζεται να διατηρήσω τα props που χρησιμοποιεί, όπως το `href`. Το επιπλέον `node` αφορά τη δομή hast και δεν το αντιγράφω ως HTML attribute.

- [Remark - remark-gfm](Remark%20-%20remark-gfm.md)
- [React Markdown - Απόδοση Markdown σε React](React%20Markdown%20-%20%CE%91%CF%80%CF%8C%CE%B4%CE%BF%CF%83%CE%B7%20Markdown%20%CF%83%CE%B5%20React.md)
- [react-markdown — Components and ExtraProps](https://github.com/remarkjs/react-markdown#components)

**Κύρια ανάγνωση για τον renderer**

[React - react-markdown](React%20-%20react-markdown.md). Εδώ εστιάζω στα props του override και στο `children`. Η άλλη σημείωση για πίνακες ακολουθεί τη ροή από τη σύνταξη μέχρι το CSS.
