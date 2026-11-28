---
tags:
  - portfolio
  - javascript
  - async-await
  - promises
---
# async and await


Όταν ζητάω δεδομένα από το Cloudinary, η απάντηση δεν έρχεται αμέσως. Η αναζήτηση επιστρέφει ένα `Promise`: ένα αντικείμενο που αντιπροσωπεύει το αποτέλεσμα μιας εργασίας που μπορεί να μην έχει ολοκληρωθεί ακόμη.

## async


Βάζω `async` πριν από μια συνάρτηση για να μπορώ να χρησιμοποιήσω `await` μέσα της. Μια `async` συνάρτηση επιστρέφει πάντα ένα Promise.

## await

Το `await` περιμένει το αποτέλεσμα ενός Promise πριν συνεχίσει η συγκεκριμένη συνάρτηση. Δεν σταματά ολόκληρη την εφαρμογή.

```js
async function loadData() {
	const response = await fetch("/api/example");
	if (!response.ok) throw new Error(`HTTP ${response.status}`);
	const data = await response.json();
	
	return data;
}
```

Εδώ περιμένω πρώτα την απάντηση του αιτήματος και μετά τη μετατροπή της σε δεδομένα JavaScript. Αν το Promise απορριφθεί, το `await` μεταφέρει τον λόγο της απόρριψης ως εξαίρεση. Το `fetch()` μπορεί να ολοκληρωθεί και για HTTP σφάλματα, γι’ αυτό ελέγχω το `response.ok`.

## Με απλά λόγια


Το `async` λέει ότι η συνάρτηση μπορεί να περιμένει κάποια εργασία. Το `await` λέει: «Χρειάζομαι το αποτέλεσμά της πριν προχωρήσω παρακάτω».

Στη gallery περιμένω την απάντηση του Cloudinary πριν χρησιμοποιήσω τις ζωγραφιές για να δημιουργήσω το πλέγμα.

## Γιατί στη gallery δεν έχω fetch και response.json();

Στο γενικό παράδειγμα το fetch επιστρέφει Response, οπότε διαβάζω το JSON χωριστά. Το Cloudinary SDK κάνει το αίτημα για εμένα και το `execute()` επιστρέφει Promise με τα δεδομένα της απάντησης. Γι' αυτό γράφω:

```ts
const result = await search.execute();
```

Το `search` έχει ήδη δημιουργηθεί με τα φίλτρα μου. Το `await` κάνει την ίδια εργασία αναμονής και στα δύο παραδείγματα. Δεν χρειάζομαι `result.json()`. Το `async` στη δική μας σελίδα παραμένει στον server.

## Πηγή

[MDN — How to use promises](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await), ενότητα **async and await**.