// Οι providers χρησιμοποιούν React context, γι’ αυτό αυτό το αρχείο ορίζει client boundary.
// Το layout μπορεί να εισάγει τον Provider χωρίς να γίνει ολόκληρο Client Component.
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

// Το defineConfig περιγράφει τις δικές μου ρυθμίσεις. Το σύστημα δημιουργείται παρακάτω με createSystem.
// Τα tokens ορίζουν τιμές και τα semanticTokens ορίζουν ρόλους, όπως φόντο, κείμενο και έμφαση.
const config = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        // Το βασικό κείμενο είναι σκούρο στο light και cream στο dark.
        // Το DEFAULT αντιστοιχεί στο σκέτο fg, ενώ το muted χρησιμοποιείται ως fg.muted.
        // Τα _light και _dark αντικαθιστούν τις αντίστοιχες συνθήκες των προεπιλογών του Chakra.
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

        learningCard: {
          value: {
            _light: "#F0D8B9",
            _dark: "#35251F",
          },
        },

        philosophyCard: {
          value: {
            _light: "#EBD3D5",
            _dark: "#38232D",
          },
        },

        drillCard: {
          value: {
            _light: "#F0D8B9",
            _dark: "#35251F",
          },
        },

        currentMusicCard: {
          value: {
            _light: "#EBD3D5",
            _dark: "#38232D",
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

        // Σκούρο ροζ στο light και απαλό ροζ στο dark για το hover των links.
        linkHover: {
          value: {
            _light: "#8C405E",
            _dark: "#D79AA8",
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
        // Το base δίνει τη βασική τιμή. Στο dark γίνεται αναφορά στο token lantern με {colors.lantern}.
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

// Το createSystem συνδυάζει το defaultConfig με τις δικές μου ρυθμίσεις και επιστρέφει το system.
// Έτσι διατηρώ τις προεπιλογές του Chakra και προσαρμόζω συγκεκριμένα σημεία.
const system = createSystem(defaultConfig, config);

// Ο ChakraProvider παίρνει το system ως value και περιβάλλει τον ColorModeProvider.
// Με {...props} μεταφέρω τις επιλογές του θέματος και το children που περιέχει Navbar και σελίδες.
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
