---
tags:
  - portfolio
  - dev
  - nextjs
  - network
  - debugging
---

# Allowed Dev Origins

Το allowedDevOrigins επιτρέπει πρόσθετα origins για συγκεκριμένους development πόρους του Next.js.

## Με απλά λόγια

Όταν δοκιμάζω τον development server από άλλη διεύθυνση, μπορεί να χρειάζεται να επιτρέψω αυτό το origin για τους προστατευμένους development πόρους.

## Χρήση

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["dev.example.com"],
};

export default nextConfig;
```

Στο σημερινό `next.config.ts` δεν υπάρχει `allowedDevOrigins`. Για μελλοντική δοκιμή από διαφορετικό hostname, η επιλογή βρίσκεται στο πάνω επίπεδο του configuration. Η τιμή είναι ενδεικτική. Δηλώνω το hostname ή την IP του origin που αναφέρει ο browser, χωρίς πρωτόκολλο, θύρα ή διαδρομή. Στον εγκατεστημένο Next.js 16.4.6, αιτήματα από μη επιτρεπόμενα origins προς προστατευμένους πόρους ανάπτυξης μπορούν να απορριφθούν.

Δεν είναι γενική ρύθμιση CORS ούτε άδεια για Cloudinary images. Αν λείπει κουμπί ή script, ελέγχω logs και πραγματικά αποτυχημένα αιτήματα πριν αποδώσω το πρόβλημα σε αυτή τη ρύθμιση.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins)
