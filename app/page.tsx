// Εισάγω named exports με τα ίδια ονόματα που δηλώνονται στα αρχεία των components.
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";

export const dynamic = "force-dynamic";

// Το app/page.tsx αντιστοιχεί στη διαδρομή /. Το default export είναι το component αυτής της σελίδας.
// Η σειρά των JSX elements ορίζει τη σειρά των ενοτήτων. Το Navbar παρέχεται ήδη από το root layout.
export default function Home() {
  return (
    // Το main περιέχει το κύριο περιεχόμενο της αρχικής. Δεν προσθέτω εδώ ξανά html, body ή Provider.
    <main>
      <Hero />

      {/* Κρατάω εδώ μια σύντομη παρουσίαση. Η αναλυτική ιστορία βρίσκεται στο /about. */}
      <About />
      <Projects />
    </main>
  );
}
