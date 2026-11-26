# `app/works/page.tsx`

> [!NOTE]
> **Τρέχουσα κατάσταση - Αναδόμηση της ενότητας Works (26/11/2026)**
>
> Η σελίδα `/works` ανακατασκευάστηκε ως responsive κατάλογος τεχνικών projects, με επαναχρησιμοποιήσιμες κάρτες προεπισκόπησης.
>
> Η πρώτη καταχώρηση αφορά το προσωπικό Portfolio και οδηγεί στη διαδρομή `/works/portfolio`, η οποία περιλαμβάνει προσωρινή σελίδα παρουσίασης.
>
> Η επόμενη φάση αφορά την μελέτη, τον σχεδιασμό και την υλοποίηση αναλυτικών Engineering Case Studies, με στόχο την παρουσίαση της αρχιτεκτονικής, των τεχνικών αποφάσεων και της διαδικασίας ανάπτυξης κάθε project.
>
> Η παρούσα τεκμηρίωση περιγράφει την ήδη υλοποιημένη λειτουργικότητα. Οι μελλοντικές δυνατότητες δεν θεωρούνται ολοκληρωμένες.

## Ρόλος του αρχείου

Το αρχείο ορίζει τη σελίδα `/works`, η οποία λειτουργεί ως κατάλογος των τεχνικών έργων μου.

Κάθε έργο παρουσιάζεται μέσα από μια κάρτα προεπισκόπησης που οδηγεί στη δική του σελίδα.

Η πρώτη καταχώρηση αφορά το προσωπικό μου Portfolio.

## Metadata

Το αρχείο εισάγει το type `Metadata` από το Next.js και εξάγει το αντικείμενο `metadata`.

Ορίζονται:

- `title`: `Works`
- `description`: Σύντομη περιγραφή της σελίδας.

Τα metadata χρησιμοποιούνται από το Next.js για τη δημιουργία των αντίστοιχων στοιχείων του HTML document.

## Εισαγωγές και export

Από το Chakra UI χρησιμοποιούνται:

- `Box`
- `Container`
- `Heading`
- `Stack`
- `Text`
- `Separator`
- `SimpleGrid`

Το `WorkGridItem` εισάγεται από το `components/work-grid-item.tsx`.

Η εικόνα του Portfolio εισάγεται στατικά από το `public/images/portfolio-preview.png`.

Η function `WorksPage` αποτελεί το default export της σελίδας.

## Δομή της σελίδας

Το εξωτερικό `Box` αποδίδεται ως `<main>` και χρησιμοποιεί:

- `id="main-content"` για τον προσδιορισμό του κύριου περιεχομένου.
- `lang="el"` για τη δήλωση της γλώσσας.
- Responsive `py` για το κατακόρυφο spacing.

Το `Container` περιορίζει το μέγιστο πλάτος σε `3xl`.

Το `Stack` οργανώνει κατακόρυφα τον τίτλο, τις εισαγωγικές παραγράφους, τον διαχωριστή και τον κατάλογο των projects.

Ο κύριος τίτλος `Works.` αποδίδεται ως `<h1>`.

## Εισαγωγικό περιεχόμενο

Η σελίδα περιλαμβάνει τρεις παραγράφους που εξηγούν:

- Τον σκοπό του Portfolio.
- Τη μαθησιακή διαδικασία πίσω από τα projects.
- Τη σημασία της ειλικρινούς παρουσίασης της πραγματικής κατάστασης κάθε υλοποίησης.

Τα `Text` χρησιμοποιούν το semantic token `fg.muted`, `lineHeight="tall"` και `maxW="2xl"`.

Ένα `Separator` διαχωρίζει οπτικά την εισαγωγή από τις κάρτες των projects.

## Responsive Project Grid

Ο κατάλογος υλοποιείται με το `SimpleGrid` του Chakra UI.

```tsx
<SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
```

