# `app/works/page.tsx`

> [!NOTE]
> **Τρέχουσα κατάσταση - 27/11/2026**
>
> Η σελίδα `/works` δημιουργεί δυναμικά τις κάρτες των έργων από το `lib/projects.ts`.
>
> Κάθε έργο διαθέτει ξεχωριστό URL μέσω της κοινής δυναμικής διαδρομής `/works/[slug]`.
>
> Η υποδομή δεδομένων και πλοήγησης έχει ολοκληρωθεί.
>
> Εκκρεμεί η αισθητική και λειτουργική υλοποίηση του Engineering Case Study Template.

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

Ο πίνακας `projects` εισάγεται από το `lib/projects.ts`, το οποίο αποτελεί την κεντρική πηγή δεδομένων των έργων.

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

## Δυναμική καταχώρηση Projects

Ο πίνακας `projects` διατρέχεται μέσω της `map()`, δημιουργώνας ένα `WorkGridItem` για κάθε έργο.

Στο component μεταβιβάζεται:

- `key`: Μοναδικό αναγνωριστικό για το React.
- `id`: Το slug του project.
- `title`: Ο τίτλος του project.
- `thumbnail`: Η εικόνα προεπισκόπησης.
- `children`: Η σύντομη περιγραφή.

Η προσθήκη νέων projects πραγματοποιείται στο
`lib/projects.ts`, χωρίς τροποποίηση της σελίδας `/works`.

Η λειτουργία του component τεκμηριώνεται στο
[work-grid-item.md](work-grid-item.md).

## Εικόνα προεπισκόπησης

Η εικόνα του Portfolio βρίσκεται στη διαδρομή `public/images/portfolio-preview.png`.

Η στατική εισαγωγή της εικόνας πραγματοποιείται πλέον στο `lib/projects.ts`.

Η ιδιότητα `thumbnail` κάθε project περιέχει το URL της αντίστοιχης εικόνας, το οποίο μεταβιβάζεται στο `WorkGridItem`.

Η σελίδα `/works` δεν εισάγει πλέον απευθείας τις εικόνες των projects.

## Σελίδα Project

Κάθε κάρτα οδηγεί στη δυναμική διαδρομή `/works/[slug]`.

Η κοινή σελίδα ορίζεται στο:

`app/works/[slug]/page.tsx`

Το αντίστοιχο project ανακτάται από το `lib/projects.ts`
βάσει του slug του URL.

Προς το παρόν εμφανίζονται ο τίτλος και η περιγραφή
του project. Αν το slug δεν αντιστοιχεί σε καταχωρισμένο
project, εμφανίζεται σελίδα 404 μέσω της `notFound()`.

Η υποδομή αυτή αποτελεί τη βάση για την ανάπτυξη
του επαναχρησιμοποιήσιμου Engineering Case Study Template.

## Προηγούμενη υλοποίηση

Η προηγούμενη έκδοση του `/works` παρουσίαζε το Portfolio με διάταξη `Flex`, τοποθετώντας την εικόνα προεπισκόπησης δίπλα στις πληροφορίες του project.

Η διάταξη αντικαταστάθηκε από responsive grid με επαναχρησιμοποιήσιμες κάρτες, ώστε να υποστηρίζεται η προσθήκη περισσότερων projects με κοινή εμφάνιση.

## Έλεγχοι - 27/11/2026

Επιβεβαίωσα ότι τη δυναμική δημιουργία των καρτών, τη πλοήγηση προς το `/works/portfolio` και την επιστροφή `HTTP 404` για ανύπαρκτο project.

Οι τεχνικοί έλεγχοι ολοκληρώθηκαν επιτυχώς:

- TypeScript typecheck.
- ESLint.
- 18 υπάρχοντα regression tests των Essays.
- Next.js production build.

Το σφάλμα React σχετικά με το script tag παραμένει
ξεχωριστή εκκρεμότητα, καθώς εμφανίζεται στο στα δοκίμια. Δεν έχω επιβεβαιώσει την ακριβή αιτία ακόμη.

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
