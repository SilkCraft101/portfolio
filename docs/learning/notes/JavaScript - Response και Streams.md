---
tags:
  - portfolio
  - javascript
  - web-apis
  - streams
  - response
  - vercel-blob
  - essays
---

# Από stream σε κείμενο

Το Vercel Blob δίνει τα bytes του αρχείου σταδιακά. Ο parser των Essays περιμένει ολόκληρο το Markdown ως string. Η `readBlobMarkdown` στο `lib/essays.ts` συνδέει τα δύο.

```ts
const markdown = await new Response(blob.stream).text();
```

Το `new Response(blob.stream)` βάζει την υπάρχουσα ροή στο σώμα ενός Response. Το `text()` καταναλώνει το σώμα, αποκωδικοποιεί τα bytes ως UTF-8 και επιστρέφει Promise με το κείμενο. Το `await` περιμένει αυτό το αποτέλεσμα.

Μπορώ να δοκιμάσω το ίδιο API χωρίς σύνδεση στο Blob.

```js
const response = new Response("# Δοκίμιο");
console.log(await response.text()); // # Δοκίμιο
console.log(response.bodyUsed); // true
```

Αν καλέσω ξανά `text()` στο ίδιο Response, το Promise απορρίπτεται. Η πρώτη ανάγνωση έχει ήδη καταναλώσει το σώμα.

Στο Portfolio, πριν από την ανάγνωση ελέγχω την κατάσταση και το μέγεθος που δίνει το Blob. Μετά την ανάγνωση ελέγχω και το μέγεθος του κειμένου σε UTF-8 bytes. Το `text()` συγκεντρώνει ολόκληρο το περιεχόμενο στη μνήμη.

- [Portfolio - Από το Markdown στη σελίδα του δοκιμίου](Portfolio%20-%20%CE%91%CF%80%CF%8C%20%CF%84%CE%BF%20Markdown%20%CF%83%CF%84%CE%B7%20%CF%83%CE%B5%CE%BB%CE%AF%CE%B4%CE%B1%20%CF%84%CE%BF%CF%85%20%CE%B4%CE%BF%CE%BA%CE%B9%CE%BC%CE%AF%CE%BF%CF%85.md)
- [WHATWG Fetch — Body.text()](https://fetch.spec.whatwg.org/#dom-body-text)
- [WHATWG Streams — Readable streams](https://streams.spec.whatwg.org/#rs)
- [Vercel Blob — get()](https://vercel.com/docs/vercel-blob/using-blob-sdk#get)
