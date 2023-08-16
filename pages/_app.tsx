import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AppProps } from "next/app";
import MyImage from "../components/MyImage";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import useGoogleAnalytics from "../utils/hooks/useGoogleAnalytics";

config.autoAddCss = false;

const components = {
  MyImage,
};

function MyApp({ Component, pageProps }: AppProps) {
  const GA_TRACKING_ID = "G-0HV95CWK96";
  useGoogleAnalytics(GA_TRACKING_ID);

  return (
    <React.StrictMode>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </React.StrictMode>
  );
}

export default MyApp;
