import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>reserve</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
