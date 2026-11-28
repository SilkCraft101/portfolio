---
tags:
  - portfolio
  - dev
  - react
  - threejs
  - react-three-fiber
  - 3d
---

# Canvas

Το `Canvas` είναι component του React Three Fiber (`@react-three/fiber`) που δημιουργεί το περιβάλλον απόδοσης μιας τρισδιάστατης σκηνής μέσα σε εφαρμογή React. Το React Three Fiber είναι ένας React renderer για το Three.js. Επιτρέπει τη δημιουργία τρισδιάστατων σκηνών με JSX.

## Με απλά λόγια

Όπως χρησιμοποιώ HTML elements για να δημιουργήσω μια σελίδα, μπορώ να χρησιμοποιήσω Three.js αντικείμενα μέσα σε JSX για να δημιουργήσω μια τρισδιάστατη σκηνή. 

Το `Canvas` αναλαμβάνει τη δημιουργία της σκηνής (_scene_), της κάμερας (_camera_) και του μηχανισμού απόδοσης (_renderer_). 

Μέσα του μπορώ να τοποθετήσω τρισδιάστατα αντικείμενα και φωτισμό.

## Χρήση

```tsx
"use client";

import { Canvas } from "@react-three/fiber";

function Example() {
	return (
		<Canvas>
			<ambientLight intensity={1} />
		
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color="orange" />
			</mesh>
		</Canvas>
	);
}
```

Το `Canvas` δημιουργεί το περιβάλλον της τρισδιάστατης σκηνής. 

Το `<mesh>` δημιουργεί ένα τρισδιάστατο αντικείμενο. Συνδυάζει:
- **Geometry:** Το σχήμα του αντικειμένου.
- **Material:** Τον τρόπο με τον οποίο εμφανίζεται η επιφάνειά του.

Το `<boxGeometry>` ορίζει έναν κύβο. Το `args` μεταφέρει τις παραμέτρους στον constructor του Three.js.

Το `<meshStandardMaterial>` ορίζει το υλικό και το χρώμα του.

Το `<ambientLight>` προσθέτει γενικό φωτισμό.

Τα τρισδιάστατα στοιχεία τοποθετούνται μέσα στο `Canvas`, όχι απευθείας στο συνηθισμένο HTML DOM.

Το `Canvas` προσαρμόζεται στις διαστάσεις του γονικού HTML element. Για ορατό καμβά ο γονέας χρειάζεται διαθέσιμο πλάτος και ύψος. Το παράδειγμα μπορεί να μπει, για παράδειγμα, σε γονέα με ύψος 300px.

## Σύνδεση με το Portfolio

Το παράδειγμα είναι άσκηση 3D. Υπάρχει το αρχείο `public/models/lantern-moth.glb`, αλλά ο τρέχων κώδικας δεν έχει Canvas ή εγκατεστημένο React Three Fiber. Η σημείωση [Drei - useGLTF](Drei%20-%20useGLTF.md) δείχνει ποιον ρόλο θα είχε η φόρτωση του μοντέλου σε ένα τέτοιο παράδειγμα.

## Πηγή

- [React Three Fiber — Introduction](https://r3f.docs.pmnd.rs/getting-started/introduction)
- [React Three Fiber — Your First Scene](https://r3f.docs.pmnd.rs/getting-started/your-first-scene)
- [React Three Fiber — Canvas](https://r3f.docs.pmnd.rs/api/canvas)