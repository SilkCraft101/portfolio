import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import type { Project } from "@/lib/projects";

type ProjectMetadataProps = {
  project: Project;
};

// Κοινή ενότητα μεταδεδομένων για όλα τα projects.
export function ProjectMetadata({ project }: ProjectMetadataProps) {
  return (
    <SimpleGrid
      columns={{ base: 2, md: 4 }}
      gap={6}
      w="full"
      py={6}
      borderTopWidth="1px"
      borderBottomWidth="1px"
      borderColor="border.subtle"
    >
      <Stack gap={1}>
        <Text fontSize="sm" color="fg.muted">
          Period
        </Text>

        <Text fontWeight="medium">{project.period}</Text>
      </Stack>

      <Stack gap={1}>
        <Text fontSize="sm" color="fg.muted">
          Status
        </Text>

        <Text fontWeight="medium">{project.status}</Text>
      </Stack>

      <Stack gap={1}>
        <Text fontSize="sm" color="fg.muted">
          Tech Stack
        </Text>

        <Box fontWeight="medium">{project.technologies.join(", ")}</Box>
      </Stack>

      <Stack gap={1}>
        <Text fontSize="sm" color="fg.muted">
          Role
        </Text>

        <Text fontWeight="medium">{project.role}</Text>
      </Stack>
    </SimpleGrid>
  );
}
