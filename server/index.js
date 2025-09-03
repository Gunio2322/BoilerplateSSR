import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('*', (req, res) => {
  const context = {};
  const helmetContext = {};
  const appMarkup = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  const { helmet } = helmetContext;

  // Linki do CSS (dodaj tutaj wszystkie potrzebne style)
  const cssLinks = `
    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="/assets/css/material.min.css" />
    <link rel="stylesheet" href="/assets/css/ripples.min.css" />
    <link rel="stylesheet" href="/assets/css/owl.carousel.css" />
    <link rel="stylesheet" href="/assets/css/settings.css" />
    <link rel="stylesheet" href="/assets/css/slicknav.css" />
    <link rel="stylesheet" href="/assets/css/animate.css" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    <link rel="stylesheet" href="/assets/css/switcher.css" />
    <link rel="stylesheet" href="/assets/css/colors/pink.css" />
    <link rel="stylesheet" href="/assets/css/colors/purple.css" />
    <link rel="stylesheet" href="/assets/css/colors/deep-purple.css" />
    <link rel="stylesheet" href="/assets/css/colors/indigo.css" />
    <link rel="stylesheet" href="/assets/css/colors/blue.css" />
    <link rel="stylesheet" href="/assets/css/colors/yellow.css" />
    <link rel="stylesheet" href="/assets/css/colors/green.css" />
    <link rel="stylesheet" href="/assets/css/colors/red.css" />
    <link rel="stylesheet" href="/assets/css/responsive.css" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />
  `;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet?.title?.toString() || ''}
        ${helmet?.meta?.toString() || ''}
        ${cssLinks}
      </head>
      <body>
        <div id="root">${appMarkup}</div>
        <script src="/client.js"></script>

      </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`SSR server running on http://localhost:${PORT}`);
});
