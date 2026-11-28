---
tags:
  - portfolio
  - dev
  - react
  - refs
---

# forwardRef

Το forwardRef επιτρέπει σε component να παραλάβει ref και να το προωθήσει σε εσωτερικό στοιχείο.

## Με απλά λόγια

Το ref επιτρέπει να δείξω σε ένα πραγματικό στοιχείο. Το forwardRef περνά αυτή την αναφορά μέσα από ένα δικό μου component.

## Χρήση

```tsx
import * as React from "react";

const Button = React.forwardRef<HTMLButtonElement, { label: string }>(
  function Button({ label }, ref) {
    return <button ref={ref}>{label}</button>;
  },
);
```

Το `HTMLButtonElement` περιγράφει το στοιχείο της αναφοράς. Το δεύτερο όρισμα `ref` δίνεται στο εσωτερικό button. Έτσι η αναφορά φτάνει στο πραγματικό στοιχείο.

Αυτή είναι η μορφή των υπαρχόντων snippets. Στο React 19 το ref μπορεί να περάσει ως prop και το `forwardRef` δεν απαιτείται για νέα components.

## Πηγή

- [Τεκμηρίωση](https://react.dev/reference/react/forwardRef)
