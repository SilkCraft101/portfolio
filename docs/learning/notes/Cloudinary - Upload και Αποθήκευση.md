---
tags:
  - portfolio
  - dev
  - cloudinary
  - images
  - gallery
---

# Upload και Αποθήκευση

Η Media Library επιτρέπει ανέβασμα και διαχείριση εικόνων από browser. Ένα delivery URL επιτρέπει στο site να ζητήσει το αντίστοιχο asset.

## Με απλά λόγια

Οι εικόνες αποθηκεύονται στην υπηρεσία. Το site τις ζητά με τη διεύθυνσή τους, οπότε δεν χρειάζεται να βρίσκονται στο repository.

## Χρήση

```text
https://res.cloudinary.com/CLOUD_NAME/image/upload/v1234567890/example-painting.png
```

Η διεύθυνση περιλαμβάνει το cloud name, τον τύπο πόρου, τον τρόπο παράδοσης, την προαιρετική έκδοση και το public ID, εδώ με επέκταση παράδοσης `.png`. Σε περιβάλλον dynamic folders, το `asset_folder` οργάνωσης μπορεί να διαφέρει από το πρόθεμα του public ID. Το URL είναι για εμφάνιση της εικόνας.

Ανεβάζω και οργανώνω αρχεία στη Media Library. Το ότι ανέβηκαν δεν σημαίνει ότι θα εμφανιστούν αυτόματα στη gallery. Για αυτό χρειάζεται ξεχωριστός τρόπος ανάκτησης.

## Τι ισχύει πλέον στο portfolio

Η gallery έχει συνδεθεί με την αναζήτηση του φακέλου `portfolio/paintings`. Ανεβάζω εκεί τις εικόνες από τη Media Library και ο κώδικας ανακτά τη λίστα. Δεν γράφω ένα νέο Image με το χέρι για κάθε upload. Η εμφάνιση νέων αρχείων εξαρτάται και από την ανανέωση της σελίδας: [Next.js - Ανανέωση gallery με ISR](Next.js%20-%20%CE%91%CE%BD%CE%B1%CE%BD%CE%AD%CF%89%CF%83%CE%B7%20gallery%20%CE%BC%CE%B5%20ISR.md).

## Πηγή

- [Cloudinary — Media Library uploads](https://cloudinary.com/documentation/dam_upload_store_assets)
- [Cloudinary — Image delivery URL](https://cloudinary.com/documentation/image_transformations)
