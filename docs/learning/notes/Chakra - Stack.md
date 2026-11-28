---
tags:
  - portfolio
  - dev
  - chakra
  - layout
---

# Stack

Το Stack οργανώνει τα άμεσα παιδιά με σταθερή απόσταση. Το HStack χρησιμοποιείται για οριζόντια διάταξη.

## Με απλά λόγια

Το Stack βάζει τα στοιχεία το ένα κάτω από το άλλο. Το gap είναι το κενό ανάμεσα στα δικά του παιδιά. Ένα εσωτερικό Stack κανονίζει χωριστά τα δικά του κενά.

## Χρήση

```tsx
<Stack gap={5} align="flex-start">
  <Heading>Projects</Heading>
  <Stack gap={2}>
    <Heading as="h3">Το προσωπικό μου Portfolio</Heading>
    <Text>Σε εξέλιξη...</Text>
  </Stack>
</Stack>
```

Το εξωτερικό `gap={5}` χωρίζει το Heading από το εσωτερικό Stack. Το εσωτερικό `gap={2}` χωρίζει τον τίτλο του portfolio από το κείμενο. Το `gap` δεν κληρονομείται.

Το `HStack` οργανώνει τα παιδιά οριζόντια. Το `align="flex-start"` ευθυγραμμίζει τα παιδιά στην αρχή του εγκάρσιου άξονα.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/components/stack)
