import { OrbitControls } from '@react-three/drei'
import React from 'react'

function Scene() {
    return (

        <group>
            <OrbitControls />
            <mesh position-x={-3} >
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
            <mesh position-x={3}>
                <torusKnotGeometry />
                <meshNormalMaterial />
            </mesh>
        </group>
    )
}

export default Scene