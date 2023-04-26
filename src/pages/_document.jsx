import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="ru">
      <Head>
        <meta name="robots" content="noindex, nofollow" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="favicons/180x180.png" />
        <link rel="manifest" href="manifest.webmanifest" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
