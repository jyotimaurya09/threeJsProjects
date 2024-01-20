# Three JS Projects

This repository contains React three js projects.

# Notes

Basic Elements of three js scene
1. Scene
2. OBject
3. Camera
4. Renderer

In React Three Fiber most of the things are taken care by the library
1. Canvas component : It has many already already created and we can just use it.
For Example: children, gl, camera, scene shadows, raycaster, frameloop, resize, orthographic, dpr, legacy, events, eventSource, eventPrefix, flat, onCreated, onPointerMissed

R3F can render to a root, similar to how react-dom and all the other React renderers work. This allows you to shave off react-dom (~40kb),


Points to be Noted:
- Even if you apply OrbitControls (from Drei) in one scene, all other scenes will also be affected.
- We can change the camera using two ways
    1. Using camera inside canvas
    2. Using state inside useFrame Hook
- You can add background color using 2 ways
    1. Using index.css and targeting the root element
    2. In Canvas using onCreated

