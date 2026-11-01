"use client";

// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

// Το Link είναι το component του Next.js για εσωτερικό navigation.
//
// Το χρησιμοποιούμε όταν θέλουμε να μετακινηθούμε σε routes
// που ανήκουν στην ίδια την εφαρμογή, όπως:
//
// /
// /works
// /about
//
// Σε αντίθεση με ένα απλό <a>, το Next.js Link μπορεί να κάνει
// client-side navigation χωρίς να χρειάζεται πλήρες reload της σελίδας.
import Link from "next/link";

// Τα Chakra components λειτουργούν ως τα βασικά UI building blocks
// που χρησιμοποιούμε για το layout και το styling του Navbar.
//
// Box
// → γενικό container.
//
// Container
// → περιορίζει το μέγιστο πλάτος του περιεχομένου.
//
// Flex
// → δημιουργεί layout χρησιμοποιώντας CSS Flexbox.
//
// HStack
// → τοποθετεί τα children οριζόντια με ελεγχόμενο spacing.
//
// Link
// → Chakra component για links.
//   Το μετονομάζουμε σε ChakraLink για να μην μπερδεύεται
//   με το Link που εισάγουμε από το Next.js.
//
// Text
// → component για typography και κείμενο.
import {
  Box,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";

// Το ColorModeButton δημιουργήθηκε από το επίσημο Chakra CLI.
//
// Περιέχει ήδη τη λογική για:
//
// - ανάγνωση του ενεργού theme,
// - αλλαγή μεταξύ light και dark mode,
// - εμφάνιση Sun / Moon icon.
//
// Έτσι το Navbar δεν χρειάζεται να γνωρίζει πώς λειτουργεί
// εσωτερικά το theme system.
import { ColorModeButton } from "@/components/ui/color-mode";

// -----------------------------------------------------------------------------
// NAVBAR COMPONENT
// -----------------------------------------------------------------------------

// Το Navbar είναι ένα reusable React component.
//
// Η ευθύνη του είναι να εμφανίζει το βασικό navigation
// του portfolio.
//
// Το κρατάμε σε ξεχωριστό αρχείο αντί να γράψουμε όλο
// το navigation μέσα στο page.tsx.
//
// Αυτό μας βοηθά να έχουμε:
//
// 1. μικρότερα components,
// 2. καθαρότερο κώδικα,
// 3. καλύτερο separation of concerns,
// 4. δυνατότητα επαναχρησιμοποίησης του Navbar.
export function Navbar() {
  return (
    // -------------------------------------------------------------------------
    // NAVIGATION WRAPPER
    // -------------------------------------------------------------------------

    // Το Box είναι το εξωτερικό wrapper του Navbar.
    //
    // as="nav"
    // → αντί να δημιουργηθεί ένα απλό <div>,
    //   δημιουργείται semantic HTML <nav>.
    //
    // width="100%"
    // → το Navbar καταλαμβάνει ολόκληρο το διαθέσιμο πλάτος.
    //
    // position="sticky"
    // → το Navbar παραμένει ορατό καθώς κάνουμε scroll.
    //
    // top={0}
    // → όταν γίνει sticky, κολλάει στην κορυφή του viewport.
    //
    // zIndex={10}
    // → το κρατά πάνω από το περιεχόμενο που περνά από πίσω.
    //
    // bg="bg/80"
    // → χρησιμοποιούμε semantic Chakra background color
    //   με διαφάνεια.
    //
    //   Επειδή είναι semantic color, μπορεί να προσαρμοστεί
    //   αυτόματα στο light και στο dark mode.
    //
    // backdropFilter
    // → δημιουργεί ένα ελαφρύ blur στο περιεχόμενο που
    //   περνά πίσω από το ημιδιαφανές Navbar.
    //
    // borderBottomWidth
    // → δημιουργεί ένα λεπτό border κάτω από το Navbar.
    //
    // borderColor="border.subtle"
    // → χρησιμοποιούμε semantic Chakra color ώστε το border
    //   να λειτουργεί σωστά και στα δύο themes.
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
      {/*
        -----------------------------------------------------------------------
        CONTENT CONTAINER
        -----------------------------------------------------------------------

        Το Navbar καταλαμβάνει όλο το πλάτος της οθόνης,
        αλλά δεν θέλουμε το πραγματικό περιεχόμενό του να
        απλώνεται από τη μία άκρη μέχρι την άλλη.

        Το Container δημιουργεί ένα ελεγχόμενο μέγιστο πλάτος
        και κρατά το περιεχόμενο κεντραρισμένο.

        maxW="3xl"
        → χρησιμοποιούμε ένα predefined size του Chakra.
      */}
      <Container maxW="3xl">

        {/*
          ---------------------------------------------------------------------
          MAIN FLEX LAYOUT
          ---------------------------------------------------------------------

          Το Flex χωρίζει το Navbar σε δύο βασικές περιοχές:

          ΑΡΙΣΤΕΡΑ
          → Alex Kotsolakis

          ΔΕΞΙΑ
          → Works
          → About
          → GitHub
          → Light / Dark mode

          align="center"
          → ευθυγραμμίζει τα στοιχεία κατακόρυφα.

          justify="space-between"
          → τοποθετεί το brand αριστερά και το navigation δεξιά.

          py={3}
          → προσθέτει vertical padding πάνω και κάτω.
        */}
        <Flex
          align="center"
          justify="space-between"
          py={3}
        >

          {/* ---------------------------------------------------------------- */}
          {/* BRAND / HOME LINK                                                */}
          {/* ---------------------------------------------------------------- */}

          {/*
            Το όνομά μας λειτουργεί ταυτόχρονα ως brand και ως
            σύνδεσμος επιστροφής στην αρχική σελίδα.

            asChild
            → το Chakra Text δεν δημιουργεί περιττό wrapper.
              Αντίθετα, εφαρμόζει τα styles στο Next.js Link
              που βρίσκεται μέσα του.

            fontWeight="bold"
            → δίνει μεγαλύτερη οπτική έμφαση στο brand.

            fontSize="lg"
            → το brand είναι ελαφρώς μεγαλύτερο από τα nav links.

            letterSpacing="tight"
            → μειώνει ελαφρά την απόσταση μεταξύ χαρακτήρων.

            _hover
            → Chakra pseudo-style που ενεργοποιείται όταν
              ο pointer βρίσκεται πάνω στο element.

            transition
            → κάνει την αλλαγή του opacity ομαλή αντί απότομη.
          */}
          <Text
            asChild
            fontWeight="bold"
            fontSize="lg"
            letterSpacing="tight"
            _hover={{
              opacity: 0.75,
            }}
            transition="opacity 0.2s ease"
          >
            <Link href="/">
              Alex Kotsolakis
            </Link>
          </Text>

          {/* ---------------------------------------------------------------- */}
          {/* NAVIGATION LINKS + ACTIONS                                       */}
          {/* ---------------------------------------------------------------- */}

          {/*
            Το HStack είναι ένα horizontal stack.

            Το χρησιμοποιούμε επειδή όλα τα navigation elements
            πρέπει να εμφανίζονται στην ίδια οριζόντια γραμμή.

            gap={5}
            → καθορίζει την απόσταση μεταξύ των children.
          */}
          <HStack gap={5}>

            {/* -------------------------------------------------------------- */}
            {/* WORKS                                                          */}
            {/* -------------------------------------------------------------- */}

            {/*
              Το Works είναι εσωτερικό route του portfolio.

              Γι' αυτό χρησιμοποιούμε Next.js Link.

              fontWeight="medium"
              → μικρότερη έμφαση από το brand.

              fontSize="sm"
              → κρατά το navigation διακριτικό.

              Το ίδιο hover και transition θα χρησιμοποιηθεί
              και στα υπόλοιπα navigation links ώστε να έχουμε
              συνεπή συμπεριφορά.
            */}
            <Text
              asChild
              fontWeight="medium"
              fontSize="sm"
              _hover={{
                opacity: 0.65,
              }}
              transition="opacity 0.2s ease"
            >
              <Link href="/works">
                Works
              </Link>
            </Text>

            {/* -------------------------------------------------------------- */}
            {/* ABOUT                                                          */}
            {/* -------------------------------------------------------------- */}

            {/*
              Το About είναι επίσης εσωτερικό route.

              Χρησιμοποιούμε ακριβώς την ίδια οπτική συμπεριφορά
              με το Works ώστε το navigation να έχει συνέπεια.
            */}
            <Text
              asChild
              fontWeight="medium"
              fontSize="sm"
              _hover={{
                opacity: 0.65,
              }}
              transition="opacity 0.2s ease"
            >
              <Link href="/about">
                About
              </Link>
            </Text>

            {/* -------------------------------------------------------------- */}
            {/* GITHUB                                                         */}
            {/* -------------------------------------------------------------- */}

            {/*
              Το GitHub είναι διαφορετική περίπτωση.

              Δεν οδηγεί σε route του portfolio αλλά σε εξωτερικό
              website, επομένως δεν χρειαζόμαστε Next.js Link.

              Χρησιμοποιούμε ChakraLink ώστε να έχουμε Chakra styling.

              target="_blank"
              → ανοίγει το GitHub profile σε νέο tab.

              rel="noopener noreferrer"
              → χρησιμοποιείται μαζί με target="_blank"
                για καλύτερη ασφάλεια και απομόνωση του νέου tab.

              textDecoration: "none"
              → αποφεύγουμε underline κατά το hover ώστε να
                διατηρήσουμε το ίδιο interaction style με τα
                Works και About.
            */}
            <ChakraLink
              href="https://github.com/l1ttle0reo"
              target="_blank"
              rel="noopener noreferrer"
              fontWeight="medium"
              fontSize="sm"
              _hover={{
                opacity: 0.65,
                textDecoration: "none",
              }}
              transition="opacity 0.2s ease"
            >
              GitHub
            </ChakraLink>

            {/* -------------------------------------------------------------- */}
            {/* LIGHT / DARK MODE                                              */}
            {/* -------------------------------------------------------------- */}

            {/*
              Το ColorModeButton αλλάζει το ενεργό color mode.

              Η σημαντική αρχιτεκτονική ιδέα εδώ είναι ότι το
              Navbar γνωρίζει μόνο ΠΟΥ πρέπει να εμφανιστεί το κουμπί.

              Δεν γνωρίζει ΠΩΣ λειτουργεί το theme system.

              Η πραγματική λογική βρίσκεται στο:

              components/ui/color-mode.tsx

              Αυτό είναι παράδειγμα separation of concerns:

              Navbar
              → navigation / layout

              ColorModeButton
              → theme interaction
            */}
            <ColorModeButton />

          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
