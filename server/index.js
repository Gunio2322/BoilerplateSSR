import express from 'express';
import path from 'path';
import fs from 'fs';
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

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet?.title?.toString() || '<title>React SSR Boilerplate</title>'}
        ${helmet?.meta?.toString() || ''}
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
