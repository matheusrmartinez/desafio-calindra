import { AppProps } from 'next/app';
import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
