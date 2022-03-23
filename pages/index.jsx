import Head from "next/head";
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Linkedin</title>
        <meta name="description" content="Linkedin clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
