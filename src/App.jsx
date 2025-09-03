import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';



const App = () => (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/kontakt" element={<Kontakt />} />
    </Routes>
 
);

export default App;
