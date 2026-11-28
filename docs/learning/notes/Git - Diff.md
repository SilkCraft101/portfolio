---
tags:
  - portfolio
  - dev
  - git
  - terminal
---

# Diff

Το git diff δείχνει διαφορές. Χωρίς άλλες επιλογές συγκρίνει το working tree με το staging area.

## Με απλά λόγια

Το diff δείχνει τι διαφέρει ανάμεσα σε δύο καταστάσεις. Πρέπει να ξέρω ποιες καταστάσεις συγκρίνω.

## Χρήση

```sh
git diff components/hero.tsx
git diff --stat
git diff --staged
```

Το απλό diff δείχνει αλλαγές του working tree σε σχέση με το staging area. Το όνομα αρχείου περιορίζει τη σύγκριση. Το `--stat` δίνει σύνοψη και το `--staged` συγκρίνει staged αλλαγές με το τελευταίο commit.

Μετά το add μπορεί το απλό diff να είναι άδειο, παρότι υπάρχουν αλλαγές έτοιμες για commit. Αν ανοίξει pager, το `q` κλείνει την προβολή.

## Πηγή

- [Τεκμηρίωση](https://git-scm.com/docs/git-diff)
