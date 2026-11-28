---
tags:
  - portfolio
  - dev
  - chakra
  - react
  - architecture
---

# Composition

Το as αλλάζει το στοιχείο που αποδίδεται. Το asChild συνδυάζει τις ιδιότητες του component με το άμεσο child, χωρίς επιπλέον wrapper.

## Με απλά λόγια

Μπορώ να κρατήσω τη λειτουργία ενός στοιχείου και να του δώσω τα styles ενός άλλου, χωρίς περιττό εξωτερικό περίβλημα.

## Χρήση

```tsx
<Text asChild fontWeight="bold">
  <Link href="/">Alex Kotsolakis</Link>
</Text>
```

Το `asChild` περνά τη συμπεριφορά και τα styles στο παιδί. Εδώ το Text δεν δημιουργεί ξεχωριστή παράγραφο γύρω από τον σύνδεσμο. Χρησιμοποιείται ένα παιδί που μπορεί να δεχτεί τα απαραίτητα props.

Το `as` επιλέγει τι στοιχείο θα αποδώσει ένα component. Το `asChild` συνθέτει το component με το παιδί του. Δεν είναι η ίδια επιλογή.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/components/concepts/composition)
