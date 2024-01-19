import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

//Group
// const group = new THREE.Group()

//Mesh
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "purple" });
// const mesh = new THREE.Mesh(geometry, material);
//

// const geometry2= new THREE.BoxGeometry(1, 1, 1);
// const material2 = new THREE.MeshBasicMaterial({ color: "purple" });
// const mesh2 = new THREE.Mesh(geometry2, material2);
//
// group.add(mesh,mesh2)
// scene.add(group)
// group.position.x = 1

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Canvas
    camera={{
      fov: 75,
      near: 0.1,
      far: 100,
      // position: [2, 2, 5],
    }}
  >
    <mesh position-y={-4} >
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
    <Scene />
  </Canvas>
);
