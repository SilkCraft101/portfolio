// Το client boundary επιτρέπει τη συμμετοχή του Navbar στο διαδραστικό μέρος της εφαρμογής.
// Δεν σημαίνει ότι αποκλείεται η παραγωγή αρχικού HTML στον server.
"use client";

// Το Next Link χειρίζεται τις εσωτερικές διαδρομές. Το Chakra Link εισάγεται ως ChakraLink για να ξεχωρίζει.
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

// Συγκεντρώνω τα κοινά styles και τα περνάω στα links με {...navLinkStyles}.
// Το _hover ορίζει το χρώμα όταν ο δείκτης είναι πάνω στο link. Το transition αφορά την ιδιότητα color.
const navLinkStyles = {
  _hover: {
    color: "linkHover",
  },
  transition: "color 0.2s ease",
};

// Κρατάω εδώ την πλοήγηση. Η λογική του θέματος μένει στο color-mode.tsx.
export function Navbar() {
  return (
    // Το sticky μαζί με top={0} κρατά την πλοήγηση στην κορυφή, μέσα στα όρια του γονέα της.
    // Το bg/80 δίνει 80% αδιαφάνεια στο φόντο και το backdropFilter θολώνει το περιεχόμενο πίσω του.
    // Το zIndex καθορίζει τη σειρά επικάλυψης και το border.subtle παίρνει χρώμα από το θέμα.
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
        {/* Το Flex χωρίζει όνομα και επιλογές στα δύο άκρα. Το align τα κεντράρει κατακόρυφα. */}
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

          {/* Το HStack βάζει τα links και το κουμπί σε σειρά. Το Works οδηγεί στο /#works και το About στο /about. */}
          <HStack gap={5}>
            <Text asChild fontWeight="medium" fontSize="sm" {...navLinkStyles}>
              <Link href="/#works">Works</Link>
            </Text>

            <Text asChild fontWeight="medium" fontSize="sm" {...navLinkStyles}>
              <Link href="/about">About</Link>
            </Text>

            {/* Το εξωτερικό link ανοίγει σε νέα καρτέλα. Το rel περιορίζει πρόσβαση στο opener και αποστολή referrer. */}
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

            {/* Εδώ ορίζω την εμφάνιση του κουμπιού. Η αλλαγή θέματος υλοποιείται στο color-mode.tsx. */}
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
