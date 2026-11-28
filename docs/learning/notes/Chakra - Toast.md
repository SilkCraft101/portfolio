---
tags:
  - portfolio
  - dev
  - chakra
  - ui
  - notifications
---

# Toast

Τα toast είναι σύντομες ειδοποιήσεις. Ο toaster διαχειρίζεται δημιουργία και εμφάνισή τους.

## Με απλά λόγια

Το toast είναι μια σύντομη ειδοποίηση για κάτι που συνέβη, όπως αποθήκευση ή σφάλμα.

## Χρήση

```tsx
// Με το τοπικό toaster snippet:
toaster.create({
  title: "Η αποθήκευση ολοκληρώθηκε",
  type: "success",
});
```

Το `create` ζητά νέα ειδοποίηση. Το `title` είναι το κείμενο και το `type` η κατηγορία. Χρειάζεται να έχει αποδοθεί και το αντίστοιχο `<Toaster />` στην εφαρμογή.

Στον τρέχοντα κώδικα του Portfolio δεν υπάρχει `components/ui/toaster.tsx`. Κρατάω το παράδειγμα για μελλοντική αναφορά.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/components/toast)
