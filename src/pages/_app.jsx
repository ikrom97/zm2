import React from 'react';
import GlobalStyles from '@/gobal-styles';

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
