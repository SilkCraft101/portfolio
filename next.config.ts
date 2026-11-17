// Ο τύπος NextConfig ελέγχει τις επιλογές κατά την ανάπτυξη και δεν αποτελεί runtime import.
import type { NextConfig } from "next";

// Ρυθμίσεις για τις απομακρυσμένες εικόνες του Portfolio.
const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    // Επιτρέπω τις εικόνες του δικού μου λογαριασμού Cloudinary,
    // ώστε οι νέες ζωγραφιές να φορτώνουν χωρίς νέα αλλαγή ρυθμίσεων.
    remotePatterns: [
      new URL("https://res.cloudinary.com/vvu8rq88/image/upload/**"),
    ],
  },
};

// Το default export δίνει το αντικείμενο ρυθμίσεων στο Next.js.
export default nextConfig;
