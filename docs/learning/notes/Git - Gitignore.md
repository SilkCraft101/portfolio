---
tags:
  - portfolio
  - dev
  - git
  - tooling
---

# Gitignore

Το .gitignore δηλώνει patterns για αρχεία που δεν θέλω να αρχίσει να παρακολουθεί το Git.

## Με απλά λόγια

Το gitignore λέει στο Git ποια μη παρακολουθούμενα αρχεία να αφήσει εκτός. Δεν τα ανεβάζει σε άλλο μέρος.

## Χρήση

```gitignore
node_modules/
.next/
local-assets/avatars/
```

Κάθε γραμμή είναι pattern εξαίρεσης. Η τελική κάθετος δηλώνει φάκελο. Οι τοπικές εικόνες μπορούν να μείνουν έξω από το repository, ενώ μια υπηρεσία όπως το Cloudinary τις φιλοξενεί χωριστά.

Το gitignore δεν σταματά μόνο του την παρακολούθηση ήδη tracked αρχείων. Αν υπάρχει αμφιβολία, ελέγχω τι έχει πραγματικά καταγραφεί στο repository.

## Πηγή

- [Τεκμηρίωση](https://git-scm.com/docs/gitignore)
