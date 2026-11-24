import type { Metadata } from "next";
import {
  Separator,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Essays",
  description: "Δοκίμια για τη μάθηση και τη φιλοσοφία.",
};

export default function EssaysPage() {
  return (
    <main id="main-content" lang="el">
      <Container maxW="3xl" py={{ base: 12, md: 16 }}>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="tight"
        >
          Essays
        </Heading>
        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="Georgia, serif"
          fontSize={{ base: "md", md: "lg" }}
        >
          Η γραφή για εμένα είναι ένας τρόπος να εξερευνώ ερωτήματα που δεν
          έχουν πάντοτε εύκολες ή οριστικές απαντήσεις. Μέσα από τη μελέτη, την
          παρατήρηση και την προσωπική εμπειρία, προσπαθώ να κατανοήσω καλύτερα
          τη μάθηση, τη γνώση και τις ιδέες που επηρεάζουν τον τρόπο με τον
          οποίο αντιλαμβανόμαστε τον κόσμο.
        </Text>

        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="Georgia, serif"
          fontSize={{ base: "md", md: "lg" }}
        >
          Αυτός ο χώρος συγκεντρώνει τις σκέψεις και τους προβληματισμούς μου,
          όχι ως ολοκληρωμένες αλήθειες, αλλά ως μέρος μιας συνεχούς διαδικασίας
          αναζήτησης, αμφισβήτησης και αναθεώρησης.
        </Text>

        <Separator borderColor="border.subtle" my={8} />

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Link href="/essays/learning">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={{ base: 5, md: 7 }}
              py={{ base: 12, md: 16 }}
              h="full"
              bg="learningCard"
              transition="transform 0.2s ease"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Heading as="h2">
                <span lang="en">How We Learn</span>
              </Heading>
              <Text color="fg.muted" fontSize="sm" mt={3} lineHeight="tall">
                Ένας προσωπικός χώρος εξερεύνησης της Επιστήμης της Μάθησης
                (Science of Learning), της γνωστικής ψυχολογίας και των
                μηχανισμών της μνήμης και της κατανόησης. Εδώ εξετάζω
                επιστημονικές έρευνες, μαθησιακές μεθόδους και ιδέες ανθρώπων
                όπως ο Tony Buzan, προσπαθώντας να κατανοήσω πώς μαθαίνουμε και
                πώς μπορούμε να βελτιώσουμε τη μαθησιακή μας διαδικασία.
              </Text>
            </Box>
          </Link>

          <Link href="/essays/philosophy">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={{ base: 5, md: 7 }}
              py={{ base: 12, md: 16 }}
              h="full"
              bg="philosophyCard"
              transition="transform 0.2s ease"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Heading as="h2">
                <span lang="en">Philosophy</span>
              </Heading>
              <Text color="fg.muted" fontSize="sm" mt={3} lineHeight="tall">
                Ένας προσωπικός χώρος φιλοσοφικής αναζήτησης, αμφισβήτησης και
                στοχασμού. Εδώ καταγράφω σκέψεις και δοκίμια γύρω από την
                ανθρώπινη ύπαρξη, τη γνώση, την ελευθερία και το νόημα της ζωής,
                αντλώντας ερεθίσματα από φιλοσόφους όπως ο Friedrich Nietzsche
                και ο Arthur Schopenhauer.
              </Text>
            </Box>
          </Link>
        </SimpleGrid>
      </Container>
    </main>
  );
}
