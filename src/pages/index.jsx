import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <center>
        <div className="mt-5">
          <h1 className="text-3xl">My name is Sanjeet</h1>
          <p>A blog post by sanjeet kumar</p>
        </div>
      </center>
    </>
  );
}
