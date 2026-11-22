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
  title: "Learning",
  description: "Δοκίμια για τη μάθηση, τη μνήμη και τη γνωστική ψυχολογία.",
};

export default async function LearningPage() {
  const catalog = await getEssayCatalog("learning");
  const hasIssues =
    catalog.blobUnavailable ||
    catalog.localUnavailable ||
    catalog.failedEntries > 0;

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
            <span lang="en">How We Learn</span>
          </Heading>

          <Text
            color="fg.muted"
            fontFamily="Georgia, serif"
            lineHeight="tall"
            fontSize={{ base: "md", md: "lg" }}
            mt={4}
          >
            Η μάθηση δεν είναι απλώς η απομνημόνευση πληροφοριών, αλλά μια σύνθετη
            διαδικασία κατανόησης, σύνδεσης και αναδόμησης της γνώσης.
          </Text>

          <Text
            color="fg.muted"
            lineHeight="tall"
            mt={4}
            fontFamily="Georgia, serif"
            fontSize={{ base: "md", md: "lg" }}
          >
            Σε αυτή την ενότητα εξερευνώ την Επιστήμη της Μάθησης (Science of
            Learning), τη γνωστική ψυχολογία, τη λειτουργία της μνήμης και τις
            στρατηγικές που υποστηρίζουν την αποτελεσματική μάθηση. Παράλληλα,
            εξετάζω ιδέες και τεχνικές των Tony Buzan, Richard Feynman και Justin
            Sung, προσεγγίζοντάς τες με προσωπική περιέργεια και κριτική σκέψη.
          </Text>
        </Box>

        {hasIssues && (
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
              href={"/essays/learning/" + essay.slug}
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
