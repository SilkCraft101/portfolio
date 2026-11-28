---
tags:
  - portfolio
  - dev
  - npm
  - tooling
---

# Package JSON

Το package.json καταγράφει scripts, dependencies, devDependencies και πληροφορίες του package.

## Με απλά λόγια

Το package.json είναι η λίστα βασικών πληροφοριών, εργασιών και βιβλιοθηκών του project.

## Χρήση

```json
{
  "name": "portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev --webpack",
    "build": "next build --webpack",
    "lint": "eslint"
  }
}
```

Το `scripts` περιγράφει εντολές που εκτελούνται μέσω npm. Τα dependencies περιγράφουν απαιτήσεις βιβλιοθηκών και τα devDependencies εξαρτήσεις για εργαλεία ανάπτυξης.

Το `private: true` αποτρέπει δημοσίευση του package στο npm. Δεν καθορίζει την ορατότητα του GitHub repository. Το παράδειγμα είναι απόσπασμα, όχι ολόκληρο package.json.

## Πηγή

- [Τεκμηρίωση](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/)
