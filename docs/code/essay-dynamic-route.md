## Τρέχουσα αναθεώρηση — 22/11/2026

Το ενεργό detail route χρησιμοποιεί `getEssay(category, slug)` και `generateMetadata()` από τον ίδιο loader. `category`/`slug` επικυρώνονται, metadata και body μοιράζονται το ίδιο parsing, και το τοπικό Learning δοκίμιο υπερισχύει Blob object με ίδιο slug. Το παλιό παράδειγμα `getPublishedEssay()` και η περιγραφή `force-dynamic` είναι ιστορικά.

# `app/essays/[category]/[slug]/page.tsx`

## Σκοπός

Δυναμική ανάγνωση και εμφάνιση Markdown δοκιμίων μέσω της διαδρομής `/essays/[category]/[slug]`.

## Υλοποίηση

Η `EssayPage()` είναι ένα asynchronous Server Component.

- `PageProps`: Παρέχει τους τύπους των παραμέτρων του route.
- `await params`: Ανακτά τα `category` και `slug`.
- **Validation:** Περιορίζει τις κατηγορίες σε `learning` και `philosophy` και ελέγχει τη μορφή του `slug` με RegExp.
- `path.join()`: Κατασκευάζει τη διαδρομή `content/essays/<category>/<slug>.md`.
- `readFile()`: Διαβάζει το Markdown αρχείο με encoding `utf8`.
- `react-markdown`: Μετατρέπει το Markdown σε React elements.
- `notFound()`: Χειρίζεται μη αποδεκτές παραμέτρους και αρχεία που δεν βρέθηκαν.
- `try...catch`: Αναγνωρίζει το σφάλμα `ENOENT` και προωθεί τα υπόλοιπα σφάλματα.
- `remark-math`: Αναγνωρίζει μαθηματικές εκφράσεις στο Markdown.
- `rehype-katex`: Αποδίδει μαθηματικούς τύπους μέσω KaTeX.
- `katex/dist/katex.min.css`: Παρέχει τη μορφοποίηση των μαθηματικών τύπων.
- `Container`: Περιορίζει το πλάτος του περιεχομένου.
- `essay-markdown`: CSS class για τη μορφοποίηση των δοκιμίων.
- `process.cwd()`: Επιστρέφει το τρέχον working directory της Node.js διεργασίας, το οποίο χρησιμοποιείται ως βάση για την αναζήτηση των Markdown αρχείων.

## Αποτέλεσμα

Η δυναμική διαδρομή `/essays/[category]/[slug]` χρησιμοποιείται πλέον για την εμφάνιση πραγματικών δοκιμίων.

Το πρώτο δημοσιευμένο δοκίμιο είναι:

- **Τίτλος:** Η Τέχνη του να Μαθαίνεις.
- **Κατηγορία:** learning
- **Αρχείο:** `content/essays/learning/i-techni-tou-na-mathaineis.md`
- **Διαδρομή:** `/essays/learning/i-techni-tou-na-mathaineis`

Επιβεβαίωσα τη σωστή εμφάνιση του Markdown, των μαθηματικών τύπων και των code blocks. Η εφαρμογή επιστρέφει `404` για μη αποδεκτές κατηγορίες, μη έγκυρα slugs και ανύπαρκτα αρχεία.

## Έλεγχοι — 18/11/2026

- `npm run lint`: Επιτυχής.
- `npx tsc --noEmit`: Επιτυχής.
- `npm run build`: Επιτυχές production build με Next.js 16.4.6.
- `npm audit --omit=dev`: 0 vulnerabilities.
- `npm audit`: 14 High vulnerabilities στις εξαρτήσεις ανάπτυξης.

Για την αντιμετώπιση των 4 low vulnerabilities του KaTeX εφαρμόστηκε npm override στο `package.json`:

`"overrides": { "katex": "$katex" }`

Μετά το `npm install`, το `npm ls katex` επιβεβαίωσε ότι όλες οι σχετικές εξαρτήσεις χρησιμοποιούν KaTeX 0.19.1.

Ο έλεγχος `npm audit --omit=dev` επέστρεψε 0 vulnerabilities.

Το production build και ο οπτικός έλεγχος των μαθηματικών τύπων ολοκληρώθηκαν επιτυχώς.

Οι 14 high vulnerabilities του συνολικού ελέγχου παραμένουν προς αξιολόγηση.

## Έλεγχοι Validation και Error Handling — 18/11/2026

- Μη επιτρεπόμενη κατηγορία: 404.
- Μη έγκυρο slug: 404.
- Ανύπαρκτο Markdown αρχείο: `ENOENT` → `notFound()`.
- Υπαρκτό Markdown αρχείο: Επιτυχής εμφάνιση.

