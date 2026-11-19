import {
  Separator,
  Container,
  Heading,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";

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
        <Link href="/essays/learning/i-techni-tou-na-mathaineis">
          <Box
            borderWidth="1px"
            borderColor="border.subtle"
            borderRadius="lg"
            p={{ base: 5, md: 7 }}
            h="full"
            transition="transform 0.2s ease"
            _hover={{ transform: "translateY(-4px)" }}
          >
            <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
              Η Τέχνη του να Μαθαίνεις
            </Heading>

            <Text
              color="fg.muted"
              fontFamily="Georgia, serif"
              fontStyle="italic"
              lineHeight="tall"
              mt={4}
            >
              Από την παθητική ανάγνωση στην πραγματική κατανόηση
            </Text>
          </Box>
        </Link>
      </SimpleGrid>
    </Container>
  );
}
