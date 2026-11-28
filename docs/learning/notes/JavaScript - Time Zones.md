---
tags:
  - portfolio
  - javascript
  - date
  - timezone
---

# Τι είναι η ζώνη ώρας;

Η ζώνη ώρας καθορίζει πώς αντιστοιχεί μια συγκεκριμένη χρονική στιγμή στην τοπική ημερομηνία και ώρα μιας περιοχής.
Το `Date` αναπαριστά μια χρονική στιγμή, αλλά οι μέθοδοι `getDate()` χρησιμοποιούν τη ζώνη ώρας του περιβάλλοντος εκτέλεσης.

## Με απλά λόγια

Την ίδια χρονική στιγμή, στην Ελλάδα μπορεί να είναι ήδη 18 Δεκεμβρίου, ενώ σε έναν server που χρησιμοποιεί UTC να είναι ακόμη 17 Δεκεμβρίου.

Επομένως, όταν υπολογίζω ηλικία, πρέπει να προσέχω ποια ημερομηνία χρησιμοποιώ.

### Παράδειγμα

```js
const date = new Date("2026-12-17T22:30:00Z");

const formatter = new Intl.DateTimeFormat("el-GR", {
  timeZone: "Europe/Athens",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

console.log(formatter.format(date));
```

**Αποτέλεσμα:**

```text
18/12/2026
```

- Το `Z` σημαίνει ότι η ώρα δίνεται σε UTC.
- Το `Intl.DateTimeFormat` μορφοποιεί μια ημερομηνία.
- Το `el-GR` ορίζει την ελληνική μορφοποίηση.
- Το `timeZone` ορίζει τη ζώνη ώρας που θέλω να χρησιμοποιηθεί.
- Το `Europe/Athens` είναι το αναγνωριστικό της ζώνης ώρας της Ελλάδας.

## Άσκηση ημερομηνίας

Η ηλικία μου πρέπει να αλλάζει στις 18 Δεκεμβρίου σύμφωνα με την ημερομηνία στην Ελλάδα.

Το Dynamic Rendering εξασφαλίζει νέο υπολογισμό σε κάθε request, αλλά δεν καθορίζει από μόνο του τη ζώνη ώρας.

> [!WARNING]
> **Προσοχή**
>
> Η `formatter.format(date)` επιστρέφει ένα string.
>
> Δεν δημιουργεί νέο αντικείμενο `Date` ούτε αλλάζει τη ζώνη ώρας του αρχικού αντικειμένου.

## Συνηθισμένα λάθη

- Να υποθέτω ότι ο server χρησιμοποιεί την ώρα του υπολογιστή μου.
- Να θεωρώ ότι το Dynamic Rendering λύνει και το πρόβλημα της ζώνης ώρας.
- Να αντιμετωπίζω το μορφοποιημένο string ως αντικείμενο `Date`.

## Πηγές

[MDN — Intl.DateTimeFormat.prototype.format()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format)

[MDN — Date: Date components and time zones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_components_and_time_zones)

[MDN — Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat)

[MDN — Intl.DateTimeFormat() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
