---
tags:
  - portfolio
  - html
  - iframe
  - fundamentals
---

# Μουσική από άλλη σελίδα μέσα στο Portfolio

Ένα `iframe` φορτώνει άλλο έγγραφο μέσα στη σελίδα. Το BandLab παραμένει η πηγή του player. Στον κώδικα υπάρχουν δύο embeds, στο `app/music/old_music/page.tsx` και στο `app/music/current_music/page.tsx`.

Το `src` είναι η διεύθυνση ενσωμάτωσης και το `title` περιγράφει τον player σε χρήστες βοηθητικών τεχνολογιών. Οι διαστάσεις καθορίζουν πόσο χώρο έχει αυτό το δεύτερο έγγραφο. Για πλάτος σε ποσοστό χρησιμοποιώ CSS, όπως `width: 100%`. Το width attribute στην προδιαγραφή δέχεται διαστάσεις σε ακέραια CSS pixels.

Το iframe έχει δικό του browsing context. Όταν ο player προέρχεται από διαφορετικό origin, η σελίδα μας έχει περιορισμένη πρόσβαση στο εσωτερικό του. Η ενσωμάτωση χρειάζεται διεύθυνση που ο πάροχος επιτρέπει να φορτωθεί σε iframe. Στο BandLab χρησιμοποιώ τη διεύθυνση που παρέχεται για embed.

**Άσκηση.** Βρίσκω τα δύο `title` στον κώδικα και εξηγώ τι θα δει ο επισκέπτης αν προστεθεί απλό link στη θέση του iframe.

- [WHATWG — The iframe element](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element)
