# Πηγές και τεχνική τεκμηρίωση

Εδώ καταγράφω τις πηγές, τις σχετικές ενότητες και τα αρχεία στα οποία εφαρμόζονται. Η ανάλυση του κώδικα καταγράφεται ξεχωριστά.

Για το αρχικό checkpoint, μέχρι και το `components/projects.tsx`, έλεγξα τις πηγές εκ των υστέρων ως προς την αντιστοιχία τους με την υλοποίηση.

Στη συνέχεια θα καταγράφω τις πηγές που χρησιμοποιώ κατά τη μελέτη, την εφαρμογή και το debugging.

## Σελίδες και κοινό layout

[Next.js — Layouts and Pages](https://nextjs.org/docs/app/getting-started/layouts-and-pages): **Creating a page**, **Creating a layout**, **Creating a nested route**.

Δημιούργησα τη σελίδα `/about` στο `app/about/page.tsx` με default export.

Μετέφερα το Navbar στο `app/layout.tsx`, μέσα στον Provider και πριν από το `children`. Το αφαίρεσα από το `app/page.tsx`, ώστε να εμφανίζεται μία φορά σε κάθε σελίδα.

## Πίνακας περιεχομένων — `app/about/page.tsx`

[MDN — Linking to an element on the same page](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#linking_to_an_element_on_the_same_page): σύνδεση του `href="#..."` με το `id` του αντίστοιχου τίτλου.

[MDN — id](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/id): εισαγωγή και **Syntax**, για μοναδικά αναγνωριστικά χωρίς κενά.

[MDN — Nesting a list](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul#nesting_a_list): εμφωλευμένες λίστες για κεφάλαια και υποκεφάλαια.

[Chakra UI — Scroll Margin](https://chakra-ui.com/docs/styling/style-props/interactivity#scroll-margin): το `scrollMarginTop` προστέθηκε κατά την ολοκλήρωση της υλοποίησης με βοήθεια του AI και ελέγχθηκε ως προς την τεκμηρίωση. Αφήνει χώρο πάνω από τους τίτλους κατά την πλοήγηση, λόγω του sticky navbar.

## Γραμματοσειρές — `app/layout.tsx`, `app/globals.css`

[Next.js — Font Module](https://nextjs.org/docs/app/api-reference/components/font): **Google Fonts**, **subsets**, **variable**, **Using Multiple Fonts**, **Applying Styles → CSS Variables**.

## Metadata — `app/layout.tsx`

[Next.js — Metadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata): **The metadata object**, **Types → metadata object**, **title → String**, **description**.

## Chakra Provider — `components/ui/provider.tsx`, `app/layout.tsx`

[Chakra UI — Next.js App](https://chakra-ui.com/docs/get-started/frameworks/next-app): **Setup provider**.

[Next.js — Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components): **Using Client Components**, **Context providers**.

### Προσαρμοσμένο σύστημα και χρώμα έμφασης

Χρησιμοποίησα την ενότητα [Architecture — Chakra UI](https://chakra-ui.com/docs/theming/overview#architecture) για τα `defineConfig`, `defaultConfig`, `createSystem` και τη σύνδεση του `system` στον `ChakraProvider`.

Από το [Tokens — Chakra UI](https://chakra-ui.com/docs/theming/tokens) χρησιμοποίησα τη δήλωση χρώματος με `value`, ορίζοντας το `lantern`.

Από το [Semantic Tokens — Chakra UI](https://chakra-ui.com/docs/theming/semantic-tokens) χρησιμοποίησα τις αναφορές σε tokens και την ενότητα Conditional Token, ώστε το `accent` να έχει βασική τιμή και διαφορετική τιμή με `_dark`.

Από την ενότητα [Using Semantic Tokens](https://chakra-ui.com/docs/theming/semantic-tokens#using-semantic-tokens) χρησιμοποίησα το `accent` μέσω του prop `color` στον τίτλο της καταχώρησης portfolio, στο `components/projects.tsx`.

Από την ενότητα [Semantic Token Nesting](https://chakra-ui.com/docs/theming/semantic-tokens#semantic-token-nesting) χρησιμοποίησα το `DEFAULT` για τα βασικά `bg` και `fg`.

Με την ίδια δομή προσάρμοσα τα `fg.muted` και `border.subtle`, τα οποία χρησιμοποιούνται ήδη στις παραγράφους και στο navbar. Έλεγξα την εμφάνισή τους σε light και dark mode.

Κατά το debugging, έλεγξα στον Inspector τις CSS μεταβλητές και τους κανόνες που υπερίσχυαν. Ο [επίσημος ορισμός χρωμάτων του Chakra](https://github.com/chakra-ui/chakra-ui/blob/main/packages/react/src/theme/semantic-tokens/colors.ts), στα `bg.DEFAULT` και `fg.DEFAULT`, επιβεβαίωσε ότι οι προεπιλογές χρησιμοποιούν `_light` και `_dark`. Προσάρμοσα αυτές τις τιμές στο `components/ui/provider.tsx`.

Πρόσθεσα το 'linkHover' με διαφορετικές ροζ αποχρώσεις για light και dark mode. Το χρησιμοποίησα στα κοινά hover styles των Works, About και GitHub. Το όνομα και το κουμπί θέματος χρησιμοποιούν το `accent`.

[Chakra UI — Transitions](https://chakra-ui.com/docs/styling/style-props/transitions#transition): ενότητα **Transition**, για το `transition="color 0.2s ease"` που κάνει ομαλή την αλλαγή χρώματος στο navbar.

## Χρωματικό θέμα — `components/ui/color-mode.tsx`

[Chakra UI — Color Mode](https://chakra-ui.com/docs/components/concepts/color-mode): **Setup**, **useColorMode**, **useColorModeValue**, **Hydration Mismatch**, **ColorModeButton**, **Forced Color Mode**.

[next-themes](https://github.com/pacocoursey/next-themes): **HTML & CSS**, **useTheme**, **ThemeProvider**, **Avoid Hydration Mismatch**.

## React components και JSX — `app/`, `components/`

[React — Describing the UI](https://react.dev/learn/describing-the-ui): **Your first component**, **Importing and exporting components**, **Writing markup with JSX**, **JavaScript in JSX with curly braces**, **Passing props to a component**, **Conditional rendering**.

[React — Forwarding props with the JSX spread syntax](https://react.dev/learn/passing-props-to-a-component#forwarding-props-with-the-jsx-spread-syntax): αντιστοίχιση του `{...navLinkStyles}` με τη μεταφορά των κοινών hover styles στα links του navbar.

[React — Using TypeScript](https://react.dev/learn/typescript): **TypeScript with React Components**, **Typing children**.

## Τύποι TypeScript — `app/layout.tsx`, `components/ui/`

[TypeScript — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html): **Type Aliases**, **Interfaces**, **Union Types**, **Type Assertions**.

[TypeScript — Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html): **Optional Properties**, **Extending Types**.

[TypeScript — More on Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html): **Function Type Expressions**.

[TypeScript — Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html): **Hello World of Generics**.

[TypeScript — Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html): **Readonly<Type>**, **Omit<Type, Keys>**.

[TypeScript — Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html): **ES Module Syntax**, **Additional Import Syntax**, **TypeScript Specific ES Module Syntax**.

## Διόρθωση κενών interfaces — `components/ui/color-mode.tsx`

[typescript-eslint — no-empty-object-type](https://typescript-eslint.io/rules/no-empty-object-type/): **Examples**, **Options → allowInterfaces**.

[TypeScript — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases): **Type Aliases**.

## Προώθηση refs — `components/ui/color-mode.tsx`, `components/ui/tooltip.tsx`

[React — forwardRef](https://react.dev/reference/react/forwardRef): **Reference**, **Forwarding a ref through multiple components**, σημείωση για το React 19.

## Hydration — `app/layout.tsx`, `components/ui/color-mode.tsx`

[React — hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot): **Suppressing unavoidable hydration mismatch errors**.

## Navigation — `components/navbar.tsx`

[Next.js — Link](https://nextjs.org/docs/app/api-reference/components/link): **Reference → href (required)** και το εισαγωγικό παράδειγμα χρήσης.

[Chakra UI — Link](https://chakra-ui.com/docs/components/link): **Usage**.

## Layout components — `components/navbar.tsx`, `components/hero.tsx`, `components/about.tsx`, `components/projects.tsx`

[Chakra UI — Box](https://chakra-ui.com/docs/components/box): **Usage**.

[Chakra UI — Container](https://chakra-ui.com/docs/components/container): **Usage**.

[Chakra UI — Flex](https://chakra-ui.com/docs/components/flex): **Usage**, alignment και justification.

[Chakra UI — Stack](https://chakra-ui.com/docs/components/stack): **Usage**, **Examples → HStack**.

## Κείμενα και τίτλοι — `components/navbar.tsx`, `components/hero.tsx`, `components/about.tsx`, `components/projects.tsx`

[Chakra UI — Heading](https://chakra-ui.com/docs/components/heading): **Usage**, **as**.

[Chakra UI — Text](https://chakra-ui.com/docs/components/text): **Usage**.

[Chakra UI — Typography](https://chakra-ui.com/docs/styling/style-props/typography): **Font Size**, **Font Weight**, **Letter Spacing**, **Line Height**, **Text Color**, **Text Decoration**.

## Σύνθεση και semantic elements — `components/`

[Chakra UI — Composition](https://chakra-ui.com/docs/components/concepts/composition): **The as Prop**, **The asChild Prop**.

[Chakra UI — Server Components](https://chakra-ui.com/docs/components/concepts/server-components): **Usage**, **Hooks**.

## Responsive styling — `components/`

[Chakra UI — Responsive Design](https://chakra-ui.com/docs/styling/responsive-design): **Overview**, **Object syntax**, **Breakpoint targeting**.

## Spacing και διαστάσεις — `components/`

[Chakra UI — Spacing](https://chakra-ui.com/docs/styling/style-props/spacing): padding και οι συντομογραφίες `py`, `pt`, `pb`.

[Chakra UI — Sizing](https://chakra-ui.com/docs/styling/style-props/sizing): width, height, max-width και `boxSize`.

[Chakra UI — Sizes](https://chakra-ui.com/docs/theming/sizes): **Tokens**.

## Styling του Navbar — `components/navbar.tsx`

[Chakra UI — Layout](https://chakra-ui.com/docs/styling/style-props/layout): position, top και z-index.

[Chakra UI — Flex and Grid](https://chakra-ui.com/docs/styling/style-props/flex-and-grid): gap, align-items και justify-content.

[Chakra UI — Background](https://chakra-ui.com/docs/styling/style-props/background): background color.

[Chakra UI — Border](https://chakra-ui.com/docs/styling/style-props/border): border width και border color.

[Chakra UI — Filters](https://chakra-ui.com/docs/styling/style-props/filters): **Backdrop Filter**.

[Chakra UI — Effects](https://chakra-ui.com/docs/styling/style-props/effects): **Opacity**.

[Chakra UI — Transitions](https://chakra-ui.com/docs/styling/style-props/transitions): transition.

## Conditions και design tokens — `components/`

[Chakra UI — Conditional Styles](https://chakra-ui.com/docs/styling/conditional-styles): `_hover` και `_icon`.

[Chakra UI — Semantic Tokens](https://chakra-ui.com/docs/theming/semantic-tokens): semantic colors και light/dark conditions.

[Chakra UI — Color opacity modifier](https://chakra-ui.com/docs/styling/color-opacity-modifier): σύνταξη διαφάνειας χρώματος, όπως `bg/80`.

[Chakra UI — Typography tokens](https://chakra-ui.com/docs/theming/typography): **Fonts**, **Font Sizes**, **Font Weights**, **Letter Spacings**, **Line Heights**.

## Κουμπί χρωματικού θέματος — `components/ui/color-mode.tsx`

[Chakra UI — Icon Button](https://chakra-ui.com/docs/components/icon-button): **Usage**, `aria-label`, size και variant.

[Chakra UI — Client Only](https://chakra-ui.com/docs/components/client-only): **Usage**, fallback.

[Chakra UI — Skeleton](https://chakra-ui.com/docs/components/skeleton): **Usage**.

[React Icons](https://react-icons.github.io/react-icons/): **Usage**, imports από icon subpackages.

## Tooltip — `components/ui/tooltip.tsx`

[Chakra UI — Tooltip](https://chakra-ui.com/docs/components/tooltip): **Setup**, **Arrow**, **Disabled**, **Props**.

[Chakra UI — Portal](https://chakra-ui.com/docs/components/portal): **Usage**, **Custom Container**, **Disabled**.

Το snippet υπάρχει στο repository αλλά δεν χρησιμοποιείται ακόμη στην εφαρμογή.

## Toast — `components/ui/toaster.tsx`

[Chakra UI — Toast](https://chakra-ui.com/docs/components/toast): **Setup**, **Usage**, **Placement**, **Page Idle Behavior**, **Props**.

[Chakra UI — Spinner](https://chakra-ui.com/docs/components/spinner): **Usage**, size και color.

Το snippet υπάρχει στο repository αλλά δεν χρησιμοποιείται ακόμη στην εφαρμογή.

## Semantic HTML και links — `app/layout.tsx`, `app/page.tsx`, `components/`

[HTML Standard — Sections](https://html.spec.whatwg.org/multipage/sections.html): **The section element**, **The nav element**, **The h1, h2, h3, h4, h5, and h6 elements**.

[HTML Standard — Grouping content](https://html.spec.whatwg.org/multipage/grouping-content.html#the-main-element): **The main element**.

[HTML Standard — Language attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes): `lang`.

[HTML Standard — Links](https://html.spec.whatwg.org/multipage/links.html): **Link type noopener**, **Link type noreferrer**.

## Global CSS — `app/globals.css`

[Next.js — CSS](https://nextjs.org/docs/app/getting-started/css): **Global CSS**.

[W3C — CSS Box Model](https://www.w3.org/TR/css-box-3/): margin και padding.

[W3C — CSS Sizing](https://www.w3.org/TR/css-sizing-3/): `box-sizing`, `min-height` και ποσοστιαίες διαστάσεις.

[W3C — CSS Custom Properties](https://www.w3.org/TR/css-variables-1/): custom properties και `var()`.

[W3C — CSS Fonts](https://www.w3.org/TR/css-fonts-4/): `font-family` και fallback fonts.

[W3C — CSS Cascade](https://www.w3.org/TR/css-cascade-5/): inheritance και cascade layers.

[W3C — CSS Text Decoration](https://www.w3.org/TR/css-text-decor-3/): `text-decoration`.

[Chakra UI — Cascade Layers](https://chakra-ui.com/docs/styling/cascade-layers): **Layer Types**.

## Αρχικό CSS module — `app/page.module.css`

[Next.js — CSS](https://nextjs.org/docs/app/getting-started/css): **CSS Modules**.

[W3C — Selectors](https://www.w3.org/TR/selectors-4/): class selectors, descendant selectors και `:hover`.

[W3C — Flexbox](https://www.w3.org/TR/css-flexbox-1/): flex containers, direction, alignment και flexibility.

[W3C — Media Queries Level 4](https://www.w3.org/TR/mediaqueries-4/): width, hover και pointer.

[W3C — Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/#prefers-color-scheme): `prefers-color-scheme`.

[W3C — CSS Text](https://www.w3.org/TR/css-text-4/): `text-wrap` και letter spacing.

[W3C — CSS Color Level 5](https://www.w3.org/TR/css-color-5/): `color-mix()`.

[W3C — Filter Effects](https://www.w3.org/TR/filter-effects-1/): `invert()`.

[W3C — CSS Transitions](https://www.w3.org/TR/css-transitions-1/): transition shorthand.

Το αρχείο προέρχεται από την αρχική δομή του project και δεν χρησιμοποιείται από την τρέχουσα σελίδα.

## TypeScript configuration — `tsconfig.json`, `next-env.d.ts`

[TypeScript — TSConfig Reference](https://www.typescriptlang.org/tsconfig/): `target`, `lib`, `allowJs`, `skipLibCheck`, `strict`, `noEmit`, `esModuleInterop`, `module`, `moduleResolution`, `resolveJsonModule`, `isolatedModules`, `jsx`, `incremental`, `plugins`, `paths`, `include`, `exclude`.

[Next.js — TypeScript](https://nextjs.org/docs/app/api-reference/config/typescript): TypeScript plugin και το παραγόμενο `next-env.d.ts`.

## Next.js configuration — `next.config.ts`

[Next.js — next.config.js](https://nextjs.org/docs/app/api-reference/config/next-config-js): TypeScript configuration και `NextConfig`.

## ESLint configuration — `eslint.config.mjs`

[Next.js — ESLint](https://nextjs.org/docs/app/api-reference/config/eslint): Core Web Vitals και TypeScript configurations.

[ESLint — Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files): configuration objects και `defineConfig`.

[ESLint — Ignore Files](https://eslint.org/docs/latest/use/configure/ignore): `globalIgnores`.

## Dependencies και scripts — `package.json`, `package-lock.json`

[npm — package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/): **scripts**, **dependencies**, **devDependencies**, **private**.

[npm — package-lock.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-lock-json/): **Description**.

[npm — npm run](https://docs.npmjs.com/cli/v11/commands/npm-run/): **Synopsis**, **Description**.

[Next.js — CLI](https://nextjs.org/docs/app/api-reference/cli/next): **next dev**, **next build**, **next start**, επιλογή `--webpack`.

## Αρχική δημιουργία project και snippets

[Next.js — create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app): δημιουργία αρχικού project και διαθέσιμες επιλογές.

[Chakra UI — CLI](https://chakra-ui.com/docs/get-started/cli): προσθήκη snippets με `snippet add`.

## Git και GitHub

[Git — remote](https://git-scm.com/docs/git-remote): **Commands → add**, **get-url**.

[Git — status](https://git-scm.com/docs/git-status): **Description**, **Output**.

[Git — diff](https://git-scm.com/docs/git-diff): σύγκριση working tree με staging area, περιορισμός σε αρχείο και επιλογή `--stat`.

[Git — add](https://git-scm.com/docs/git-add): **Description**, επιλογή αρχείων για staging.

[Git — commit](https://git-scm.com/docs/git-commit): **Description**, επιλογές `-m` / `--message`.

[Git — push](https://git-scm.com/docs/git-push): **Synopsis**, **Examples**, αποστολή branch σε remote.

[Git — gitignore](https://git-scm.com/docs/gitignore): **Pattern Format**, για το `.gitignore`.

[GitHub — Adding locally hosted code to GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github): **Importing a Git repository with the command line**.

## Έμπνευση και project αναφοράς

[craftzdog-homepage — Takuya Matsuyama / devaslife](https://github.com/craftzdog/craftzdog-homepage): αρχική έμπνευση και project αναφοράς. Καταγράφεται χωριστά από την authoritative τεχνική τεκμηρίωση και δεν αποτελεί δήλωση αντιγραφής συγκεκριμένων αρχείων.

## Δήλωση γλώσσας περιεχομένου — Hero, About και Projects

[W3C — Declaring language in HTML](https://www.w3.org/International/questions/qa-html-language-declarations): **Quick answer**, έως και το παράδειγμα αλλαγής γλώσσας μέσα σε παράγραφο. Μελέτησα την κληρονομικότητα του `lang` και εφάρμοσα `lang="el"` στα ελληνικά sections και `lang="en"` στον τίτλο Projects, διατηρώντας το `<html lang="en">`.

## Έλεγχος εμφάνισης και debugging του Container

[WebKit — Elements Tab](https://webkit.org/web-inspector/elements-tab/#details-sidebar): **Details Sidebar**, οι παράγραφοι για **Styles**, **Computed** και **Font**. Χρησιμοποίησα τον Inspector για έλεγχο γραμματοσειρών, περιθωρίων και προσωρινή απενεργοποίηση CSS δηλώσεων.

[Chakra UI — Cascade Layers](https://chakra-ui.com/docs/styling/cascade-layers): **Layer Types**, **Layer Order**.

[W3C — CSS Cascade: Layer Ordering](https://www.w3.org/TR/css-cascade-5/#layer-order): προτεραιότητα δηλώσεων εκτός layer. Εφάρμοσα τη γνώση αφαιρώντας το καθολικό reset που μηδένιζε τα περιθώρια του Container.
