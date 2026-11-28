---
tags:
  - portfolio
  - nextjs
  - configuration
  - environment-variables
---

# Μεταβλητές περιβάλλοντος

## Τι γράφω για το Cloudinary

Δημιουργώ το `.env.local` στον βασικό φάκελο του project, δίπλα στο `package.json`. Η παρακάτω γραμμή είναι υπόδειγμα, χωρίς πραγματικά κλειδιά:

```dotenv
CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
```

Το όνομα `CLOUDINARY_URL` γράφεται μία φορά. Το `cloudinary://` είναι το πρωτόκολλο, τα δύο κλειδιά χωρίζονται με `:` και το `@` χωρίζει τα κλειδιά από το cloud name. Δεν βάζω εδώ το `https://res.cloudinary.com/...` μιας εικόνας.

## Πώς συνδέεται με την πηγή

Η πηγή χρησιμοποιεί παραδείγματα όπως `DB_HOST` και `process.env.DB_HOST`. Αυτά δείχνουν τον γενικό μηχανισμό. Η δική μου μεταβλητή λέγεται `CLOUDINARY_URL` και το SDK τη διαβάζει από το περιβάλλον. Γι’ αυτό δεν χρειάζεται να αντιγράψω κώδικα σύνδεσης βάσης δεδομένων.

Το Next.js φορτώνει τα `.env*` στο `process.env`. Δεν χρειάζεται ξεχωριστό `dotenv` για αυτή τη χρήση μέσα στο Next.js. Μετά από αλλαγή στη ρύθμιση επανεκκινώ τον development server.

## Τι σημαίνει NEXT_PUBLIC_;

Το πρόθεμα επιτρέπει να ενσωματωθεί μια τιμή στον κώδικα του browser κατά το build, όταν ο κώδικας αναφέρεται απευθείας στο `process.env.NEXT_PUBLIC_ΟΝΟΜΑ`. Η τιμή παραμένει αυτή του build μέχρι να δημιουργηθεί νέο build. Δεν το χρησιμοποιώ για το Cloudinary API secret. Το `.env.local` εξαιρείται από το Git και δεν αντιγράφω τα κλειδιά σε σημειώσεις, screenshots ή κώδικα που στέλνεται στον browser.

## Με απλά λόγια

Το `.env.local` κρατά τις τοπικές ρυθμίσεις. Το Next.js τις φορτώνει και το Cloudinary SDK χρησιμοποιεί τη δική του. Στη φιλοξενία ορίζω τη μεταβλητή από τις ρυθμίσεις του περιβάλλοντος δημοσίευσης.

## Πηγή και όριο μελέτης

[Next.js — Environment Variables](https://nextjs.org/docs/app/guides/environment-variables): **Loading Environment Variables**, **Bundling Environment Variables for the Browser**. Δεν χρειάζομαι ακόμη πολυγραμμικά κλειδιά ή παραδείγματα βάσεων δεδομένων.
