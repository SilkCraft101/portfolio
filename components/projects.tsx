import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

// Τα projects είναι μέρος της μαθησιακής μου πορείας, όχι απαραίτητα τελειωμένα προϊόντα.
// Προς το παρόν έχω μόνο την εισαγωγή και δεν την έχω συνδέσει στην αρχική σελίδα.
export function Projects() {
  return (
    <Box lang="el"
      as="section"
      py={{ base: 12, md: 16 }}
    >
      <Container maxW="3xl">
        <Stack
          gap={5}
          align="flex-start"
        >
          
          <Heading lang="en"
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="tight"
          >
            Projects
          </Heading>

          <Text
            color="fg.muted"
            lineHeight="tall"
            maxW="2xl"
          >
            Τα projects μου ξεκινούν συνήθως από μια, κατά πάσα
            πιθανότητα, υπαρξιακή ερώτηση, μια ανάγκη ή κάτι που
            θέλω να καταλάβω καλύτερα. Τα χρησιμοποιώ ως χώρο
            μελέτης, πειραματισμού και εφαρμογής όσων μαθαίνω
            στην πράξη. Κάθε project που ξεκινώ είναι η αρχή
            αναζήτησης ενός «γιατί;».
          </Text>

          <Text
            color="fg.muted"
            lineHeight="tall"
            maxW="2xl"
          >
            Κανένα από αυτά δεν παρουσιάζεται ως «τελειωμένο».
            Καταγράφω την πραγματική του κατάσταση, όσα έχω ήδη
            κατασκευάσει, όσα έχω μάθει και το επόμενο βήμα που
            προσπαθώ να κατανοήσω.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
