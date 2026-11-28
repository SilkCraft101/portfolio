---
tags:
  - portfolio
  - html
  - accessibility
  - navigation
---

# Από το πρώτο Tab στο κύριο περιεχόμενο

Στο `app/layout.tsx` υπάρχει ένας σύνδεσμος «Μετάβαση στο κύριο περιεχόμενο» πριν από το Navbar. Το `href="#main-content"` ζητά τον στόχο με το ίδιο `id`. Το `app/globals.css` κρατά τον σύνδεσμο εκτός της ορατής περιοχής και τον εμφανίζει όταν πάρει focus.

Στον σημερινό κώδικα ο στόχος υπάρχει στο `main` του `/about` και στο `Box as="main"` της σελίδας έργου `/works/portfolio`.

Σε παλαιότερη δοκιμή σε τοπικό browser, το πρώτο Tab εστίασε στον σύνδεσμο τόσο στο `/works` όσο και στο `/works/portfolio`. Στο `/works`, το Enter προσέθεσε το fragment και το επόμενο Tab πήγε στην κάρτα Portfolio, παρακάμπτοντας το Navbar. Αμέσως μετά το Enter το ενεργό στοιχείο ήταν το `body`. Στο `/works/portfolio`, το fragment άλλαξε αλλά ο σύνδεσμος κράτησε την εστίαση, επειδή ο στόχος έλειπε από την έκδοση της δοκιμής. Η σημερινή παρουσία του `id` επιβεβαιώνεται στον κώδικα. Η δοκιμή του πληκτρολογίου αφορά την παλαιότερη έκδοση.

**Δοκιμή κατανόησης.** Στον browser πατάω Tab από την αρχή της σελίδας, ενεργοποιώ τον σύνδεσμο και εξετάζω πού βρίσκεται η εστίαση. Συγκρίνω το `/works` με το `/works/portfolio`. Η παρουσία ενός `main` δίνει σημασιολογία, ενώ το `id` είναι αυτό που συνδέει το συγκεκριμένο fragment με τον στόχο.

- [HTML - Anchor links](HTML%20-%20Anchor%20links.md)
- [HTML - Main](HTML%20-%20Main.md)
- [W3C — G1: Skip to main content](https://www.w3.org/WAI/WCAG22/Techniques/general/G1)
- [WHATWG HTML — Scrolling to a fragment](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scrolling-to-a-fragment)
