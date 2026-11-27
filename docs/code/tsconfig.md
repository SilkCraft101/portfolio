# tsconfig.json

## Σκοπός

Καθορίζει τις ρυθμίσεις του TypeScript, τον τρόπο ελέγχου του κώδικα και τα αρχεία που συμμετέχουν στον έλεγχο.

## Βασικές ρυθμίσεις

- `strict`: Ενεργοποίηση αυστηρού ελέγχου τύπων.
- `noEmit`: Αποτροπή παραγωγής JavaScript από το TypeScript.
- `skipLibCheck`: Παράλειψη ελέγχου των declaration files.
- `moduleResolution: "bundler"`: Επίλυση imports
  για περιβάλλον bundler.
- `jsx: "react-jsx"`: Υποστήριξη του automatic JSX runtime.
- `incremental`: Αξιοποίηση προηγούμενων ελέγχων τύπων.

## Ενσωμάτωση με Next.js

Το Next.js αναλαμβάνει την παραγωγή του τελικού κώδικα, ενώ το TypeScript χρησιμοποιείται για τον έλεγχο τύπων.

Στον έλεγχο συμμετέχουν και οι αυτόματα παραγόμενοι τύποι των διαδρομών του Next.js.

## Διαδρομές εισαγωγών

Το alias `@/*` αντιστοιχεί στη ρίζα του project, επιτρέποντας imports όπως `@/components/hero`.

## Σχετικό αρχείο

- [`tsconfig.json`](../../tsconfig.json)

## Πηγές

- [TypeScript — TSConfig Reference](https://www.typescriptlang.org/tsconfig/)
- [Next.js — TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript)
