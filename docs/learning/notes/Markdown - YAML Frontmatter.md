---
tags:
  - portfolio
  - markdown
  - yaml
  - essays
---
# YAML Frontmatter

## Με απλά λόγια

Το YAML frontmatter είναι μια ενότητα metadata που τοποθετείται στην αρχή ενός Markdown αρχείου.

Συνήθως περικλείεται ανάμεσα σε δύο γραμμές με `---`.

## Χρήση

```markdown
---
title: "Πώς μαθαίνουμε;"
subtitle: "Σκέψεις για τη διαδικασία της μάθησης."
---

# Πώς μαθαίνουμε;

Εδώ ξεκινά το περιεχόμενο του δοκιμίου.
```

Τα metadata περιγράφουν το άρθρο, ενώ το υπόλοιπο Markdown περιέχει το κείμενό του.

### Βασικά στοιχεία YAML

```yaml
title: "Learning"
published: true
tags:
  - learning
  - portfolio
```

- `title`: Ένα πεδίο με τιμή string.
- `published`: Boolean τιμή.
- `tags`: Λίστα τιμών.
- `-`: Δηλώνει στοιχείο μιας λίστας.

> [!IMPORTANT]
> Το YAML βασίζεται στο indentation. Η σωστή στοίχιση των πεδίων και των λιστών έχει σημασία.

> [!WARNING]
> Το YAML frontmatter δεν αποτελεί από μόνο του βασικό χαρακτηριστικό της σύνταξης Markdown. Χρειάζεται εργαλείο που να γνωρίζει πώς να το διαβάσει.

> [!TIP]
> Στο Essays μπορούμε να χρησιμοποιούμε εισαγωγικά στις ημερομηνίες, ώστε να διατηρούμε σαφή τη μορφή τους ως strings στο αρχείο.

## Εφαρμογή στο Portfolio

Στο `lib/essays.ts` διαβάζω τα `title` και `subtitle`. Αν ο τίτλος λείπει ή δεν περνά τον έλεγχο, εμφανίζεται το slug. Αν λείπει ο υπότιτλος, η τιμή του είναι κενό string. Τα `published` και `tags` του προηγούμενου παραδείγματος δείχνουν τύπους YAML και δεν επηρεάζουν τον σημερινό κατάλογο Essays. [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)

## Πηγές

- [YAML Specification — Language Overview](https://yaml.org/spec/1.2.2/#chapter-2-language-overview)
- [gray-matter — Documentation](https://github.com/jonschlinkert/gray-matter)

**Sections:** YAML Collections, gray-matter Usage.