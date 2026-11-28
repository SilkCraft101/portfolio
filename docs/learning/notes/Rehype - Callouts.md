---
tags:
  - portfolio
  - dev
  - rehype
  - markdown
  - essays
---

# Από ειδικό blockquote σε callout

Στο Markdown του δοκιμίου γράφω:

```markdown
> [!warning]- Προσοχή
> Κοίτα πρώτα τα δεδομένα που επέστρεψε η υπηρεσία.
```

Το `react-markdown` αναγνωρίζει πρώτα το blockquote. Στη συνέχεια το `rehype-callouts` αναγνωρίζει μέσα στο HTML syntax tree τον τύπο, τον τίτλο και την επιλογή αναδίπλωσης. Για το αρχικά κλειστό callout παράγει `details` με `summary`. Το CSS εφαρμόζεται μετά μέσω της κλάσης `.callout` και του `data-callout`.

Στο GitHub η αναδιπλούμενη σύνταξη του παραδείγματος εμφανίζεται ως παράθεμα. Για GitHub alert γράφω `> [!WARNING]` σε δική του γραμμή και το κείμενο στις επόμενες γραμμές του παραθέματος.

Στη σελίδα ανάγνωσης το plugin βρίσκεται στο `rehypePlugins={[rehypeKatex, rehypeCallouts]}`. Για απλό παράθεμα το CSS εφαρμόζεται στο `blockquote`. Για callout εφαρμόζεται στην ειδική δομή του plugin.

- [Obsidian - Callouts](Obsidian%20-%20Callouts.md)
- [HTML - Details και Summary](HTML%20-%20Details%20%CE%BA%CE%B1%CE%B9%20Summary.md)
- [CSS - Callout Styling](CSS%20-%20Callout%20Styling.md)
- [rehype-callouts — Usage, HTML and Styling](https://github.com/lin-stephanie/rehype-callouts)
