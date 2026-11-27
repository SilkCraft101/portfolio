# eslint.config.mjs

## Σκοπός

Καθορίζει τους κανόνες του ESLint για τον εντοπισμό προβλημάτων και μη ενδεδειγμένων πρακτικών στον κώδικα.

## Ρυθμίσεις

Χρησιμοποιείται το Flat Configuration του ESLint
με δύο σύνολα κανόνων:

- `core-web-vitals`: Κανόνες του Next.js σχετικοί με την ποιότητα και την απόδοση του κώδικα.
- `typescript`: Κανόνες για κώδικα TypeScript.

## Εξαιρέσεις

Μέσω του `globalIgnores` εξαιρούνται από τον έλεγχο τα αυτόματα παραγόμενα αρχεία και οι φάκελοι:

- `.next/`
- `out/`
- `build/`
- `next-env.d.ts`

## Εκτέλεση

Ο έλεγχος πραγματοποιείται μέσω του `npm run lint`.

Το ESLint λειτουργεί συμπληρωματικά προς τον έλεγχο τύπων του TypeScript και το production build.

## Σχετικό αρχείο

- [`eslint.config.mjs`](../../eslint.config.mjs)

## Πηγές

- [ESLint — Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files)
- [Next.js — ESLint](https://nextjs.org/docs/app/api-reference/config/eslint)
