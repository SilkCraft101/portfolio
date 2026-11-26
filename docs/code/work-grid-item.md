# `components/work-grid-item.tsx`

## Ρόλος του αρχείου

Το `WorkGridItem` είναι ένα επαναχρησιμοποιήσιμο React component για την παρουσίαση τεχνικών projects στη σελίδα `/works`.

Κάθε κάρτα περιλαμβάνει:

- Εικόνα προεπισκόπησης.
- Τίτλο του project.
- Σύντομη περιγραφή.
- Σύνδεσμο προς την αντίστοιχη σελίδα.

Το component βασίζεται στο `WorkGridItem` του devaslife, με προσαρμογές για Next.js App Router, TypeScript και Chakra UI.

Αρχική υλοποίηση:

[craftzdog-homepage — grid-item.js](https://github.com/craftzdog/craftzdog-homepage/blob/master/components/grid-item.js)

## Εισαγωγές και export

Το αρχείο χρησιμοποιεί:

- `ReactNode` από το React για τον τύπο του περιεχομένου.
- `Box` και `Text` από το Chakra UI για τη δομή και το styling.
- `Link` από το Next.js για την πλοήγηση.
- `Image` από το Next.js για την εικόνα προεπισκόπησης.

Το component εξάγεται ως named export:

```tsx
export function WorkGridItem(...)
```

## TypeScript Props

Τα props ορίζονται μέσω του type `WorkGridItemProps`.

```tsx
type WorkGridItemProps = {
  id: string;
  title: string;
  thumbnail: string;
  children: ReactNode;
};
```

### `id`

Αναγνωριστικό του project.

Χρησιμοποιείται για τη δημιουργία της διαδρομής `/works/${id}`.

### `title`

Ο τίτλος του project.

Εμφανίζεται στην κάρτα και χρησιμοποιείται ως εναλλακτικό κείμενο της εικόνας.

### `thumbnail`

Η διαδρομή ή το URL της εικόνας προεπισκόπησης.

Μεταβιβάζεται στο `src` του Next.js `Image`.

### `children`

Το περιεχόμενο που τοποθετείται ανάμεσα στα opening και closing tags του component.

Χρησιμοποιείται για τη σύντομη περιγραφή του project.

Ο τύπος `ReactNode` επιτρέπει την αποδοχή περιεχομένου που μπορεί να αποδώσει το React.

## Δομή της κάρτας

Το εξωτερικό `Box` χρησιμοποιεί Flexbox με κατακόρυφη διάταξη:

```tsx
display = "flex";
flexDirection = "column";
```

Το `textAlign="center"` στοιχίζει το κείμενο στο κέντρο.

Το `gap={3}` καθορίζει την απόσταση ανάμεσα στα άμεσα παιδιά του εξωτερικού `Box`.

Στο εσωτερικό του βρίσκεται ένα `Link` που περιλαμβάνει την εικόνα, τον τίτλο και την περιγραφή.

Έτσι, ολόκληρο το περιεχόμενο της κάρτας λειτουργεί ως σύνδεσμος.

## Πλοήγηση

Η πλοήγηση υλοποιείται με το `Link` του Next.js:

```tsx
<Link href={`/works/${id}`}>
```

Η τιμή του `id` καθορίζει τον προορισμό.

Για παράδειγμα, όταν `id="portfolio"`, η κάρτα οδηγεί στο:

`/works/portfolio`

Η χρήση του `Link` επιτρέπει client-side navigation μεταξύ των διαδρομών του Next.js.

## Εικόνα προεπισκόπησης

Η εικόνα εμφανίζεται με το `Image` του Next.js.

```tsx
<Image
  src={thumbnail}
  alt={title}
  width={400}
  height={240}
  style={{
    width: "100%",
    aspectRatio: "1 / 1",
    objectFit: "cover",
    transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
  }}
/>
```

Το `width` και το `height` παρέχουν διαστάσεις στο component.

Το CSS `aspectRatio: "1 / 1"` καθορίζει τετράγωνη αναλογία εμφάνισης.

Το `objectFit: "cover"` επιτρέπει στην εικόνα να καλύπτει το διαθέσιμο πλαίσιο, περικόπτοντας τμήμα της όταν χρειάζεται.

Το `alt={title}` παρέχει εναλλακτικό κείμενο.

### Περιορισμός της εικόνας

Η εικόνα περιβάλλεται από:

```tsx
<Box overflow="hidden" borderRadius="md">
```

Το `overflow="hidden"` εμποδίζει την εικόνα να ξεπεράσει τα όρια του πλαισίου όταν μεγεθύνεται.

Το `borderRadius="md"` δημιουργεί στρογγυλεμένες γωνίες.

## Hover Animations

Η κάρτα χρησιμοποιεί δύο διακριτικά animations.

### Μετακίνηση κάρτας

Το εξωτερικό `Box` ορίζει:

```tsx
transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
_hover={{
  transform: "translateY(-3px)",
}}
```

Όταν ο δείκτης βρίσκεται πάνω στην κάρτα, αυτή μετακινείται κατακόρυφα κατά 3 pixels.

Το `transition` καθορίζει τη διάρκεια και την καμπύλη επιτάχυνσης της κίνησης.

### Μεγέθυνση εικόνας

Η μεγέθυνση εφαρμόζεται μέσω CSS selector:

```tsx
css={{
  "&:hover img": {
    transform: "scale(1.03)",
  },
}}
```

Όταν γίνεται hover στο εξωτερικό `Box`, η εικόνα μεγεθύνεται κατά 3%.

Ο συνδυασμός του `scale(1.03)` με το `overflow="hidden"` διατηρεί την εικόνα μέσα στα όρια της κάρτας.

## Προσβασιμότητα

### Πλοήγηση με πληκτρολόγιο

Το Next.js `Link` αποδίδει έναν κανονικό HTML σύνδεσμο, ο οποίος μπορεί να λάβει keyboard focus.

Το εξωτερικό `Box` χρησιμοποιεί:

```tsx
_focusWithin={{
  outline: "2px solid",
  outlineColor: "colorPalette.focusRing",
  outlineOffset: "4px",
  borderRadius: "md",
}}
```

Το `_focusWithin` ενεργοποιείται όταν ένα στοιχείο μέσα στην κάρτα αποκτά focus.

Έτσι, η κάρτα αποκτά ορατό περίγραμμα κατά την πλοήγηση με πληκτρολόγιο.

### Reduced Motion

Το component υποστηρίζει την προτίμηση `prefers-reduced-motion`.

```tsx
"@media (prefers-reduced-motion: reduce)": {
  transition: "none",

  "&:hover": {
    transform: "none",
  },

  "& img": {
    transition: "none",
  },

  "&:hover img": {
    transform: "none",
  },
}
```

Όταν ο χρήστης έχει ενεργοποιήσει τη σχετική προτίμηση στο λειτουργικό σύστημα, απενεργοποιούνται οι μεταβάσεις και οι μετασχηματισμοί hover της κάρτας και της εικόνας.

Αυτό περιορίζει την περιττή κίνηση και βελτιώνει την προσβασιμότητα.

## Παράδειγμα χρήσης

Στο `app/works/page.tsx` χρησιμοποιείται:

```tsx
<WorkGridItem
  id="portfolio"
  title="Προσωπικό Portfolio"
  thumbnail={portfolioPreview.src}
>
  Το προσωπικό μου Portfolio, κατασκευασμένο με Next.js, TypeScript και Chakra
  UI.
</WorkGridItem>
```

Το παράδειγμα δείχνει πώς το ίδιο component μπορεί να χρησιμοποιηθεί για διαφορετικά projects, αλλάζοντας μόνο τα props και την περιγραφή.

## Τεχνικές αποφάσεις

Η δημιουργία ξεχωριστού component επιτρέπει:

- Κοινή εμφάνιση των καρτών.
- Αποφυγή επανάληψης του ίδιου JSX.
- Κεντρική διαχείριση των hover effects.
- Κεντρική εφαρμογή των κανόνων προσβασιμότητας.
- Ευκολότερη προσθήκη νέων projects.

Το `WorkGridItem` αναλαμβάνει την παρουσίαση μιας κάρτας, ενώ το `app/works/page.tsx` αναλαμβάνει τη συνολική διάταξη του καταλόγου.

## Πηγές

### Αρχική έμπνευση

[devaslife — WorkGridItem](https://github.com/craftzdog/craftzdog-homepage/blob/master/components/grid-item.js)

Χρήση: Αφετηρία για τον σχεδιασμό της κάρτας.

### React — ReactNode

[React TypeScript Cheatsheet — ReactNode](https://react-typescript-cheatsheet.netlify.app/docs/react-types/reactnode/)

Χρήση: Τυποποίηση του περιεχομένου `children`.

### Next.js — Link

[Link Component](https://nextjs.org/docs/app/api-reference/components/link)

Χρήση: Πλοήγηση προς τις σελίδες των projects.

### Next.js — Image

[Image Component](https://nextjs.org/docs/app/api-reference/components/image)

Χρήση: Εμφάνιση εικόνων προεπισκόπησης.

### Chakra UI — Box

[Box](https://chakra-ui.com/docs/components/box)

Χρήση: Δομή και styling της κάρτας.

### Chakra UI — Conditional Styles

[Conditional Styles](https://chakra-ui.com/docs/styling/conditional-styles)

Χρήση: `_hover` και `_focusWithin`.

### MDN — CSS Transforms

[transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

Χρήση: `translateY()` και `scale()`.

### MDN — Reduced Motion

[prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

Χρήση: Προσαρμογή των animations στις προτιμήσεις του χρήστη.
