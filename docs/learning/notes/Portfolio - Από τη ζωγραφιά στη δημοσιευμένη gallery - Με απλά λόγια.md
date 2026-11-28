---
tags:
  - portfolio
  - learning
  - javascript
  - react
  - cloudinary
  - nextjs
  - gallery
---

# Από τη ζωγραφιά στη δημοσιευμένη gallery

Αν μια καινούργια ζωγραφιά λείπει από τη gallery, ακολουθώ τη διαδρομή της σε μικρά βήματα.

1. **Αρχείο.** Στο Cloudinary η εικόνα πρέπει να ανήκει στο `portfolio/paintings`. Ο φάκελος καθορίζει αν θα τη βρει το Search API.
2. **Απάντηση.** Η `getPaintings` ακολουθεί τον cursor και μαζεύει τις έγκυρες εγγραφές. Μία εγγραφή έχει αναγνωριστικό, URL, πλάτος και ύψος. Το URL επιτρέπει στο `Image` να ζητήσει τα bytes αργότερα.
3. **Εμφάνιση.** Το `result.paintings.map(...)` δημιουργεί μία καταχώρηση για κάθε ζωγραφιά. Το `SimpleGrid` τη βάζει σε στήλη. Το `Dialog.Trigger` κρατά τη μικρογραφία, ενώ το `Portal` κρατά τη δομή της μεγέθυνσης σε άλλο σημείο του DOM.
4. **Ανανέωση.** Η gallery δηλώνει `revalidate = 60`. Η νέα εικόνα εξαρτάται από επόμενο αίτημα και επιτυχημένη αναδημιουργία της σελίδας.

Στο `app/paintings/page.tsx` μπορώ να ξεχωρίσω τρία αποτελέσματα. Η λίστα είναι κενή, η σύνδεση λείπει ή η προβολή περιορίστηκε επειδή η λίστα έφτασε το όριο. Αν η αναζήτηση αποτύχει με απρόβλεπτο σφάλμα, υπάρχει το `app/paintings/error.tsx`.

**Μικρή άσκηση.** Η πρώτη απάντηση του Cloudinary έχει δύο εικόνες και cursor. Η δεύτερη έχει μία εικόνα και τελειώνει. Πού ενώνω τις εγγραφές, πόσες φορές τρέχει το `map` callback και πότε ζητούνται τα πραγματικά αρχεία εικόνας;

Για να ακολουθήσω τον κώδικα ανοίγω [Portfolio - Πώς συνδέονται τα μέρη της gallery](Portfolio%20-%20%CE%A0%CF%8E%CF%82%20%CF%83%CF%85%CE%BD%CE%B4%CE%AD%CE%BF%CE%BD%CF%84%CE%B1%CE%B9%20%CF%84%CE%B1%20%CE%BC%CE%AD%CF%81%CE%B7%20%CF%84%CE%B7%CF%82%20gallery.md), [JavaScript - Συγκέντρωση αποτελεσμάτων με cursor](JavaScript%20-%20%CE%A3%CF%85%CE%B3%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CF%89%CF%83%CE%B7%20%CE%B1%CF%80%CE%BF%CF%84%CE%B5%CE%BB%CE%B5%CF%83%CE%BC%CE%AC%CF%84%CF%89%CE%BD%20%CE%BC%CE%B5%20cursor.md), [Chakra - Dialog](Chakra%20-%20Dialog.md) και [Next.js - Ανανέωση gallery με ISR](Next.js%20-%20%CE%91%CE%BD%CE%B1%CE%BD%CE%AD%CF%89%CF%83%CE%B7%20gallery%20%CE%BC%CE%B5%20ISR.md).

- [Cloudinary — Search API](https://cloudinary.com/documentation/search_method)
- [React — Rendering Lists](https://react.dev/learn/rendering-lists)
- [Next.js — ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration)
