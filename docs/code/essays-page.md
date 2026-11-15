# `app/essays/page.tsx`

## Σκοπός

Το `app/essays/page.tsx` αποτελεί την κεντρική σελίδα της ενότητας Essays του Portfolio.

Η διαδρομή της σελίδας είναι `/essays`.

Η σελίδα περιλαμβάνει προσωπική εισαγωγή και δύο θεματικές κατηγορίες:

- **How We Learn:** Επιστήμη της μάθησης, Γνωστική ψυχολογία, μνήμη, μαθησιακές μέθοδοι και Tony Buzan.
- **Philosophy:** Προσωπικοί φιλοσοφικοί προβληματισμοί, με αναφορές στον Nietzsche και τον Schopenhauer.

## Υλοποίηση

Το React component `EssaysPage()` χρησιμοποιεί components του Chakra UI και το `Link` του Next.js.

- `Container`: Περιορίζει το πλάτος του περιεχομένου με `maxW="3xl"`.
- `Heading`: Εμφανίζει τον κύριο τίτλο και τους τίτλους των καρτελών.
- `Text`: Εμφανίζει την εισαγωγή και τις περιγραφές των κατηγοριών.
- `SimpleGrid`: Δημιουργεί responsive διάταξη με μία στήλη σε μικρές οθόνες και δύο σε μεγαλύτερες.
- `Box`: Δημιουργεί τις δύο καρτέλες.
- `Link`: Κάνει κάθε καρτέλα σύνδεσμο προς την αντίστοιχη κατηγορία.

### Design

- Ίσο ύψος καρτελών με `h="full"`.
- Ξεχωριστά backgrounds με τα semantic tokens `learningCard` και `philosophyCard`.
- Αυτόματη προσαρμογή χρωμάτων σε Light/Dark Mode.
- Hover effect με `transition` και `_hover`.
- Βελτιωμένη αναγνωσιμότητα περιγραφών με `lineHeight="tall"`.
- Αποστάσεις μεταξύ τίτλου, εισαγωγής και καρτελών.

Τα χρώματα των semantic tokens ορίζονται στο `components/ui/provider.tsx`.

## Έλεγχος

Ελέγχθηκαν οπτικά:

- Η εμφάνιση της σελίδας στον browser.
- Το responsive layout σε μικρό παράθυρο.
- Το Light και το Dark Mode.
- Η λειτουργία των hover effects.

Οι τελικοί έλεγχοι ESLint, TypeScript και production build εκκρεμούν.

## Επόμενα βήματα

- Δημιουργία `/essays/learning`.
- Δημιουργία `/essays/philosophy`.
- Υποστήριξη Markdown δοκιμίων και dynamic routes.
