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
- `Text`: Εμφανίζει τις δύο εισαγωγικές παραγράφους και τις περιγραφές των κατηγοριών.
- `SimpleGrid`: Δημιουργεί responsive διάταξη με μία στήλη σε μικρές οθόνες και δύο σε μεγαλύτερες.
- `Box`: Δημιουργεί τις δύο καρτέλες.
- `Link`: Κάνει κάθε καρτέλα σύνδεσμο προς την αντίστοιχη κατηγορία.
- `Separator`: Διαχωρίζει οπτικά τις εισαγωγικές παραγράφους από τις καρτέλες, χρησιμοποιώντας `borderColor="border.subtle"` και `my={8}`.

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

Οι τελικοί έλεγχοι πραγματοποιήθηκαν στις 16/11/2026:

- `npm run lint`: Επιτυχής, χωρίς σφάλματα.
- `npx tsc --noEmit`: Επιτυχής, χωρίς σφάλματα.
- `npm run build`: Επιτυχές production build.

Κατά το build εμφανίστηκαν μη κρίσιμα Webpack serialization warnings.

## Πρόοδος — 18/11/2026

Ολοκληρώθηκαν:

- Υποστήριξη και δοκιμαστική ανάγνωση Markdown αρχείων.
- Υλοποίηση Dynamic Routes `/essays/[category]/[slug]`.
- Επιτυχής εμφάνιση Markdown δοκιμίου στον browser.

Η δυναμική διαδρομή τεκμηριώνεται στο [essay-dynamic-route.md](./essay-dynamic-route.md).

## Επόμενα βήματα

- Σύνδεση των σελίδων κατηγοριών με τα πραγματικά δοκίμια.
- Styling του Markdown περιεχομένου.
- Περαιτέρω έλεγχοι Validation και Error Handling.
- Σχεδιασμός δημοσίευσης δοκιμίων χωρίς Git push.
