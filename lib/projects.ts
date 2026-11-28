import portfolioPreview from "@/public/images/portfolio-preview.png";

// Κοινή δομή δεδομένων για κάθε project.
export type Project = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  problem: string;
  goals: string[];
  features: {
    title: string;
    description: string;
  }[];
  thumbnail: string;
  technologies: string[];
  status: string;
  period: string;
  role: string;
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
    overview:
      "Το Portfolio ξεκίνησε ως project με στόχο την περαιτέρω εξοικείωση μου με την ανάπτυξη διαδικτυακών εφαρμογών. Όμως, σταδιακά εξελίχθηκε σε μια προσωπική πλατφόρμα παρουσίασης τεχνικών έργων, δημιουργικών εργασιών και δοκιμίων, αποτελώντας παράλληλα ένα πεδίο εφαρμογής και εξέλιξης των προγραμματιστικών μου γνώσεων.",
    problem:
      "Η ανάγκη συγκέντρωσης των τεχνικών έργων, των δημιουργικών εργασιών και της μαθησιακής μου πορείας σε μία ενιαία προσωπική πλατφόρμα.",
    goals: [
      "Παρουσίαση τεχνικών έργων με σαφή και κατανοητό τρόπο.",
      "Πρακτική εφαρμογή και εξέλιξη των προγραμματιστικών μου γνώσεων.",
      "Δημοσίευση δοκιμίων και δημιουργικών εργασιών.",
      "Ανάπτυξη μιας επεκτάσιμης και εύκολα συντηρίσιμης εφαρμογής.",
    ],
    features: [
      {
        title: "Dynamic Project Pages",
        description:
          "Παρουσίαση τεχνικών έργων μέσω μιας κοινής δυναμικής διαδρομής.",
      },
      {
        title: "Markdown Publishing",
        description: "Δημοσίευση δοκιμίων μέσω Markdown και Vercel Blob.",
      },
      {
        title: "Mathematical Rendering",
        description: "Υποστήριξη μαθηματικών εκφράσεων μέσω KaTeX.",
      },
      {
        title: "Dynamic Art Gallery",
        description:
          "Ανάκτηση και παρουσίαση έργων ζωγραφικής μέσω Cloudinary.",
      },
      {
        title: "Music Integration",
        description:
          "Ενσωμάτωση μουσικών δημιουργιών μέσω BandLab (αυτό θα αλλάξει).",
      },
      {
        title: "Responsive Design & Color Mode",
        description:
          "Προσαρμοζόμενη διάταξη με υποστήριξη Light και Dark Mode.",
      },
    ],
    thumbnail: portfolioPreview.src,
    technologies: ["Next.js", "React", "TypeScript", "Chakra UI"],
    status: "Υπό ανάπτυξη",
    period: "30/10/2026 - Σήμερα",
    role: "Σχεδιασμός και ανάπτυξη",
    links: {
      github: "https://github.com/SilkCraft101/portfolio",
      demo: "https://silkcraft101.is-a.dev/",
    },
  },
];
