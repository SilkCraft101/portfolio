import {
  Separator,
  Box,
  Container,
  Heading,
  Stack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import { WorkGridItem } from "@/components/work-grid-item";
import type { Metadata } from "next";
import portfolioPreview from "@/public/images/portfolio-preview.png";

export const metadata: Metadata = {
  title: "Works",
  description: "Τα τεχνικά projects του Αλέξανδρου Κοτσολάκη.",
};

export default function WorksPage() {
  return (
    <Box id="main-content" lang="el" as="main" py={{ base: 12, md: 16 }}>
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

          <Separator borderColor="border.subtle" my={6} w="full" />

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} w="full">
            <WorkGridItem
              id="portfolio"
              title="Προσωπικό Portfolio"
              thumbnail={portfolioPreview.src}
            >
              Το προσωπικό μου Portfolio, κατασκευασμένο με Next.js, TypeScript
              και Chakra UI, παρουσιάζει τα τεχνικά μου projects, τις δεξιότητες
              μου και τη μαθησιακή μου πορεία.
            </WorkGridItem>
          </SimpleGrid>

          {/* Η αναλυτική παρουσίαση του Portfolio μετφέρθηκε στο app/works/portfolio/page.tsx. */}
        </Stack>
      </Container>
    </Box>
  );
}
