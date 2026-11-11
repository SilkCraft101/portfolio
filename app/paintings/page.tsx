import { Box, Container, Heading, Stack } from "@chakra-ui/react";
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

          {/* Οι αρχικές διαστάσεις δίνουν την αναλογία της ζωγραφιάς.
              Το CSS περιορίζει το πλάτος και προσαρμόζει αυτόματα το ύψος. */}
          <Image
            src="https://res.cloudinary.com/vvu8rq88/image/upload/v1794319965/billie.png"
            width={1908}
            height={2746}
            alt="Ζωγραφιά της Billie"
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
