import {
  Separator,
  Container,
  Heading,
  Text,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { getPublishedEssays, getEssayMetadata } from "@/lib/essays";

export const dynamic = "force-dynamic";

export default async function LearningPage() {
  const essays = await getPublishedEssays("learning");

  // Ανακτώ τα μεταδεδομένα όλων των δημοσιευμένων δοκιμίων.
  const publishedEssays = await Promise.all(
    essays.map(async (essay) => ({
      ...essay,
      metadata: await getEssayMetadata(essay.pathname),
    })),
  );

  // Διαβάζω το τοπικό δοκίμιο για να ανακτήσω τα metadata του.
  const essayPath = path.join(
    process.cwd(),
    "content",
    "essays",
    "learning",
    "i-techni-tou-na-mathaineis.md",
  );

  const markdown = await readFile(essayPath, "utf8");
  const { data } = matter(markdown);

  const title = typeof data.title === "string" ? data.title : "";
  const subtitle = typeof data.subtitle === "string" ? data.subtitle : "";
  return (
    <Container maxW="6xl">
      <Box maxW="3xl">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl" }}
          letterSpacing="tight"
          mt={3}
        >
          How We Learn
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
          Learning), την γνωστική ψυχολογία, τη λειτουργία της μνήμης και τις
          στρατηγικές που υποστηρίζουν την αποτελεσματική μάθηση. Παράλληλα,
          εξετάζω ιδέες και τεχνικές του Tony Buzan, Richard Feynman και Justin
          Sung, προσεγγίζοντας τες με προσωπική περιέργειεα και κριτική σκέψη.
        </Text>
      </Box>

      <Separator borderColor="border.subtle" my={8} />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6} mt={4}>
        <Link href="/essays/learning/i-techni-tou-na-mathaineis">
          <Box
            borderWidth="1px"
            borderColor="border.subtle"
            borderRadius="lg"
            p={{ base: 5, md: 7 }}
            h="full"
            transition="transform 0.2s ease"
            _hover={{ transform: "translateY(-4px)" }}
          >
            <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
              {title}
            </Heading>

            {subtitle && (
              <Text
                color="fg.muted"
                fontFamily="Georgia, serif"
                fontStyle="italic"
                lineHeight="tall"
                mt={4}
              >
                {subtitle}
              </Text>
            )}
          </Box>
        </Link>

        {/* Δυναμικά δοκίμια αποθηκευμένα στο Vercel Blob. */}
        {publishedEssays.map((essay) => {
          const slug = essay.pathname.split("/").pop()?.replace(/\.md$/, "");

          if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
            return null;
          }

          return (
            <Link key={essay.pathname} href={`/essays/learning/${slug}`}>
              <Box
                borderWidth="1px"
                borderColor="border.subtle"
                borderRadius="lg"
                p={{ base: 5, md: 7 }}
                h="full"
                transition="transform 0.2s ease"
                _hover={{ transform: "translateY(-4px)" }}
              >
                <Heading as="h3" fontSize={{ base: "lg", md: "xl" }}>
                  {essay.metadata?.title ?? slug}
                </Heading>

                {essay.metadata?.subtitle && (
                  <Text
                    color="fg.muted"
                    fontFamily="Georgia, serif"
                    fontStyle="italic"
                    lineHeight="tall"
                    mt={4}
                  >
                    {essay.metadata.subtitle}
                  </Text>
                )}
              </Box>
            </Link>
          );
        })}
      </SimpleGrid>
    </Container>
  );
}
