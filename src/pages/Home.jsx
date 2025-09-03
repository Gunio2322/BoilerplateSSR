import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import AnimationsText from '../components/AnimationsText';
import BLogSection from '../components/BLogSection';
import ContactSection from '../components/ContactSection';

const Home = () => (
  <>
    <Helmet>
      <title>Strona Główna | React SSR</title>
      <meta name="description" content="To jest strona główna aplikacji React SSR." />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Header />
    <main>
      <Carousel />
      <AboutSection />
      <AnimationsText />
      <BLogSection />
      <ContactSection />
    
    </main>
    <Footer />
  </>
);

export default Home;
