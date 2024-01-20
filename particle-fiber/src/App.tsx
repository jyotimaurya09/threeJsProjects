import React, { useEffect } from 'react';
import './App.css';
import Main3d from './components/Main3d';

function App() {
  useEffect(() => {
    console.log("Inside Use effect with no dependency array")
  }, [])
  //console.log("HELLO");
  return (
    <>
      <Main3d />
      <p>Hello</p>
    </>
  );
}

export default App;
