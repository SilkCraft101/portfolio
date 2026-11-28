---
tags:
  - portfolio
  - dev
  - markdown
  - remark
  - essays
---

# remark-gfm

Το **remark-gfm** είναι ένα plugin του remark που προσθέτει υποστήριξη για το GitHub Flavored Markdown (GFM).

## Με απλά λόγια

Το βασικό Markdown δεν περιλαμβάνει σύνταξη πινάκων στο πρότυπο CommonMark.

Το `remark-gfm` επιτρέπει στον Markdown parser να αναγνωρίζει επιπλέον στοιχεία, όπως:
- Tables.
- Task lists.
- Strikethrough.
- Footnotes.
- Autolink literals.

Οι υποσημειώσεις υποστηρίζονται από το πακέτο και από το GitHub. Δεν περιλαμβάνονται στη δημοσιευμένη προδιαγραφή GFM.

Το plugin αναγνωρίζει τη σύνταξη. Δεν καθορίζει την οπτική εμφάνιση των πινάκων.

## Χρήση

Εγκατάσταση με `npm`:

```bash
npm install remark-gfm
```

Ενσωμάτωση στο `react-markdown`:

```tsx
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const content = `
| Name | Language |
| --- | --- |
| Portfolio | TypeScript |
`;

<Markdown remarkPlugins={[remarkGfm]}>
  {content}
</Markdown>
```

### Ανάλυση

- `remarkGfm`: Το plugin που αναγνωρίζει τη σύνταξη GFM.
- `remarkPlugins`: Prop του `react-markdown` που δέχεται remark plugins.
- `remarkPlugins={[remarkGfm]}`: Ενεργοποιεί το GFM στον Markdown parser.

Το παράδειγμα παράγει στοιχεία πίνακα, όπως `table`, `thead`, `tbody`, `tr`, `th` και `td`.

## Σύνταξη πινάκων

Ένας GFM πίνακας περιλαμβάνει:

1. Μία γραμμή επικεφαλίδων.
2. Μία διαχωριστική γραμμή με παύλες.
3. Μηδέν ή περισσότερες γραμμές δεδομένων.

Η θέση του χαρακτήρα `:` καθορίζει τη στοίχιση.

- `:---` — Αριστερά.
- `---:` — Δεξιά.
- `:---:` — Κέντρο.

**Σημαντικές λεπτομέρειες:**

- Οι επικεφαλίδες και η διαχωριστική γραμμή πρέπει να έχουν τον ίδιο αριθμό στηλών.
- Μια κενή γραμμή τερματίζει τον πίνακα.
- Μπορούμε να χρησιμοποιήσουμε inline Markdown μέσα στα κελιά.
- Για να εμφανίσουμε κυριολεκτικά τον χαρακτήρα `|` μέσα σε ένα κελί, χρησιμοποιούμε `\|`.
- Δεν υποστηρίζονται block-level στοιχεία μέσα στα κελιά.

## Εφαρμογή στο Portfolio

Στο `app/essays/[category]/[slug]/page.tsx` χρησιμοποιείται ήδη το `react-markdown`.

Η σελίδα περνά ήδη `remarkPlugins={[remarkMath, remarkGfm]}`. Το `remark-gfm` αναγνωρίζει τον πίνακα και το `components.table` τον τυλίγει με `essay-table-scroll`. Το CSS αυτού του περιβλήματος επιτρέπει οριζόντια κύλιση.

Η αναγνώριση των πινάκων είναι ξεχωριστή από το CSS styling που θα χρειαστούμε για σωστή εμφάνιση σε Light/Dark Mode και μικρές οθόνες.

## Συνηθισμένα λάθη

- Παράλειψη της διαχωριστικής γραμμής κάτω από τις επικεφαλίδες.
- Διαφορετικός αριθμός στηλών μεταξύ επικεφαλίδων και διαχωριστικής γραμμής.
- Σύγχυση μεταξύ αναγνώρισης Markdown και CSS styling.
- Υπόθεση ότι το `remark-gfm` ενεργοποιεί αποκλειστικά πίνακες, ενώ ενεργοποιεί και τις υπόλοιπες επεκτάσεις GFM.

## Πηγές

- [remark-gfm — What is this?](https://github.com/remarkjs/remark-gfm#what-is-this)
- [remark-gfm — Install](https://github.com/remarkjs/remark-gfm#install)
- [remark-gfm — API](https://github.com/remarkjs/remark-gfm#api)
- [react-markdown — Use a plugin](https://github.com/remarkjs/react-markdown#use-a-plugin)
- [GitHub Flavored Markdown — Tables](https://github.github.com/gfm/#tables-extension-)