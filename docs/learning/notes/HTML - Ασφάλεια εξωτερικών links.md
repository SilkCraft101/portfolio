---
tags:
  - portfolio
  - dev
  - html
  - navigation
  - security
---

# Ασφάλεια εξωτερικών links

Τα noopener και noreferrer είναι link types με διαφορετικές λειτουργίες: περιορισμό πρόσβασης μέσω opener και αποφυγή αποστολής referrer.

## Με απλά λόγια

Ένα εξωτερικό link μπορεί να ανοίγει σε νέα καρτέλα. Με το rel ορίζω και πρόσθετη συμπεριφορά για αυτή τη μετάβαση.

## Χρήση

```html
<a
  href="https://github.com/SilkCraft101"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>
```

Το `target="_blank"` ζητά νέο browsing context, συνήθως νέα καρτέλα. Το `noopener` απομονώνει την πρόσβαση μέσω window.opener και το `noreferrer` αποτρέπει την αποστολή πληροφοριών referrer και συνεπάγεται τη συμπεριφορά του `noopener`.

## Πηγή

- [Τεκμηρίωση](https://html.spec.whatwg.org/multipage/links.html)
