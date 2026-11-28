---
tags:
  - portfolio
  - nodejs
  - markdown
  - npm
  - essays
---

# Τι παίρνω από το frontmatter

Η `gray-matter` διαβάζει την αρχή του Markdown και επιστρέφει χωριστά τα metadata (`data`) και το σώμα (`content`). Για παράδειγμα, με αυτό το δοκίμιο:

```markdown
---
title: "Learning"
subtitle: "Πώς εξασκούμαι"
---

Το πρώτο βήμα είναι να δοκιμάσω μόνος μου.
```

Το `data.title` περιέχει `Learning`. Το `content` περιέχει την παράγραφο μετά το frontmatter. Το υπόλοιπο Markdown αποδίδεται αργότερα από το [React - react-markdown](React%20-%20react-markdown.md).

Στο Portfolio η `parseEssay` στο `lib/essay-parser.ts` ελέγχει το μέγεθος, αφαιρεί το αρχικό BOM, αναγνωρίζει τους οριοθέτες και καλεί τη βιβλιοθήκη για YAML. Ο κατάλογος εφαρμόζει χωριστούς κανόνες για τον τίτλο και τον υπότιτλο. Μπορώ να πάρω έγκυρο YAML με κενό τίτλο και πάλι να εμφανιστεί το slug.

- [Markdown - YAML Frontmatter](Markdown%20-%20YAML%20Frontmatter.md)
- [gray-matter — Usage and Returned object](https://github.com/jonschlinkert/gray-matter#returned-object)

**Συμπληρωματική άσκηση API**

[JavaScript - Gray Matter](JavaScript%20-%20Gray%20Matter.md). Ξεκίνα από εδώ για τη ροή του Portfolio.
