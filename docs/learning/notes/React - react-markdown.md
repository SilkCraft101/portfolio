---
tags:
  - portfolio
  - react
  - markdown
  - essays
---
# react-markdown

## Με απλά λόγια

Το `react-markdown` είναι μια βιβλιοθήκη React που μετατρέπει ένα Markdown string σε React elements.

Έτσι μπορούμε να εμφανίσουμε μορφοποιημένο περιεχόμενο Markdown μέσα στην εφαρμογή.

## Εγκατάσταση

```bash
npm install react-markdown
```

## Χρήση

```tsx
import ReactMarkdown from "react-markdown";

const content = `
# Learning

Αυτό είναι ένα **δοκιμαστικό** κείμενο.
`;

export default function Article() {
  return (
    <ReactMarkdown>
      {content}
    </ReactMarkdown>
  );
}
```

Το `# Learning` εμφανίζεται ως heading.

Το `**δοκιμαστικό**` εμφανίζεται με έντονη γραφή.

> [!IMPORTANT]
> Το `react-markdown` δεν διαβάζει αρχεία από τον δίσκο. Χρειάζεται να του δώσουμε το Markdown ως string.

> [!NOTE]
> Οι προεπιλογές του `react-markdown` εμφανίζουν το raw HTML ως κείμενο και φιλτράρουν URL μέσω του `defaultUrlTransform`. Plugins και προσαρμοσμένοι renderers μπορούν να αλλάξουν αυτή τη συμπεριφορά.

> [!WARNING]
> Η εμφάνιση Markdown και η μορφοποίησή του είναι διαφορετικά πράγματα. Για τις αποστάσεις, τα headings και τα code blocks θα χρειαστούμε styling.

## Εφαρμογή στο Portfolio

Η σελίδα ανάγνωσης των Essays περνά το `essay.content` ως children στο `Markdown`. Τα plugins αναγνωρίζουν GFM και μαθηματικά και επεξεργάζονται την απόδοση μαθηματικών και callouts.

Για πρακτικό παράδειγμα πίνακα ανοίγω [React Markdown - Απόδοση Markdown σε React](React%20Markdown%20-%20%CE%91%CF%80%CF%8C%CE%B4%CE%BF%CF%83%CE%B7%20Markdown%20%CF%83%CE%B5%20React.md).

## Πηγή

[react-markdown — Official Repository](https://github.com/remarkjs/react-markdown)

**Sections:** What is this?, Install, Use, Components.