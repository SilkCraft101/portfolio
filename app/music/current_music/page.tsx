import type { Metadata } from "next";
import { Container, Heading, Separator, Text } from "@chakra-ui/react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lo-Fi και Liminal μουσική",
  description: "Οι σημερινές Lo-Fi και Liminal μουσικές δημιουργίες μου.",
};

export default function CurrentMusicPage() {
  return (
    <main id="main-content" lang="el">
      <Container maxW="3xl">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="tight"
          mt={3}
        >
          <span lang="en">Lo-Fi</span> και <span lang="en">Liminal</span>{" "}
          Μουσική
        </Heading>

        <Text color="fg.muted" lineHeight="tall" mt={4}>
          Η Lo-Fi και Liminal μουσική είναι ο τρόπος με τον οποίο εκφράζομαι
          σήμερα. Με ενδιαφέρει να δημιουργώ ήρεμες, ατμοσφαιρικές συνθέσεις που
          θυμίζουν άδειους χώρους, ξεθωριασμένες αναμνήσεις και στιγμές που ο
          χρόνος σταματά να υπάρχει.
        </Text>
        <Text color="fg.muted" lineHeight="tall" mt={4}>
          Δεν προσπαθώ να αφηγηθώ μια συγκεκριμένη ιστορία μέσα από κάθε
          κομμάτι. Περισσότερο με ενδιαφέρει η αίσθηση που αφήνει ένας ήχος: η
          νοσταλγία, η ηρεμία και η μοναχικότητα. Η δημιουργία αυτής της
          μουσικής είναι ένας προσωπικός χώρος πειραματισμού, σκέψης και
          χαλάρωσης.
        </Text>

        <Text mt={6}>
          <Link href="/music">← Πίσω στη μουσική</Link>
        </Text>
        <Separator borderColor="border.subtle" my={6} w="full" />
        <iframe
          title="BandLab player - Lo-Fi & Liminal Music"
          width="100%"
          height="500"
          src="https://www.bandlab.com/embed/collection/?id=dcaf95cf-16e7-f111-91f2-70a8a56ceb96"
        ></iframe>
      </Container>
    </main>
  );
}
