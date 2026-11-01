"use client";

// TO ChakraProvider είναι το βασικό provider του Chakra UI.
//
// Δίνει στα components του portfolio πρόσβαση στο design system: 
// χρώματα, spacing, typography, responsive values και άλλα design tokens
// που θα χρησιμοποιήω στην εφαρμογή.
import {
  ChakraProvider,
  defaultSystem,
} from "@chakra-ui/react";

// Το ColorModeProvider δημιουργήθηκε από το επίσημο Chakra CLI.
//
// Χρησιμοποιεί το "next-themes" ώστε το portfolio να μπορεί 
// να υποστηρίζει light mode και dark mode.
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "@/components/ui/color-mode";

// Ο Provider είναι το κεντρικό UI wrapper του portfolio.
//
// Συνδυάζει δύο διαφορετικές ευθύνες:
//
// 1. ChakraProvider
//    → παρέχει το design system του Chakra UI.
//
// 2. ColorModeProvider
//    → διαχειρίζεται το light / dark mode.
//
// Με αυτόν τον τρόπο το RootLayout χρειάζεται να χρησιμοποιηεί 
// μόνο ένα <Provider> αντί να γνωρίζει όλες αυτές τις λεπτομέρειες.
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
