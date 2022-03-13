import { Fragment } from "react";
import Head from "next/head";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>GoMakeApps</title>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1, minimum-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
