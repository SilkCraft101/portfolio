---
tags:
  - portfolio
  - dev
  - nextjs
  - react
  - architecture
---

# Server και Client Components

Τα Server Components εκτελούνται στον server. Τα Client Components επιτρέπουν διαδραστικότητα και browser APIs. Το "use client" δηλώνει όριο του client component tree.

## Με απλά λόγια

Κάποια δουλειά γίνεται στον server και κάποια χρειάζεται τον browser. Κρατάω τις λειτουργίες κάθε πλευράς εκεί που μπορούν να εκτελεστούν.

## Χρήση

```tsx
"use client";

export function ExampleButton() {
  return <button onClick={() => console.log("Πατήθηκε")}>Πάτησέ με</button>;
}
```

Το `"use client"` δηλώνει όριο για κώδικα που συμμετέχει στη διαδραστική πλευρά του React. Το `onClick` εκτελείται όταν ο χρήστης πατήσει το κουμπί.

Ένα Client Component μπορεί να συμμετέχει και στην παραγωγή αρχικού HTML στον server. Το `"use client"` δεν σημαίνει «μόνο browser από την πρώτη στιγμή». Μυστικά API credentials μένουν στην πλευρά του server.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/getting-started/server-and-client-components)