Η ιδιότητα `columns` καθορίζει τον αριθμό στηλών ανά breakpoint:

- `base`: Μία στήλη.
- `md`: Δύο στήλες.

Το `gap={6}` καθορίζει την απόσταση μεταξύ των στοιχείων του grid.

Το `w="full"` επιτρέπει στο grid να καταλαμβάνει το διαθέσιμο πλάτος του γονικού container.

## Καταχώρηση Project

Κάθε project εμφανίζεται μέσω του επαναχρησιμοποιήσιμου `WorkGridItem`.

Για το προσωπικό Portfolio παρέχονται:

- `id="portfolio"`: Αναγνωριστικό που χρησιμοποιείται για τη διαδρομή του project.
- `title="Προσωπικό Portfolio"`: Τίτλος της κάρτας.
- `thumbnail={portfolioPreview.src}`: Εικόνα προεπισκόπησης.
- `children`: Σύντομη περιγραφή του project.

Η εσωτερική δομή, τα hover effects και η πλοήγηση της κάρτας τεκμηριώνονται ξεχωριστά στο `work-grid-item.md`.

## Εικόνα προεπισκόπησης

Η εικόνα βρίσκεται στη διαδρομή:

`public/images/portfolio-preview.png`

Εισάγεται στατικά:

```tsx
import portfolioPreview from "@/public/images/portfolio-preview.png";
```

Στο `WorkGridItem` μεταβιβάζεται το `portfolioPreview.src`.

Η στατική εισαγωγή επιτρέπει στο Next.js να παράγει URL εικόνας που περιλαμβάνει αναγνωριστικό βασισμένο στο περιεχόμενο του αρχείου.

Αυτό βοηθά στην αποφυγή προβλημάτων παλιάς cache όταν αντικαθίσταται η εικόνα.

## Σελίδα Project

Η κάρτα του Portfolio οδηγεί στη διαδρομή:

`/works/portfolio`

Η αντίστοιχη σελίδα ορίζεται στο:

`app/works/portfolio/page.tsx`

Προς το παρόν εμφανίζει έναν τίτλο και ένα ενημερωτικό μήνυμα.

Η αναλυτική παρουσίαση θα αντικατασταθεί από ένα Engineering Case Study σε επόμενη φάση.

## Προηγούμενη υλοποίηση

Η προηγούμενη έκδοση του `/works` παρουσίαζε το Portfolio με διάταξη `Flex`, τοποθετώντας την εικόνα προεπισκόπησης δίπλα στις πληροφορίες του project.

Η διάταξη αντικαταστάθηκε από responsive grid με επαναχρησιμοποιήσιμες κάρτες, ώστε να υποστηρίζεται η προσθήκη περισσότερων projects με κοινή εμφάνιση.

## Έλεγχοι

Η νέα διάταξη έχει εξεταστεί οπτικά σε διαφορετικά πλάτη οθόνης και έχει ελεγχθεί η πλοήγηση προς τη σελίδα του Portfolio.

Οι τελικοί έλεγχοι `lint`, `typecheck`, tests και production build εκκρεμούν πριν από το commit.

## Πηγές

### Next.js — Metadata

[Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)

Σχετικό θέμα: Static metadata.

### Next.js — Image

[Image Component](https://nextjs.org/docs/app/api-reference/components/image)

Σχετικά θέματα: Static image imports και image optimization.

### Chakra UI — SimpleGrid

[SimpleGrid](https://chakra-ui.com/docs/components/simple-grid)

Σχετικά θέματα: Columns και responsive grid layout.

### Chakra UI — Responsive Design

[Responsive Design](https://chakra-ui.com/docs/styling/responsive-design)

Σχετικά θέματα: Breakpoints και object syntax.

### Next.js — Linking and Navigating

[Linking and Navigating](https://nextjs.org/docs/app/getting-started/linking-and-navigating)

Σχετικό θέμα: Πλοήγηση μεταξύ διαδρομών με το `Link` component.
