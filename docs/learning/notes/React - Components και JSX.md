---
tags:
  - portfolio
  - dev
  - react
  - jsx
---

# Components και JSX

Τα React components είναι συναρτήσεις που περιγράφουν UI με JSX. Τα props μεταφέρουν δεδομένα και οι αγκύλες μέσα στο JSX επιτρέπουν εκφράσεις JavaScript.

## Με απλά λόγια

Ένα component είναι ένα μικρό κομμάτι της οθόνης που μπορώ να χρησιμοποιώ ξανά. Το JSX περιγράφει τι περιέχει.

## Χρήση

```tsx
function Greeting({ name }: { name: string }) {
  return <p>Γεια σου, {name}!</p>;
}

// <Greeting name="Αλέξανδρε" />
```

Το `Greeting` είναι το component. Το `name` είναι prop που παίρνει από τον γονέα. Οι `{name}` μέσα στο JSX βάζουν την τιμή στο κείμενο.

Τα ονόματα components αρχίζουν με κεφαλαίο. Τα tags κλείνουν με αντίστροφη σειρά από αυτή που ανοίγουν. Για JavaScript εκφράσεις μέσα στο JSX χρησιμοποιώ `{}`.

## Πηγή

- [Τεκμηρίωση](https://react.dev/learn/describing-the-ui)
