import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

// Εδώ παρουσιάζω σύντομα ποιος είμαι και τι με ενδιαφέρει.
export function Hero() {
  return (
    <Box lang="el"
      as="section"
      pt={{ base: 16, md: 24 }}
      pb={{ base: 12, md: 16 }}
    >
      
      {/* Κρατάω το ίδιο πλάτος με το navbar και τα υπόλοιπα sections. */}
      <Container maxW="3xl">
        
        <Stack
          gap={5}
          align="flex-start"
        >

          <Text
            fontSize="sm"
            fontWeight="medium"
            color="fg.muted"
            letterSpacing="wide"
          >
            ΧΑΙΡΕΤΑΙ, ΜΕ ΛΕΝΕ ΑΛΕΞΑΝΔΡΟ
          </Text>

          <Heading
            as="h1"
            fontSize={{
              base: "4xl",
              md: "6xl",
            }}
            lineHeight="1.05"
            letterSpacing="tight"
            maxW="2xl"
          >
            Μαθαίνω ανακαλύπτωντας απαντήσεις στα ερωτήματα μου.
          </Heading>

          <Text
            fontSize={{
              base: "md",
              md: "lg",
            }}
            color="fg.muted"
            lineHeight="tall"
            maxW="xl"
          >
            Έχω υπόβαθρο στα Δίκτυα και τις Τηλεπικοινωνίες και κύριο 
            ενδιαφέρον τα δίκτυα, την ασφάλεια και την κατανόηση του τρόπου με 
            τον οποίο λειτουργούν τα συστήματα.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
