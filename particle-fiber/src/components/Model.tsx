import { useAnimations, useGLTF } from '@react-three/drei';

const Model = () => {
    const model = useGLTF('./models/cuteDog/scene.gltf');
    const animations = useAnimations(model.animations, model.scene);
    console.log(model);
    console.log(animations);

    
    return (
        <primitive position={[0,1,0]} object={model.scene} />
    )
}

useGLTF.preload('./models/cuteDog/scene.gltf');

export default Model