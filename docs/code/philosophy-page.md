# `app/essays/philosophy/page.tsx`

## Σκοπός

Το αρχείο υλοποιεί τη σελίδα `/essays/philosophy`, η οποία παρουσιάζει τα προσωπικά μου φιλοσοφικά δοκίμια.

Κάθε καρτέλα αντιπροσωπεύει ένα μεμονωμένο δοκίμιο, χωρίς περιορισμό σε συγκεκριμένους φιλοσόφους ή υποκατηγορίες.

Τα δοκίμια ανακτώνται δυναμικά από το Vercel Blob, χωρίς να απαιτείται τροποποίηση του πηγαίου κώδικα ή νέο deployment για κάθε δημοσίευση.

## Υλοποίηση

Το React Server Component `PhilosophyPage()` περιλαμβάνει:

- `Container`: Περιορίζει το συνολικό πλάτος σε `6xl`.
- `Box`: Περιορίζει το πλάτος της εισαγωγής σε `3xl`.
- `Heading`: Εμφανίζει τον τίτλο της σελίδας και τους τίτλους των καρτελών.
- `Text`: Εμφανίζει τις εισαγωγικές παραγράφους και τους υποτίτλους των δοκιμίων.
- `Separator`: Διαχωρίζει την εισαγωγή από τα δοκίμια.
- `Link`: Συνδέει κάθε καρτέλα με τη σελίδα του αντίστοιχου δοκιμίου.
- `SimpleGrid`: Δημιουργεί responsive διάταξη:
  - Mobile: 1 στήλη.
  - Tablet: 2 στήλες.
  - Desktop: 3 στήλες.

## Δυναμικό Rendering

Η σελίδα χρησιμοποιεί:

```tsx
export const dynamic = "force-dynamic";
```

Η συγκεκριμένη ρύθμιση επιβάλλει τη δυναμική απόδοση της σελίδας στον server κατά την αίτηση του χρήστη, αντί της στατικής δημιουργίας της κατά το build.

## Ανάκτηση δοκιμίων

Επαναχρησιμοποίησα τη συνάρτηση `getPublishedEssays()` από το αρχείο `lib/essays.ts`, την οποία χρησιμοποιεί ήδη η σελίδα Learning.

```tsx
import { getPublishedEssays, getEssayMetadta } from "@/lib/essays";
```

Μετέτρεψα τη `PhilosophyPage()` σε asynchronous function, ώστε να μπορώ να χρησιμοποιήσω το `await`.

```tsx
export default async function PhilosophyPage() {
  const essays = await getPublishedEssays("philosophy");
```

Η συνάρτηση ανακτά τα Markdown αρχεία από το Vercel Blob με το prefix:

```text
essays/philosophy/
```

## Εξαγωγή και validation του slug

Για κάθε δοκίμιο χρησιμοποιώ τη `map()` και εξάγω το slug από το pathname του αρχείου.

```tsx
const slug = essay.pathname.split("/").pop()?.replace(/\.md$/, "");
```

- `split("/")`: Διαχωρίζει τα τμήματα του pathname.
- `pop()`: Επιστρέφει το τελευταίο στοιχείο, δηλαδή το όνομα του αρχείου.
- `replace()`: Αφαιρεί την κατάληξη `.md`.
- `?.`: Αποτρέπει την κλήση της `replace()` εάν το αποτέλεσμα της `pop()` είναι `undefined`.

Στη συνέχεια πραγματοποιείται validation του slug:

```tsx
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  return null;
}
```

Εάν το slug είναι κενό ή δεν ακολουθεί την επιτρεπόμενη μορφή, δεν δημιουργείται καρτέλα.

## Ανάκτηση μεταδεδομένων — YAML Frontmatter

Στις 22/11/2026 επέκτεινα τη λειτουργικότητα της σελίδας Philosophy, ώστε να υποστηρίζει τα YAML metadata των δημοσιευμένων δοκιμίων, όπως και η σελίδα Learning.

Επαναχρησιμοποίησα τη συνάρτηση `getEssayMetadata()` από το αρχείο `lib/essays.ts`.

