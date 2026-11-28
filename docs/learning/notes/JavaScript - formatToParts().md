---
tags:
  - portfolio
  - javascript
  - date
  - internationalization
  - fundamentals
---
# Τι είναι η `formatToParts()`;

Είναι μέθοδος του `Intl.DateTimeFormat`.
Αντί να επιστρέφει ολόκληρη τη μορφοποιημένη ημερομηνία ως ένα `string`, επιστρέφει ένα **array από objects**. Κάθε αντικείμενο αντιπροσωπεύει ένα τμήμα της ημερομηνίας.

## Με απλά λόγια

Η `format()` μου δίνει την ημερομηνία ως ενιαίο κείμενο, για παράδειγμα `18/12/2026`.

Η `formatToParts()` χωρίζει αυτό το αποτέλεσμα σε ξεχωριστά τμήματα.

Έτσι, μπορώ να εντοπίσω το έτος, τον μήνα και την ημέρα χωρίς να εξαρτώμαι από τη σειρά εμφάνισής τους.

### Παράδειγμα

```js
const today = new Date("2026-12-17T22:30:00Z");

const formatter = new Intl.DateTimeFormat("el-GR", {
	timeZone: "Europe/Athens",
	year: "numeric",
	month: "numeric",
	day: "numeric",
});

const parts = formatter.formatToParts(today);

console.log(parts);
```

Στο αποτέλεσμα περιλαμβάνονται τα εξής τμήματα:

```js
const dateFields = [
  { type: "day", value: "18" },
  { type: "month", value: "12" },
  { type: "year", value: "2026" },
];
```

Υπάρχουν επίσης τμήματα τύπου `literal`, όπως τα `/` που χωρίζουν την ημερομηνία.

**Τι σημαίνουν τα properties;**
- `type`: Προσδιορίζει ποιο τμήμα της ημερομηνίας έχουμε.
- `value`: Περιέχει την αντίστοιχη τιμή ως `string`.

> [!IMPORTANT]
> **Προσοχή**
>
> Παρότι χρησιμοποιώ `"numeric"` στις ρυθμίσεις, οι τιμές που επιστρέφει η `formatToParts()` είναι strings.
> 
> Επίσης, ο αριθμός του Δεκεμβρίου εδώ είναι `"12"`, ενώ η `getMonth()` επιστρέφει `11`.
> 
> Θα λάβουμε υπόψη αυτές τις διαφορές στον υπολογισμό ηλικίας.

## Άσκηση με ζώνη ώρας

Διαβάζω από τα `parts` το πεδίο με `type: "day"` και συγκρίνω την τιμή του για Αθήνα και UTC. Η αρχική σελίδα υπολογίζει την ηλικία με χωριστές κλήσεις `format()` στη ζώνη `Europe/Athens`. Το παράδειγμα μένει ως άσκηση για τη σχέση χρονικής στιγμής και τοπικής ημερομηνίας. [JavaScript - Array.find()](JavaScript%20-%20Array.find%28%29.md)

## Συνηθισμένα λάθη

- Να περιμένω ότι η `formatToParts()` επιστρέφει ένα ενιαίο string.
- Να θεωρώ ότι τα `value` είναι numbers.
- Να υποθέτω ότι οι μήνες αριθμούνται από `0`, όπως στη `getMonth()`.

## Πηγή

[MDN — Intl.DateTimeFormat.prototype.formatToParts()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatToParts)

Sections:
- Syntax
- Return value
- Examples → Using formatToParts()