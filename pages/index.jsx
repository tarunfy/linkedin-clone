import Head from "next/head";
import { signOut } from "next-auth/react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#F3F2eF] dark:bg-black/90 dark:text-white/90 h-screen overflow-y-scroll md:space-y-6">
      <Head>
        <title>Linkedin | Feed</title>
        <meta name="description" content="Linkedin clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-5">
          <Sidebar />
          {/* feed */}
        </div>
        {/* widgets */}
      </main>

      {/* footer */}
    </div>
  );
}
