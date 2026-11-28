---
tags:
  - portfolio
  - dev
  - nextjs
  - terminal
  - tooling
---

# CLI

Το next dev ξεκινά development server, το next build δημιουργεί production build και το next start σερβίρει το build.

## Με απλά λόγια

Ο development server είναι για τη δουλειά όσο γράφω. Το build ετοιμάζει την εφαρμογή για production και το start σερβίρει αυτό το build.

## Χρήση

```sh
next dev --webpack
next build --webpack
next start
```

Οι γραμμές δείχνουν τις υποεντολές του Next CLI. Στο project συνήθως τις καλώ μέσα από npm scripts. Το `--webpack` είναι σημαία με δύο παύλες.

Δεν χρειάζεται να εκτελέσω όλες τις γραμμές μαζί. Για το start πρέπει να έχει δημιουργηθεί κατάλληλο production build.

## Πηγή

- [Τεκμηρίωση](https://nextjs.org/docs/app/api-reference/cli/next)
