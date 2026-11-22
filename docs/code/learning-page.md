## Τρέχουσα αναθεώρηση — 22/11/2026

Τρέχουσα υλοποίηση: η σελίδα καλεί `getEssayCatalog("learning")`, αποδίδει ένα `h2` ανά μοναδικό slug, διατηρεί τοπική καρτέλα όταν Blob list αποτυγχάνει και εμφανίζει status για partial failures. Βλέπε `lib/essay-utils.ts` και `docs/code/essay-utils.md`. Οι παρακάτω ιστορικές ενότητες που περιγράφουν `Promise.all()` ή slug parsing μέσα στη σελίδα δεν ισχύουν πλέον.

# `app/essays/learning/page.tsx`

## Σκοπός

Το αρχείο υλοποιεί τη σελίδα `/essays/learning`, η οποία παρουσιάζει
τα προσωπικά μου δοκίμια σχετικά με την επιστήμη της μάθησης. Κάθε καρτέλα αντιπροσωπεύει ένα μεμονωμένο δοκίμιο, χωρίς περιορισμό σε υποκατηγορίες.

## Υλοποίηση

Το React component `LearningPage()` περιλαμβάνει:

- `Container`: Περιορίζει το συνολικό πλάτος σε `6xl`.
- `Box`: Περιορίζει την εισαγωγή σε `3xl` και δημιουργεί τις καρτέλες.
- `Heading`: Εμφανίζει τον τίτλο της σελίδας και των δοκιμίων.
- `Text`: Εμφανίζει τις εισαγωγικές παραγράφους και τις περιλήψεις.
- `Link`: Εισάγεται από το `next/link` και συνδέει ολόκληρη την καρτέλα με τη δυναμική διαδρομή του δοκιμίου.
- `Separator`: Διαχωρίζει την εισαγωγή από τα δοκίμια.
- `SimpleGrid`: Δημιουργεί responsive διάταξη:
  - Mobile: 1 στήλη.
  - Tablet: 2 στήλες.
  - Desktop: 3 στήλες.

  ## Design

- Georgia serif για τις εισαγωγικές παραγράφους.
- `fg.muted` για το δευτερεύον κείμενο.
- `border.subtle` για τα περιγράμματα.
- Responsive `fontSize`.
- Διακριτικό hover effect με `transition` και `_hover`.

## Πραγματικό δοκίμιο - 18/11/2026

Η προσωρινή καρτέλα "Tony Buzan and Mind Mapping" αντικαταστάθηκε από την καρτέλα του πρώτου πραγματικού δοκιμίου.

- **Τίτλος:** Η Τέχνη του να Μαθαίνεις
- **Υπότιτλος:** Από την παθητική ανάγνωση στην πραγματική κατανόηση
- **Διαδρομή:** `/essays/learning/i-techni-tou-na-mathaineis`

Χρησιμοποιείται το `Link` του Next.js για τη σύνδεση ολόκληρης της καρτέλας με το δοκίμιο. Η καρτέλα διατηρεί το responsive design και το hover effect. Η εμφάνιση και η πλοήγηση ελέγχθηκαν επιτυχώς στον browser.

## Έλεγχος

Ελέγχθηκαν στον browser:

- Η εμφάνιση της σελίδας.
- Η responsive διάταξη σε μικρό παράθυρο.
- Η αναγνωσιμότητα των κειμένων.

Οι τελικοί έλεγχοι ολοκληρώθηκαν επίσης:

- `npm run lint`: Χωρίς σφάλματα.
- `npx tsc --noEmit`: Χωρίς σφάλματα.
- `npm run build`: Επιτυχές production build.

## Δυναμική εμφάνιση δοκιμίων - 20/11/2026

Η σελίδα υποστηρίζει πλέον την αυτόματη εμφάνιση δοκιμίων που είναι αποθηκευμένα στο Vercel Blob.

### Υλοποίηση

- `getPublishedEssays("learning")`: Ανακτά τη λίστα δοκιμίων της κατηγορίας Learning.
- `async LearningPage()`: Επιτρέπει την ανάκτηση δεδομένων από το Server Component.
- `essays.map()`: Δημιουργεί δυναμικά μία καρτέλα για κάθε Markdown αρχείο.
- `essay.pathname`: Παρέχει τη διαδρομή του αρχείου στο Blob.
- `split()`, `pop()` και `replace()`: Εξάγουν το slug από το όνομα του αρχείου.
- RegExp: Ελέγχει τη μορφή του slug πριν δημιουργηθεί σύνδεσμος.
- `export const dynamic = "force-dynamic"`: Ενεργοποιεί τη δυναμική απόδοση της σελίδας.

### Συμβατότητα

