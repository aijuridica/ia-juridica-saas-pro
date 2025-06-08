import React from 'react';
import { AuthContext } from '../context/AuthContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthContext.Provider value={{}}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
