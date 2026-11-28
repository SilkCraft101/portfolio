---
tags:
  - portfolio
  - dev
  - html
  - accessibility
---

# Language Attributes

Το lang δηλώνει τη γλώσσα ενός στοιχείου και του περιεχομένου του, εκτός αν παιδί δηλώσει άλλη γλώσσα.

## Με απλά λόγια

Το lang λέει σε ποια γλώσσα είναι ένα κείμενο. Δεν το μεταφράζει ούτε περιορίζει τους χαρακτήρες που μπορώ να γράψω.

## Χρήση

```html
<html lang="en">
  <body>
    <section lang="el">
      <h2 lang="en">Projects</h2>
      <p>Η προσωπική μου δουλειά.</p>
    </section>
  </body>
</html>
```

Το el της ενότητας ισχύει στα παιδιά της, εκτός αν δηλωθεί άλλη γλώσσα. Το αγγλικό Heading αποκτά en. Χρησιμοποιώ `el` για ελληνικά, όχι `gr`.

## Πηγή

- [Τεκμηρίωση — the lang and xml:lang attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)
