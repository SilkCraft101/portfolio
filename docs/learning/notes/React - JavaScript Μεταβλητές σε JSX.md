---
tags:
  - portfolio
  - javascript
  - react
  - jsx
  - fundamentals
---
# Τι κάνουν τα `{}` στο JSX;

Στο JSX χρησιμοποιούμε άγκιστρα `{}` για να εισάγουμε JavaScript expressions μέσα στο περιεχόμενο που εμφανίζει ένα component. 

## Με απλά λόγια

Όταν γράφω κείμενο μέσα σε JSX, η React το εμφανίζει όπως είναι.
Αν όμως θέλω να εμφανίσω την τιμή μιας μεταβλητής, τη βάζω μέσα σε `{}`. 

### Παράδειγμα

```jsx
export function Greeting() {
	const name = "Αλέξανδρος";
	
	return (
		<p>Γεια σου, {name}!</p>
	);
}
```

**Αποτέλεσμα:** Γεια σου, Αλέξανδρος!

Η React διαβάζει την τιμή της `name` και την τοποθετεί στο συγκεκριμένο σημείο του κειμένου.

## Σύνδεση με το Portfolio

Στο `components/about.tsx`, το JSX εμφανίζει την υπολογισμένη ηλικία με `{age}`. Η μεταβλητή κρατά έναν αριθμό και τα άγκιστρα τον εισάγουν μέσα στο `Text` μαζί με την υπόλοιπη πρόταση.

## Συνηθισμένα λάθη

- Να γράφω το όνομα της μεταβλητής ως απλό κείμενο, χωρίς `{}`.
- Να βάζω εισαγωγικά γύρω από τη μεταβλητή μέσα στα `{}`, μετατρέποντάς την σε σταθερό string.

## Πηγή

[React — JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

Section: Using curly braces: A window into the JavaScript world