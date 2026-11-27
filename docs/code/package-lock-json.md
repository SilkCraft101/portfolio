# package-lock.json

## Σκοπός

Καταγράφει τις ακριβείς εκδόσεις των άμεσων και έμμεσων εξαρτήσεων του project, εξασφαλίζοντας επαναλήψιμες εγκαταστάσεις μέσω του npm.

## Λειτουργία

Δημιουργείται και ενημερώνεται αυτόματα από το npm.

Το `package.json` ορίζει τις απαιτούμενες εξαρτήσεις, ενώ το `package-lock.json` καταγράφει τις συγκεκριμένες εκδόσεις που επιλύθηκαν.

## Βασικά πεδία

- `lockfileVersion`: Έκδοση μορφής του lockfile (3).
- `packages`: Το δέντρο των εξαρτήσεων.
- `version`: Η ακριβής έκδοση κάθε πακέτου.
- `resolved`: Η πηγή λήψης του πακέτου.
- `integrity`: Πληροφορία επαλήθευσης της ακεραιότητας του πακέτου.

## Τεχνικές αποφάσεις

- Δεν τροποποιείται χειροκίνητα.
- Αποθηκεύεται στο Git μαζί με το `package.json`.
- Χρησιμοποιείται το `npm ci` για επαναλήψιμες εγκαταστάσεις.

## Σχετικά αρχεία

- [`package-lock.json`](../../package-lock.json)
- [`package.json`](../../package.json)

## Πηγές

- [npm — package-lock.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json)
- [npm — npm ci](https://docs.npmjs.com/cli/v11/commands/npm-ci)
