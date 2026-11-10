import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import "./globals.css";
import { Navbar } from "@/components/navbar";

// Κρατάω τις γραμματοσειρές σε CSS μεταβλητές για να τις χρησιμοποιώ από το CSS.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Η monospace είναι διαθέσιμη, αλλά δεν τη χρησιμοποιώ ακόμη στη σελίδα.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ο τίτλος και η περιγραφή με τα οποία ξεκινάει το portfolio.
export const metadata: Metadata = {
  title: "Alex Kotsolakis | Portfolio",
  description: "Personal portfolio of Alex Kotsolakis",
};

// Εδώ κρατάω το κοινό περίβλημα των σελίδων. Το περιεχόμενό τους μπαίνει στο children.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Το next-themes αλλάζει την κλάση του html στον browser.
    // Το suppressHydrationWarning καλύπτει αυτή την αναμενόμενη διαφορά.

    <html lang="en" suppressHydrationWarning>
      {/* Οι μεταβλητές των fonts είναι διαθέσιμες στο body και στα στοιχεία μέσα του. */}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Ο Provider δίνει στις σελίδες το Chakra και την εναλλαγή θέματος. */}
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
