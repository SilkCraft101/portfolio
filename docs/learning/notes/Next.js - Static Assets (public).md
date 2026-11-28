---
tags:
  - portfolio
  - nextjs
  - static-assets
  - images
---
# Τι είναι ο φάκελος `public`;

Ο φάκελος `public` του Next.js χρησιμοποιείται για στατικά αρχεία, όπως εικόνες και εικονίδια. Βρίσκεται στη ρίζα του project και τα αρχεία του είναι προσβάσιμα μέσω URL.

## Με απλά λόγια

Το `public` είναι ένας φάκελος με αρχεία που το website μπορεί να προσφέρει απευθείας στον επισκέπτη.

Αν τοποθετήσω μια εικόνα εκεί, μπορώ να τη χρησιμοποιήσω στην εφαρμογή χωρίς να δημιουργήσω ξεχωριστή διαδρομή ή API.

Το όνομα `public` δεν εμφανίζεται στο URL της εικόνας.

## Χρήση

Για το Portfolio αποθηκεύω την εικόνα προεπισκόπησης στη διαδρομή:

```
public/images/portfolio-preview.png
```

Η εικόνα γίνεται προσβάσιμη μέσω:

````text
/images/portfolio-preview.png
````

Μπορώ να τη χρησιμοποιήσω με το Next.js `Image`:

```tsx
<Image
  src="/images/portfolio-preview.png"
  alt="Προεπισκόπηση της αρχικής σελίδας του Portfolio"
  width={1254}
  height={1254}
/>
```

Το `src` ξεκινά από `/images/` και όχι από `/public/images/`.

Τα `width` και `height` πρέπει να αντιστοιχούν στις πραγματικές διαστάσεις της εικόνας ή στην ίδια αναλογία. Η συγκεκριμένη εικόνα έχει διαστάσεις 1254 × 1254 pixel. Το `lib/projects.ts` εισάγει την εικόνα και αποθηκεύει το `portfolioPreview.src` ως `thumbnail`. Το `app/works/page.tsx` περνά αυτό το πεδίο στο `WorkGridItem`. Το μοντέλο `public/models/lantern-moth.glb` έχει διαθέσιμο URL `/models/lantern-moth.glb`, αλλά η παρουσία του στον φάκελο δεν το εμφανίζει σε κάποια σελίδα.

Ο φάκελος `public` πρέπει να βρίσκεται στη ρίζα του project, όχι μέσα στο `app/`.

Τα αρχεία του είναι δημόσια προσβάσιμα, επομένως δεν αποθηκεύω εκεί credentials ή άλλα εμπιστευτικά δεδομένα.

## Πηγή

- [Τεκμηρίωση — Public Folder](https://nextjs.org/docs/app/api-reference/file-conventions/public-folder)
