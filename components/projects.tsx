import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

// Τα projects είναι μέρος της μαθησιακής μου πορείας, όχι απαραίτητα τελειωμένα προϊόντα.
// Παρουσιάζω το portfolio ως το πρώτο μου project σε εξέλιξη.
// Το named export επιτρέπει στην αρχική σελίδα να εισάγει και να εμφανίσει το component.
export function Projects() {
  return (
    // Το section κληροδοτεί τη γλώσσα el στο περιεχόμενο. Το py δίνει πάνω και κάτω padding.
    <Box lang="el" as="section" py={{ base: 12, md: 16 }}>
      {/* Το ίδιο maxW με τα υπόλοιπα sections κρατά κοινά όρια στο περιεχόμενο. */}
      <Container maxW="3xl">
        <Stack gap={5} align="flex-start">
          {/* Το lang="en" ισχύει για τον αγγλικό τίτλο, αντικαθιστώντας εδώ το el του section. */}
          <Heading
            lang="en"
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="tight"
          >
            Projects
          </Heading>

          {/* Το fg.muted είναι semantic token: ο ρόλος μένει ίδιος, αλλά η απόχρωση αλλάζει με το θέμα. */}
          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Τα projects μου ξεκινούν συνήθως από μια, εν δυνάμει, υπαρξιακή
            ερώτηση, μια ανάγκη ή κάτι που θέλω να καταλάβω καλύτερα. Τα
            χρησιμοποιώ ως χώρο μελέτης, πειραματισμού και εφαρμογής όσων
            μαθαίνω στην πράξη. Κάθε project που ξεκινώ είναι η αρχή αναζήτησης
            ενός «γιατί;».
          </Text>

          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Κανένα από αυτά δεν παρουσιάζεται ως «τελειωμένο». Καταγράφω την
            πραγματική του κατάσταση, όσα έχω ήδη κατασκευάσει, όσα έχω μάθει
            και το επόμενο βήμα που προσπαθώ να κατανοήσω.
          </Text>

          {/* Ομαδοποιώ την καταχώρηση σε δικό της Stack με μικρότερο κενό. */}
          {/* Το εξωτερικό gap χωρίζει ομάδες· το εσωτερικό gap χωρίζει τα στοιχεία της καταχώρησης. */}
          <Stack gap={2} align="flex-start">
            {/* Το h3 βρίσκεται κάτω από το h2 Projects. Το accent ορίζει το χρώμα από το κοινό θέμα. */}
            <Heading
              as="h3"
              fontSize={{ base: "xl", md: "2xl" }}
              letterSpacing="tight"
              color="accent"
            >
              Το προσωπικό μου Portfolio
            </Heading>

            <Text color="fg.muted" lineHeight="tall" maxW="2xl">
              Σε εξέλιξη...
            </Text>

            <Text color="fg.muted" lineHeight="tall" maxW="2xl">
              Ο προσωπικός μου χώρος για την παρουσίαση του βιογραφικού, της
              εκπαιδευτικής μου διαδρομής και των τεχνικών projects μου.
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
