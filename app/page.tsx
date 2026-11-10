import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Hobbies } from "@/components/hobbies";

// Εδώ συνθέτω την αρχική σελίδα από τα ξεχωριστά components.
export default function Home() {
  return (
    <main>
      <Hero />

      {/* Κρατάω εδώ μια σύντομη παρουσίαση. Η αναλυτική ιστορία βρίσκεται στο /about. */}
      <About />
      <Projects />
      <Hobbies />
    </main>
  );
}
