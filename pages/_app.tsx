import { useEffect } from "react";
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';

import '../styles/globals.css'
import "aos/dist/aos.css";
import Aos from "aos";


function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    Aos.init();
  }, [])

  return (
      <Layout>
          <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp