---
tags:
  - portfolio
  - javascript
  - operators
---
# Nullish Coalescing (??)

## Με απλά λόγια

Ο operator `??` επιστρέφει τη δεξιά τιμή όταν η αριστερή είναι `null` ή `undefined`.

Διαφορετικά, επιστρέφει την αριστερή τιμή.

## Σύνταξη

```js
value ?? fallback
```

## Χρήση

```js
const title = undefined;

const result = title ?? "Χωρίς τίτλο";

console.log(result); // "Χωρίς τίτλο"
```

Αν υπάρχει ήδη τιμή:

```js
const title = "Learning";

console.log(title ?? "Χωρίς τίτλο");
// "Learning"
```

### Διαφορά από το `||`

```js
const description = "";

console.log(description || "Default"); // "Default"
console.log(description ?? "Default"); // ""
```

> [!IMPORTANT]
> Το `??` χρησιμοποιεί την εναλλακτική τιμή μόνο για `null` και `undefined`. Δεν αντιμετωπίζει τα `0`, `false` και `""` ως απουσία τιμής.

> [!WARNING]
> Δεν συνδυάζουμε απευθείας το `??` με `&&` ή `||` στην ίδια έκφραση χωρίς κατάλληλες παρενθέσεις.

## Εφαρμογή στο Portfolio

Το απόσπασμα είναι άσκηση για την περίπτωση που λείπει η τιμή. Στο `lib/essays.ts` ο τίτλος ελέγχεται επίσης ως προς τον τύπο και το μήκος του. Ο κενός τίτλος χρειάζεται αυτόν τον επιπλέον έλεγχο, επειδή το `??` θα κρατούσε το `""`.

```js
const title = metadata.title ?? slug;
```

Αν δεν υπάρχει τίτλος, χρησιμοποιείται το `slug`.

## Πηγή

[MDN — Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)

**Sections:** Syntax, Description, Examples, Relationship with the optional chaining operator.