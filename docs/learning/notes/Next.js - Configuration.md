---
tags:
  - portfolio
  - dev
  - nextjs
  - tooling
---

# Configuration

Το next.config.ts εξάγει ένα αντικείμενο ρυθμίσεων του Next.js. Ο τύπος NextConfig ελέγχει τις επιτρεπόμενες επιλογές.

## Με απλά λόγια

Το next.config.ts είναι το σημείο όπου δίνω ρυθμίσεις στο Next.js. Κάθε επιλογή πρέπει να βρίσκεται στο σωστό επίπεδο του αντικειμένου.

## Χρήση

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    remotePatterns: [
      new URL("https://res.cloudinary.com/CLOUD_NAME/image/upload/**"),
    ],
  },
};

export default nextConfig;
```

Το `NextConfig` ελέγχει το σχήμα. Το `images` έχει τις ρυθμίσεις εικόνων. Το `experimental` περιέχει τη ρύθμιση για τα imports του Chakra. Η προαιρετική ρύθμιση για development origins βρίσκεται στη σημείωση [Next.js - Allowed Dev Origins](Next.js%20-%20Allowed%20Dev%20Origins.md). Το `default export` δίνει το configuration στο framework.

Στο ενδεικτικό URL αντικαθιστώ το `CLOUD_NAME` με το όνομα του δικού μου Cloudinary account. Το `/**` επιτρέπει διαδρομές κάτω από το συγκεκριμένο `/image/upload/`, ενώ το κενό query στο αντικείμενο `URL` απαιτεί διεύθυνση χωρίς query.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/api-reference/config/next-config-js)
