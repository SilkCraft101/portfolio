// Τα hooks του θέματος και το onClick χρειάζονται λειτουργία στον browser, μέσα σε client boundary.
"use client"

import type { IconButtonProps } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

// Το type alias δίνει τοπικό όνομα στα props του ThemeProvider, χωρίς να δημιουργεί νέο αντικείμενο στο runtime.
export type ColorModeProviderProps = ThemeProviderProps;

// Το snippet προέρχεται από το Chakra. Το attribute="class" συνδέει το θέμα με κλάση στο html.
// Το disableTransitionOnChange αποφεύγει transitions κατά την αλλαγή και το {...props} περιλαμβάνει τα children.
export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  )
}
// Το union επιτρέπει στον έλεγχο τύπων μόνο τις δύο συγκεκριμένες τιμές.
type ColorMode = "light" | "dark"

// Η interface περιγράφει τι επιστρέφει το hook: τρέχον θέμα και δύο συναρτήσεις χειρισμού του.
export interface UseColorModeReturn {
  colorMode: ColorMode | undefined
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

// Το useTheme διαβάζει το context του next-themes. Το resolvedTheme είναι το εφαρμοζόμενο light ή dark.
// Αν υπάρχει forcedTheme, αυτό προηγείται στην τιμή που επιστρέφω ως colorMode.
function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme, forcedTheme } = useTheme()
  const activeTheme = forcedTheme || resolvedTheme
  const colorMode =
    activeTheme === "light" || activeTheme === "dark" ? activeTheme : undefined
  // Το ternary επιλέγει το αντίθετο θέμα και το setTheme ζητά την αλλαγή του.
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }
  return {
    colorMode,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

// Το Omit αφαιρεί το aria-label από τα δημόσια props, επειδή το κουμπί το ορίζει ήδη εσωτερικά.
type ColorModeButtonProps = Omit<IconButtonProps, "aria-label">;

// Το forwardRef περνά το ref του γονέα στο πραγματικό button. Τα props καθορίζουν την εμφάνισή του.
export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    // Το ClientOnly δείχνει αρχικά το Skeleton και περιμένει το mount πριν αποδώσει το κουμπί.
    // Έτσι δεν υπολογίζω το εικονίδιο του θέματος πριν είναι διαθέσιμη η πληροφορία στον browser.
    <ClientOnly fallback={<Skeleton boxSize="9" />}>
      {/* Το onClick καλεί τη συνάρτηση αλλαγής· δεν την εκτελώ κατά το render. */}
      {/* Το aria-label ονομάζει το κουμπί για screen readers, επειδή έχει μόνο εικονίδιο. */}
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        lang="en"
        size="sm"
        ref={ref}
        {...props}
        css={{
          _icon: {
            width: "5",
            height: "5",
          },
        }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  )
})
