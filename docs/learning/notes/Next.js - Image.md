---
tags:
  - portfolio
  - dev
  - nextjs
  - images
---

# Image

Το next/image εμφανίζει εικόνες με δυνατότητες βελτιστοποίησης. Τα src και alt δηλώνουν προέλευση και εναλλακτικό κείμενο. Τα width και height περιγράφουν τις αρχικές διαστάσεις και την αναλογία.

## Με απλά λόγια

Το Image χρειάζεται να ξέρει ποια εικόνα θα δείξει, πώς θα την περιγράψει και ποια είναι η αναλογία της.

## Χρήση

```tsx
import Image from "next/image";

<Image
  src="https://res.cloudinary.com/CLOUD_NAME/image/upload/v1234567890/example-painting.png"
  width={1908}
  height={2746}
  alt="Ζωγραφιά μιας καθιστής φιγούρας"
  style={{ width: "100%", height: "auto", maxWidth: "480px" }}
/>
```

Το `src` είναι η διεύθυνση. Το `alt` περιγράφει την εικόνα. Τα width και height δίνουν τις αρχικές διαστάσεις για την αναλογία. Το style καθορίζει πώς θα εμφανιστεί στο διαθέσιμο πλάτος.

Το εξωτερικό URL πρέπει να ταιριάζει σε `images.remotePatterns`. Το `borderRadius: "50%"` στρογγυλεύει μια τετράγωνη εικόνα σε κύκλο. Τα inline CSS ονόματα γράφονται camelCase και αρχίζουν με μικρό γράμμα.

## Από το σταθερό URL στην αυτόματη λίστα

Το προηγούμενο παράδειγμα αφορά μία συγκεκριμένη εικόνα. Μέσα στη map παίρνω τις ίδιες πληροφορίες από την τρέχουσα ζωγραφιά:

```tsx
<Image
  src={painting.secure_url}
  width={painting.width}
  height={painting.height}
  alt="Ζωγραφιά"
  style={{ width: "100%", height: "auto" }}
/>
```

Η αναζήτηση φέρνει τη λίστα και κάθε `Image` χρησιμοποιεί τα πεδία της αντίστοιχης εγγραφής. Το `images.remotePatterns` στο `next.config.ts` επιτρέπει στον βελτιστοποιητή εικόνων τα URL του συγκεκριμένου λογαριασμού Cloudinary κάτω από `/image/upload/`. Το `CLOUD_NAME` στο πρώτο παράδειγμα είναι placeholder και απαιτεί ρύθμιση που επιτρέπει το πραγματικό URL.

Στην [τεκμηρίωση Image](https://nextjs.org/docs/app/api-reference/components/image) κοιτάζω **src**, **width and height**, **alt**, **style**, **remotePatterns**.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/api-reference/components/image)
