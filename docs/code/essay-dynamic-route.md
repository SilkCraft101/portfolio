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

## Αποτέλεσμα

Επιβεβαιώθηκε στον browser η επιτυχής εμφάνιση του `content/essays/philosophy/test-essay.md` μέσω του `/essays/philosophy/test-essay`.

Επιβεβαιώθηκε επίσης η εμφάνιση 404 όταν το ζητούμενο αρχείο δεν υπήρχε.

## Έλεγχοι — 18/11/2026

- `npm run lint`: Επιτυχής.
- `npx tsc --noEmit`: Επιτυχής.
- `npm run build`: Επιτυχές production build με Next.js 16.4.6.
- `npm audit --omit=dev`: 0 vulnerabilities.
- `npm audit`: 14 High vulnerabilities στις εξαρτήσεις ανάπτυξης.

Δεν εφαρμόστηκε αυτόματη διόρθωση εξαρτήσεων, καθώς δεν επιβεβαιώθηκε κατάλληλη λύση χωρίς δυνητικά προβληματικές αλλαγές.

## Εκκρεμότητες

- Πρόσθετοι έλεγχοι Validation και Error Handling.
- Styling του Markdown περιεχομένου.
- Σύνδεση των δοκιμίων με τις σελίδες κατηγοριών.

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
