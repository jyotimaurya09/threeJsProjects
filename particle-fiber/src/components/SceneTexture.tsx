import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { BufferGeometry, Group, Material, Mesh, NormalBufferAttributes, Object3DEventMap, TextureLoader } from 'three';
import CustomTraingle from './CustomTraingle';
import { useLoader } from '@react-three/fiber';

function SceneTexture() {
    const torusRef = useRef<Group<Object3DEventMap>>(null!);
    const texture = useLoader(TextureLoader,'./logo192.png');
    console.log("Texture is");
    console.log(texture);

    useFrame((state, delta) => {
        const radius = 10;
        const speed = 0.5;
        // Update camera position to rotate around the object
        state.camera.position.x = Math.sin(state.clock.elapsedTime * speed) * radius;
        state.camera.position.z = Math.cos(state.clock.elapsedTime * speed) * radius;
        state.camera.position.y = 2

        // Look at the center of the group (the object)
        state.camera.lookAt(torusRef.current.position);

        //console.log(planeRef.current);
        //torusRef.current.rotation.y += delta;
    });
    return (
        <>
            <OrbitControls />
            <group ref={torusRef}>

                <mesh position-x={-3} >
                    <torusKnotGeometry />
                    <meshBasicMaterial map={texture}/>
                </mesh>
                <mesh position-x={3}>
                    <torusKnotGeometry />
                    <meshNormalMaterial />
                </mesh>
                <CustomTraingle />
            </group>
        </>
    )
}

export default SceneTexture