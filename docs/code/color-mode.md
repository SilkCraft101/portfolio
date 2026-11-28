# Color Mode

## Σκοπός

Το `components/ui/color-mode.tsx` διαχειρίζεται την εναλλαγή μεταξύ Light και Dark Mode μέσω της βιβλιοθήκης `next-themes`.

## Βασικά στοιχεία

| Στοιχείο            | Λειτουργία                                  |
| ------------------- | ------------------------------------------- |
| `ColorModeProvider` | Παρέχει το χρωματικό θέμα.                  |
| `useColorMode`      | Διαβάζει και διαχειρίζεται το ενεργό θέμα.  |
| `ColorModeIcon`     | Εμφανίζει το εικονίδιο του ενεργού θέματος. |
| `ColorModeButton`   | Επιτρέπει την εναλλαγή θέματος.             |

## Τεχνικές αποφάσεις

- Το `attribute="class"` εφαρμόζει το θέμα μέσω κλάσης στο HTML element.
- Το `disableTransitionOnChange` αποτρέπει τις μεταβάσεις CSS κατά την αλλαγή θέματος.
- Το runtime narrowing περιορίζει το `colorMode` στις τιμές `light`, `dark` ή `undefined`.
- Το `ClientOnly` εμφανίζει ένα Skeleton μέχρι να πραγματοποιηθεί το mount στον browser.
- Το `aria-label` παρέχει προσβάσιμο όνομα στο κουμπί.
- Το `forwardRef` προωθεί το ref στο HTML button.

## Σχετικά αρχεία

- [color-mode.tsx](../../components/ui/color-mode.tsx)
- [provider.tsx](../../components/ui/provider.tsx)
- [navbar.tsx](../../components/navbar.tsx)

## Πηγές

- [Μαθησιακή τεκμηρίωση](../learning/README.md)
