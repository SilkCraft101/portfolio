// Το Metadata είναι ένας TypeScript type του Next.js.
//
// Μας επιτρέπει να ορίζουμε με type safety πληροφορίες
// σχετικά με τη σελίδα, όπως title και description.
import type { Metadata } from "next";

// Το next/font είναι το ενσωματωμένο σύστημα διαχείρισης
// και βελτιστοποίησης fonts του Next.js.
//
// Χρησιμοποιούμε δύο παραλλαγές του Geist:
// - Geist      → για το βασικό κείμενο.
// - Geist Mono → για monospace / developer-oriented στοιχεία.
import { Geist, Geist_Mono } from "next/font/google";

// Ο Provider είναι το κεντρικό UI wrapper του portfolio.
//
// Μέσα του έχουμε το Chakra UI design system και
// τη διαχείριση light / dark mode.
import { Provider } from "@/components/ui/provider";

// Το globals.css περιέχει τα global CSS rules
// που εφαρμόζονται σε ολόκληρη την εφαρμογή.
import "./globals.css";

// -----------------------------------------------------------------------------
// FONTS
// -----------------------------------------------------------------------------

// Δημιουργούμε τη βασική sans-serif γραμματοσειρά.
//
// Το "variable" δημιουργεί το CSS variable:
//
// --font-geist-sans
//
// ώστε να μπορούμε να χρησιμοποιήσουμε το font και μέσα από CSS.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Δημιουργούμε και τη monospace έκδοση του Geist.
//
// Θα μπορεί να χρησιμοποιηθεί αργότερα σε στοιχεία όπως
// code snippets, labels ή άλλα developer-oriented UI elements.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// -----------------------------------------------------------------------------
// METADATA
// -----------------------------------------------------------------------------

// Τα metadata χρησιμοποιούνται από το Next.js για πληροφορίες
// σχετικά με την ιστοσελίδα.
//
// Για παράδειγμα, το title εμφανίζεται στο browser tab,
// ενώ title και description μπορούν επίσης να χρησιμοποιηθούν
// από search engines και social platforms.
//
// Θα τα εμπλουτίσουμε αργότερα όταν οριστικοποιήσουμε
// το branding και το περιεχόμενο του portfolio.
export const metadata: Metadata = {
  title: "Alex Kotsolakis | Portfolio",
  description: "Personal portfolio of Alex Kotsolakis",
};

// -----------------------------------------------------------------------------
// ROOT LAYOUT
// -----------------------------------------------------------------------------

// Το RootLayout είναι το ανώτερο layout της εφαρμογής.
//
// Στο Next.js App Router κάθε σελίδα του portfolio θα
// αποδίδεται μέσα στο {children}.
//
// Αυτό σημαίνει ότι εδώ τοποθετούμε πράγματα που πρέπει
// να είναι διαθέσιμα σε ΟΛΟ το website, όπως:
//
// - global fonts
// - Chakra UI
// - color mode
// - global CSS
// - μελλοντικά shared layout στοιχεία
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    /*
     * Το portfolio μπορεί κανονικά να περιέχει τόσο
     * αγγλικό όσο και ελληνικό κείμενο.
     *
     * Το lang="en" δηλώνει απλώς την κύρια γλώσσα
     * του HTML document. Δεν μας εμποδίζει να γράφουμε
     * ελληνικό περιεχόμενο όπου θέλουμε.
     *
     * Το suppressHydrationWarning χρησιμοποιείται επειδή
     * το ColorModeProvider μπορεί να αλλάξει attributes
     * του <html> στον browser ανάλογα με το ενεργό theme.
     *
     * Έτσι αποφεύγουμε αναμενόμενα hydration warnings
     * που σχετίζονται με το light / dark mode.
     */
    <html lang="en" suppressHydrationWarning>
      {/*
       * Εφαρμόζουμε τα CSS variables των Geist fonts
       * στο <body>, ώστε να είναι διαθέσιμα σε ολόκληρο
       * το component tree.
       */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/*
         * Ο Provider περιβάλλει ολόκληρη την εφαρμογή.
         *
         * Από εδώ και κάτω όλα τα components μπορούν
         * να χρησιμοποιούν Chakra UI και το σύστημα
         * light / dark mode.
         */}
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
