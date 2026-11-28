---
tags:
  - portfolio
  - dev
  - chakra
  - css
  - navigation
---

# Scroll Margin

Το scrollMarginTop ορίζει χώρο πριν από ένα στοιχείο κατά την αυτόματη κύλιση προς αυτό.

## Με απλά λόγια

Όταν πηγαίνω σε έναν τίτλο με link, αφήνω λίγο χώρο από πάνω για να μην τον σκεπάζει η σταθερή πλοήγηση.

## Χρήση

```tsx
<Heading id="my-journey" scrollMarginTop="6rem">
  Η διαδρομή μου
</Heading>
```

Το `id` είναι ο προορισμός. Το `scrollMarginTop` προσθέτει χώρο κατά την κύλιση προς αυτόν. Δεν δημιουργεί μόνιμο κενό στη διάταξη όπως το `marginTop`.

## Πηγή

- [Τεκμηρίωση — scroll margin](https://chakra-ui.com/docs/styling/style-props/interactivity#scroll-margin)
