import React from "react";
import { Container } from "@mui/material";
import InfoContainer from "./components/InfoContainer";
import Box from "./components/Box";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>
      <Canvas style={{ background: "black", height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
      <Container
        maxWidth={false}
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            width: "33%",
            position: "absolute",
            right: "65%",
            top: "10%",
          }}
        ></div>
        <div
          style={{
            width: "33%",
            position: "absolute",
            left: "65%",
            top: "25%",
          }}
        >
          <InfoContainer />
        </div>
      </Container>
    </div>
  );
}

export default App;
