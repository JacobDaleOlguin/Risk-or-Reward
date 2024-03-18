import React from 'react';
import { Container, Grid } from '@mui/material';
import InfoContainer from './components/InfoContainer';
import PurchaseContainer from './components/PurchaseContainer';
import Box from './components/Box'; // Assuming this is your 3D component
import Vapor from './components/Vapor';
import { Canvas } from '@react-three/fiber';
import './App.css'; // Assuming you have a CSS file for global styles

function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <Canvas style={{ background: 'black', height: '100vh' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <Vapor />
      </Canvas>
      <Container maxWidth="lg" style={{ position: 'absolute', top: '0', pointerEvents: 'auto' }}> // Changed 'none' to 'auto'
  <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
      <InfoContainer />
    </Grid>
    <Grid item xs={12} md={6} style={{ pointerEvents: 'auto' }}> // Specifically enable pointer events here if needed
      <PurchaseContainer />
    </Grid>
  </Grid>
</Container>

    </div>
  );
}

export default App;
