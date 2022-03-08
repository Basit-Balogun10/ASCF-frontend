import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>ASCF Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HomePage>
        <HomeContent>
          <Heading>anisa sickle cell foundation</Heading>

          <AllText>
            <Highlighted>
              Anisa Sickle-Cell Foundation is a non-profit organization locally
              based in Nigeria, advocating for a sickle-cell free
              generation.&nbsp;
            </Highlighted>
            It intends to also serve as a psychosocial support for individuals
            living with sickle cell disease and to facilitate enacting of
            inclusive policies at local and national levels. The big picture we
            aspire to work toward is being a fore frontier promoting initiatives
            focused on reducing prevalence of sickle cell disease to the barest
            minimum.
          </AllText>
          <LearnBtn>Learn more</LearnBtn>
        </HomeContent>

        <Mainimage src="/main.jpg" />
      </HomePage>
    </>
  );
};

const HomePage = tw.section`
 w-screen
 flex
 h-screen
 overflow-hidden
`;

const HomeContent = tw.div`
 flex-auto
 w-2/5
 p-20
`;

const Heading = tw.h1`
 capitalize
 text-[48px]
 font-black
 leading-tight
 pb-4
`;

const Mainimage = tw.img`
 flex-auto
 w-3/5
 h-screen
`;

const AllText = tw.p`
 text-[17px]
 pb-6
`;

const Highlighted = tw.span`
 font-extrabold
`;

const LearnBtn = tw.button`
  bg-red-500
  px-4 py-2 
  text-white 
  rounded 
  shadow-md
  font-bold
  text-sm
  font-roboto
`;

export default Home;
