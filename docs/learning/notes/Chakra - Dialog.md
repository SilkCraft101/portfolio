---
tags:
  - portfolio
  - chakra
  - ui
  - gallery
---

# Dialog

## Η δομή που κρατάω από την πηγή

Το παρακάτω είναι σκελετός για να βλέπω τις σχέσεις. Οι λέξεις «Μικρογραφία» και «Μεγάλη εικόνα» δείχνουν πού θα μπουν τα Image:

```tsx
<Dialog.Root>
  <Dialog.Trigger aria-label="Μεγέθυνση ζωγραφιάς">
    Μικρογραφία
  </Dialog.Trigger>
  <Dialog.Backdrop />
  <Dialog.Positioner>
    <Dialog.Content aria-label="Ζωγραφιά σε μεγέθυνση">
      <Dialog.CloseTrigger>Κλείσιμο ×</Dialog.CloseTrigger>
      <Dialog.Body>Μεγάλη εικόνα</Dialog.Body>
    </Dialog.Content>
  </Dialog.Positioner>
</Dialog.Root>
```

Το Root συντονίζει άνοιγμα και κλείσιμο. Το Trigger είναι το κουμπί με τη μικρογραφία. Το Backdrop είναι το φόντο πίσω από το παράθυρο. Το Positioner τοποθετεί το Content. Το Body κρατά τη μεγάλη εικόνα και το CloseTrigger κλείνει το παράθυρο.

## Τι διαφέρει στη gallery

Στην πηγή μπορεί το κουμπί να γράφει «Open Dialog» και το Body να έχει κείμενο. Εγώ βάζω Image μέσα στο Trigger και δεύτερο Image μέσα στο Body. Αλλάζει το περιεχόμενο, όχι η βασική σχέση των μερών.

Το παράθυρο δεν μπαίνει μέσα στο Trigger. Κλείνω πρώτα το Trigger και μετά γράφω Backdrop και Positioner, μέσα στο ίδιο Root.

Αν ένα παράδειγμα έχει `Trigger asChild` με δικό του Button, χρησιμοποιεί εκείνο το κουμπί. Στη δική μας χρήση το Trigger είναι ήδη κουμπί. Δεν χρειάζεται δεύτερο button μέσα του.

Το γενικό παράδειγμα δείχνει και Header, Title ή Footer. Δεν χρειάζονται όλα για κάθε χρήση. Στη gallery το Content έχει προσβάσιμο όνομα με `aria-label`. Στον τρέχοντα κώδικα το [Portal](Chakra%20-%20Portal.md) περιβάλλει τα Backdrop και Positioner, ενώ το Trigger μένει μέσα στο πλέγμα. Το Header κρατά τον τίτλο και το κουμπί κλεισίματος.

## Με απλά λόγια

Η ίδια ζωγραφιά εμφανίζεται σε δύο σημεία: μικρή στο κουμπί και μεγαλύτερη στο παράθυρο. Το Dialog συνδέει αυτά τα δύο. Δεν ανακτά τη λίστα από το Cloudinary.

## Πηγή και όριο μελέτης

[Chakra — Dialog](https://chakra-ui.com/docs/components/dialog#usage): **Usage**, **Sizes**, **Placement**. Πρώτα καταλαβαίνω τον σκελετό, πριν controlled state, nested dialogs ή custom animations.
