import { Container, Heading, Box, SimpleGrid, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function EssaysPage() {
  return (
    <Container maxW="3xl">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        letterSpacing="tight"
        mt={3}
      >
        Essays
      </Heading>
      <Text color="fg.muted" lineHeight="tall" mt={4}>
        Η γραφή για εμένα είναι ένας τρόπος να εξερευνώ ερωτήματα που δεν έχουν
        πάντοτε εύκολες ή οριστικές απαντήσεις. Μέσα από τη μελέτη, την
        παρατήρηση και την προσωπική εμπειρία, προσπαθώ να κατανοήσω καλύτερα τη
        μάθηση, τη γνώση και τις ιδέες που επηρεάζουν τον τρόπο με τον οποίο
        αντιμλαμβανόμαστε τον κόσμο.
      </Text>

      <Text color="fg.muted" lineHeight="tall" mt={4}>
        Αυτός ο χώρος συγκεντρώνει τις σκέψεις και τους προβληματισμούς μου, όχι
        ως ολοκληρωμένες αλήθειες, αλλά ως μέρος μιας συνεχούς διαδικασίας
        αναζήτησης, αμφισβήτησης και αναθεώρησης.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2 }} mt={8} gap={6}>
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
            <Heading as="h2">How We Learn</Heading>

            <Text color="fg.muted" fontSize="sm" mt={3} lineHeight="tall">
              Ένας προσωπικός χώρος εξερεύνησης της Επίστήμης της Μάθησης
              (Science of Learning), της γνωστικής ψυχολογίας και των μηχανισμών
              της μνήμης και της κατανόησης. Εδώ εξετάζω επιστημονικές έρευνες,
              μαθησιακές μεθόδους και ιδέες ανθρώπων όπως ο Tony Buzan,
              προσπαθώντας να κατανοήσω πως μαθαίνουμε και πως μπορούμε να
              βελτιώσουμε τη μαθησιακή μας διαδικασία.
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
            <Heading as="h2">Philosophy</Heading>

            <Text color="fg.muted" fontSize="sm" mt={3} lineHeight="tall">
              Ένας προσωπικός χώρος φιλοσοφικής αναζήτησης, αμφισβήτησης και
              στοχασμού. Εδώ καταγράφω σκέψεις και δοκίμια γύρω από την
              ανθρώπινη ύπαρξη, τη γνώση, την ελευθερία και το νόημα της ζωής,
              αντλώντας ερεθίσματα από φιλοσόφους όπως ο Friedrich Nietzsche και
              ο Arthur Schopenhauer.
            </Text>
          </Box>
        </Link>
      </SimpleGrid>
    </Container>
  );
}
