import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 2rem;
`;

const About = () => (
  <>
    <h2>O projekcie SSR</h2>
    <p>To jest przykładowa aplikacja SSR z React.</p>
  </>
);

const App = () => (
  <HelmetProvider>
    <Container>
      <h1>React SSR Boilerplate</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/kontakt">Kontakt</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
    </Container>
  </HelmetProvider>
);

export default App;
