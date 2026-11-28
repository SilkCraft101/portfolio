---
tags:
  - portfolio
  - npm
  - dependencies
  - security
  - package-json
---

# Σκοπός

Το `npm` διαχειρίζεται τις εξαρτήσεις (_dependencies_) ενός JavaScript project. Μια εφαρμογή μπορεί να χρησιμοποιεί δύο κατηγορίες εξαρτήσεων:
- **Direct Dependencies:** Packages που δηλώνονται απευθείας στο `package.json`.
- **Transitive Dependencies:** Packages που εγκαθίστανται επειδή τα χρειάζονται άλλες dependencies.

Μερικές φορές μια transitive dependency χρησιμοποιεί παλαιότερη έκδοση βιβλιοθήκης που περιέχει γνωστή ευπάθεια ασφαλείας (_security vulnerability_).

Το npm παρέχει τον μηχανισμό `overrides`, ώστε να μπορούμε να επηρεάζουμε τις εκδόσεις των εξαρτήσεων μέσα στο dependency tree.

## npm Overrides

Το πεδίο `overrides` ορίζεται στο `package.json` του κύριου project. Επιτρέπει την αντικατάσταση της έκδοσης μιας dependency, ακόμη και όταν αυτή χρησιμοποιείται έμμεσα από άλλα packages.

Στο Portfolio πρόσθεσα:

```json
"overrides": {
  "katex": "$katex"
}
```

Η έκφραση `$katex` αναφέρεται στο version specification της άμεσης dependency `katex` που έχει δηλωθεί στο ίδιο `package.json`. Με αυτόν τον τρόπο, το npm χρησιμοποιεί το ίδιο specification για τις αντίστοιχες transitive dependencies.

> [!IMPORTANT]
> Τα overrides μπορούν να επιβάλλουν έκδοση εκτός των περιορισμών που έχει δηλώσει μια βιβλιοθήκη. Επομένως, απαιτούνται ελέγχοι συμβατότητας.

## Το πρόβλημα στο Portfolio

Κατά την εγκατάσταση των `remark-math`, `rehype-katex` και `katex`, ο έλεγχος ασφαλείας εντόπισε μια γνωστή ευπάθεια στο KaTeX. Η ευπάθεια σχετίζεται με τη δυνατότητα παράκαμψης ορισμένων περιορισμών εμπιστοσύνης μέσω υπάρχοντος _prototype pollution_.

Αναγνωριστικό:

`GHSA-238p-pmpm-9mq7`

Το dependency tree περιείχε διαφορετικές εκδόσεις:

- `katex@0.19.1`: Άμεση dependency.
- `rehype-katex@7.0.1`: Χρησιμοποιούσε `katex@0.16.47`.
- `micromark-extension-math@3.1.0`: Χρησιμοποιούσε `katex@0.16.47` μέσω του `remark-math`.

Η παρουσία της νεότερης άμεσης dependency δεν σήμαινε ότι όλες οι υπόλοιπες χρησιμοποιούσαν επίσης αυτή την έκδοση.

### Εφαρμογή της διόρθωσης

Πρόσθεσα το override με την εντολή:

`npm pkg set 'overrides.katex=$katex'`

Στην συνέχεια εκτέλεσα:

`npm install`

Η εγκατάσταση ενημέρωσε το dependency tree και το `package-lock.json`. Για να επιβεβαιώσω τις εκδόσεις, χρησιμοποίησα:

`npm ls katex`

Το τελικό αποτέλεσμα έδειξε ότι όλες οι σχετικές dependencies χρησιμοποιούσαν το `katex@0.19.1`. Η ένδειξη `deduped` σημαίνει ότι το npm επαναχρησιμοποιεί μια ήδη εγκατεστημένη έκδοση αντί να δημιουργεί ξεχωριστό αντίγραφο της ίδιας dependency.

## Security Auditing

Το npm διαθέτει την εντολή:

`npm audit`

Η εντολή ελέγχει το dependency tree για γνωστές ευπάθειες που περιλαμβάνονται στις σχετικές βάσεις advisories.

Για έλεγχο χωρίς τις development dependencies χρησιμοποιούμε:

`npm audit --omit=dev`

Η επιλογή `--omit=dev` εξαιρεί τις development dependencies από το πεδίο ελέγχου.

> [!WARNING]
> Το αποτέλεσμα `0 vulnerabilities` δεν αποτελεί απόλυτη εγγύηση ασφάλειας. Σημαίνει ότι ο συγκεκριμένος έλεγχος δεν εντόπισε γνωστές ευπάθειες στο εξεταζόμενο σύνολο dependencies. 

## Αποτελέσματα στο Portfolio - 18/11/2026

Πριν από την εφαρμογή του override:

- `npm audit --omit=dev`: 4 low vulnerabilities.
- Οι ευπάθειες σχετίζονταν με παλαιότερες εκδόσεις KaTeX.

Μετά την εφαρμογή:

- `npm audit --omit=dev`: 0 vulnerabilities.
- `npm ls katex`: Επιβεβαίωσε τη χρήση του KaTeX 0.19.1.
- `npm run build`: Επιτυχής έλεγχος production build.
- Μαθηματικοί τύποι: Επιτυχής οπτικός έλεγχος στον browser.

Στον συνολικό έλεγχο παρέμειναν 14 high vulnerabilities, οι οποίες δεν εμφανίστηκαν στον έλεγχο με `--omit=dev`. 

Δεν χρησιμοποίησα το `npm audit fix --force`, επειδή η αυτόματη διόρθωση θα μπορούσε να προκαλέσει αλλαγές με προβλήματα συμβατότητας (και δεν έχω την εμπειρία να λύνω τέτοια προβλήματα).

## `package-lock.json`

Το `package-lock.json` καταγράφει το επιλυμένο dependency tree και τις συγκεκριμένες εκδόσεις των packages. Όταν αλλάζουν οι dependencies ή τα overrides, το αρχείο μπορεί να ενημερωθεί από το `npm install`.

Στο Portfolio χρειάζεται να συμπεριλάβω τις σχετικές αλλαγές του `package.json` και του `package-lock.json` στο ίδιο Git commit. 

## Πηγές

**1. npm — package.json**

[https://docs.npmjs.com/cli/v11/configuring-npm/package-json/](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/)

Ενότητα:

- Overrides

**2. npm — npm audit**

[https://docs.npmjs.com/cli/v11/commands/npm-audit/](https://docs.npmjs.com/cli/v11/commands/npm-audit/)

Ενότητες:

- Description
- Configuration — omit

**3. npm — npm ls**

[https://docs.npmjs.com/cli/v11/commands/npm-ls/](https://docs.npmjs.com/cli/v11/commands/npm-ls/)

Ενότητα:

- Description

**4. npm — package-lock.json**

[https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json/](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json/)

Ενότητα:

- Description

**5. GitHub Security Advisory — KaTeX**

[https://github.com/advisories/GHSA-238p-pmpm-9mq7](https://github.com/advisories/GHSA-238p-pmpm-9mq7)

Ενότητες:

- Description
- Affected versions
- Patched versions