```tsx
// Ανακτώ τα μεταδεδομένα όλων των δημοσιευμένων δοκιμίων.
const publishedEssays = await Promise.all(
  essays.map(async (essay) => ({
    ...essay,
    metadata: await getEssayMetadata(essay.pathname),
  })),
);
```

- `map()`: Μετασχηματίζει κάθε δοκίμιο σε ένα νέο αντικείμενο.
- `async`: Επιτρέπει την ασύγχρονη ανάκτηση των μεταδεδομένων.
- `...essay`: Διατηρεί τις υπάρχουσες ιδιότητες του αντικειμένου.
- `getEssayMetadata()`: Ανακτά και επεξεργάζεται τα YAML metadata του δοκιμίου.
- `Promise.all()`: Αναμένει την ολοκλήρωση όλων των ασύγχρονων λειτουργιών.

## Δυναμική δημιουργία καρτελών

Οι καρτέλες δημιουργούνται πλέον μέσα στο `SimpleGrid` μέσω της `publishedEssays.map()`.

Κάθε καρτέλα συνδέεται με το αντίστοιχο dynamic route:

```tsx
<Link key={essay.pathname} href={`/essays/philosophy/${slug}`}>
```

Ο τίτλος της καρτέλας προέρχεται από το YAML Frontmatter:

```tsx
<Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
  {essay.metadata?.title ?? slug}
</Heading>
```

Εάν δεν υπάρχει διαθέσιμος τίτλος στα metadata, χρησιμοποιείται το slug ως fallback.

Ο υπότιτλος εμφανίζεται μέσω conditional rendering:

```tsx
{
  essay.metadata?.subtitle && (
    <Text
      color="fg.muted"
      fontFamily="Georgia, serif"
      fontStyle="italic"
      lineHeight="tall"
      mt={4}
    >
      {essay.metadata.subtitle}
    </Text>
  );
}
```

Εάν δεν υπάρχει υπότιτλος, το αντίστοιχο `Text` component δεν αποδίδεται.

Με αυτόν τον τρόπο διατηρείται η ίδια αισθητική και λειτουργικότητα μεταξύ των κατηγοριών Learning και Philosophy.

## Design

- Georgia serif για τις εισαγωγικές παραγράφους.
- `fg.muted` για το δευτερεύον κείμενο.
- `border.subtle` για τα περιγράμματα.
- Responsive `fontSize`.
- Responsive διάταξη καρτελών μέσω `SimpleGrid`.
- Hover animation μέσω CSS transform και transition.

## Τρέχουσα κατάσταση — 22/11/2026

Η σελίδα υποστηρίζει τη δυναμική εμφάνιση δοκιμίων που είναι αποθηκευμένα στο Vercel Blob.

Οι τίτλοι και οι υπότιτλοι ανακτώνται πλέον από το YAML Frontmatter των Markdown αρχείων.

Η εισαγωγή και η αρχική αισθητική της σελίδας διατηρήθηκαν.

Οι κατηγορίες Learning και Philosophy χρησιμοποιούν κοινό μηχανισμό ανάκτησης δημοσιευμένων δοκιμίων και μεταδεδομένων μέσω του `lib/essays.ts`.

Η υποστήριξη YAML Frontmatter επιβεβαιώθηκε στο τοπικό περιβάλλον ανάπτυξης. Εκκρεμεί η επαλήθευση της νέας υλοποίησης στο production environment.

## Integration Test

Για να ελέγξω τη λειτουργία του μηχανισμού, δημιούργησα ένα προσωρινό Markdown αρχείο εκτός του repository και το ανέβασα χειροκίνητα μέσω του Vercel Dashboard.

Pathname:

```text
essays/philosophy/blob-test-essay.md
```

Content-Type:

```text
text/markdown
```

Η δοκιμή πραγματοποιήθηκε στο τοπικό development environment.

Επιβεβαιώθηκαν:

- Η ανάκτηση του αρχείου από το Vercel Blob.
- Η δυναμική δημιουργία της καρτέλας.
- Η πλοήγηση προς το αντίστοιχο dynamic route.
- Η ανάγνωση του Markdown περιεχομένου.
- Η απόδοση επικεφαλίδων, παραγράφων, έντονου και πλάγιου κειμένου.
- Η εμφάνιση στοιχείων λίστας, με εκκρεμότητα στο styling των bullets.

