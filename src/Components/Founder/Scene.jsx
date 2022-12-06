import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./index.css";

//Image as texture in r3f
import { TextureLoader } from "three";

const ModelImage = ({ position, middle }) => {
  const ref = React.useRef();
  const texture = new TextureLoader().load("/Images/FoundersImage.png");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={[1, 1, 5]}>
      <planeGeometry args={[3.5, 4.2, 5]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
};

const Scene = ({ position, middle, position2 }) => {
  return (
    <div
      style={{
        width: "45vw",
        minHeight: "75vh",
        alignSelf: "flex-start",
        marginBottom: "10%",
        overflow: "hidden",
      }}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense>
          <ModelImage position={position} middle={middle} />
          {middle && <ModelImage position={position2} />}
        </Suspense>
      </Canvas>
    </div>
  );
};
export default Scene;