## Ολοκληρωμένες αλλαγές — 18/11/2026

- Δημιουργία καρτέλας για το δοκίμιο «Η Τέχνη του να Μαθαίνεις».
- Σύνδεση της καρτέλας με τη δυναμική διαδρομή μέσω Next.js `Link`.
- Μορφοποίηση Markdown μέσω CSS στο `app/globals.css`.
- Υποστήριξη μαθηματικών τύπων με `remark-math` και `rehype-katex`.
- Δημιουργία macOS-style code blocks.
- Διαγραφή της δοκιμαστικής σελίδας `/essays/test`.
- Διαγραφή των δύο προσωρινών Markdown δοκιμίων.
- Αφαίρεση της δοκιμαστικής καρτέλας από τη σελίδα Philosophy.

## Ανάγνωση δοκιμίων από Vercel Blob - 20/11/2026

Η δυναμική διαδρομή υποστηρίζει πλέον δύο πηγές Markdown περιεχομένου:

1. Τοπικά αρχεία στον φάκελο `content/essays/`.
2. Αρχεία αποθηκευμένα στο Vercel Blob.

### Διαδικασία ανάγνωσης

Η `EssayPage()` επιχειρεί αρχικά να διαβάσει το τοπικό Markdown αρχείο μέσω `readFile()`. Εάν το αρχείο δεν υπάρχει και προκύψει σφάλμα `ENOENT`, χρησιμοποιείται η συνάρτηση `get()` του `@vercel/blob`.

Το αρχείο αναζητείται στη διαδρομή:

`essays/${category}/${slug}.md`

Εάν το Blob δεν βρεθεί, καλείται η `notFound()`.

Εάν βρεθεί, το περιεχόμενο μετατρέπεται σε κείμενο μέσω:

`new Response(blob.stream).text()`

Το Markdown αποδίδεται από το υπάρχον `react-markdown`, με υποστήριξη μαθηματικών τύπων μέσω `remark-math` και `rehype-katex`.

### Δυναμική απόδοση

Η ρύθμιση `export const dynamic = "force-dynamic"` επιτρέπει την ανάκτηση περιεχομένου κατά το request, χωρίς να απαιτείται νέο build για κάθε αλλαγή στο Blob.

### Έλεγχοι

- `npx tsc --noEmit`: Επιτυχής.
- `npm run build`: Επιτυχές.
- Production build: Η διαδρομή `/essays/[category]/[slug]` εμφανίζεται ως δυναμική (`ƒ`).

Η ανάγνωση πραγματικού Markdown αρχείου από το Vercel Blob επιβεβαιώθηκε στις 21/11/2026.

## Υποστήριξη YAML Frontmatter - 21/11/2026

Η δυναμική διαδρομή υποστηρίζει πλέον μεταδεδομένα μέσω YAML Frontmatter, τόσο για τα τοπικά markdown αρχεία όσο και για τα αρχεία που αποθηκεύονται στο Vercel Blob.

### Υλοποίηση

Εγκατέστησα τη βιβλιοθήκη `gray-matter` για τον διαχωρισμό των μεταδεδομένων από το κυρίως περιεχόμενο του Markdown.

```tsx
cost { data, content: markdownContent = matter(content);
```

- `matter()`: Αναλύει το Markdown αρχείο.
- `data`: Περιέχει τα metadata του YAML Frontmatter.
- `markdownContent`: Περιέχει το Markdown χωρίς το Frontmatter.
- `title`: Χρησιμοποιείται ως κύριος τίτλος του δοκιμίου.
- `subtitle`: Χρησιμοποιείται ως προαιρετικός υπότιτλος.

### Έλεγχος μεταδεδομένων

Ο τίτλος ελέγχεται ώστε να είναι μη κενό string. Εάν δεν υπάρχει έγκυρος τίτλος, χρησιμοποιείται το `slug` ως fallback.

Ο υπότιτλος εμφανίζεται μόνο εφόσον υπάρχει μη κενή τιμή τύπου string.

Ο τίτλος αποδίδεται μέσω του στοιχείου `<h1>` και ο υπότιτλος μέσω των στοιχείων `<p>` και `<em>`.

Το `react-markdown` λαμβάνει πλέον αποκλειστικά το `markdownContent`, χωρίς τα YAML metadata.

### Δομή Markdown αρχείου

```yaml
---
title: "Τίτλος δοκιμίου"
subtitle: "Υπότιτλος δοκιμίου"
---
```

Τα metadata μπορούν να δημιουργούνται και να τροποποιούνται μέσω των Properties του Obsidian.

Δεν απαιτείται επανάληψη του τίτλου και του υποτίτλου στο σώμα του Markdown.

### Αποτέλεσμα

