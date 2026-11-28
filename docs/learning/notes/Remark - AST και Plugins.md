---
tags:
  - portfolio
  - dev
  - markdown
  - remark
  - essays
---

# Το Markdown ως δέντρο

Για τη γραμμή `> Μια σκέψη.`, το mdast έχει έναν κόμβο `blockquote`, μέσα του μια `paragraph` και μέσα στην παράγραφο ένα `text`. Το πρόγραμμα μπορεί έτσι να βρει ένα παράθεμα από τη θέση και τον τύπο του κόμβου.

Στο Portfolio ακολουθώ τη ροή στο `app/essays/[category]/[slug]/page.tsx`:

1. Το Markdown γίνεται mdast. Τα `remarkMath` και `remarkGfm` προσθέτουν αναγνώριση επέκτασης της σύνταξης.
2. Η δομή μετατρέπεται σε hast, που περιγράφει στοιχεία HTML. Τα `rehypeKatex` και `rehypeCallouts` δουλεύουν σε αυτό το στάδιο.
3. Το `react-markdown` παράγει React elements. Το `components.table` προσαρμόζει την απόδοση του πίνακα.

Ένα plugin μπορεί να δηλώσει επέκταση σύνταξης ή να επιστρέψει transformer. Ένας transformer μπορεί να χρησιμοποιήσει το `visit` για να βρει συγκεκριμένους κόμβους. Το Portfolio χρησιμοποιεί τα έτοιμα plugins της διαδρομής.

**Άσκηση.** Για το `> [!warning] Προσοχή`, δείχνω σε ποιο στάδιο εμφανίζεται το blockquote και σε ποιο στάδιο αποκτά ειδική δομή callout.

- [Rehype - Callouts](Rehype%20-%20Callouts.md)
- [React - Custom Markdown Rendering](React%20-%20Custom%20Markdown%20Rendering.md)
- [remark — Plugins](https://github.com/remarkjs/remark#plugins)
- [mdast — Blockquote](https://github.com/syntax-tree/mdast#blockquote)
- [react-markdown — Architecture](https://github.com/remarkjs/react-markdown#architecture)
- [unified — Create a remark plugin](https://unifiedjs.com/learn/guide/create-a-remark-plugin/)
