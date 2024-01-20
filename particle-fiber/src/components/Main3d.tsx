import { Canvas, RootState } from '@react-three/fiber';
import ModelLoad from './ModelLoad';
import { Perf } from 'r3f-perf';

const creatingCanvasHadler = (state: RootState) => {
  console.log("HEEEY");
  state.gl.setClearColor("yellow", 0.3);
}
function Main3d() {
  
  return (
    <Canvas
      gl={{
        antialias: false,
        alpha: true
      }}
      camera={{
        fov: 45,
        near: 0.1,
        //far: 100,
        //position: [10,0,10],
      }}
      onCreated={creatingCanvasHadler}
    >
      {/**<axesHelper args={[3]} />
      <gridHelper args={[ 20,20, "orange", "blue"]}/> 
      */}
      <ModelLoad />
      <Perf position="top-left" />
    </Canvas>
  )
}

export default Main3d