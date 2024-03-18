// Assuming this component is now Box.js
import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

function Box(props) {
  const mesh = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { size, viewport } = useThree();
  const texture = useTexture('/Rimage.webp'); // Adjust the path based on your project structure

  // Function to update mouse position
  const updateMousePosition = (x, y) => {
    setMousePosition({
      x: (x / size.width) * 2 - 1,
      y: -(y / size.height) * 2 + 1
    });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      updateMousePosition(event.clientX, event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [size.width, size.height]); // Depend on size to recalculate when it changes

  useFrame(() => {
    // Use mouse position to modify the mesh rotation
    mesh.current.rotation.x = mousePosition.y * viewport.height * 0.1;
    mesh.current.rotation.y = mousePosition.x * viewport.width * 0.2;
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Box;
