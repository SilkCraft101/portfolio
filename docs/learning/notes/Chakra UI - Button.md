---
tags:
  - portfolio
  - frontend
  - react
  - nextjs
  - chakra
  - components
---

# Button

Στο `components/hero.tsx`, το «My Portfolio» ανοίγει το `/works`. Με το `asChild` η εμφάνιση του Chakra Button εφαρμόζεται στο Next.js Link.

## Ο σύνδεσμος για το Works

```tsx
import { Button } from "@chakra-ui/react";
import Link from "next/link";

<Button asChild variant="outline" rounded="full">
	<Link href="/works">My Portfolio</Link>
</Button>
```

## Ανάλυση

- `Button`: Παρέχει την εμφάνιση.
- `asChild`: Χρησιμοποιεί το child ως υποκείμενο στοιχείο.
- `Link`: Παρέχει τη σημασιολογία συνδέσμου.
- `href`: Καθορίζει τον προορισμό.
- `variant="outline"`: Εμφανίζει περίγραμμα.
- `rounded="full"`: Δημιουργεί έντονα στρογγυλεμένες γωνίες.

Το αποτέλεσμα είναι ένας πραγματικός σύνδεσμος με εμφάνιση κουμπιού. Δεν απαιτείται `onClick`.

## Όταν θέλω κουμπί για ενέργεια

```tsx
<Button size="md" variant="outline" colorPalette="orange">
  Συνέχεια
</Button>
```

Το `size` ορίζει το μέγεθος, το `variant` την εμφάνιση και το `colorPalette` την παλέτα. Το `disabled` ενός HTML button εμποδίζει την ενεργοποίησή του. Για σύνδεσμο, η οπτική εμφάνιση απενεργοποίησης από μόνη της αφήνει το `href` ενεργό.

- [Chakra - Composition](Chakra%20-%20Composition.md)
- [Chakra UI — Button](https://chakra-ui.com/docs/components/button)
- [Next.js — Link](https://nextjs.org/docs/app/api-reference/components/link)
