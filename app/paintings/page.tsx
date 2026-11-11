import {
  Text,
  Box,
  Container,
  Dialog,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import Image from "next/image";

import { v2 as cloudinary } from "cloudinary";

// Στο δημοσιευμένο site η λίστα ανανεώνεται μετά από 60 δευτερόλεπτα,
// όταν υπάρξει νέα επίσκεψη, χωρίς να χρειάζεται νέο build.
export const revalidate = 60;

type Painting = {
  asset_id: string;
  secure_url: string;
  width: number;
  height: number;
};

type PaintingSearchResult = {
  resources: Painting[];
  next_cursor?: string;
};

export default async function PaintingsPage() {
  const paintings: Painting[] = [];
  let cursor: string | undefined;

  // Αν υπάρχουν επιπλέον αποτελέσματα, ζητάω και την επόμενη σελίδα.
  do {
    const search = cloudinary.search
      .expression("resource_type:image AND asset_folder=portfolio/paintings")
      .sort_by("public_id", "asc")
      .max_results(500);

    if (cursor) search.next_cursor(cursor);

    const result: PaintingSearchResult = await search.execute();
    paintings.push(...result.resources);
    cursor = result.next_cursor;
  } while (cursor);

  return (
    <Box as="main" lang="el" py={{ base: 12, md: 16 }}>
      <Container maxW="3xl">
        <Stack gap={6} align="flex-start">
          <Stack gap={2}>
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "3xl" }}
              letterSpacing="tight"
            >
              Ζωγραφική
            </Heading>
            <Text color="fg.muted" lineHeight="tall">
              Το παλιό μου username ήταν `l1ttle0reo`.
            </Text>
          </Stack>
          <SimpleGrid w="full" columns={{ base: 1, md: 2, lg: 3 }} gap="20px">
            {/* Η map δημιουργεί ένα ξεχωριστό Dialog για κάθε ζωγραφιά.
                Το key αναγνωρίζει σταθερά κάθε καταχώρηση στη λίστα. */}
            {paintings.map((painting, index) => (
              <Dialog.Root key={painting.asset_id} size="xl" placement="center">
                {/* Το Trigger είναι το κουμπί με τη μικρογραφία. */}
                <Dialog.Trigger aria-label={`Μεγέθυνση ζωγραφιάς ${index + 1}`}>
                  <Image
                    src={painting.secure_url}
                    width={painting.width}
                    height={painting.height}
                    alt={`Ζωγραφιά ${index + 1} του Αλέξανδρου Κοτσολάκη`}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(min-width: 1024px) 240px, (min-width: 768px) 360px, 100vw"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                      cursor: "zoom-in",
                    }}
                  />
                </Dialog.Trigger>

                {/* Το Backdrop καλύπτει την περιοχή πίσω από το παράθυρο. */}
                <Dialog.Backdrop />

                <Dialog.Positioner>
                  <Dialog.Content aria-label={`Ζωγραφιά ${index + 1}`}>
                    <Dialog.CloseTrigger
                      aria-label="Κλείσιμο μεγέθυνσης"
                      alignSelf="flex-end"
                      p={3}
                    >
                      Κλείσιμο ×
                    </Dialog.CloseTrigger>

                    {/* Το Body περιέχει τη μεγάλη εικόνα. */}
                    <Dialog.Body>
                      <Image
                        src={painting.secure_url}
                        width={painting.width}
                        height={painting.height}
                        alt={`Ζωγραφιά ${index + 1} σε μεγέθυνση`}
                        sizes="(min-width: 768px) 768px, 100vw"
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "10px",
                        }}
                      />
                    </Dialog.Body>
                  </Dialog.Content>
                </Dialog.Positioner>
              </Dialog.Root>
            ))}
          </SimpleGrid>
          {paintings.length === 0 && <p>Δεν υπάρχουν ακόμη ζωγραφιές.</p>}
        </Stack>
      </Container>
    </Box>
  );
}
