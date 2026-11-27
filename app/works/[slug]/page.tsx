import { Box, Container, Stack } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import { ProjectHero } from "@/components/project-hero";

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
        </Stack>
      </Container>
    </Box>
  );
}
