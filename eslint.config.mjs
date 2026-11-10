import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Το defineConfig συγκεντρώνει τη flat configuration του ESLint.
// Με ... προσθέτω τις εγγραφές των έτοιμων ρυθμίσεων Next.js και TypeScript στο ίδιο array.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Τα μοτίβα εξαιρούν παραγόμενα αρχεία και φακέλους build από τον έλεγχο ESLint.
  // Δεν επηρεάζουν τι παρακολουθεί το Git ή ποια αρχεία χρησιμοποιεί το Next.js.
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

// Το ESLint διαβάζει τις ρυθμίσεις από αυτό το default export όταν τρέχω npm run lint.
export default eslintConfig;
