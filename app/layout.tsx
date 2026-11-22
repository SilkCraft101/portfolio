// Ο τύπος Metadata ελέγχει τη δομή των μεταδεδομένων κατά την ανάπτυξη.
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silkcraft101.is-a.dev"),
  title: {
    default: "Alex Kotsolakis | Portfolio",
    template: "%s | Alex Kotsolakis",
  },
  description: "Personal portfolio of Alex Kotsolakis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" suppressHydrationWarning>
      <body className={geistSans.variable}>
        <Provider>
          <a className="skip-link" href="#main-content">
            Μετάβαση στο κύριο περιεχόμενο
          </a>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
