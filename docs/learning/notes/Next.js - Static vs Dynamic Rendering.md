---
tags:
  - portfolio
  - nextjs
  - rendering
  - fundamentals
---
# Τι είναι το Rendering;

Rendering είναι η διαδικασία με την οποία το Next.js παράγει το περιεχόμενο μιας σελίδας.

Στο μοντέλο χωρίς Cache Components, δύο βασικές περιπτώσεις είναι οι εξής.
1. **Static Rendering:** Η σελίδα δημιουργείται εκ των προτέρων και το αποτέλεσμα μπορεί να αποθηκευτεί.
2. **Dynamic Rendering:** Η σελίδα δημιουργείται όταν φτάνει ένα νέο request. 

## Με απλά λόγια

Με το Static Rendering το Next.js μπορεί να κρατήσει μια έτοιμη έκδοση της σελίδας. 
Με το Dynamic Rendering δημιουργεί νέο αποτέλεσμα όταν κάποιος ζητά τη σελίδα.

Αυτό είναι χρήσιμο όταν το περιεχόμενο εξαρτάται από τη στιγμή εκτέλεσης.

### Παράδειγμα

```tsx
export const dynamic = "force-dynamic";

export default function ExamplePage() {
	const today = new Date()
	
	return <main>{today.getFullYear()}</main>;
}
```

Με το μοντέλο χωρίς Cache Components, η ρύθμιση `force-dynamic` ζητά από το Next.js να αποδίδει τη διαδρομή κατά το αίτημα. 

Η `new Date()` εκτελείται επομένως κατά το request και όχι κατά το build. 

## Σύνδεση με το Portfolio

Η αρχική και οι δύο κατάλογοι των Essays έχουν `force-dynamic`. Η gallery δηλώνει χρονική ανανέωση με `revalidate`. Το παράδειγμα με την ημερομηνία βοηθά να δω πότε εκτελείται ο κώδικας της σελίδας. Για ζωντανή ενημέρωση μιας ήδη ανοιχτής καρτέλας χρειάζεται χωριστός μηχανισμός. [Next.js - Ανανέωση gallery με ISR](Next.js%20-%20%CE%91%CE%BD%CE%B1%CE%BD%CE%AD%CF%89%CF%83%CE%B7%20gallery%20%CE%BC%CE%B5%20ISR.md)

## Πηγή

[Next.js — Caching and Revalidating (Previous Model)](https://nextjs.org/docs/app/guides/caching-without-cache-components)

Section: Route segment config → dynamic