## Integration Test — YAML Frontmatter (22/11/2026)

Δημιούργησα ένα προσωρινό δοκίμιο στο Obsidian με τα ακόλουθα μεταδεδομένα:

```yaml
---
title: "Δοκιμή φιλοσοφικού δοκιμίου"
subtitle: "Έλεγχος υποστήριξης YAML Frontmatter"
---
```

Το αρχείο ανέβηκε χειροκίνητα στο Vercel Blob με pathname:

```text
essays/philosophy/dokimi.md
```

Στο τοπικό development environment επιβεβαιώθηκαν:

- Η ανάκτηση του δοκιμίου από το Vercel Blob.
- Η ανάγνωση των YAML metadata.
- Η εμφάνιση του πραγματικού τίτλου αντί του slug στην καρτέλα.
- Η εμφάνιση του υποτίτλου με πλάγια γραφή.
- Η πλοήγηση προς το αντίστοιχο dynamic route.
- Η σωστή απόδοση του Markdown περιεχομένου.
- Ο διαχωρισμός των μεταδεδομένων από το κυρίως περιεχόμενο.

Οι έλεγχοι `git diff --check`, `npm run lint` και `npx tsc --noEmit` ολοκληρώθηκαν επιτυχώς.

## Debugging — OIDC Credentials

Κατά την αρχική δοκιμή εμφανίστηκε το ακόλουθο σφάλμα:

```text
Vercel Blob: No blob credentials found.
```

Το σφάλμα εμφανίστηκε κατά την εκτέλεση της `list()` μέσα στη `getPublishedEssays()`.

Για την επίλυσή του ανανέωσα τις τοπικές μεταβλητές περιβάλλοντος με την εντολή:

```bash
npx vercel env pull .env.local
```

Το `VERCEL_OIDC_TOKEN` ανανεώθηκε και στη συνέχεια επανεκκίνησα τον development server.

Η ανάκτηση των δοκιμίων ολοκληρώθηκε επιτυχώς, χωρίς να χρειαστεί αλλαγή στον πηγαίο κώδικα.

## Έλεγχος

Οι ακόλουθοι έλεγχοι ολοκληρώθηκαν επιτυχώς:

- `npm run lint`: Χωρίς σφάλματα ή προειδοποιήσεις.
- `npx tsc --noEmit`: Χωρίς σφάλματα.
- `npm run build`: Επιτυχές production build.
- Vercel Blob integration test: Επιτυχής στο τοπικό περιβάλλον.

Το production build επιβεβαίωσε ότι η σελίδα χρησιμοποιεί dynamic rendering:

```text
ƒ /essays/philosophy
```

## Επόμενα βήματα

- [x] Δυναμική δημιουργία καρτελών από δημοσιευμένα δοκίμια.
- [x] Σύνδεση κάθε καρτέλας με τη σελίδα του δοκιμίου.
- [x] Δοκιμή ανάκτησης δοκιμίων από το Vercel Blob.
- [x] Υποστήριξη YAML Frontmatter.
- [x] Εμφάνιση πραγματικών τίτλων και υποτίτλων.
- [x] Λειτουργικός έλεγχος στο localhost.
- [ ] Επαλήθευση της νέας υλοποίησης στο production environment.
- [ ] Αφαίρεση των προσωρινών δοκιμαστικών αρχείων.
- [ ] Υλοποίηση ασφαλούς μηχανισμού δημοσίευσης μέσω της σελίδας `/admin`.
- [ ] Βελτίωση του styling των Markdown λιστών.

## Πηγές

- [Next.js — Dynamic Route Segments](https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes)
- [Vercel Blob — Documentation](https://vercel.com/docs/vercel-blob)
- [gray-matter — Official Repository](https://github.com/jonschlinkert/gray-matter)
- [Obsidian — Properties](https://help.obsidian.md/properties)
- [MDN — Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [MDN — Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [React — Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Chakra UI — SimpleGrid](https://chakra-ui.com/docs/components/simple-grid)
