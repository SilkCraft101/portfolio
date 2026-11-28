---
tags:
  - portfolio
  - dev
  - html
  - navigation
---

# Anchor links

Το `a` με `href` συνδέει μια θέση με άλλη. Το `#` εισάγει το fragment του URL. Στο παράδειγμα, το fragment αντιστοιχεί στο `id` ενός στοιχείου της σελίδας.

## Με απλά λόγια

Το link είναι η διαδρομή και το id είναι η διεύθυνση του σημείου στο οποίο θέλω να φτάσω.

## Χρήση

```html
<a href="#my-journey">Η διαδρομή μου</a>
<h2 id="my-journey">Η διαδρομή μου</h2>
```

Το `a` δημιουργεί σύνδεσμο. Το `href` λέει πού οδηγεί. Το `#my-journey` ζητά το στοιχείο με `id="my-journey"` στην ίδια σελίδα.

Αν ο σύνδεσμος βρίσκεται σε άλλη σελίδα, γράφω και τη διαδρομή: `href="/about#my-journey"` ανοίγει το About και μετά οδηγεί στον τίτλο με `id="my-journey"`. Ο στόχος υπάρχει στο `app/about/page.tsx`.

## Πηγή

- [Τεκμηρίωση — linking to an element on the same page](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#linking_to_an_element_on_the_same_page)
