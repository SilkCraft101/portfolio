# `app/page.tsx`

## Ρόλος του αρχείου

Το αρχείο ορίζει την αρχική σελίδα του portfolio στη διαδρομή `/`.

## Components και σειρά εμφάνισης

Εισάγω τα `Hero`, `About`, `Projects` και `Hobbies` με named imports από τα αντίστοιχα αρχεία τους.

Το component `Home` επιστρέφει ένα `<main>` που τα εμφανίζει με αυτή τη σειρά. Εξάγεται με `export default`, όπως απαιτεί το Next.js για το page component.

Το `@/` στις εισαγωγές αντιστοιχεί στη ρίζα του project, σύμφωνα με το `tsconfig.json`.

## Σχέση με το layout

Το Navbar μεταφέρθηκε στο `app/layout.tsx` και αφαιρέθηκε από την αρχική, ώστε να εμφανίζεται μία φορά σε κάθε σελίδα.

Το περιεχόμενο του `Home` αποδίδεται στη θέση του `children`, μετά το κοινό Navbar. Τα `<html>`, `<body>` και ο Provider βρίσκονται ήδη στο root layout.

Το αρχείο παραμένει Server Component.

## Τρέχον checkpoint

Η αρχική περιλαμβάνει τη συνοπτική παρουσίαση, τα Projects και τον αρχικό σκελετό των Ενδιαφερόντων.

Η `/about` λειτουργεί και το Works οδηγεί στην ενότητα Projects της αρχικής μέσω `/#works`. Το Hobbies παραμένει σε αναμονή.

## Πηγές

Οι σχετικές παραπομπές βρίσκονται στο [sources.md](../sources.md), στις ενότητες για Next.js pages και layouts, React components και JSX.
