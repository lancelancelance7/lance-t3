import Head from "next/head";
import { Layout } from "~/layouts/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>Hello</Layout>
      </main>
    </>
  );
}
