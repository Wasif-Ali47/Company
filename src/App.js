import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './componenets/Header';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Pricing from './pages/Pricing'
import Career from './pages/Career'
import HowToOrder from './pages/HowToOrder'
import GetStarted from './pages/GetStarted'
import Demos from './pages/Demos'
import Particles from './componenets/ReactBits/Particles';

function App() {
  return (
    <>
      <BrowserRouter>
  <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
    <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
    </div>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Demos" element={<Demos />} />
      <Route path="/About Me" element={<AboutMe />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/How to Order" element={<HowToOrder />} />
      <Route path="/Get Started" element={<GetStarted />} />
    </Routes>
  </div>
</BrowserRouter>

    </>
  );
}

export default App;
