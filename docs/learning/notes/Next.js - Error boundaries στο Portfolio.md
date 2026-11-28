---
tags:
  - portfolio
  - nextjs
  - error-handling
---

# Error boundaries στο Portfolio

Ανοίγω τη gallery. Αν η σελίδα αποτύχει να φορτώσει, θέλω να δω τι μπορώ να κάνω. Το `app/paintings/error.tsx` προσφέρει μήνυμα και κουμπί επανάληψης. Το `app/essays/error.tsx` κάνει το ίδιο για τα Essays.

Το `error.tsx` είναι ειδικό αρχείο του App Router. Το Next.js το εμφανίζει όταν ένα απρόβλεπτο σφάλμα φτάσει στο error boundary της διαδρομής. Είναι Client Component, οπότε το κουμπί μπορεί να χειριστεί το κλικ.

Στα Essays υπάρχουν τρεις διαφορετικές περιπτώσεις που μπορώ να εντοπίσω στον κώδικα.

- Άγνωστο slug ή ανύπαρκτο δοκίμιο. Η σελίδα ανάγνωσης καλεί `notFound()`.
- Αποτυχία σε μέρος του καταλόγου. Το `getEssayCatalog` κρατά τις εγγραφές που μπόρεσε να διαβάσει και επιστρέφει στοιχεία για την αποτυχία.
- Σφάλμα που προωθείται από τη σελίδα ανάγνωσης. Το error boundary αναλαμβάνει την εμφάνιση του μηνύματος.

Στο συγκεκριμένο commit τα δύο κουμπιά καλούν `unstable_retry()`. Ο εγκατεστημένος Next.js 16.4.6 περνά `retry` και `reset` στα error components. Ο κώδικας του project ζητά διαφορετικό prop, επομένως ο handler θα επιχειρήσει να καλέσει `undefined` αν εμφανιστεί το fallback με αυτή την έκδοση. Η τεκμηριωμένη μέθοδος επανάληψης είναι `retry()`, η οποία ζητά νέο περιεχόμενο από τον server και επαναφέρει το boundary. Το `reset()` επαναφέρει το boundary για νέα απόδοση του περιεχομένου του. Η συμπεριφορά του δημοσιευμένου site απαιτεί ξεχωριστό λειτουργικό έλεγχο.

**Δοκιμή κατανόησης.** Αν λείπει ένα δοκίμιο, ποια από τις τρεις περιπτώσεις περιμένω και ποια γραμμή του κώδικα με οδηγεί εκεί;

- [Next.js - notFound()](Next.js%20-%20notFound%28%29.md)
- [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)
- [Next.js — error.js](https://nextjs.org/docs/app/api-reference/file-conventions/error#retry)
