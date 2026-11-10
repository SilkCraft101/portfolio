// Ο τύπος NextConfig ελέγχει τις επιλογές κατά την ανάπτυξη και δεν αποτελεί runtime import.
import type { NextConfig } from "next";

// Ρυθμίσεις για την εικόνα προφίλ και τις δοκιμές από το τοπικό δίκτυο.
const nextConfig: NextConfig = {
  // Επιτρέπω αυτή την τοπική διεύθυνση για development πόρους όταν δοκιμάζω από κινητό.
  // Γράφω hostname/IP χωρίς πρωτόκολλο ή θύρα. Αν αλλάξει η IP, ενημερώνω τη λίστα.
  allowedDevOrigins: ["your-local-ip"],
  images: {
    // Το Next Image επιτρέπεται να βελτιστοποιεί την παρακάτω εξωτερική διεύθυνση.
    // Η new URL αναλύει το string στα μέρη του. Εδώ επιτρέπω μία συγκεκριμένη εικόνα, όχι όλο το Cloudinary.
    remotePatterns: [
      new URL(
        "https://res.cloudinary.com/vvu8rq88/image/upload/v1794304237/jumping-spider-minimal-signed.png",
      ),
    ],
  },
};

// Το default export δίνει το αντικείμενο ρυθμίσεων στο Next.js.
export default nextConfig;
