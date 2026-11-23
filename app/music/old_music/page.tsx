import type { Metadata } from "next";
import { Container, Heading, Separator, Text } from "@chakra-ui/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drill Beats",
  description:
    "Μια συλλογή παλαιότερων Drill beats από τη μουσική μου διαδρομή.",
};

export default function OldMusicPage() {
  return (
    <main id="main-content" lang="el">
      <Container maxW="3xl">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="tight"
          mt={3}
        >
          <span lang="en">Drill Beats</span>
        </Heading>

        <Text color="fg.muted" lineHeight="tall" mt={4}>
          Αυτή η συλλογή περιλαμβάνει 40 κομμάτια από μια παλαιότερη περίοδο της
          ζωής μου. Εκείνη την εποχή η μουσική ήταν ένας τρόπος να διοχετεύω
          έντονα συναισθήματα και να εκφράζω όσα δυσκολευόμουν να περιγράψω με
          λόγια.
        </Text>
        <Text color="fg.muted" lineHeight="tall" mt={4}>
          Παρότι σήμερα η μουσική μου έχει διαφορετικό χαρακτήρα, αποφάσισα να
          διατηρήσω αυτές τις δημιουργίες. Αποτελούν ένα κομμάτι της προσωπικής
          μου ιστορίας και μου θυμίζουν πώς εξελίχθηκε η σχέση μου με τη μουσική
          μέσα στα χρόνια.
        </Text>
        <Text mt={6}>
          <Link href="/music">← Πίσω στη μουσική</Link>
        </Text>
        <Separator borderColor="border.subtle" my={6} w="full" />

        <iframe
          title="BandLab player - Old Drill Beats"
          width="100%"
          height="500"
          src="https://www.bandlab.com/embed/collection/?id=3ff72f11-15e7-f111-91f2-70a8a56ceb96"
        ></iframe>
      </Container>
    </main>
  );
}
