import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

// Το About είναι η συνοπτική παρουσίαση της αρχικής. Η πλήρης ιστορία βρίσκεται στο /about.
// Το named export εισάγεται με { About } στο app/page.tsx.
export function About() {
  // Επαναφορά αυτόματου υπολογισμού ηλικίας.
  const birthYear = 1997;
  const birthMonth = 12;
  const birthDay = 18;

  // Τρέχουσα ημερομηνία σύμφωνα με την ώρα Ελλάδας.
  const today = new Date();
  const timeZone = "Europe/Athens";

  const year = Number(
    new Intl.DateTimeFormat("en", { timeZone, year: "numeric" }).format(today),
  );

  const month = Number(
    new Intl.DateTimeFormat("en", { timeZone, month: "numeric" }).format(today),
  );

  const day = Number(
    new Intl.DateTimeFormat("en", { timeZone, day: "numeric" }).format(today),
  );

  // Υπολογισμός ηλικίας.
  let age = year - birthYear;

  if (month < birthMonth) {
    age--;
  } else if (month === birthMonth && day < birthDay) {
    age--;
  }

  return (
    // Το section δηλώνει θεματική ενότητα. Το lang="el" ορίζει τη γλώσσα του περιεχομένου της.
    // Το py αλλάζει το πάνω και κάτω padding με responsive τιμές base και md.
    <Box lang="el" as="section" py={{ base: 12, md: 16 }}>
      {/* Το Container περιορίζει το πλάτος και το Stack οργανώνει κάθετα τίτλο και παραγράφους. */}
      <Container maxW="3xl">
        <Stack gap={5} align="flex-start">
          {/* Το h2 είναι τίτλος ενότητας κάτω από το h1 της αρχικής, ανεξάρτητα από το fontSize. */}
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="tight"
          >
            Συνοπτικά...
          </Heading>

          {/* Κάθε Text δημιουργεί ξεχωριστή παράγραφο. Το fg.muted αλλάζει με το θέμα. */}
          {/* Το lineHeight και το maxW βοηθούν να διαβάζονται άνετα οι γραμμές. */}
          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Είμαι ο Αλέξανδρος, {age} ετών, με αυτισμό και ΔΕΠΥ. Η εκπαιδευτική
            μου πορεία δεν ήταν γραμμική και για αρκετά χρόνια η εμπειρία μου
            μέσα στην εκπαίδευση με έκανε να αμφιβάλλω για την ικανότητα μου να
            μαθαίνω.
          </Text>

          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Τα projects μου ξεκινούν από μια απλή περιέργεια. Όταν έχω ένα
            ερώτημα - τεχνικό, φιλοσοφικό ή οτιδήποτε άλλο - προσπαθώ να το
            μετατρέπω σε ένα project μέσα από το οποίο μπορώ να μελετήσω, να
            πειραματιστώ και να καταλάβω περισσότερα. Η αναζήτηση της απάντησης
            γίνεται αφορμή για να δημιουργήσω κάτι και να μάθω στην πράξη.
          </Text>

          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Δεν έχω έναν αντίστοιχο τίτλο σπουδών για όλα όσα μαθαίνω και
            εφαρμόζω. Γι’ αυτό θέλω να παρουσιάζω τα projects μου εδώ: να
            φαίνεται τι έχω κατασκευάσει, ποιες γνώσεις χρησιμοποίησα, ποιες
            αποφάσεις πήρα και τι μπορώ να εξηγήσω μέσα από τη δουλειά μου.
          </Text>

          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Έχω ολοκληρώσει την εκπαίδευση μου ως Τεχνικός Δικτύων και
            Τηλεπικοινωνιών και έχω παρακολουθήσει
            εκπαιδευτικά προγράμματα της Cisco. Με ενδιαφέρουν κυρίως τα ηλεκτρονικά συστήματα και τις
            τηλεπικοινωνίες.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
