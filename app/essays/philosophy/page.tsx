import {
  Separator,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export default function PhilosophyPage() {
  return (
    <Container maxW="6xl">
      <Box maxW="3xl">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="tight"
          mt={3}
        >
          Philosophy
        </Heading>

        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="Georgia, serif"
          fontSize={{ base: "md", md: "lg" }}
        >
          Η φιλοσοφία αποτελεί για εμένα έναν χώρο αμφισβήτησης, αυτογνωσίας και
          διαρκούς αναζήτησης, όπου ακόμη και οι πιο αυτονόητες παραδοχές
          μπορούν να τεθούν υπό εξέταση.
        </Text>

        <Text
          color="fg.muted"
          lineHeight="tall"
          mt={4}
          fontFamily="Georgia, serif"
          fontSize={{ base: "md", md: "lg" }}
        >
          Σε αυτή την ενότητα καταγράφω προσωπικούς στοχασμόυς γύρω από την
          ανθρώπινη ύπαρξη, την ελευθερία, την γνώση, την ηθική και το νόημα της
          ζωής. Ιδιαίτερη θέση έχουν οι ιδέες του Friedrich Nietzsche και του
          Arthur Schopenhauer, όχι ως αδιαμφισβήτητες αλήθειες, αλλά ως
          αφετηρίες για σκέψη και προσωπικό προβληματισμό.
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
          _hover={{ transform: "translateY(-4px)" }}
        >
          <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
            Φιλσοοφία τεστ
          </Heading>
          <Text color="fg.muted" lineHeight="tall" mt={4}>
            Ενα δοκιμαστικό κείμενο!!!!
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
