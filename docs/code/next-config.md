# next.config.ts

## Σκοπός

Κεντρικό αρχείο ρυθμίσεων του Next.js για τη διαμόρφωση και τη βελτιστοποίηση της εφαρμογής.

## Ρυθμίσεις

### Βελτιστοποίηση imports

Η πειραματική επιλογή `optimizePackageImports` χρησιμοποιείται για τη βελτιστοποίηση των imports του `@chakra-ui/react`.

Προστέθηκε για την αντιμετώπιση προειδοποιήσεων απόδοσης του Webpack.

### Απομακρυσμένες εικόνες

Η επιλογή `images.remotePatterns` επιτρέπει τη φόρτωση εικόνων από τον συγκεκριμένο λογαριασμό Cloudinary.

Έτσι, μπορούν να δημοσιεύονται νέες ζωγραφιές χωρίς να απαιτείται τροποποίηση των ρυθμίσεων του Next.js.

## Τεχνικές αποφάσεις

- Χρήση του τύπου `NextConfig` για τον έλεγχο των ρυθμίσεων.
- Περιορισμός των επιτρεπόμενων απομακρυσμένων εικόνων.
- Αποφυγή αποθήκευσης τοπικών διευθύνσεων δικτύου στο repository.

## Σχετικό αρχείο

- [`next.config.ts`](../../next.config.ts)

## Πηγές

- [Next.js — Configuration](https://nextjs.org/docs/app/api-reference/config/next-config-js)
- [Next.js — optimizePackageImports](https://nextjs.org/docs/app/api-reference/config/next-config-js/optimizePackageImports)
- [Chakra UI — Next.js Integration](https://chakra-ui.com/docs/get-started/frameworks/next-app)
