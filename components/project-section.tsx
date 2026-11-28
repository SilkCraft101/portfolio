import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ProjectSectionProps = {
  number: string;
  title: string;
  children: ReactNode;
};

// Κοινή δομή για τις αριθμημένες ενότητες του Case Study.
export function ProjectSection({
  number,
  title,
  children,
}: ProjectSectionProps) {
  return (
    <Box as="section" w="full" py={6}>
      <Stack gap={4}>
        <Stack direction="row" align="center" gap={3}>
          <Text color="accent" fontWeight="semibold">
            {number}
          </Text>

          <Heading as="h2" fontSize="2xl">
            {title}
          </Heading>
        </Stack>

        <Box>{children}</Box>
      </Stack>
    </Box>
  );
}
