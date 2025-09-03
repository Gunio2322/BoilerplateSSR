import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Kontakt = () => (
  <>
    <Helmet>
      <title>Kontakt | React SSR Boilerplate</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="Skontaktuj się z nami – React SSR Boilerplate" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

    </Helmet>

    <Header />
    <Footer />

  </>
);

export default Kontakt;
