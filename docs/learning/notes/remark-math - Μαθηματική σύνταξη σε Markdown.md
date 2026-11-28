---
tags:
  - portfolio
  - react
  - markdown
  - remark-math
  - latex
  - essays
---

# Σκοπός

Το `remark-math` είναι ένα plugin του οικοσυστήματος `remark` που επιτρέπει την αναγνώριση μαθηματικών εκφράσεων μέσα σε αρχεία Markdown. Το βασικό Markdown δεν υποστηρίζει εγγενώς τη μαθηματική σύνταξη LaTeX. 

## Πώς λειτουργεί

Το `remark-math` επεκτείνει τη σύνταξη Markdown, ώστε ο Markdown parser να αναγνωρίζει μαθηματικές εκφράσεις.

Υποστηρίζει δύο βασικές μορφές:
- **Inline Math:** Μαθηματικές εκφράσεις μέσα σε μια παράγραφο, όπως `$x^2$`.
- **Block Math:** Μαθηματικές εξισώσεις σε ξεχωριστό block, χρησιμοποιώντας `$$` σε ανεξάρτητες γραμμές.

Το plugin αναγνωρίζει και οργανώνει τις μαθηματικές εκφράσεις, αλλά **δεν τις μετατρέπει μόνο του σε οπτικά μορφοποιημένες εξισώσεις**. Για την απόδοσή τους χρησιμοποιείται ένα επιπλέον εργαλείο, όπως το `rehype-katex`.

## Χρήση στο Portfolio

Στο αρχείο `app/essays/[category]/[slug]/page.tsx` εισάγω το plugin:

```js
import remarkMath from "remark-math";
```

Στη συνέχεια το ενεργοποιώ στο `react-markdown` μέσω της ιδιότητας:

`remarkPlugins={[remarkMath, remarkGfm]}`

Έτσι, το Markdown renderer μπορεί να αναγνωρίζει τις μαθηματικές εκφράσεις των δοκιμίων.

### Πρακτικό παράδειγμα

Στο δοκίμιο "Η Τέχνη του να Μαθαίνεις" χρησιμοποιώ την έκφραση:

```markdown
$$
\sin(30^\circ)=\frac{1}{2}
$$
```

Για μια εξίσωση σε ξεχωριστό block, η προτεινόμενη σύνταξη είναι να τοποθετώ τα `$$` σε δικές τους γραμμές.

Το `remark-math` αναγνωρίζει τη μαθηματική σύνταξη και το `rehype-katex` αναλαμβάνει την απόδοση της εξίσωσης.

## Σημαντικές παρατηρήσεις

- Το `remark-math` δεν είναι μηχανή απόδοσης μαθηματικών τύπων.
- Δεν απαιτεί δικό του CSS.
- Η μαθηματική σύνταξη αποτελεί επέκταση του Markdown και δεν υποστηρίζεται απαραίτητα από όλους τους Markdown renderers.
- Η προεπιλεγμένη ρύθμιση `singleDollarTextMath` επιτρέπει τη χρήση ενός `$` για inline μαθηματικές εκφράσεις.

## Πηγές

**remark-math — Επίσημη τεκμηρίωση**

[https://github.com/remarkjs/remark-math/blob/main/packages/remark-math/readme.md](https://github.com/remarkjs/remark-math/blob/main/packages/remark-math/readme.md)

Ενότητες:
- What is this?
- When should I use this?
- Use
- API
- Authoring
- CSS

**react-markdown — Επίσημη τεκμηρίωση**

[https://github.com/remarkjs/react-markdown#use-remark-and-rehype-plugins-math](https://github.com/remarkjs/react-markdown#use-remark-and-rehype-plugins-math)

Ενότητα:
- Use remark and rehype plugins (math)