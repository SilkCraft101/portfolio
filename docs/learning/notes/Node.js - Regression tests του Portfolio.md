---
tags:
  - portfolio
  - nodejs
  - testing
---

# Regression tests του Portfolio

Ένα regression test κρατά μια συγκεκριμένη συμπεριφορά που θέλω να ισχύει ακόμη και μετά από αλλαγές στον κώδικα.

Στο `tests/essay-utils.test.mts`, ο έλεγχος της σελιδοποίησης δίνει στη `collectPages` μια ψεύτικη συνάρτηση ανάγνωσης. Η πρώτη κλήση επιστρέφει εγγραφές και έναν cursor. Η επόμενη πρέπει να ζητήσει ακριβώς αυτόν τον cursor και να προσθέσει τις νέες εγγραφές. Έτσι ελέγχω τη δική μου λογική χωρίς πραγματική κλήση στο Vercel Blob.

Στο `tests/essay-parser.test.mts`, τα tests δίνουν μικρά Markdown strings στον parser και συγκρίνουν περιεχόμενο, metadata ή το αναμενόμενο σφάλμα. Για παράδειγμα, ένα αρχείο με συνηθισμένο YAML frontmatter πρέπει να δίνει χωριστά τίτλο και σώμα.

Το `npm test` τρέχει τα `tests/*.test.mts` με τον ενσωματωμένο test runner του Node.js. Το `.github/workflows/ci.yml` εκτελεί τον ίδιο έλεγχο μαζί με lint, typecheck και build στις δύο εκδόσεις Node που δηλώνονται στο workflow. Κάθε βήμα απαντά σε διαφορετική ερώτηση για τον κώδικα.

**Δοκιμή κατανόησης.** Διαβάζω το test όπου δηλώνεται συνέχεια χωρίς cursor. Ποια υπόθεση του καταλόγου προστατεύει;

- [Node.js — Test runner](https://nodejs.org/api/test.html)
- [GitHub Actions — Workflow syntax](https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax)
