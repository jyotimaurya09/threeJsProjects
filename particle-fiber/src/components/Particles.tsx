import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { BufferGeometry, Material, NormalBufferAttributes, Points, TextureLoader } from 'three'

const Particles = () => {
    const particlesRef = useRef<Points<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(null!);

    const texture = useLoader(TextureLoader, "./snow.jpeg");
    const verticesAmount = 2000;

    const positionArray = new Float32Array(verticesAmount * 3);
    for (let i = 0; i < verticesAmount * 3; i++) {
        positionArray[i] = Math.random() - 0.5;
    }

    useFrame((state,delta)=> {
        particlesRef.current.rotation.y += delta* 0.1;
        particlesRef.current.rotation.x += delta* 0.1;
    })
    return (
        <>
            <points ref={particlesRef}>
                <bufferGeometry >
                    <bufferAttribute
                        attach={"attributes-position"}
                        count={positionArray.length}
                        itemSize={3}
                        array={positionArray} />
                </bufferGeometry>
                <pointsMaterial size={0.02} alphaMap={texture} transparent={true} depthTest={false} />
            </points>
        </>
    )
}

export default Particles