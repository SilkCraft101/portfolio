import { Box, Container, Heading, Stack, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

const imageStyle = {
  borderRadius: "50%",
};

// Εδώ παρουσιάζω σύντομα ποιος είμαι και τι με ενδιαφέρει.
export function Hero() {
  return (
    <Box
      lang="el"
      as="section"
      pt={{ base: 16, md: 24 }}
      pb={{ base: 12, md: 16 }}
    >
      {/* Κρατάω το ίδιο πλάτος με το navbar και τα υπόλοιπα sections. */}
      <Container maxW="3xl">
        <Stack gap={5} align="flex-start">
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
          <Flex w="full" align="center" justify="space-between" gap={6}>
            <Stack gap={5} align="flex-start">
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
            <Image
              src="https://res.cloudinary.com/vvu8rq88/image/upload/v1794304237/jumping-spider-minimal-signed.png"
              width={120}
              height={120}
              alt="My Profile Picture"
              style={imageStyle}
            />
          </Flex>

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
