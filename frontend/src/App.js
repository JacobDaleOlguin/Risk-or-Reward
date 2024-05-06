import React from 'react';
import { Container } from '@mui/material';
import InfoContainer from './components/InfoContainer';
import Box from './components/Box';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Canvas style={{ background: 'black', height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
      <Container maxWidth={false} style={{ 
          position: 'absolute', 
          top: '0', 
          left: '0', 
          right: '0', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'flex-start', 
          pointerEvents: 'auto' 
        }}>
        <div style={{ 
            width: '33%', 
            position: 'absolute', 
            right: '65%', 
            top: '10%'
          }}>
          <iframe 
            src="https://tokentool.bitbond.com/tokensale/0x952185d60a567120461b52696e6F341e5BE4Cd2C?chainId=1"
            title="Token Sale"
            style={{ 
              width: '100%', 
              height: '750px', 
              filter: 'invert(1) hue-rotate(180deg)' 
            }}
          />
        </div>
        <div style={{ 
            width: '33%', 
            position: 'absolute', 
            left: '65%',
            top: "25%" 
            
          }}>
          <InfoContainer />
        </div>
      </Container>
    </div>
  );
}

export default App;
