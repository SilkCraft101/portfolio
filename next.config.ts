// Ο τύπος NextConfig ελέγχει τις επιλογές κατά την ανάπτυξη και δεν αποτελεί runtime import.
import type { NextConfig } from "next";

// Ρυθμίσεις για την εικόνα προφίλ και τις δοκιμές από το τοπικό δίκτυο.
const nextConfig: NextConfig = {
  // Επιτρέπω αυτή την τοπική διεύθυνση για development πόρους όταν δοκιμάζω από κινητό.
  // Γράφω hostname/IP χωρίς πρωτόκολλο ή θύρα. Αν αλλάξει η IP, ενημερώνω τη λίστα.
  allowedDevOrigins: ["your-local-ip"],
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
