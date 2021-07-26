/* eslint-disable react/react-in-jsx-scope */
import { AppProps } from 'next/app';
import React from 'react';
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
