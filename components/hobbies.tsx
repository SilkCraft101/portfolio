import { Box, Container, Heading, Stack } from "@chakra-ui/react";

// Εδώ θα ανεβάζω ότι σχετίζεται με τα hobbies μου.
export function Hobbies() {
  return (
    <Box lang="el" as="section" py={{ base: 12, md: 16 }}>
      <Container maxW="3xl">
        <Stack gap={5} align="flex-start">
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            letterSpacing="tight"
          >
            Ενδιαφέροντα!
          </Heading>
        </Stack>
      </Container>
    </Box>
  );
}
