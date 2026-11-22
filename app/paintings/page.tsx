import type { Metadata } from "next";
import {
  Dialog,
  Separator,
  Text,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Portal,
} from "@chakra-ui/react";
import Image from "next/image";
import { v2 as cloudinary } from "cloudinary";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Paintings",
  description: "Ζωγραφική του Αλέξανδρου Κοτσολάκη.",
};

type Painting = {
  asset_id: string;
  secure_url: string;
  width: number;
  height: number;
};

type PaintingResult = {
  paintings: Painting[];
  unavailable: boolean;
  truncated: boolean;
};

const MAX_PAINTINGS = 10000;
const CLOUDINARY_IMAGE_PREFIX =
  "https://res.cloudinary.com/vvu8rq88/image/upload/";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isPainting(value: unknown): value is Painting {
  if (!isRecord(value)) {
    return false;
  }

  if (
    typeof value.asset_id !== "string" ||
    value.asset_id.length === 0 ||
    typeof value.secure_url !== "string" ||
    !value.secure_url.startsWith(CLOUDINARY_IMAGE_PREFIX) ||
    !Number.isInteger(value.width) ||
    !Number.isInteger(value.height) ||
    typeof value.width !== "number" ||
    typeof value.height !== "number"
  ) {
    return false;
  }

  return (
    value.width > 0 &&
    value.height > 0 &&
    value.width <= 10000 &&
    value.height <= 10000
  );
}

function readPaintingPage(value: unknown): {
  paintings: Painting[];
  cursor?: string;
} {
  if (!isRecord(value) || !Array.isArray(value.resources)) {
    throw new Error("Invalid Cloudinary Search response.");
  }

  if (
    value.next_cursor !== undefined &&
    typeof value.next_cursor !== "string"
  ) {
    throw new Error("Invalid Cloudinary pagination cursor.");
  }

  const paintings = value.resources.filter(isPainting);
  if (paintings.length !== value.resources.length) {
    console.error("[paintings] Cloudinary returned invalid image metadata.");
  }

  return {
    paintings,
    ...(typeof value.next_cursor === "string"
      ? { cursor: value.next_cursor }
      : {}),
  };
}

async function getPaintings(): Promise<PaintingResult> {
  const configuration = cloudinary.config();
  if (
    !configuration.cloud_name ||
    !configuration.api_key ||
    !configuration.api_secret
  ) {
    console.error("[paintings] Cloudinary credentials are not configured.");
    return { paintings: [], unavailable: true, truncated: false };
  }

  const paintings: Painting[] = [];
  const cursors = new Set<string>();
  let cursor: string | undefined;

  do {
    const search = cloudinary.search
      .expression("resource_type:image AND asset_folder=portfolio/paintings")
      .sort_by("public_id", "asc")
      .max_results(500);

    if (cursor) {
      search.next_cursor(cursor);
    }

    const page = readPaintingPage(await search.execute());
    paintings.push(...page.paintings);

    if (!page.cursor) {
      return { paintings, unavailable: false, truncated: false };
    }

    if (cursors.has(page.cursor)) {
      throw new Error("Cloudinary returned a repeated pagination cursor.");
    }
    cursors.add(page.cursor);

    if (paintings.length >= MAX_PAINTINGS) {
      console.error("[paintings] Gallery result limit reached.");
      return {
        paintings: paintings.slice(0, MAX_PAINTINGS),
        unavailable: false,
        truncated: true,
      };
    }

    cursor = page.cursor;
  } while (cursor);

  return { paintings, unavailable: false, truncated: false };
}

export default async function PaintingsPage() {
  const result = await getPaintings();

  return (
    <main id="main-content" lang="el">
      <Box py={{ base: 12, md: 16 }}>
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
                Το παλιό μου username ήταν <span lang="en">l1ttle0reo</span>.
              </Text>
            </Stack>

            <Separator borderColor="border.subtle" my={6} w="full" />

            {result.unavailable && (
              <Text role="status" color="fg.muted">
                Η γκαλερί δεν είναι προσωρινά διαθέσιμη.
              </Text>
            )}

            <SimpleGrid
              w="full"
              columns={{ base: 1, md: 2, lg: 3 }}
              gap="20px"
            >
              {result.paintings.map((painting, index) => (
                <Dialog.Root key={painting.asset_id} size="xl" placement="center">
                  <Dialog.Trigger
                    aria-label={"Μεγέθυνση ζωγραφιάς " + (index + 1)}
                  >
                    <Image
                      src={painting.secure_url}
                      width={painting.width}
                      height={painting.height}
                      alt={"Ζωγραφιά " + (index + 1) + " του Αλέξανδρου Κοτσολάκη"}
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

                  <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                      <Dialog.Content
                        aria-label={"Ζωγραφιά " + (index + 1)}
                      >
                        <Dialog.Header>
                          <Dialog.Title>
                            Ζωγραφιά {index + 1}
                          </Dialog.Title>
                          <Dialog.CloseTrigger
                            aria-label="Κλείσιμο μεγέθυνσης"
                            p={3}
                          >
                            Κλείσιμο ×
                          </Dialog.CloseTrigger>
                        </Dialog.Header>

                        <Dialog.Body>
                          <Image
                            src={painting.secure_url}
                            width={painting.width}
                            height={painting.height}
                            alt={"Ζωγραφιά " + (index + 1) + " σε μεγέθυνση"}
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
                  </Portal>
                </Dialog.Root>
              ))}
            </SimpleGrid>

            {!result.unavailable && result.paintings.length === 0 && (
              <Text role="status">Δεν υπάρχουν ακόμη ζωγραφιές.</Text>
            )}

            {result.truncated && (
              <Text role="status" color="fg.muted">
                Εμφανίζονται οι πρώτες {MAX_PAINTINGS} ζωγραφιές.
              </Text>
            )}
          </Stack>
        </Container>
      </Box>
    </main>
  );
}
