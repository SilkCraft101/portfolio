---
tags:
  - portfolio
  - dev
  - git
  - terminal
---

# Push

Το git push ενημερώνει το απομακρυσμένο repository με τα κατάλληλα τοπικά commits και refs.

## Με απλά λόγια

Το push μεταφέρει commits προς το απομακρυσμένο repository. Δεν στέλνει απλώς κάθε αποθηκευμένο αρχείο.

## Χρήση

```sh
git push origin main
```

Το `origin` είναι το remote και το `main` ο κλάδος. Η σειρά είναι remote και μετά branch.

Το `Everything up-to-date` σημαίνει ότι δεν υπήρξε κάτι καινούργιο για τη συγκεκριμένη αποστολή. Δεν σημαίνει ότι έγιναν commit οι unstaged αλλαγές.

## Πηγή

- [Τεκμηρίωση](https://git-scm.com/docs/git-push)
