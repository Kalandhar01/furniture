// src/components/ModelViewer.js

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = () => {
  const glbUrl = '/path/to/your/model.glb'; // Replace with the path to your GLB file

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight color="#ffffff" position={[1, 1, 1]} />
      
      <Suspense fallback={null}>
        <Model glbUrl={glbUrl} />
      </Suspense>
    </Canvas>
  );
};

const Model = ({ glbUrl }) => {
  const gltfLoader = new GLTFLoader();
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    gltfLoader.load(glbUrl, setModel);
  }, [glbUrl]);

  return model ? <primitive object={model.scene} /> : null;
};

export default ModelViewer;
