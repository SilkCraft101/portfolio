---
tags:
  - portfolio
  - markdown
  - react
  - rehype-katex
  - katex
  - latex
  - essays
---

# Σκοπός

Το `rehype-katex` είναι ένα plugin που χρησιμοποιεί την βιβλιοθήκη **KaTeX** για την απόδοση μαθηματικών εκφράσεων σε ιστοσελίδες. Στο Portfolio επιτρέπει την εμφάνιση μαθηματικών τύπων μέσα στα Markdown δοκίμια, χωρίς να χρειάζεται να τους μετατρέπω σε HTML. 

## Διαφορά rehype-katex και KaTeX

**rehype-katex**

- Είναι plugin του οικοσυστήματος `rehype`.
- Εντοπίζει μαθηματικό περιεχόμενο στην αναπαράσταση HTML.
- Χρησιμοποιεί το KaTeX για να το μετατρέψει σε στοιχεία κατάλληλα για εμφάνιση στον browser.

**KaTeX**

- Είναι βιβλιοθήκη απόδοσης μαθηματικών τύπων (_math typesetting library_).
- Υποστηρίζει μαθηματική σύνταξη βασισμένη στο TeX.
- Παράγει την απαραίτητη HTML και MathML αναπαράσταση.
- Χρησιμοποιεί ειδικό CSS και γραμματοσειρές για τη σωστή εμφάνιση των εξισώσεων.

## Πώς συνεργάζονται στο Portfolio

Η διαδικασία περιλαμβάνει τέσσερα στάδια:

1. Το `react-markdown` επεξεργάζεται το περιεχόμενο του `.md`.
2. Το `remark-math` αναγνωρίζει τη μαθηματική σύνταξη.
3. Το `rehype-katex` χρησιμοποιεί το KaTeX για να αποδώσει τους μαθηματικούς τύπους.
4. Το stylesheet του KaTeX εξασφαλίζει τη σωστή εμφάνισή τους στον browser.

Το `rehype-katex` μπορεί να αποδώσει τους τύπους κατά την επεξεργασία του περιεχομένου, χωρίς να απαιτείται ξεχωριστό client-side JavaScript για τη μαθηματική απόδοση.

## Χρήση στο Portfolio

Στο αρχείο `app/essays/[category]/[slug]/page.tsx` εισάγω:

`import rehypeKatex from "rehype-katex";`

Ενεργοποιώ το plugin στο Markdown component μέσω της ιδιότητας:

`rehypePlugins={[rehypeKatex, rehypeCallouts]}`

Παράλληλα, το `remark-math` ενεργοποιείται μέσω του `remarkPlugins`. Έτσι, τα δύο plugins συνεργάζονται για την αναγνώριση και απόδοση των μαθηματικών εκφράσεων.

## Το CSS του KaTeX

Το `rehype-katex` δεν φορτώνει αυτόματα το stylesheet του KaTeX. Για αυτό χρησιμοποιώ:

`import "katex/dist/katex.min.css";`

Το stylesheet περιέχει κανόνες μορφοποίησης για τα μαθηματικά σύμβολα, τις αποστάσεις και τη διάταξη των εξισώσεων. Χωρίς το κατάλληλο CSS, η μαθηματική αναπαράσταση μπορεί να δημιουργείται αλλά να μην εμφανίζεται σωστά.

### Πρακτικό παράδειγμα

Στο δοκίμιο "Η Τέχνη του να Μαθαίνεις" έχω:

```markdown
$$
\sin(30^\circ)=\frac{1}{2}
$$
```

Το `remark-math` αναγνωρίζει την έκφραση ως μαθηματικό περιεχόμενο. Το `rehype-katex` χρησιμοποιεί το KaTeX για να δημιουργήσει την αναπαράστασή της. Το CSS του KaTeX μορφοποιεί την τελική εξίσωση. Το αποτέλεσμα είναι η εμφάνιση του μαθηματικού τύπου ως ανεξάρτητου block μέσα στο δοκίμιο.

## Πηγές

**1. rehype-katex — Επίσημη τεκμηρίωση**

[https://github.com/remarkjs/remark-math/blob/main/packages/rehype-katex/readme.md](https://github.com/remarkjs/remark-math/blob/main/packages/rehype-katex/readme.md)

Ενότητες:

- What is this?
- When should I use this?
- Use
- Markdown
- HTML
- CSS

**2. KaTeX — Επίσημη τεκμηρίωση**

[https://katex.org/docs/browser.html](https://katex.org/docs/browser.html)

Ενότητες:

- Installation
- Option 2: npm
- Serving the files


**3. react-markdown — Επίσημη τεκμηρίωση**

[https://github.com/remarkjs/react-markdown#use-remark-and-rehype-plugins-math](https://github.com/remarkjs/react-markdown#use-remark-and-rehype-plugins-math)

Ενότητα:
- Use remark and rehype plugins (math)