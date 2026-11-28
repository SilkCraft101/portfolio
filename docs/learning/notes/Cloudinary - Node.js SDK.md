---
tags:
  - portfolio
  - cloudinary
  - nodejs
  - sdk
  - gallery
---

# Cloudinary — Node.js SDK

## Τι χρειάζομαι στο portfolio

Ανεβάζω τις ζωγραφιές από τη Media Library. Στον κώδικα χρειάζομαι το SDK για να ζητάω τη λίστα τους από τον server.

```bash
npm install cloudinary
```

```ts
import { v2 as cloudinary } from "cloudinary";
```

Το `as cloudinary` δίνει το όνομα `cloudinary` στο εισαγόμενο `v2`. Έτσι γράφω `cloudinary.search`, χωρίς δεύτερο `.v2`.

## Γιατί η πηγή έχει διαφορετικό import;

Το `require(...)` είναι σύνταξη CommonJS. Το δικό μου αρχείο χρησιμοποιεί `import`, γι' αυτό κρατάω το παράδειγμα με `import { v2 as cloudinary }`. Δεν χρειάζεται να συνδυάσω τους δύο τρόπους.

Η ίδια πηγή δείχνει και `uploader.upload(...)`. Αυτό ανεβάζει αρχεία. Η gallery χρησιμοποιεί `search` για ανάκτηση ήδη ανεβασμένων εικόνων: είναι διαφορετική εργασία του ίδιου SDK.

## Σύνδεση με τον λογαριασμό

Το SDK διαβάζει τη μεταβλητή `CLOUDINARY_URL`. Το Next.js τη φορτώνει από το `.env.local`. Στο project ακολουθώ αυτόν τον τρόπο, αντί να γράψω τα ίδια στοιχεία ξανά σε `cloudinary.config(...)`.

Δείτε [Next.js - Environment Variables](Next.js%20-%20Environment%20Variables.md) και [Cloudinary - Search API method](Cloudinary%20-%20Search%20API%20method.md).

## Με απλά λόγια

Το SDK είναι το εργαλείο με το οποίο ο server μου μιλά στο Cloudinary. Η εγκατάστασή του δεν δημιουργεί από μόνη της τη gallery.

## Πηγή και όριο μελέτης

[Cloudinary — Node.js SDK](https://cloudinary.com/documentation/node_integration): **Install**, **Configure**, **Set required configuration parameters**. Τα παραδείγματα upload και transformations δεν χρειάζονται για τη σημερινή ανάκτηση.
