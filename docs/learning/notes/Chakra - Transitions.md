---
tags:
  - portfolio
  - dev
  - chakra
  - css
  - styling
---

# Transitions

Το transition περιγράφει ποια CSS ιδιότητα αλλάζει σταδιακά, τη διάρκεια και την καμπύλη της αλλαγής.

## Με απλά λόγια

Το χρώμα δεν αλλάζει απότομα. Του δίνω λίγο χρόνο για να περάσει από την παλιά τιμή στη νέα.

## Χρήση

```tsx
<Text
  _hover={{ color: "accent" }}
  transition="color 0.2s ease"
>
  About
</Text>
```

Το `_hover` ορίζει την αλλαγή όταν ο δείκτης βρίσκεται πάνω στο στοιχείο. Το `color` στο `transition` είναι η CSS ιδιότητα που αλλάζει. Το `0.2s` είναι η διάρκεια και το `ease` ο ρυθμός μετάβασης. Δεν γράφω `accent` στη θέση της ιδιότητας.

## Πηγή

- [Τεκμηρίωση — transition](https://chakra-ui.com/docs/styling/style-props/transitions#transition)
- [Τεκμηρίωση](https://chakra-ui.com/docs/styling/style-props/transitions)

**Κύρια ανάγνωση για τον μηχανισμό CSS**

[CSS - Transitions](CSS%20-%20Transitions.md). Εδώ εστιάζω στα Chakra style props.
