# Project Metadata

## Σκοπός

Το `components/project-metadata.tsx` παρουσιάζει τα βασικά μεταδεδομένα κάθε έργου κάτω από το Project Hero.

## Δεδομένα

| Πεδίο          | Περιεχόμενο         |
| -------------- | ------------------- |
| `period`       | Περίοδος ανάπτυξης  |
| `status`       | Κατάσταση έργου     |
| `technologies` | Τεχνολογίες         |
| `role`         | Ρόλος στην ανάπτυξη |

Τα δεδομένα προέρχονται από το `lib/projects.ts` και μεταφέρονται στο component μέσω props.

## Τεχνικές αποφάσεις

- Επαναχρησιμοποιήσιμο component για όλα τα projects.
- Responsive διάταξη μέσω `SimpleGrid`.
- Δύο στήλες στο base breakpoint και τέσσερις στο md.
- Χρήση `join(", ")` για την παρουσίαση των τεχνολογιών.
- Χρήση Semantic Tokens για Light και Dark Mode.

## Σχετικά αρχεία

- [project-metadata.tsx](../../components/project-metadata.tsx)
- [projects.ts](../../lib/projects.ts)
- [Dynamic Project Page](../../app/works/[slug]/page.tsx)
