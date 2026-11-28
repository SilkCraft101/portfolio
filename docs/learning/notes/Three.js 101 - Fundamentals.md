---
tags:
  - portfolio
  - threejs
  - webgl
  - graphics
  - javascript
  - 3d
---

# Από κύβο σε εικόνα

Η σκηνή έχει τα αντικείμενα. Η κάμερα ορίζει ποιο μέρος βλέπω. Ο renderer σχεδιάζει το αποτέλεσμα στον καμβά.

```js
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 400 / 300, 0.1, 100);
camera.position.z = 3;

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x44aa88 }),
);
scene.add(cube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 300);
document.body.append(renderer.domElement);
renderer.render(scene, camera);
```

Η γεωμετρία ορίζει το σχήμα. Το υλικό ορίζει την εμφάνιση. Το mesh τα συνδυάζει και κρατά θέση, περιστροφή και κλίμακα. Το `MeshBasicMaterial` έχει χρώμα χωρίς να χρειάζεται φως. Για κίνηση μπορώ να αλλάζω την περιστροφή και να καλώ ξανά `render` μέσα στο `setAnimationLoop`.

Στο Portfolio υπάρχει το Lantern Moth ως αρχείο GLB. Η εμφάνιση 3D μοντέλου παραμένει προαιρετική μελέτη. Παλαιότερη ιδέα για εξάσκηση ήταν η Jumping Spider.

- [React Three Fiber - Canvas](React%20Three%20Fiber%20-%20Canvas.md)
- [Drei - useGLTF](Drei%20-%20useGLTF.md)
- [Three.js — Fundamentals](https://threejs.org/manual/pages/fundamentals.html)
- [Three.js — Creating a Scene](https://threejs.org/manual/pages/creating-a-scene.html)
