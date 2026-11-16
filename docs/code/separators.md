# Separators = Chakra UI

## Σκοπός

Χρησιμοποιώ το `Separator` του Chakra UI για να διαχωρίζω οπτικά διαφορετικές ενότητες του Portfolio.

Στόχος είναι η καλύτερη οργάνωση του περιεχομένου και η δημιουργία μιας καθαρής, minimal αισθητικής.

Οι separators χρησιμοποιούνται μόνο όπου υπάρχει ουσιαστική αλλαγή ενότητας.

## Υλοποίηση

Το `Separator` εισάγεται από το `@chakra-ui/react`.

Παράδειγμα:

<Separator borderColor="border.subtle" my={8} />

### Props

- `borderColor="border.subtle"`:
  Χρησιμοποιεί το semantic token του Portfolio για διακριτικό περίγραμμα σε Light και Dark Mode.
- `my={8}`:
  Προσθέτει κατακόρυφο margin πάνω και κάτω από το διαχωριστικό.
- `w="full"`:
  Ορίζει πλάτος 100% του διαθέσιμου χώρου.

Το πλάτος εξαρτάται επίσης από το γονικό component, όπως το `Container`.

## Χρήση στο Portfolio

| Αρχείο                           | Χρήση                                                    |
| -------------------------------- | -------------------------------------------------------- |
| `app/page.tsx`                   | Ανάμεσα στα Hero και About                               |
| `app/about/page.tsx`             | Πριν από την ενότητα «Ο αυτισμός και η ΔΕΠΥ στη ζωή μου» |
| `app/works/page.tsx`             | Ανάμεσα στην εισαγωγή και στα projects                   |
| `app/essays/page.tsx`            | Ανάμεσα στην εισαγωγή και στις καρτέλες                  |
| `app/paintings/page.tsx`         | Ανάμεσα στην εισαγωγή και στη συλλογή ζωγραφιών          |
| `app/essays/learning/page.tsx`   | Ανάμεσα στην εισαγωγή και στο grid δοκιμίων              |
| `app/essays/philosophy/page.tsx` | Ανάμεσα στην εισαγωγή και στο grid δοκιμίων              |

## Design

Χρησιμοποιώ κοινό semantic token, ώστε οι separators να διατηρούν ενιαία εμφάνιση σε ολόκληρο το Portfolio.

Δεν προσθέτω separators ανάμεσα σε κάθε παράγραφο ή σε κάθε καρτέλα, επειδή αυτό θα δημιουργούσε περιττή οπτική πολυπλοκότητα.

## Έλεγχος

Η εμφάνιση των νέων separators ελέγχθηκε οπτικά στον browser.

Οι έλεγχοι ολοκληρώθηκαν:

- `npm run lint`: χωρίς σφάλματα.
- `npx tsc --noEmit`: χωρίς σφάλματα.
- `npm run build`: Σωστό production build.

Κατά το build εμφανίστηκαν μη αποκλειστικά warnings του Webpack σχετικά με serialization μεγάλων strings.

## Πηγές

Chakra UI — Separator:
https://chakra-ui.com/docs/components/separator

Ενότητα: Usage.

Chakra UI — Spacing:
https://chakra-ui.com/docs/styling/style-props/spacing

Χρήση των `my` και `w` για την τοποθέτηση και τις διαστάσεις των separators.
