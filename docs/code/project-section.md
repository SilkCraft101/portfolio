# Project Section

## Σκοπός

Το `components/project-section.tsx` παρέχει κοινή δομή για τις αριθμημένες ενότητες του Engineering Case Study.

## Props

| Prop       | Περιεχόμενο          |
| ---------- | -------------------- |
| `number`   | Αριθμός ενότητας     |
| `title`    | Τίτλος ενότητας      |
| `children` | Περιεχόμενο ενότητας |

## Τεχνικές αποφάσεις

- Επαναχρησιμοποίηση της ίδιας δομής σε όλες τις ενότητες.
- Χρήση `ReactNode` για διαφορετικούς τύπους περιεχομένου.
- Semantic HTML μέσω των στοιχείων `section` και `h2`.
- Χρήση Semantic Tokens για το χρώμα έμφασης.

## Σχετικά αρχεία

- [project-section.tsx](../../components/project-section.tsx)
- [Δυναμική διαδρομή έργου](project-dynamic-route.md)
