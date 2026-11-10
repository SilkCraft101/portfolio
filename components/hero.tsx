// Τα Chakra components δίνουν τη δομή και τα style props. Το Image εισάγεται ξεχωριστά από το Next.js.
import { Box, Container, Heading, Stack, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

// Συγκεντρώνω εδώ τα styles της εικόνας και τα περνάω στο Image με style={imageStyle}.
// Το borderRadius: "50%" κάνει την τετράγωνη εικόνα κυκλική.
const imageStyle = {
  borderRadius: "50%",
};

// Εδώ παρουσιάζω σύντομα ποιος είμαι και τι με ενδιαφέρει.
export function Hero() {
  return (
    // Το as="section" ορίζει το HTML στοιχείο. Το lang κληρονομείται από τα στοιχεία μέσα του.
    // Τα base και md αλλάζουν το padding από το αντίστοιχο breakpoint και πάνω.
    <Box
      lang="el"
      as="section"
      pt={{ base: 16, md: 24 }}
      pb={{ base: 12, md: 16 }}
    >
      {/* Κρατάω το ίδιο πλάτος με το navbar και τα υπόλοιπα sections. */}
      <Container maxW="3xl">
        {/* Το gap ορίζει αποστάσεις μόνο ανάμεσα στα άμεσα παιδιά αυτού του Stack. */}
        <Stack gap={5} align="flex-start">
          {/* Το accent/10 δίνει 10% αδιαφάνεια μόνο στο χρώμα φόντου, όχι στο κείμενο. */}
          {/* Τα pt, pb και px προσθέτουν εσωτερικό χώρο πάνω, κάτω και στα πλάγια. */}
          <Box
            pt={3}
            pb={3}
            px={4}
            bg="accent/10"
            w="full"
            borderWidth="1px"
            borderColor="border.subtle"
            borderRadius="10px"
            textAlign="center"
          >
            <Text
              fontSize="sm"
              fontWeight="medium"
              color="fg.muted"
              letterSpacing="wide"
            >
              Χαίρετε! Είμαι indie developer και ασχολούμαι κυρίως με την
              ανάπτυξη Terminal-based λογισμικού.
            </Text>
          </Box>
          {/* Το Flex βάζει δίπλα την ομάδα κειμένων και την εικόνα. */}
          {/* Το justify μοιράζει τον οριζόντιο χώρο και το align τα ευθυγραμμίζει κατακόρυφα. */}
          <Flex w="full" align="center" justify="space-between" gap={6}>
            {/* Το εσωτερικό Stack κρατά το όνομα και την ιδιότητα το ένα κάτω από το άλλο. */}
            <Stack gap={5} align="flex-start">
              {/* Το h1 ονομάζει τη σελίδα. Το fontSize ρυθμίζει την εμφάνιση, όχι τη σημασιολογική βαθμίδα. */}
              <Heading
                as="h1"
                fontSize={{ base: "3xl", md: "4xl" }}
                letterSpacing="tight"
              >
                Αλέξανδρος Κοτσολάκης
              </Heading>

              <Text color="fg.muted" lineHeight="tall">
                Indie Developer / Artist / Networking and Telecommunications.
              </Text>
            </Stack>
            {/* Το src είναι URL από το Cloudinary, επιτρεπόμενο μέσω remotePatterns στο next.config.ts. */}
            {/* Τα width/height δίνουν αναλογία και αρχικές διαστάσεις· το CSS επηρεάζει το τελικό μέγεθος. */}
            {/* Το alt περιγράφει την εικόνα όταν δεν προβάλλεται ή διαβάζεται με screen reader. */}
            <Image
              src="https://res.cloudinary.com/vvu8rq88/image/upload/v1794304237/jumping-spider-minimal-signed.png"
              width={120}
              height={120}
              alt="My Profile Picture"
              style={imageStyle}
            />
          </Flex>

          {/* Το h2 ξεκινά την επόμενη ενότητα, με μικρότερο fontSize από το όνομα. */}
          <Heading
            as="h2"
            fontSize={{
              base: "xl",
              md: "2xl",
            }}
            lineHeight="1.05"
            letterSpacing="tight"
            maxW="2xl"
          >
            Μαθαίνω βρίσκοντας απαντήσεις στα ερωτήματα μου.
          </Heading>

          {/* Το maxW περιορίζει το μήκος της γραμμής και το lineHeight αφήνει χώρο ανάμεσα στις γραμμές. */}
          <Text
            fontSize={{
              base: "md",
              md: "lg",
            }}
            color="fg.muted"
            lineHeight="tall"
            maxW="xl"
          >
            Έχω υπόβαθρο στα Δίκτυα και τις
            Τηλεπικοινωνίες και κύριο ενδιαφέρον τα δίκτυα, την ασφάλεια και την
            κατανόηση του τρόπου με τον οποίο λειτουργούν τα συστήματα.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
