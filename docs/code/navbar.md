# Navbar

## Σκοπός

Το `components/navbar.tsx` παρέχει την κοινή πλοήγηση σε όλες τις σελίδες της εφαρμογής.

## Πλοήγηση

| Σύνδεσμος | Προορισμός                              |
| --------- | --------------------------------------- |
| Όνομα     | Αρχική σελίδα (`/`)                     |
| Works     | Τεχνικά και δημιουργικά έργα (`/works`) |
| About     | Προσωπική παρουσίαση (`/about`)         |
| GitHub    | Προσωπικό GitHub profile                |

Περιλαμβάνει επίσης το `ColorModeButton` για την εναλλαγή μεταξύ Light και Dark Mode.

## Τεχνικές αποφάσεις

- Χρήση `next/link` για εσωτερική πλοήγηση.
- Sticky τοποθέτηση στην κορυφή της σελίδας.
- Ημιδιαφανές φόντο με `backdropFilter`.
- Χρήση `flexWrap` για προσαρμογή σε μικρές οθόνες.
- Κοινά styles μέσω του `navLinkStyles`.
- Χρήση Semantic Tokens για τα χρώματα.
- Semantic HTML μέσω του στοιχείου `nav`.
- Προσβάσιμο όνομα μέσω του `aria-label`.
- Χρήση `noopener noreferrer` στον εξωτερικό σύνδεσμο.

Η λογική του χρωματικού θέματος παραμένει ανεξάρτητη στο `color-mode.tsx`.

## Σχετικά αρχεία

- [navbar.tsx](../../components/navbar.tsx)
- [layout.tsx](../../app/layout.tsx)
- [color-mode.tsx](../../components/ui/color-mode.tsx)
- [provider.tsx](../../components/ui/provider.tsx)

## Πηγές

- [Μαθησιακή τεκμηρίωση](../learning/README.md)
