"use client";

import Link from "next/link";

import {
  Box,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

import { ColorModeButton } from "@/components/ui/color-mode";

// Κοινό χρώμα και ομαλή αλλαγή στο hover των links πλοήγησης.
const navLinkStyles = {
  _hover: {
    color: "linkHover",
  },
  transition: "color 0.2s ease",
};

// Κρατάω εδώ την πλοήγηση. Η λογική του θέματος μένει στο color-mode.tsx.
export function Navbar() {
  return (
    // Το ημιδιαφανές φόντο αφήνει να φαίνεται το περιεχόμενο πίσω από το sticky navbar.
    <Box
      as="nav"
      width="100%"
      position="sticky"
      top={0}
      zIndex={10}
      bg="bg/80"
      backdropFilter="blur(10px)"
      borderBottomWidth="1px"
      borderColor="border.subtle"
    >
      <Container maxW="3xl">
        <Flex align="center" justify="space-between" py={3}>
          {/* Με το asChild περνάω τα styles στο ίδιο το Link, χωρίς επιπλέον στοιχείο. */}
          <Text
            asChild
            fontWeight="bold"
            fontSize="lg"
            letterSpacing="tight"
            _hover={{
              color: "accent",
            }}
            transition="color 0.2s ease"
          >
            <Link href="/">Alex Kotsolakis</Link>
          </Text>

          {/* Τα /works και /about δεν έχουν ακόμη τις δικές τους σελίδες. */}
          <HStack gap={5}>
            <Text asChild fontWeight="medium" fontSize="sm" {...navLinkStyles}>
              <Link href="/works">Works</Link>
            </Text>

            <Text asChild fontWeight="medium" fontSize="sm" {...navLinkStyles}>
              <Link href="/about">About</Link>
            </Text>

            <ChakraLink
              href="https://github.com/SilkCraft101"
              target="_blank"
              rel="noopener noreferrer"
              fontWeight="medium"
              fontSize="sm"
              {...navLinkStyles}
            >
              GitHub
            </ChakraLink>

            <ColorModeButton
              _hover={{ color: "accent" }}
              transition="color 0.2s ease"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
