import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

// Εδώ συνθέτω την αρχική σελίδα από τα ξεχωριστά components.
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Κρατάω εδώ μια σύντομη παρουσίαση. Η αναλυτική ιστορία θα πάει στο /about. */}
      <About />
    </main>
  );
}
