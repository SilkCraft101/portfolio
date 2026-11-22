# `lib/essay-parser.ts`

## Ρόλος

Το server-only module αναλύει Markdown δοκιμίων με YAML Frontmatter. Το `parseEssay(markdown)` επιστρέφει `data` ως `Record<string, unknown>` και το υπόλοιπο Markdown ως `content`.

## Όρια εισόδου

Το `MAX_ESSAY_BYTES` ορίζει όριο 1 MiB. Ο έλεγχος `Buffer.byteLength(..., "utf8")` μετρά τα bytes του κειμένου. Αφαιρούνται αρχικοί UTF-8 BOM χαρακτήρες πριν από τον έλεγχο delimiter.

Το opening line πρέπει να είναι ακριβώς `---`. Δηλώσεις όπως `---javascript` απορρίπτονται πριν κληθεί το `gray-matter`, επειδή η έκδοση 4.0.3 επιτρέπει επιλογή engine από suffix. Απλό Markdown χωρίς opening delimiter, καθώς και ασυμφραστο opening delimiter χωρίς closing `---`, επιστρέφεται ως περιεχόμενο.

Η κλήση `matter(source, { language: "yaml" })` ορίζει YAML engine και options call που δεν χρησιμοποιεί το προεπιλεγμένο cache του `gray-matter`. Το αποτέλεσμα απορρίπτεται αν το YAML data δεν είναι απλό object.

## Έλεγχοι

`npm test` εκτελεί regression cases για έγκυρο YAML, JavaScript marker, sentinel μη εκτέλεσης, BOM, CRLF, malformed YAML, executable YAML tags και μη επαναχρησιμοποίηση cached parse results.

## Πηγές

- [gray-matter README](https://github.com/jonschlinkert/gray-matter#readme), ενότητες **Options**, **Language**, **Engines**.
- [gray-matter 4.0.3 source](https://github.com/jonschlinkert/gray-matter/blob/4.0.3/index.js), επιλογή language engine, cache και parser dispatch.
- [GHSA-fmjm-vjmx-5xhq](https://github.com/decaporg/decap-cms/security/advisories/GHSA-fmjm-vjmx-5xhq), περιγραφή επηρεαζόμενου JavaScript engine.
- [Node.js Buffer API](https://nodejs.org/api/buffer.html#static-method-bufferbytelengthstring-encoding), `Buffer.byteLength`.
