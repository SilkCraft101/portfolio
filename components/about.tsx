import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

// Κρατάω εδώ τη σύντομη εκδοχή της ιστορίας μου. Η αναλυτική θα πάει στο /about.
export function About() {
  return (
    <Box
      as="section"
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="3xl">
        <Stack
          gap={5}
          align="flex-start"
        >
          
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="tight"
          >
            Σχετικά με εμένα
          </Heading>

          <Text
            color="fg.muted"
            lineHeight="tall"
            maxW="2xl"
          >
            Είμαι ο Αλέξανδρος, 28 ετών με αυτισμό και ΔΕΠΥ.
            Η εκπαιδευτική μου πορεία δεν ήταν γραμμική και 
            για αρκετά χρόνια η εμπειρία μου μέσα στην εκπαίδευση 
            με έκανε να αμφιβάλλω για την ικανότητα μου να μαθαίνω.
          </Text>

          <Text
            color="fg.muted"
            lineHeight="tall"
            maxW="2xl"
          > 
            Σήμερα χρησιμοποιώ την περιέργεια και τα προσωπικά μου 
            projects για να χτίσω ξανά τη σχέση μου με τη μάθηση.
            Όταν κάτι μου δημιουργεί μια ερώτηση, προσπαθώ να μην 
            σταματάω μόνο στην απάντηση: θέλω να καταλάβω αν μπορώ 
            να το μελετήσω, να το κατασκευάσω και τελικά να εξηγήσω 
            πώς λειτουργεί.
          </Text>

          <Text
            color="fg.muted"
            lineHeight="tall"
            maxW="2xl"
          >
            Έχω ολοκληρώσει την εκπαίδευση μου ως Τεχνικών Δικτύων 
            και Τηλεπικοινωνιών. Έχω παρακολουθήσει διάφορα CISCO Courses. Με ενδιαφέρουν κυρίως τα Δίκτυα και την Ασφάλεια.
            
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
