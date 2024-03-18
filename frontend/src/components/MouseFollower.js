import React, { useState, useEffect } from 'react';

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{
      position: 'fixed',
      left: position.x,
      top: position.y,
      transform: 'translate(-50%, -50%)',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'rgba(100, 100, 255, 0.5)',
      pointerEvents: 'none', // Ensure it doesn't interfere with other elements
    }} />
  );
  
};
export default MouseFollower;