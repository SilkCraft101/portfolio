import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  List,
  SimpleGrid,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ProjectHero } from "@/components/project-hero";
import { ProjectMetadata } from "@/components/project-metadata";
import { ProjectSection } from "@/components/project-section";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  // Αναζήτηση του project με βάσει του slug.
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Box id="main-content" as="main" lang="el" py={{ base: 12, md: 16 }}>
      <Container maxW="5xl">
        <Stack gap={5} align="flex-start">
          <ProjectHero project={project} />
          <ProjectMetadata project={project} />
          <ProjectSection number="01" title="Project Overview">
            <Text color="fg.muted" lineHeight="tall">
              {project.overview}
            </Text>
          </ProjectSection>
          <ProjectSection number="02" title="Problem & Goals">
            <Stack gap={5}>
              <Stack gap={2}>
                <Heading as="h3" fontSize="lg">
                  Problem
                </Heading>

                <Text color="fg.muted" lineHeight="tall">
                  {project.problem}
                </Text>
              </Stack>

              <Stack gap={2}>
                <Heading as="h3" fontSize="lg">
                  Goals
                </Heading>

                <List.Root ps={5} gap={2} color="fg.muted">
                  {project.goals.map((goal) => (
                    <List.Item key={goal}>{goal}</List.Item>
                  ))}
                </List.Root>
              </Stack>
            </Stack>
          </ProjectSection>
          <ProjectSection number="03" title="Key Features">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
              {project.features.map((feature) => (
                <Stack
                  key={feature.title}
                  gap={3}
                  p={5}
                  borderWidth="1px"
                  borderColor="border.subtle"
                  borderRadius="lg"
                >
                  <Heading as="h3" fontSize="md">
                    {feature.title}
                  </Heading>

                  <Text color="fg.muted" fontSize="sm" lineHeight="tall">
                    {feature.description}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </ProjectSection>
          <ProjectSection number="04" title="Architecture & Tech Stack">
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              {project.architecture.map((item) => (
                <Stack
                  key={item.layer}
                  gap={3}
                  p={5}
                  borderWidth="1px"
                  borderColor="border.subtle"
                  borderRadius="lg"
                >
                  <Heading as="h3" fontSize="lg">
                    {item.layer}
                  </Heading>

                  <Text color="accent" fontWeight="medium">
                    {item.technologies.join(", ")}
                  </Text>

                  <Text color="fg.muted" lineHeight="tall">
                    {item.description}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </ProjectSection>
          <ProjectSection number="05" title="Engineering Challenges">
            <Stack gap={4}>
              {project.challenges.map((challenge) => (
                <Stack
                  key={challenge.title}
                  gap={3}
                  p={5}
                  borderWidth="1px"
                  borderColor="border.subtle"
                  borderRadius="lg"
                >
                  <Heading as="h3" fontSize="lg">
                    {challenge.title}
                  </Heading>

                  <Text color="fg.muted" lineHeight="tall">
                    <Text as="span" fontWeight="semibold" color="fg">
                      Problem:{" "}
                    </Text>
                    {challenge.problem}
                  </Text>

                  <Text color="fg.muted" lineHeight="tall">
                    <Text as="span" fontWeight="semibold" color="accent">
                      Solution:{" "}
                    </Text>
                    {challenge.solution}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </ProjectSection>
          <ProjectSection number="06" title="Results">
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
              {project.results.map((result) => (
                <Stack
                  key={result.title}
                  gap={3}
                  p={5}
                  borderWidth="1px"
                  borderColor="border.subtle"
                  borderRadius="lg"
                >
                  <Heading as="h3" fontSize="lg" color="accent">
                    {result.title}
                  </Heading>

                  <Text color="fg.muted" lineHeight="tall">
                    {result.description}
                  </Text>
                </Stack>
              ))}
            </SimpleGrid>
          </ProjectSection>
        </Stack>
      </Container>
    </Box>
  );
}
