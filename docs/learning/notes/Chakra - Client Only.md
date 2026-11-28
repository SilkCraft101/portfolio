---
tags:
  - portfolio
  - dev
  - chakra
  - react
  - hydration
---

# Client Only

Το ClientOnly εμφανίζει το περιεχόμενο όταν είναι έτοιμο στον client και επιτρέπει προσωρινό fallback.

## Με απλά λόγια

Κάποιο περιεχόμενο πρέπει να περιμένει μέχρι να είναι έτοιμος ο browser. Στο μεταξύ μπορώ να δείξω μια προσωρινή θέση.

## Χρήση

```tsx
<ClientOnly fallback={<Skeleton boxSize="9" />}>
  {() => <BrowserPreference />}
</ClientOnly>
```

Το `fallback` εμφανίζεται μέχρι να γίνει mount στον client. Μετά καλείται η συνάρτηση που αποδίδει το ενδεικτικό `BrowserPreference`. Στο `components/ui/color-mode.tsx`, ο ίδιος ο `ColorModeButton` περιλαμβάνει ήδη `ClientOnly`. Το `Skeleton` εμφανίζεται στη θέση του `IconButton` ώσπου να γίνει mount.

Χρήσιμο όταν η εμφάνιση εξαρτάται από πληροφορία του browser, όπως το αρχικό θέμα. Δεν διορθώνει οποιοδήποτε JavaScript σφάλμα.

## Πηγή

- [Τεκμηρίωση](https://chakra-ui.com/docs/components/client-only)
