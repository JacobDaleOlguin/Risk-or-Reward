import React, { useRef, useState, useLayoutEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const Vapor = () => {
  const mesh = useRef();
  const { mouse } = useThree();
  const count = 5000; // Number of particles
  const [positions, setPositions] = useState(new Float32Array(count * 3));

  useLayoutEffect(() => {
    let positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    setPositions(positions);
  }, [count]);

  useFrame(() => {
    const positionsAttribute = mesh.current?.geometry?.attributes?.position;
    if (!positionsAttribute) return;
  
    const positions = positionsAttribute.array;
    const displacement = 1; // Adjust for effect intensity
    const radius = 10; // Adjust for effect radius
  
    for (let i = 0; i < positions.length; i += 3) {
      let x = positions[i];
      let y = positions[i + 1];
      // Convert mouse coordinates to canvas space
      const mouseX = (mouse.x * 25) + 25; // Assuming canvas is 50 units wide
      const mouseY = -(mouse.y * 25) + 25; // Assuming canvas is 50 units tall
      const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);
      if (distance < radius) {
        // Push away from mouse
        positions[i] += displacement * ((x - mouseX) / distance);
        positions[i + 1] += displacement * ((y - mouseY) / distance);
      }
    }
    positionsAttribute.needsUpdate = true;
  });
  

  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={5}
        sizeAttenuation
        color="white"
        opacity={1} 
      />
    </points>
  );
};

export default Vapor;
