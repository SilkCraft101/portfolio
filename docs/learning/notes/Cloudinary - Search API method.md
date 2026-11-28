---
tags:
  - portfolio
  - cloudinary
  - api
  - gallery
---

# Αναζήτηση ζωγραφιών

## Το αίτημα του portfolio

Το παράδειγμα απομονώνει μία πρώτη κλήση. Στο `app/paintings/page.tsx` η `getPaintings` χτίζει το ίδιο query σε κάθε σελίδα και προσθέτει τον cursor όταν υπάρχει.

```ts
const result = await cloudinary.search
  .expression("resource_type:image AND asset_folder=portfolio/paintings")
  .sort_by("public_id", "asc")
  .max_results(500)
  .execute();
```

Το `expression` περιορίζει την αναζήτηση σε εικόνες του συγκεκριμένου φακέλου. Το `=` ζητά ακριβή αντιστοίχιση φακέλου, χωρίς υποφακέλους. Το πεδίο `asset_folder` αφορά περιβάλλοντα με dynamic folders. Το `sort_by` βάζει σειρά με βάση το `public_id`, όχι απαραίτητα τη χρονολογική σειρά των έργων. Το `execute()` στέλνει το αίτημα.

## Από την πηγή στη gallery

Η πηγή έχει γενικά παραδείγματα με tags και άλλα φίλτρα. Εδώ αλλάζω το φίλτρο επειδή θέλω τον φάκελο `portfolio/paintings`. Κρατάω τον ίδιο μηχανισμό αναζήτησης.

Το `result` είναι ολόκληρη η απάντηση. Το `result.resources` είναι η λίστα εικόνων. Το `next_cursor`, αν υπάρχει, επιτρέπει να ζητήσω την επόμενη παρτίδα. Η πλήρης επανάληψη εξηγείται στο [JavaScript - Συγκέντρωση αποτελεσμάτων με cursor](JavaScript%20-%20%CE%A3%CF%85%CE%B3%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CF%89%CF%83%CE%B7%20%CE%B1%CF%80%CE%BF%CF%84%CE%B5%CE%BB%CE%B5%CF%83%CE%BC%CE%AC%CF%84%CF%89%CE%BD%20%CE%BC%CE%B5%20cursor.md).

## Με απλά λόγια

Η αναζήτηση μου δίνει δεδομένα εικόνων. Η `map()` τα μετατρέπει σε καταχωρήσεις της σελίδας. Είναι δύο ξεχωριστές εργασίες.

## Πηγή και όριο μελέτης

[Cloudinary — Search API](https://cloudinary.com/documentation/search_method): αναζήτησε **expression**, **asset_folder**, **sort_by**, **max_results**, **next_cursor** και το παράδειγμα επόμενης σελίδας. Δεν χρειάζομαι ακόμη aggregations ή image analysis.
