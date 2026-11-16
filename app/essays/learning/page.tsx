import {
  Separator,
  Container,
  Heading,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

export default function LearningPage() {
  return (
    <Container maxW="6xl">
      <Box maxW="3xl">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="tight"
          mt={3}
        >
          How We Learn
        </Heading>

        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="Georgia, serif"
          fontSize={{ base: "md", md: "lg" }}
        >
          Η μάθηση δεν είναι απλώς η απαμνημόνευση πληροφοριών, αλλά μια σύνθετη
          διαδικασία κατανόησης, σύνδεσης και αναδόμησης της γνώσης.
        </Text>

        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="Georgia, serif"
          fontSize={{ base: "md", md: "lg" }}
        >
          Σε αυτή την ενότητα εξερευνώ την Επιστήμη της Μάθησης (Science of
          Learning), την γνωστική ψυχολογία, τη λειτουργία της μνήμης και τις
          στρατηγικές που υποστηρίζουν την αποτελεσματική μάθηση. Παράλληλα,
          εξετάζω ιδέες και τεχνικές του Tony Buzan, Richard Feynman και Justin
          Sung, προσεγγίζοντας τες με προσωπική περιέργειεα και κριτική σκέψη.
        </Text>
      </Box>

      <Separator borderColor="border.subtle" my={8} />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mt={4}>
        <Box
          borderWidth="1px"
          borderColor="border.subtle"
          borderRadius="lg"
          p={{ base: 5, md: 7 }}
          transition="transform 0.2s ease"
          _hover={{ transform: "traslateY(-4px)" }}
        >
          <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
            Tony Buzan and Mind Mapping
          </Heading>
          <Text color="fg.muted" lineHeight="tall" mt={4}>
            Μια κριτική εξερεύνηση της μεθόδου Mind Mapping, των ιδεών του Tony
            Buzan και της σχέσης τους με τη μαθησιακή διαδικασία.
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
