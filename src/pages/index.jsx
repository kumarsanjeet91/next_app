import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <div>
        <div className="navbar bg-base-100">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="mt-5">
          <h1 className="text-3xl">My name is Sanjeet</h1>
          <p>A blog post by sanjeet kumar</p>
        </div>
      </div>
    </>
  );
}
