import * as THREE from 'three';

console.log(THREE);

//Scene
const scene = new THREE.Scene();

// Mesh
const geometry1 = new THREE.BoxGeometry(1,1,1);
const material1 = new THREE.MeshBasicMaterial({color: "purple"})
const mesh1 = new THREE.Mesh(geometry1, material1);

scene.add(mesh1);

//Camera
const aspect = {
    width: window.innerWidth || 847,
    height: window.innerHeight || 757,
}
console.log("Aspect Width: ",aspect.width);
console.log("Aspect Height: ",aspect.height);
const camera =  new THREE.PerspectiveCamera(75, aspect.width/aspect.height);
camera.position.z = 3;

scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);


// Animation

// clock class
const clock = new THREE.Clock();

const animate = () => {
    // Get Elapsed Time
    const elapsedTime = clock.getElapsedTime()

    // update rotation on X axis
    mesh1.rotation.x = elapsedTime* Math.PI * 2;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}
animate();
