import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";

export default function PortfolioPage() {
  return (
    <Box as="main">
      <Container maxW="3xl">
        {/*
        Προσωρινή σελίδα (placeholder). 
        
        Αφαιρώ την αρχική παρουσίαση επειδή θα την αντικαταστήσω (ελπίζω) με ένα νέο Engineering Case Study, με έμφαση στην τεχνική υλοποίηση και τις αποφάσεις που πάρθηκαν κατά την ανάπτυξη του project. 

        Διατηρώ τη διαδρομή /works/portfolio λειτουργική, ώστε να μην επηρεαστεί η πλοήγηση από το /works.
        */}

        <Stack gap={4}>
          <Heading as="h1">Προσωπικό Portfolio</Heading>

          <Text color="fg.muted">
            Η αναλυτική παρουσίαση του project βρίσκεται υπό μελέτη (καθώς θέλω
            να προσθέσω νέα στοιχεία) και υπό ανάπτυξη.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
