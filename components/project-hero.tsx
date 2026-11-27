import {
  Button,
  Heading,
  Stack,
  HStack,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";
import type { Project } from "@/lib/projects";
import Image from "next/image";

type ProjectHeroProps = {
  project: Project;
};

// Κοινή εισαγωγική ενότητα για όλα τα Projects.
export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      gap={8}
      alignItems="center"
      w="full"
    >
      <Stack gap={4} align="flex-start" w="full">
        <Text
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wider"
          color="accent"
        >
          PROJECT CASE STUDY
        </Text>

        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl" }}
          letterSpacing="tight"
        >
          {project.title}
        </Heading>

        <Text color="fg.muted" lineHeight="tall">
          {project.description}
        </Text>

        {/* Σύνδεσμοι του project. */}
        <HStack gap={3} flexWrap="wrap">
          {/* Σύνδεσμος προς τη λειτουργική έκδοση του project. */}
          {project.links.demo && (
            <Button asChild variant="solid" bg="accent" color="bg">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </Button>
          )}

          {project.links.github && (
            <Button asChild variant="solid" bg="accent" color="bg">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          )}
        </HStack>
      </Stack>

      {/* Εικόνα προεπισκόπησης του project. */}
      <Image
        src={project.thumbnail}
        alt={`Προεπισκόπηση: ${project.title}`}
        width={1200}
        height={1200}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "8px",
        }}
      />
    </SimpleGrid>
  );
}
