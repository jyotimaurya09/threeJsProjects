import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { BufferGeometry, DoubleSide, Material, Mesh, NormalBufferAttributes, Object3DEventMap } from 'three';
import { OrbitControls } from '@react-three/drei';

function Scene2() {
    const planeRef = useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>>(null!);

    useFrame((state, delta) => {
        state.camera.position.x += Math.sin(state.clock.elapsedTime);
        //console.log(planeRef.current);
        //planeRef.current.rotation.y += delta; 
    });
    return (
        <>
            <OrbitControls />
            <mesh ref={planeRef}>
                <planeGeometry args={[1, 5]} />
                <meshBasicMaterial color={"orange"} side={DoubleSide} />
            </mesh>
        </>
    )
}

export default Scene2