- Διαχωρισμός μεταδεδομένων και περιεχομένου.
- Ανεξαρτησία του εμφανιζόμενου τίτλου από το filename και το slug.
- Υποστήριξη ελληνικών τίτλων και υποτίτλων.
- Διατήρηση της υπάρχουσας μορφοποίησης Markdown.
- Συμβατότητα με τοπικά αρχεία και Vercel Blob.
- Δημοσίευση νέων δοκιμίων μέσω του Vercel Blob χωρίς αλλαγές στον κώδικα ή νέο deployment για κάθε δοκίμιο.

### Έλεγχοι — 21/11/2026

- Ανάγνωση YAML Frontmatter από τοπικό αρχείο: Επιτυχής.
- Ανάγνωση YAML Frontmatter από Vercel Blob: Επιτυχής.
- Εμφάνιση τίτλου και υποτίτλου στο localhost: Επιτυχής.
- Εμφάνιση Markdown χωρίς τα YAML metadata: Επιτυχής.

Ο τελικός έλεγχος στο production εκκρεμεί μέχρι το επόμενο deployment.

### Τεχνικές πηγές

- [Vercel Blob — SDK](https://vercel.com/docs/vercel-blob/using-blob-sdk)
- [Next.js — Route Segment Config](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
- [gray-matter — Official Documentation](https://github.com/jonschlinkert/gray-matter#readme)
  - Ενότητες: Usage, Returned object, API.
- [Obsidian — Properties](https://help.obsidian.md/properties)
  - Ενότητες: Add a property, Property types, Text.

## Τεχνικές πηγές

### Next.js — Dynamic Route Segments

[Next.js — Dynamic Route Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)

**Ενότητες:** Convention, TypeScript.

### Next.js — notFound()

[Next.js — notFound()](https://nextjs.org/docs/app/api-reference/functions/not-found)

**Ενότητα:** notFound().

### Node.js — fsPromises.readFile()

[Node.js — fsPromises.readFile()](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options)

**Ενότητα:** fsPromises.readFile(path[, options]).

### Node.js — Errors

[Node.js — Errors](https://nodejs.org/api/errors.html)

**Ενότητες:** SystemError, error.code.

### react-markdown

[react-markdown — Documentation](https://github.com/remarkjs/react-markdown#readme)

**Ενότητα:** Use.

### remark-math και rehype-katex

https://github.com/remarkjs/remark-math

### KaTeX

https://katex.org/docs/browser.html

### npm — Overrides

https://docs.npmjs.com/cli/configuring-npm/package-json#overrides

### npm — Security Audit

https://docs.npmjs.com/cli/commands/npm-audit/

### Node.js — process.cwd()

https://nodejs.org/api/process.html#processcwd

**Ενότητα:** process.cwd().

## Πλοήγηση επιστροφής

Η δυναμική σελίδα δοκιμίου εισάγει το `Link` του Next.js και συνδέεται με την κατηγορία που προκύπτει από το επικυρωμένο route parameter: `/essays/learning` ή `/essays/philosophy`. Η ετικέτα προσαρμόζεται στην κατηγορία για να περιγράφει με σαφήνεια τον προορισμό.

## Υποστήριξη Markdown Tables - 25/11/2026

Η δυναμική διαδρομή `/essays/[category]/[slug]` υποστηρίζει πλέον πίνακες GFM.

### Υλοποίηση

Στο `app/essays/[category]/[slug]/page.tsx`:

- `remark-gfm`: Επεκτείνει την αναγνώριση Markdown ώστε να υποστηρίζονται GFM πίνακες.
- `remarkPlugins`: Περιλαμβάνει τα `remarkMath` και `remarkGfm`, διατηρώντας την υποστήριξη μαθηματικών εκφράσεων.
- `components`: Προσαρμόζει την απόδοση του HTML στοιχείου `table`.
- `children`: Διατηρεί το περιεχόμενο του πίνακα.
- `essay-table-scroll`: CSS class του container που περιβάλλει κάθε πίνακα.

Ο custom renderer τοποθετεί κάθε `table` μέσα σε ένα `div`, επιτρέποντας ανεξάρτητη οριζόντια κύλιση σε μικρές οθόνες.

Η μορφοποίηση υλοποιείται στο `app/globals.css` και περιγράφεται στο `docs/code/globals-css.md`.

### Επαλήθευση

- Αναγνώριση GFM πίνακα: Επιτυχής.
- Light και Dark Mode: Επιτυχής οπτικός έλεγχος.
- Responsive scrolling στα 320px: Επιτυχής πρακτική δοκιμή.
- `npm run lint`: Επιτυχής.
- `npm run typecheck`: Επιτυχής.
- `npm run test`: 18 επιτυχημένα tests.
- `npm run build`: Επιτυχές production build.

Τα automated tests δεν περιλαμβάνουν ακόμη ειδικό regression test για την απόδοση των Markdown tables.

### Πηγές

- [react-markdown — Components](https://github.com/remarkjs/react-markdown#components)
- [remark-gfm — Official Documentation](https://github.com/remarkjs/remark-gfm)

## Υποστήριξη Markdown Blockquotes και Obsidian Callouts — 25/11/2026

Η δυναμική διαδρομή `/essays/[category]/[slug]` υποστηρίζει απλά Markdown Blockquotes και Obsidian Callouts.

### Blockquotes

Τα απλά Markdown Blockquotes χρησιμοποιούν τη σύνταξη `>`.

Το `react-markdown` τα μετατρέπει σε HTML στοιχεία `<blockquote>` χωρίς να απαιτείται πρόσθετο plugin.

Παράδειγμα:

> Αυτό είναι ένα απλό Markdown παράθεμα.

Η μορφοποίησή τους πραγματοποιείται στο `app/globals.css`.

### Obsidian Callouts

Εγκαταστάθηκε το plugin `rehype-callouts`, το οποίο επιτρέπει την απόδοση Obsidian-style Callouts στα Markdown δοκίμια.

Παράδειγμα σύνταξης:

    > [!note] Σημείωση
    > Αυτό είναι το περιεχόμενο του Callout.

### Ενσωμάτωση στο Markdown Rendering Pipeline

Στο `app/essays/[category]/[slug]/page.tsx`:

- `rehype-callouts`: Μετατρέπει τα Obsidian Callouts σε κατάλληλη HTML δομή.
- `rehypePlugins`: Περιλαμβάνει τα `rehypeKatex` και `rehypeCallouts`.
- `remarkPlugins`: Διατηρεί τα `remarkMath` και `remarkGfm`.
- `data-callout`: Προσδιορίζει τον τύπο κάθε Callout και επιτρέπει τη διαφοροποίησή του μέσω CSS.

Η τελική διαμόρφωση είναι:

    <Markdown
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex, rehypeCallouts]}
    >

Το υπάρχον custom renderer για τους GFM πίνακες διατηρείται στο `components` prop.

### Αναδιπλούμενα Callouts

Υποστηρίζονται οι συντάξεις:

- `[!note]-`: Αρχικά κλειστό Callout.
- `[!note]+`: Αρχικά ανοιχτό Callout.

Το plugin δημιουργεί HTML στοιχεία `<details>` και `<summary>`, επιτρέποντας την αναδίπλωση χωρίς πρόσθετη JavaScript.

### Εμφωλευμένα Callouts

Υποστηρίζονται Callouts μέσα σε άλλα Callouts, με διατήρηση της αντίστοιχης HTML ιεραρχίας.

Η εμφάνιση κάθε τύπου καθορίζεται από τους CSS κανόνες του `app/globals.css`.

### Συμβατότητα

Η προσθήκη του `rehype-callouts` δεν αντικαθιστά τα υπάρχοντα Markdown plugins.

Διατηρούνται:

- Τα απλά Blockquotes.
- Οι GFM πίνακες μέσω `remark-gfm`.
- Οι μαθηματικές εκφράσεις μέσω `remark-math` και `rehype-katex`.
- Η υπάρχουσα μορφοποίηση των Markdown δοκιμίων.

### Επαλήθευση

Πραγματοποιήθηκαν δοκιμές μετατροπής Markdown σε HTML για 17 τύπους Callouts.

Επιβεβαιώθηκαν:

- Η αναγνώριση των δοκιμασμένων τύπων Callouts.
- Η δημιουργία αρχικά ανοιχτών και κλειστών Callouts.
- Η σωστή εμφώλευση.
- Η διατήρηση των απλών Blockquotes.
- Η συνεργασία με GFM πίνακες και KaTeX.
- Η εμφάνιση των βασικών Callouts σε Light και Dark Mode.

Οι τεχνικοί έλεγχοι ολοκληρώθηκαν επιτυχώς:

- `npm run lint`: Επιτυχής.
- `npx tsc --noEmit`: Επιτυχής.
- `npm run build`: Επιτυχές production build.
- `npm run test`: 18 επιτυχημένα tests, 0 αποτυχίες.

Τα υπάρχοντα automated tests δεν περιλαμβάνουν ειδικά regression tests για τα Callouts.

### Πηγές

- [react-markdown — Official Documentation](https://github.com/remarkjs/react-markdown)
- [rehype-callouts — GitHub](https://github.com/lin-stephanie/rehype-callouts)
- [Obsidian Help — Callouts](https://help.obsidian.md/callouts)
- [MDN — Blockquote](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/blockquote)
- [MDN — Details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details)
