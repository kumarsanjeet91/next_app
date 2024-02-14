import Head from "next/head";
import Script from "next/script";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1>My name is Sanjeet</h1>
      <Script src="./sc.js" strategy="lazyOnload"></Script>
    </>
  );
}
