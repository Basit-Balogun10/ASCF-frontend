import type { NextPage } from "next";
import Head from 'next/head'

import Header from "../../components/Header";
import tw from "tailwind-styled-components";

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ASCF | Event</title>
        <meta name="description" content="anisa sickle cell foundation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </Layout>
  );
};

const Layout = tw.div`
    h-screen
    bg-black
`;

export default About;