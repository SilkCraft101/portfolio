import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

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
      <Container maxW="3xl">
        <Stack gap={5} align="flex-start">
          <Heading as="h1" fontSize={{ base: "2xl", md: "3xl" }}>
            {project.title}
          </Heading>

          <Text color="fg.muted" lineHeight="tall">
            {project.description}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
