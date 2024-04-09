import React from 'react';
import { Container, Grid } from '@mui/material';
import InfoContainer from './components/InfoContainer';
import Box from './components/Box'; 
import Vapor from './components/Vapor';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Canvas style={{ background: 'black', height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <Vapor />
      </Canvas>
      <Container maxWidth="lg" style={{ position: 'absolute', top: '0', pointerEvents: 'auto' }}> 
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
          <iframe 
  src="http://tokentool.bitbond.com/tokensale/0xCCCEd1f42E6B7AD8a7C5a8575192153dBBb8a999?chainId=11155111"
  title="description" 
  style={{ 
    top: '10%', 
    width: '95%', 
    height: '750px', 
    filter: 'invert(1) hue-rotate(180deg)', 
    position: 'relative' 
  }}
/>

          </Grid>
          <Grid item xs={12} md={6}>
            <InfoContainer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
