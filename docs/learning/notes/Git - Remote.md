---
tags:
  - portfolio
  - dev
  - git
  - terminal
---

# Remote

Ένα remote δίνει όνομα σε διεύθυνση απομακρυσμένου repository. Το origin είναι συμβατικό όνομα.

## Με απλά λόγια

Το remote είναι ένα αποθηκευμένο όνομα για τη διεύθυνση ενός άλλου repository. Το origin είναι ένα συνηθισμένο τέτοιο όνομα.

## Χρήση

```sh
git remote add origin https://github.com/SilkCraft101/portfolio.git
git remote get-url origin
```

Η πρώτη γραμμή προσθέτει remote, μόνο αν δεν υπάρχει ήδη αυτό το όνομα. Η δεύτερη διαβάζει τη διεύθυνσή του. Για αλλαγή υπάρχοντος URL χρησιμοποιώ `git remote set-url origin URL`.

Η σύνδεση του remote δεν στέλνει από μόνη της commits. Η αποστολή γίνεται με push.

## Πηγή

- [Τεκμηρίωση](https://git-scm.com/docs/git-remote)