Η υπάρχουσα καρτέλα "Η Τέχνη του να Μαθαίνεις" διατηρείται. Οι νέες καρτέλες χρησιμοποιούν το ίδιο responsive design και οδηγούν στη διαδρομή `/essays/learning/[slug]`.

Προς το παρον, ο τίτλος κάθε νέας καρτέλας παράγεται από το slug.

### Έλεγχοι

- `npx tsc --noEmit`: Επιτυχής.
- `npm run build`: Επιτυχές.
- Browser: Η υπάρχουσα σελίδα ανοίγει κανονικά.
- Production build: Η διαδρομή `/essays/learning` εμφανίζεται ως δυναμική (`ƒ`).

## Υποστήριξη YAML Frontmatter - 21/11/2026

Η σελίδα Learning εμφανίζει πλέον τους πραγματικούς τίτλους και υποτίτλους των δοκιμίων, χρησιμοποιώντας τα metadata των Markdown αρχείων.

### Τοπικό δοκίμιο

Η καρτέλα «Η Τέχνη του να Μαθαίνεις» διατηρείται, αλλά ο τίτλος και ο υπότιτλος δεν είναι πλέον hardcoded στον κώδικα.

- `path.join()`: Κατασκευάζει τη διαδρομή του τοπικού Markdown αρχείου.
- `readFile()`: Διαβάζει το περιεχόμενο του αρχείου.
- `matter()`: Διαχωρίζει τα YAML metadata από το Markdown περιεχόμενο.
- `typeof`: Ελέγχει ότι οι τιμές των metadata είναι τύπου string.

### Δοκίμια από Vercel Blob

- `getPublishedEssays("learning")`: Ανακτά τη λίστα των δημοσιευμένων δοκιμίων.
- `getEssayMetadata()`: Ανακτά τον τίτλο και τον υπότιτλο κάθε δοκιμίου.
- `Promise.all()`: Επιτρέπει την ταυτόχρονη ανάκτηση των metadata των δοκιμίων.
- `async` και `await`: Χειρίζονται τις asynchronous λειτουργίες ανάκτησης.
- Spread operator (`...essay`): Διατηρεί τις υπάρχουσες ιδιότητες κάθε Blob.
- `publishedEssays`: Περιέχει τα δοκίμια μαζί με τα αντίστοιχα metadata.
- `publishedEssays.map()`: Δημιουργεί δυναμικά τις καρτέλες.
- Optional chaining (`?.`): Επιτρέπει την ασφαλή πρόσβαση στα metadata όταν αυτά ενδέχεται να απουσιάζουν.
- Nullish coalescing (`??`): Χρησιμοποιεί το slug ως fallback όταν δεν υπάρχει διαθέσιμος τίτλος.
- Conditional rendering (`&&`): Εμφανίζει τον υπότιτλο μόνο όταν υπάρχει μη κενή τιμή.

### Εμφάνιση

Ο τίτλος εμφανίζεται μέσω του `Heading` και ο υπότιτλος μέσω του `Text`, με τις ακόλουθες ιδιότητες:

- `color="fg.muted"`
- `fontFamily="Georgia, serif"`
- `fontStyle="italic"`
- `lineHeight="tall"`
- `mt={4}`

Διατηρούνται το υπάρχον responsive design, το hover effect και η πλοήγηση μέσω `Link`.

### Αποτέλεσμα

- Αυτόματη εμφάνιση νέων δοκιμίων από το Vercel Blob.
- Ανάγνωση τίτλων και υποτίτλων από YAML Frontmatter.
- Υποστήριξη ελληνικών τίτλων ανεξάρτητα από το slug.
- Δημοσίευση νέων δοκιμίων χωρίς τροποποίηση του κώδικα ή νέο deployment για κάθε δοκίμιο.
- Διατήρηση του πρώτου τοπικού δοκιμίου στο repository.

### Έλεγχοι — 21/11/2026

- TypeScript (`npx tsc --noEmit`): Επιτυχής.
- Εμφάνιση metadata τοπικού δοκιμίου: Επιτυχής.
- Εμφάνιση metadata δοκιμίου από Vercel Blob: Επιτυχής.
- Αυτόματη δημιουργία καρτέλας: Επιτυχής.
- Πλοήγηση προς τη δυναμική διαδρομή: Επιτυχής.

Οι λειτουργικοί έλεγχοι πραγματοποιήθηκαν στο localhost. Ο τελικός έλεγχος στο production εκκρεμεί.

### Τεχνικές πηγές

- [gray-matter — Documentation](https://github.com/jonschlinkert/gray-matter#readme)
- [Obsidian — Properties](https://help.obsidian.md/properties)
- [MDN — Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [MDN — Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN — Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [MDN — Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [React — Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Vercel Blob — SDK](https://vercel.com/docs/vercel-blob/using-blob-sdk)
