# `package-lock.json`

## Ρόλος του αρχείου

Το npm δημιουργεί και ενημερώνει αυτόματα το lockfile, καταγράφοντας το συγκεκριμένο δέντρο dependencies που επιλύθηκε. Το αποθηκεύω στο Git μαζί με το `package.json`, ώστε να διατηρείται η πληροφορία των εκδόσεων.

Το `package.json` περιγράφει τι ζητά το project, ενώ το lockfile καταγράφει τις συγκεκριμένες επιλύσεις. Δεν χρειάζεται να αναλύσω μία προς μία όλες τις εγγραφές του ούτε να τις γράφω χειροκίνητα.

## Βασικά πεδία

Τα `name` και `version` αντιστοιχούν στο project. Το `lockfileVersion: 3` δηλώνει την έκδοση της μορφής του lockfile, όχι την έκδοση της εφαρμογής.

Το `requires: true` είναι πεδίο της μορφής του npm. Δεν χρειάζεται δική μου αλλαγή για τη συνήθη εγκατάσταση dependencies.

Το `packages` περιέχει εγγραφές ανά διαδρομή πακέτου. Η εγγραφή με κλειδί την κενή συμβολοσειρά `""` αφορά τη ρίζα του project και περιλαμβάνει τις άμεσες dependencies του.

## Εγγραφές πακέτων

Εγγραφές όπως το `node_modules/@ark-ui/react` αφορούν πακέτα του δέντρου εγκατάστασης, συμπεριλαμβανομένων έμμεσων dependencies.

Το `version` καταγράφει την ακριβή έκδοση. Όπου υπάρχουν, το `resolved` δηλώνει την πηγή του πακέτου και το `integrity` περιέχει πληροφορία ακεραιότητας για την επαλήθευση του ληφθέντος περιεχομένου. Δεν αποτελεί πιστοποίηση ότι ένα πακέτο είναι ασφαλές.

Άλλα πεδία περιγράφουν dependencies, άδεια, απαιτήσεις περιβάλλοντος και περιορισμούς πλατφόρμας. Δεν εμφανίζονται υποχρεωτικά όλα σε κάθε εγγραφή.

## Σχέση με το Git

Μια μικρή αλλαγή στο package.json μπορεί να προκαλέσει πολλές αλλαγές στο lockfile, επειδή επηρεάζει και έμμεσες dependencies. Το μεγάλο diff δεν σημαίνει ότι γράφτηκε αντίστοιχος όγκος κώδικα εφαρμογής.

## Ενημέρωση dependencies — 17/11/2026

Το `package-lock.json` ενημερώθηκε αυτόματα από το npm κατά τη διάρκεια των εργασιών για την υποστήριξη Markdown και τη διόρθωση ευπαθειών ασφαλείας.

### Αλλαγές

- Εγκατάσταση της βιβλιοθήκης `react-markdown`.
- Αναβάθμιση του Next.js από `16.4.3` σε `16.4.6`.
- Εκτέλεση `npm audit fix` για την αντιμετώπιση των ευπαθειών που ανέφερε το npm.

Το `npm audit fix` πρόσθεσε 1 package και ενημέρωσε 15 packages, συμπεριλαμβανομένων εξαρτήσεων του `typescript-eslint` και του `minimatch`.

Δεν τροποποίησα χειροκίνητα το `package-lock.json`.

### Αποτελέσματα

Μετά τις ενημερώσεις:

- Το `npm audit` ανέφερε 0 vulnerabilities.
- Το ESLint ολοκληρώθηκε χωρίς σφάλματα.
- Ο έλεγχος TypeScript ολοκληρώθηκε χωρίς σφάλματα.
- Το production build ολοκληρώθηκε επιτυχώς με Next.js `16.4.6`.

Οι αλλαγές στο lockfile θα συμπεριληφθούν στο ίδιο Git commit με τις αντίστοιχες αλλαγές του `package.json`.

## Ενημέρωση dependencies — 18/11/2026

Το `package-lock.json` ενημερώθηκε αυτόματα μέσω του npm για την υποστήριξη μαθηματικών τύπων στα Markdown δοκίμια.

### Αλλαγές

- Εγκατάσταση των `remark-math`, `rehype-katex` και `katex`.
- Προσθήκη npm override για το KaTeX στο `package.json`.
- Εκτέλεση `npm install` για την εφαρμογή του override.
- Ενημέρωση του dependency tree και αφαίρεση περιττών εγκαταστάσεων.

