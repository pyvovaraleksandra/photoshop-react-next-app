import '../styles/globals.css'
import { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
      <Head>
          <title>My app</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
              href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;600;700&display=swap"
              rel="stylesheet"
          />
      </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
