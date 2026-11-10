import { Box, Container, Heading, Stack } from "@chakra-ui/react";

// Αυτό είναι προς το παρόν μόνο το section των ενδιαφερόντων. Δεν υλοποιεί μεταφόρτωση ή gallery.
// Το Home το εισάγει με { Hobbies } και επιλέγει σε ποιο σημείο εμφανίζεται.
export function Hobbies() {
  return (
    // Το Box γίνεται section και ορίζει τη γλώσσα για τα στοιχεία που περιέχει.
    <Box lang="el" as="section" py={{ base: 12, md: 16 }}>
      {/* Το Container κρατά κοινό πλάτος με την αρχική και το Stack οργανώνει το περιεχόμενο κάθετα. */}
      <Container maxW="3xl">
        <Stack gap={5} align="flex-start">
          {/* Το h2 δηλώνει τίτλο ενότητας. Τα base και md ορίζουν responsive μέγεθος γραμμάτων. */}
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
