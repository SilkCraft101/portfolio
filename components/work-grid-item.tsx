import type { ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

/**
 * Project Card βασισμένο στο WorkGridItem του devaslife.
 *
 * Πηγή:
 * https://github.com/craftzdog/craftzdog-homepage/blob/master/components/grid-item.js
 *
 * Προσαρμογή για Next.js App Router, TypeScript και Chakra UI.
 */

type WorkGridItemProps = {
  id: string;
  title: string;
  thumbnail: string;
  children: ReactNode;
};

export function WorkGridItem({
  id,
  title,
  thumbnail,
  children,
}: WorkGridItemProps) {
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      gap={3}
      transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
      _hover={{
        transform: "translateY(-3px)",
      }}
      _focusWithin={{
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing",
        outlineOffset: "4px",
        borderRadius: "md",
      }}
      css={{
        "&:hover img": {
          transform: "scale(1.03)",
        },

        // Περιορισμός animations σύμφωνα με τις προτιμήσεις του χρήστη.
        "@media (prefers-reduced-motion: reduce)": {
          transition: "none",

          "&:hover": {
            transform: "none",
          },

          "& img": {
            transition: "none",
          },

          "&:hover img": {
            transform: "none",
          },
        },
      }}
    >
      <Link
        href={`/works/${id}`}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          textDecoration: "none",
          color: "inherit",
          borderRadius: "inherit",
        }}
      >
        {/* Η εικόνα μεγεθύνεται χωρίς να ξεφεύγει από το πλαίσιο. */}
        <Box overflow="hidden" borderRadius="md">
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={240}
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              objectFit: "cover",
              transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </Box>

        {/* Τίτλος του project. */}
        <Text fontWeight="semibold">{title}</Text>

        {/* Σύντομη περιγραφή του project. */}
        <Text fontSize="sm" color="fg.muted">
          {children}
        </Text>
      </Link>
    </Box>
  );
}
