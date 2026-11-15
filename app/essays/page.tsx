import { Container, Heading } from "@chakra-ui/react";

export default function EssaysPage() {
  return (
    <Container maxW="3xl">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl" }}
        letterSpacing="tight"
      >
        Essays
      </Heading>
    </Container>
  );
}
