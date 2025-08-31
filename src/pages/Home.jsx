import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => (
  <>
    <Helmet>
      <title>Strona Główna | React SSR</title>
      <meta name="description" content="To jest strona główna aplikacji React SSR." />
    </Helmet>
    <h2>Strona główna SSR</h2>
    <p>Witamy na stronie głównej!</p>
  </>
);

export default Home;
