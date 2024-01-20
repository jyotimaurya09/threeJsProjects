import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, Object3DEventMap } from 'three';
import Particles from './Particles';

const ParticleScene = () => {

    return (
        <>
            <OrbitControls />
            <Particles />
        </>
    )
}

export default ParticleScene;