"use client";

import {
  ChakraProvider,
  defaultSystem,
} from "@chakra-ui/react";

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "@/components/ui/color-mode";

// Συνδυάζω εδώ το Chakra και το χρωματικό θέμα, ώστε το layout να χρειάζεται έναν Provider.
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
