# `next.config.ts`

## Ρόλος του αρχείου

Το αρχείο περιέχει τις ρυθμίσεις του Next.js και βρίσκεται στη ρίζα του project. Δεν είναι React component και δεν ορίζει περιεχόμενο σελίδας.

## Τύπος και αντικείμενο

Το `NextConfig` εισάγεται με `import type`, επειδή χρησιμοποιείται για τον έλεγχο τύπων.

Το `const nextConfig: NextConfig` δημιουργεί το αντικείμενο ρυθμίσεων. Ο τύπος βοηθά στον εντοπισμό μη έγκυρων επιλογών και στην υποστήριξη του editor, χωρίς να αποτελεί runtime έλεγχο.

Το `export default nextConfig` κάνει το αντικείμενο διαθέσιμο στο Next.js ως configuration του project.

## Τρέχον checkpoint

Το αντικείμενο είναι κενό, επομένως δεν έχω προσθέσει προσαρμοσμένες επιλογές εδώ. Το Next.js συνεχίζει να χρησιμοποιεί τις προεπιλογές του και τις υπόλοιπες εισόδους ρυθμίσεων, όπως τα CLI arguments.

Η επιλογή Webpack γίνεται στα scripts του package.json μέσω του `--webpack`, όχι μέσα σε αυτό το αρχείο.

Στο commit [603b82e — Καθαρισμός και οργάνωση σχολίων](https://github.com/SilkCraft101/portfolio/commit/603b82e) άλλαξε μόνο το σχόλιο, χωρίς αλλαγή ρυθμίσεων.

## Πηγές

Η πηγή βρίσκεται στο [sources.md](../sources.md), στην καταχώριση «Next.js configuration»: Next.js next.config.js, υποστήριξη TypeScript και NextConfig. Η επιλογή Webpack καλύπτεται στην καταχώριση «Dependencies και scripts».
