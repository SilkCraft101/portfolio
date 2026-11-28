---
tags:
  - portfolio
  - dev
  - react
  - threejs
  - react-three-fiber
  - drei
  - gltf
---

# Από αρχείο GLB σε αντικείμενο σκηνής

Το `useGLTF` της Drei φορτώνει ένα μοντέλο glTF ή GLB με τον `GLTFLoader`. Το `scene` που επιστρέφει περιέχει τη σκηνή του μοντέλου.

```tsx
import { useGLTF } from "@react-three/drei";

function LanternMoth() {
  const { scene } = useGLTF("/models/lantern-moth.glb");
  return <primitive object={scene} />;
}
```

Αυτό είναι προαιρετικό παράδειγμα για component μέσα σε [Canvas](React%20Three%20Fiber%20-%20Canvas.md). Το Portfolio έχει ήδη το αρχείο στο `public/models/`. Το παράδειγμα απαιτεί Three.js, React Three Fiber και Drei. Το τρέχον Portfolio δεν έχει αυτές τις εξαρτήσεις.

**Δοκιμή κατανόησης.** Ποια γραμμή φορτώνει το αρχείο και ποια βάζει τη σκηνή του μοντέλου μέσα στον renderer;

Το μοντέλο [Lantern Moth του yair](https://blockbenchworkshop.com/model/yair/lantern-moth) διατίθεται με [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Η έκδοση του Portfolio εξήχθη από Blockbench σε GLB με κλίμακα εξαγωγής 16.

- [Drei — Gltf / useGLTF](https://drei.docs.pmnd.rs/loaders/gltf-use-gltf)
