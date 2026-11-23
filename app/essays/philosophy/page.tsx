import {
  Box,
  Container,
  Heading,
  Separator,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import type { Metadata } from "next";
import Link from "next/link";
import { getEssayCatalog } from "@/lib/essays";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Philosophy",
  description: "Φιλοσοφικά δοκίμια για τη γνώση, την ελευθερία και τη ζωή.",
};

export default async function PhilosophyPage() {
  const catalog = await getEssayCatalog("philosophy");

  return (
    <main id="main-content" lang="el">
      <Container maxW="6xl">
        <Box maxW="3xl">
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="tight"
            mt={3}
          >
            <span lang="en">Philosophy</span>
          </Heading>

          <Text
            color="fg.muted"
            lineHeight="tall"
            mt={4}
            fontFamily="Georgia, serif"
            fontSize={{ base: "md", md: "lg" }}
          >
            Η φιλοσοφία αποτελεί για εμένα έναν χώρο αμφισβήτησης, αυτογνωσίας
            και διαρκούς αναζήτησης, όπου ακόμη και οι πιο αυτονόητες παραδοχές
            μπορούν να τεθούν υπό εξέταση.
          </Text>

          <Text
            color="fg.muted"
            lineHeight="tall"
            mt={4}
            fontFamily="Georgia, serif"
            fontSize={{ base: "md", md: "lg" }}
          >
            Σε αυτή την ενότητα καταγράφω προσωπικούς στοχασμούς γύρω από την
            ανθρώπινη ύπαρξη, την ελευθερία, τη γνώση, την ηθική και το νόημα
            της ζωής. Ιδιαίτερη θέση έχουν οι ιδέες του Friedrich Nietzsche και
            του Arthur Schopenhauer, όχι ως αδιαμφισβήτητες αλήθειες, αλλά ως
            αφετηρίες για σκέψη και προσωπικό προβληματισμό.
          </Text>
        </Box>

        <Text mt={5}>
          <Link href="/essays">← Πίσω στα δοκίμια</Link>
        </Text>

        {(catalog.blobUnavailable || catalog.failedEntries > 0) && (
          <Text role="status" color="fg.muted" mt={4}>
            Ορισμένα δοκίμια δεν ήταν διαθέσιμα. Μπορείς να δοκιμάσεις ξανά
            αργότερα.
          </Text>
        )}

        <Separator borderColor="border.subtle" my={8} />

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mt={4}>
          {catalog.essays.map((essay) => (
            <Link
              key={essay.pathname}
              href={"/essays/philosophy/" + essay.slug}
            >
              <Box
                borderWidth="1px"
                borderColor="border.subtle"
                borderRadius="lg"
                p={{ base: 5, md: 7 }}
                h="full"
                transition="transform 0.2s ease"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Heading as="h2" fontSize={{ base: "lg", md: "xl" }}>
                  {essay.title}
                </Heading>

                {essay.subtitle && (
                  <Text
                    color="fg.muted"
                    fontFamily="Georgia, serif"
                    fontStyle="italic"
                    lineHeight="tall"
                    mt={4}
                  >
                    {essay.subtitle}
                  </Text>
                )}
              </Box>
            </Link>
          ))}
        </SimpleGrid>

        {catalog.essays.length === 0 && (
          <Text role="status" color="fg.muted" mt={6}>
            Δεν υπάρχουν αυτή τη στιγμή διαθέσιμα δοκίμια.
          </Text>
        )}
      </Container>
    </main>
  );
}
