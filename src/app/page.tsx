import Header from "@/components/layout/Header";
import Posts from "@/components/posts/Posts";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>IgHuss</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full relative min-h-screen">
        <Header />

        <section>
          <Posts />
        </section>
      </div>
    </>
  );
}
