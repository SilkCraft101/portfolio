// Το import type χρησιμοποιείται μόνο από το TypeScript. Τα υπόλοιπα imports χρησιμοποιούνται και στην υλοποίηση.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Navbar } from "@/components/navbar";

// Το next/font προετοιμάζει τη γραμματοσειρά και η variable δηλώνει το όνομα της CSS μεταβλητής της.
// Η μεταβλητή γίνεται διαθέσιμη όταν προσθέσω την παραγόμενη κλάση στο body· δεν αλλάζει από μόνη της κάθε component.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Η monospace είναι διαθέσιμη, αλλά δεν τη χρησιμοποιώ ακόμη στη σελίδα.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Το Next.js διαβάζει το metadata export για τον τίτλο και την περιγραφή του εγγράφου.
// Ο τύπος Metadata ελέγχει τη δομή του αντικειμένου κατά την ανάπτυξη.
export const metadata: Metadata = {
  title: "Alex Kotsolakis | Portfolio",
  description: "Personal portfolio of Alex Kotsolakis",
};

// Το root layout περιβάλλει τις σελίδες και παρέχει τα υποχρεωτικά html και body.
// Το children είναι η σελίδα ή το nested layout που το Next.js αποδίδει για την τρέχουσα διαδρομή.
// Το Readonly κάνει τις ιδιότητες των props μόνο για ανάγνωση στον έλεγχο τύπων· δεν παγώνει το αντικείμενο στο runtime.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Το next-themes αλλάζει την κλάση του html στον browser.
    // Το suppressHydrationWarning αποσιωπά τη σχετική διαφορά στο html κατά το hydration, όχι όλα τα σφάλματα της σελίδας.

    <html lang="en" suppressHydrationWarning>
      {/* Οι μεταβλητές των fonts είναι διαθέσιμες στο body και στα στοιχεία μέσα του. */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Ο Provider διαθέτει Chakra και θέμα στο Navbar και στις σελίδες που περνάω ως children. */}
        {/* Το Navbar εμφανίζεται εδώ μία φορά, πριν από το περιεχόμενο κάθε σελίδας. */}
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
