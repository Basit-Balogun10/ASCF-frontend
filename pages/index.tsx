import type { NextPage } from 'next'
import Head from 'next/head'

import tw from "tailwind-styled-components";
import Header from '../components/header';

const Home: NextPage = () => {
  return (
    <Layout>
       <Head>
        <title>ASCF</title>
        <meta name="description" content="anisa sickle cell foundation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </Layout>
  )
}

const Layout = tw.div`
    h-screen
    bg-black
`;

export default Home
