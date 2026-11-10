# `components/ui/color-mode.tsx`

## Ρόλος του αρχείου

Το αρχείο συγκεντρώνει τον Provider, τα hooks και τα components για το φωτεινό και το σκοτεινό θέμα. Ξεκίνησε από το επίσημο snippet του Chakra και χρησιμοποιεί το `next-themes`.

Η δήλωση `"use client"` επιτρέπει τη χρήση των hooks και της διαδραστικής λογικής του θέματος.

## Εισαγωγές

Το `ThemeProvider` και το `useTheme` προέρχονται από το `next-themes`.

Τα `ClientOnly`, `IconButton`, `Skeleton` και `Span` προέρχονται από το Chakra. Οι τύποι `IconButtonProps` και `SpanProps` περιγράφουν τα αντίστοιχα props.

Τα `LuMoon` και `LuSun` είναι εικονίδια από το `react-icons/lu`. Η εισαγωγή `* as React` επιτρέπει τη χρήση του `React.forwardRef`.

## `ColorModeProvider`

Το `ColorModeProviderProps` είναι type alias του `ThemeProviderProps`, ώστε να χρησιμοποιώ τοπικό όνομα για τον ίδιο τύπο.

Το `ColorModeProvider` αποδίδει το `ThemeProvider` με `attribute="class"`, ώστε το θέμα να εφαρμόζεται μέσω κλάσης στο `<html>`. Το `disableTransitionOnChange` περιορίζει τις μεταβάσεις CSS κατά την αλλαγή θέματος.

Με το `{...props}` προωθούνται τα props του component, μαζί με το `children`. Επειδή το spread βρίσκεται τελευταίο, μπορεί να αντικαταστήσει τις προηγούμενες τιμές αν περαστούν τα ίδια props.

## Τύποι του χρωματικού θέματος

Το `ColorMode` είναι union type που επιτρέπει τις τιμές `"light"` και `"dark"`.

Το `UseColorModeReturn` περιγράφει το αντικείμενο που επιστρέφει το hook: το ενεργό θέμα, τη function επιλογής θέματος και τη function εναλλαγής.

## `useColorMode`

Το hook καλεί το `useTheme` και παίρνει τα `resolvedTheme`, `setTheme` και `forcedTheme`.

Το `forcedTheme || resolvedTheme` δίνει προτεραιότητα στο αναγκαστικά επιλεγμένο θέμα, αν υπάρχει. Διαφορετικά χρησιμοποιείται το resolved theme.

Το `toggleColorMode` ελέγχει το `resolvedTheme` και ζητά το αντίθετο θέμα μέσω του `setTheme`. Το `setColorMode` που επιστρέφεται είναι η ίδια function `setTheme`, με διαφορετικό όνομα.

Το `colorMode as ColorMode` είναι type assertion. Δεν μετατρέπει ούτε ελέγχει την τιμή στο runtime. Πριν γίνει mount, το resolved theme μπορεί να μην είναι ακόμη διαθέσιμο.

## `useColorModeValue`

Το `<T>` επιτρέπει στη function να δέχεται τιμές ενός κοινού τύπου και να επιστρέφει μία από αυτές.

Αν το θέμα είναι `"dark"`, επιστρέφεται το δεύτερο argument. Διαφορετικά επιστρέφεται το πρώτο. Το hook δεν αλλάζει το θέμα.

## `ColorModeIcon`

Το component διαβάζει το θέμα μέσω του `useColorMode` και επιστρέφει το αντίστοιχο εικονίδιο με ternary expression.

Το φεγγάρι εμφανίζεται όταν το ενεργό θέμα είναι σκοτεινό και ο ήλιος στις υπόλοιπες περιπτώσεις. Επομένως το εικονίδιο δείχνει το ενεργό θέμα, όχι τον προορισμό της επόμενης αλλαγής.

## `ColorModeButton`

Ο τύπος `Omit<IconButtonProps, "aria-label">` κρατά τα props του IconButton εκτός από το `aria-label`, το οποίο ορίζεται μέσα στο component.

Το `React.forwardRef` επιτρέπει την προώθηση ενός ref στο εσωτερικό κουμπί. Οι παράμετροι τύπων προσδιορίζουν το HTML στοιχείο και τα props.

Το `onClick` συνδέεται με το `toggleColorMode`. Τα `variant` και `size` ρυθμίζουν την εμφάνιση, ενώ το `aria-label` δίνει προσβάσιμο όνομα στο κουμπί.

Το `ClientOnly` εμφανίζει αρχικά ένα Skeleton και αποδίδει το κουμπί μετά το mount. Έτσι το εικονίδιο που εξαρτάται από το θέμα δεν αποδίδεται πρόωρα.

Το `_icon` μέσα στο `css` ορίζει τις διαστάσεις του εικονιδίου.

## `LightMode` και `DarkMode`

Τα δύο components προωθούν ref σε ένα `Span` και εφαρμόζουν τις αντίστοιχες κλάσεις και ρυθμίσεις χρωματικού θέματος.

Το `display="contents"` αποφεύγει τη δημιουργία ξεχωριστού layout box για το Span. Το στοιχείο εξακολουθεί να υπάρχει στο DOM.

Χρησιμοποιούνται για περιοχές με συγκεκριμένο χρωματικό θέμα, χωρίς να αλλάζουν την αποθηκευμένη καθολική επιλογή μέσω του `setTheme`.

## Τρέχον checkpoint

Στην εφαρμογή χρησιμοποιούνται το `ColorModeProvider` και το `ColorModeButton`. Τα υπόλοιπα exports παραμένουν διαθέσιμα για μελλοντική χρήση.

Το `forwardRef` λειτουργεί στον υπάρχοντα κώδικα, παρότι η τεκμηρίωση του React 19 αναφέρει ότι δεν είναι πλέον απαραίτητο για τη λήψη ref ως prop.

Στο commit [d695b56 — Καταγραφή πηγών και διόρθωση ονόματος τύπου στο color-mode provider](https://github.com/SilkCraft101/portfolio/commit/d695b56) διορθώθηκε το όνομα του `ColorModeProviderProps`.

Στο commit [603b82e — Καθαρισμός και οργάνωση σχολίων](https://github.com/SilkCraft101/portfolio/commit/603b82e) προστέθηκαν σχόλια χωρίς αλλαγή λειτουργίας.

## Πηγές

Οι σχετικές πηγές βρίσκονται στο [sources.md](../sources.md), στις καταχωρίσεις για το χρωματικό θέμα, τους τύπους TypeScript, τη διόρθωση κενών interfaces, την προώθηση refs, το hydration και το κουμπί χρωματικού θέματος.
