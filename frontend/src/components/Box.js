import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

function Box(props) {
  const mesh = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { size, viewport } = useThree();
  const texture = useTexture('/Rimage.webp');

  const updateMousePosition = useCallback((x, y) => {
    setMousePosition({
      x: (x / size.width) * 2 - 1,
      y: -(y / size.height) * 2 + 1
    });
  }, [size.width, size.height]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      updateMousePosition(event.clientX, event.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [updateMousePosition]); // Dependency on the memoized function

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x = mousePosition.y * viewport.height * 0.1;
      mesh.current.rotation.y = mousePosition.x * viewport.width * 0.2;
    }
  });

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default Box;
