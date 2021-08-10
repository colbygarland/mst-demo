import type { AppProps } from 'next/app';
import { StoreProvider, rootStore } from '../stores/rootStore';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider value={rootStore}>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
