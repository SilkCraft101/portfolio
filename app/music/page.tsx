import type { Metadata } from "next";
import {
  Box,
  Container,
  Heading,
  Separator,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Music",
  description: "Οι μουσικές δημιουργίες του Αλέξανδρου Κοτσολάκη.",
};

export default function MusicPage() {
  return (
    <main id="main-content" lang="el">
      <Container maxW="3xl" py={{ base: 12, md: 16 }}>
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="tight"
        >
          Music
        </Heading>

        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="ui-rounded"
          fontSize={{ base: "md", md: "lg" }}
        >
          Η μουσική είναι ένας τρόπος να δημιουργώ, να εκφράζομαι και να βρίσκω
          ηρεμία. Δεν τη βλέπω ως επαγγελματική δραστηριότητα, αλλά ως κάτι
          προσωπικό που μου δίνει τη δυνατότητα να πειραματίζομαι με ήχους και
          να αποτυπώνω όσα δεν είναι πάντα εύκολο να εκφράσω με λόγια.
        </Text>

        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="ui-rounded"
          fontSize={{ base: "md", md: "lg" }}
        >
          Η σχέση μου με τη μουσική έχει αλλάξει με τα χρόνια. Παλαιότερα
          δημιουργούσα Drill Beats, σε μια δύσκολη περίοδο της ζωής μου, όταν
          είχα ανάγκη από έναν πιο έντονο ήχο. Σήμερα ασχολούμαι με Lo-Fi και
          Liminal μουσική, αναζητώντας πιο ήρεμες και ατμοσφαιρικές συνθέσεις.
        </Text>

        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="ui-rounded"
          fontSize={{ base: "md", md: "lg" }}
        >
          Για ένα σύντομο διάστημα συνεργάστηκα με το Lo-Fi Girl label. Μέσα από
          αυτή την εμπειρία έμαθα πράγματα που συνεχίζω να εφαρμόζω στη μουσική
          μου. Δεν είμαι επαγγελματίας παραγωγός και δεν έχω οικονομικό όφελος
          από τις δημιουργίες μου. Θέλω απλώς να τις μοιράζομαι μέσα από το
          Portfolio, ως ένα ακόμη μέρος της προσωπικής μου διαδρομής.
        </Text>

        <Separator borderColor="border.subtle" my={8} />

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          <Link href="/music/old_music">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={{ base: 5, md: 7 }}
              py={{ base: 12, md: 16 }}
              h="full"
              bg="drillCard"
              transition="transform 0.2s ease"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Heading as="h2">
                <span lang="en">Drill Beats</span>
              </Heading>
              <Text color="fg.muted" fontSize="sm" mt={3} lineHeight="tall">
                Μια συλλογή από παλαιότερα Drill Beats που δημιουργούσα σε μια
                δύσκολη περίοδο της ζωής μου. Τότε η μουσική ήταν ένας τρόπος να
                εκφράζω όσα ένιωθα μέσα από πιο έντονους και δυναμικούς ήχους.
                Σήμερα τα μοιράζομαι ως ένα κομμάτι της προσωπικής και
                δημιουργικής μου διαδρομής.
              </Text>
            </Box>
          </Link>

          <Link href="/music/current_music">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={{ base: 5, md: 7 }}
              py={{ base: 12, md: 16 }}
              h="full"
              bg="currentMusicCard"
              transition="transform 0.2s ease"
              _hover={{ transform: "translateY(-4px)" }}
            >
              <Heading as="h2">
                <span lang="en">Lo-Fi</span> και <span lang="en">Liminal</span>{" "}
                μουσική
              </Heading>
              <Text color="fg.muted" fontSize="sm" mt={3} lineHeight="tall">
                Σήμερα δημιουργώ κυρίως Lo-Fi και Liminal μουσική, αναζητώντας
                την ηρεμία μέσα από απαλούς ήχους και ατμοσφαιρικές συνθέσεις.
                Με εμπνέουν η μοναχικότητα, η νοσταλγία και η αίσθηση ενός χώρου
                που μοιάζει οικείος, αλλά ταυτόχρονα μακρινός. Είναι ένας τρόπος
                να εκφράζω σκέψεις και συναισθήματα που δύσκολα μπορώ να
                περιγράψω με λόγια.
              </Text>
            </Box>
          </Link>
        </SimpleGrid>
      </Container>
    </main>
  );
}
