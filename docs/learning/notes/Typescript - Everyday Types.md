---
tags:
  - portfolio
  - dev
  - typescript
  - types
---

# Everyday Types

Ένα type alias δίνει όνομα σε έναν τύπο. Ένα interface περιγράφει κυρίως σχήματα αντικειμένων. Τα unions εκφράζουν εναλλακτικές και οι assertions δηλώνουν στον compiler πώς να αντιμετωπίσει μια τιμή.

## Με απλά λόγια

Το type δίνει όνομα σε έναν τύπο δεδομένων. Δεν αποθηκεύει μια πραγματική τιμή όπως μια μεταβλητή.

## Χρήση

```ts
import type { ThemeProviderProps } from "next-themes";

type Point = {
  x: number;
  y: number;
};

type ColorMode = "light" | "dark";
export type ColorModeProviderProps = ThemeProviderProps;
```

Το `Point` περιγράφει αντικείμενο με δύο αριθμούς. Το `ColorMode` επιτρέπει δύο συγκεκριμένες τιμές. Στην τελευταία γραμμή δίνω νέο όνομα στον ήδη υπάρχοντα τύπο `ThemeProviderProps`.

Το alias γράφεται με `=`. Τα interfaces περιγράφουν επίσης σχήματα αντικειμένων και μπορούν να επεκταθούν με `extends`. Το `as ColorMode` είναι assertion: δεν μετατρέπει ούτε ελέγχει την πραγματική τιμή κατά την εκτέλεση.

## Οι τύποι της gallery

```ts
type Painting = {
  asset_id: string;
  secure_url: string;
  width: number;
  height: number;
};

type PaintingSearchResult = {
  resources: Painting[];
  next_cursor?: string;
};
```

Το `Painting` περιγράφει μία εγγραφή. Το `Painting[]` είναι πίνακας τέτοιων εγγραφών. Το `?` λέει ότι το next_cursor μπορεί να απουσιάζει. Το `string | undefined` για τη μεταβλητή cursor επιτρέπει είτε κείμενο είτε απουσία τιμής.

Στην πηγή το Point περιγράφει συντεταγμένες. Εδώ περιγράφω τα πεδία εικόνας που χρησιμοποιεί το project. Ο τρόπος δήλωσης τύπου είναι ίδιος. Αυτοί οι τύποι δεν ελέγχουν αυτόματα την απάντηση του Cloudinary κατά την εκτέλεση.

Από το **Everyday Types** χρειάζομαι **Arrays**, **Object Types**, **Optional Properties**, **Union Types**, **Type Aliases**.

## Πηγή

- [Τεκμηρίωση](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Τεκμηρίωση — type aliases](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases)
