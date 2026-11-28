---
tags:
  - portfolio
  - dev
  - github
  - git
---

# Τοπικό Repository

Η σύνδεση ενός τοπικού repository με GitHub απαιτεί το κατάλληλο remote και αποστολή του branch.

## Με απλά λόγια

Το Git κρατά το ιστορικό τοπικά. Το GitHub φιλοξενεί ένα απομακρυσμένο repository με το οποίο μπορώ να ανταλλάσσω commits.

## Χρήση

```sh
git remote get-url origin
git push origin main
```

Η πρώτη γραμμή ελέγχει τη διεύθυνση προορισμού. Η δεύτερη αποστέλλει τον κλάδο. Το repository πρέπει να υπάρχει και να έχω πρόσβαση σε αυτό.

Η ορατότητα public ή private είναι ρύθμιση στο GitHub. Ένα private repository δεν γίνεται public επειδή πρόσθεσα remote ή έκανα push.

## Πηγή

- [Τεκμηρίωση](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github)
