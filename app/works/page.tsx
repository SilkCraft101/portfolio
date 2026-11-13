import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";

const imageStyle = {
  width: "300px",
  height: "auto",
};

export default function WorksPage() {
  return (
    <Box lang="el" as="main" py={{ base: 12, md: 16 }}>
      <Container maxW="3xl">
        <Stack gap={5} align="flex-start">
          {/* Κύριος τίτλος της σελίδας */}
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="tight"
          >
            Works.
          </Heading>

          {/* Εισαγωγή */}
          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Δημιούργησα το προσωπικό μου Portfolio για να παρουσιάζω όχι μόνο τα
            projects μου αλλά και τη μαθησιακή διαδικασία πίσω από αυτά.
          </Text>

          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Κάθε project ξεκινά από ένα γιατί και εξελίσσεται μέσα από μελέτη,
            πειραματισμό και πρακτική εφαρμογή.
          </Text>

          <Text color="fg.muted" lineHeight="tall" maxW="2xl">
            Στόχος μου είναι να καταγράφω με διαφάνεια και ειλικρίνεια όσα έχω
            κατασκευάσει, όσα έχω μάθει και όσα βρίσκονται ακόμη σε εξέλιξη.
          </Text>

          {/* Πρώτο project: Προσωπικό Portfolio */}
          <Flex
            w="full"
            align="flex-start"
            gap={5}
            direction={{ base: "column", md: "row" }}
          >
            {/* Εικόνα προεπισκόπησης */}
            <Image
              src="/images/portfolio-preview.png"
              alt="Προεπισκόπιση της αρχικής σελίδας του προσωπικού μου Portfolio"
              width={911}
              height={1207}
              style={imageStyle}
            />

            {/* Πληροφορίες του project */}
            <Stack gap={5} align="flex-start">
              {/* Τίτλος */}
              <Heading
                as="h2"
                fontSize={{ base: "2xl", md: "3xl" }}
                letterSpacing="tight"
              >
                Προσωπικό Portfolio
              </Heading>

              {/* Κατάσταση ανάπτυξης */}
              <Text color="accent" fontSize="medium">
                Δημοσιευμένο / συνεχίζεται η ανάπτυξη
              </Text>

              {/* Σύνδεσμος προς το GitHub Repo του project. */}
              <ChakraLink
                href="https://github.com/SilkCraft101/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                color="accent"
                fontWeight="medium"
                textDecoration="underline"
              >
                GitHub Repository
              </ChakraLink>

              {/* Περιγραφή */}
              <Box bg="accent/10" p={4} borderRadius="md">
                <Text color="fg.muted">
                  Η προσωπική μου σελίδα λειτουργεί ως ψηφιακό βιογραφικό και
                  τεχνικό Portfolio. Συγκεντρώνει την προσωπική μου ιστορία, τα
                  projects μου στο GitHub και τα δημιουργικά μου ενδιαφέροντα.
                </Text>

                <Text color="fg.muted">
                  Αναπτύσσεται με Next.js, TypeScript και Chakra UI και
                  περιλαμβάνει λειτουργίες όπως αυτόματο υπολογισμό ηλικίας και
                  γκαλερί ζωγραφικής με δυναμική ανάκτηση εικόνων από το
                  Cloudinary.
                </Text>
              </Box>

              {/* Τεχνολογίες */}
              <Text fontSize="sm" color="fg.muted">
                Next.js / React / TypeScript / Chakra UI
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