Το override επιτρέπει στις έμμεσες εξαρτήσεις να χρησιμοποιούν το version specification της άμεσης dependency `katex`.

### Έλεγχοι

- `npm ls katex`: Επιβεβαιώθηκε η χρήση του `katex@0.19.1` από όλες τις σχετικές dependencies.
- `npm audit --omit=dev`: 0 vulnerabilities.
- `npm audit`: 14 high vulnerabilities παραμένουν στον συνολικό έλεγχο.
- `npm run build`: Επιτυχές production build μετά την ενημέρωση.

Δεν χρησιμοποίησα `npm audit fix --force`.

### Git

Το `package-lock.json` δεν τροποποιήθηκε χειροκίνητα.

Οι αλλαγές του θα συμπεριληφθούν στο ίδιο commit με το ενημερωμένο `package.json`.

## Ενημέρωση dependencies — 20/11/2026

### Εγκατάσταση Vercel Blob

Το `package-lock.json` ενημερώθηκε αυτόματα κατά την εγκατάσταση της βιβλιοθήκης `@vercel/blob@2.9.0`.

Η εγκατάσταση πρόσθεσε τις απαραίτητες dependencies για την επικοινωνία με το Vercel Blob Store.

### Επίλυση ευπαθειών

Μετά την εγκατάσταση του `@vercel/blob`, το `npm audit` ανέφερε 4 high vulnerabilities.

Το πρόβλημα σχετιζόταν με την έκδοση `zod@4.1.11`, η οποία χρησιμοποιούνταν ως έμμεση dependency μέσω του `@vercel/cli-config@0.3.1`.

Πρόσθεσα στο `package.json` ένα npm override για τη χρήση της έκδοσης `zod@4.6.7`.

Στη συνέχεια εκτέλεσα:

```bash
npm install
```

Το npm ενημέρωσε αυτόματα το dependency tree και το `package-lock.json`.

### Έλεγχοι

- `npm ls @vercel/blob @vercel/cli-config zod`: Επιβεβαίωση των εγκατεστημένων εκδόσεων.
- `npm audit`: 0 vulnerabilities.
- `npm run build`: Επιτυχές production build.

Δεν τροποποίησα χειροκίνητα το `package-lock.json`.

Οι αλλαγές του θα συμπεριληφθούν στο ίδιο Git commit με το `package.json`.

## Ενημέρωση dependencies — 21/11/2026

### Εγκατάσταση gray-matter

Το `package-lock.json` ενημερώθηκε αυτόματα κατά την εγκατάσταση της βιβλιοθήκης `gray-matter@4.0.3`.

Η εγκατάσταση πραγματοποιήθηκε με:

```bash
npm install gray-matter
```

### Αλλαγές

- Καταγραφή της νέας άμεσης dependency `gray-matter`.
- Καταγραφή των απαραίτητων transitive dependencies.
- Αυτόματη ενημέρωση του dependency tree από το npm.

Η βιβλιοθήκη χρησιμοποιείται για την ανάλυση του YAML Frontmatter και τον διαχωρισμό των metadata από το Markdown περιεχόμενο των δοκιμίων.

### Έλεγχοι

- Εγκατάσταση dependency: Επιτυχής.
- `npm audit`: 0 vulnerabilities κατά την εγκατάσταση.
- `npx tsc --noEmit`: Επιτυχής.

Ο τελικός έλεγχος του production build εκκρεμεί.

### Git

Δεν τροποποίησα χειροκίνητα το `package-lock.json`.

Οι αλλαγές του θα συμπεριληφθούν στο ίδιο Git commit με το ενημερωμένο `package.json`.

### Τεχνικές πηγές

- [gray-matter — Documentation](https://github.com/jonschlinkert/gray-matter#readme)
- [npm — npm install](https://docs.npmjs.com/cli/v11/commands/npm-install)
- [npm — package-lock.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json)

## Πηγές

### npm — package-lock.json

https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json

Σχετικές ενότητες:

- Description
- File Format

### npm — npm audit

https://docs.npmjs.com/cli/v11/commands/npm-audit

Σχετικές λειτουργίες:

- `npm audit`
- `npm audit fix`
