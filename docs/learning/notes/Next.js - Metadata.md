---
tags:
  - portfolio
  - dev
  - nextjs
  - metadata
---

# Metadata

Το metadata object περιγράφει τη σελίδα με στοιχεία όπως title και description. Ο τύπος Metadata βοηθά στον έλεγχο των πεδίων.

## Με απλά λόγια

Τα metadata είναι πληροφορίες για τη σελίδα. Ο τίτλος της καρτέλας του browser είναι διαφορετικός από τον τίτλο που βλέπω μέσα στο κείμενο.

## Χρήση

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alex Kotsolakis | Portfolio",
  description: "Το προσωπικό μου portfolio",
};
```

Το `title` δίνει τον τίτλο του εγγράφου. Το `description` δίνει την περιγραφή του. Το `: Metadata` ελέγχει τους τύπους των πεδίων. Στο `app/layout.tsx`, το `title.default` δίνει τον προεπιλεγμένο τίτλο. Το `title.template` προσθέτει το όνομα στο τέλος του τίτλου μιας υποσελίδας. Για παράδειγμα, το `title: "Works"` στο `app/works/page.tsx` δίνει τίτλο καρτέλας `Works | Alex Kotsolakis`. Ο ορατός τίτλος της σελίδας ορίζεται χωριστά στο JSX.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
