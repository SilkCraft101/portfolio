import { Heading, HStack, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

// Το Hobbies συγκεντρώνει τους συνδέσμους των ενδιαφερόντων μου.
export function Hobbies() {
  return (
    // Το εξωτερικό Stack τοποθετεί το τίτλο πάνω από τους συνδέσμους.
    <Stack gap={2} align="flex-start">
      <Heading as="h2" fontSize="md" letterSpacing="tight">
        Ενδιαφέροντα...
      </Heading>

      {/* Το HStack τοποθετεί τους συνδέσμους οριζόντια. */}
      <HStack gap={4}>
        <Text
          asChild
          color="accent"
          fontWeight="medium"
          textDecoration="underline"
        >
          <Link href="/paintings">Ζωγραφική</Link>
        </Text>
        <Text
          asChild
          color="accent"
          fontWeight="medium"
          textDecoration="underline"
        >
          <Link href="/essays">Δοκίμια</Link>
        </Text>

        <Text
          asChild
          color="accent"
          fontWeight="medium"
          textDecoration="underline"
        >
          <Link href="/music">Μουσική</Link>
        </Text>
      </HStack>
    </Stack>
  );
}
