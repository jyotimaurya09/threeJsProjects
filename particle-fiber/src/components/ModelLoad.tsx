import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { DoubleSide } from 'three'
import Model from './Model'
import Gandalf from '../models/Gandalf';
import { button, useControls } from 'leva'

const ModelLoad = () => {
    const levaControls = useControls("light",{
        Xposition: 0,
        Intensity: {
            value: 2,
            min: -10,
            max: 10,
            step: 1,
        },
        click: button(()=> {
            
        })
    })

    return (
        <>
            <OrbitControls />
            <ambientLight intensity={levaControls.Intensity} />
            <directionalLight />
            <axesHelper />
            {/** 
             * 
            
            */}
            <Suspense
                fallback={
                    <mesh>
                        <planeGeometry args={[3, 3]} />
                        <meshBasicMaterial side={DoubleSide} />
                    </mesh>
                }
            >
                {true ? <Gandalf />: " "}
            </Suspense>

        </>
    )
}

export default ModelLoad