import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";
import MyImage from '../components/MyImage'
import { MDXProvider } from '@mdx-js/react';

config.autoAddCss = false;

const components = {
  MyImage
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
  );
}

export default MyApp;
