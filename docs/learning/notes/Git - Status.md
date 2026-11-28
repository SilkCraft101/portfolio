---
tags:
  - portfolio
  - dev
  - git
  - terminal
---

# Status

Το git status δείχνει τη σχέση working tree, staging area και τρέχοντος commit.

## Με απλά λόγια

Πριν αποθηκεύσω την εργασία μου στο ιστορικό, κοιτάζω τι έχει αλλάξει και τι έχει επιλεγεί για commit.

## Χρήση

```sh
git status
```

Το `Changes not staged` αφορά αλλαγές που δεν έχουν επιλεγεί. Το `Changes to be committed` αφορά staged αλλαγές. Τα `Untracked files` δεν παρακολουθούνται ακόμη.

Το modified δεν σημαίνει staged. Το `working tree clean` δεν αποδεικνύει μόνο του ότι έχουν αποσταλεί τα commits στο GitHub.

## Πηγή

- [Τεκμηρίωση](https://git-scm.com/docs/git-status)
