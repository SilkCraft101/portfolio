import {
  Box,
  Container,
  Dialog,
  Heading,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

export default function PaintingsPage() {
  return (
    <Box as="main" lang="el" py={{ base: 12, md: 16 }}>
      <Container maxW="3xl">
        <Stack gap={6} align="flex-start">
          <Heading
            as="h1"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="tight"
          >
            Ζωγραφική
          </Heading>

          <SimpleGrid w="full" columns={{ base: 1, md: 2, lg: 3 }} gap="20px">
            <Dialog.Root size="xl" placement="center">
              {/* Το Trigger είναι το κουμπί με τη μικρογραφία. */}
              <Dialog.Trigger aria-label="Μεγέθυνση ζωγραφιάς της Billie">
                <Image
                  src="https://res.cloudinary.com/vvu8rq88/image/upload/v1794319965/billie.png"
                  width={1908}
                  height={2746}
                  alt="Ζωγραφιά της Billie"
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
                <Dialog.Content aria-label="Ζωγραφιά της Billie">
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
                      src="https://res.cloudinary.com/vvu8rq88/image/upload/v1794319965/billie.png"
                      width={1908}
                      height={2746}
                      alt="Ζωγραφιά της Billie σε μεγέθυνση"
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
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
