"use client";

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "@/components/ui/color-mode";

// Ορίζω τα χρώματα του θέματος.
const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        accent: {
          // Χρώμα έμφασης: πιο σκούρο στο light mode, πιο φωτεινό στο dark.
          value: {
            base: "#8A451C",
            _dark: "{colors.lantern}",
          },
        },
      },
    },
    tokens: {
      colors: {
        lantern: { value: "#F2B66D" }, // Το lantern ορίζει την απόχρωση.
      },
    },
  },
});

// Συνδυάζω τις προεπιλογές του Chakra με τις δικές μου ρυθμίσεις.
const system = createSystem(defaultConfig, config);

// Συνδυάζω εδώ το Chakra και το χρωματικό θέμα, ώστε το layout να χρειάζεται έναν Provider.
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
