---
tags:
  - portfolio
  - dev
  - react
  - jsx
---

# Προώθηση props με spread

Η σύνταξη `{...object}` περνά τα πεδία ενός αντικειμένου ως props στο component.

## Με απλά λόγια

Γράφω τις κοινές επιλογές μία φορά σε αντικείμενο και μετά τις δίνω στα components που τις χρειάζονται.

## Χρήση

```tsx
const navLinkStyles = {
  _hover: { color: "linkHover" },
  transition: "color 0.2s ease",
};

function ExampleLabels() {
  return (
    <>
      <Text {...navLinkStyles}>Works</Text>
      <Text {...navLinkStyles}>About</Text>
    </>
  );
}
```

Το `{...navLinkStyles}` μεταφέρει τα πεδία του αντικειμένου ως props. Αν γράψω το ίδιο prop ξανά πιο μετά, η μεταγενέστερη τιμή υπερισχύει. Το spread αφορά μόνο τα στοιχεία στα οποία το πρόσθεσα.

## Πηγή

- [Τεκμηρίωση — forwarding props with the jsx spread syntax](https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax)
