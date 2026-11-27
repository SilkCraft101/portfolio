import portfolioPreview from "@/public/images/portfolio-preview.png";

// Κοινή δομή δεδομένων για κάθε project.
export type Project = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  status: string;
  links: {
    github?: string;
    demo?: string;
  };
};

// Κεντρική πηγή δεδομένων για τις σελίδες /works και /works/[slug].
export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Προσωπικό Portfolio",
    description:
      "Μια προσωπική διαδικτυακή εφαρμογή για την παρουσίαση των τεχνικών έργων, των δημιουργικών εργασιών και της μαθησιακής μου πορείας.",
    thumbnail: portfolioPreview.src,
    technologies: ["Next.js", "React", "TypeScript", "Chakra UI"],
    status: "Υπό ανάπτυξη",
    links: {
      github: "https://github.com/SilkCraft101/portfolio",
      demo: "https://silkcraft101.is-a.dev/",
    },
  },
];
