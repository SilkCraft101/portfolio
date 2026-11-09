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

// Ορίζω την παλέτα και τα χρώματα για κάθε θέμα.
const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        // Το βασικό κείμενο είναι σκούρο στο light και cream στο dark.
        fg: {
          DEFAULT: {
            value: {
              _light: "#2B1B23",
              _dark: "#F4E8D6",
            },
          },

          // Πιο ήπιο χρώμα για τις παραγράφους: ζεστό καφέ στο light, μπεζ στο dark.
          muted: {
            value: {
              _light: "#70584F",
              _dark: "#C6B0A3",
            },
          },
        },

        // Διακριτικό περίγραμμα σε ζεστές αποχρώσεις, όπως η γραμμή κάτω από το navbar.
        border: {
          subtle: {
            value: {
              _light: "#D8C1AD",
              _dark: "#493039",
            },
          },
        },

        // Το φόντο είναι cream στο light και βαθύ καφέ στο dark.
        bg: {
          DEFAULT: {
            value: {
              _light: "#F4E8D8",
              _dark: "#1B1214",
            },
          },
        },

        // Για την έμφαση χρησιμοποιώ σκούρο κεχριμπαρένιο στο light και lantern στο dark.
        accent: {
          value: {
            base: "#8A451C",
            _dark: "{colors.lantern}",
          },
        },
      },
    },
    tokens: {
      colors: {
        // Η κεχριμπαρένια απόχρωση που θυμίζει τα χρώματα που έχω στο μυαλό μου.
        lantern: { value: "#F2B66D" },
      },
    },
  },
});

// Συνδυάζω τις δικές μου ρυθμίσεις με τις προεπιλεογές του Chakra.
const system = createSystem(defaultConfig, config);

// Συνδυάζω εδώ το Chakra και το χρωματικό θέμα, ώστε το layout να χρειάζεται έναν Provider.
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
