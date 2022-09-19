import React, { useEffect, useState } from "react";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>ASCF</title>
                <meta
                    name="description"
                    content="anisa sickle cell foundation"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section
                className="w-screen
 flex
 h-screen
 overflow-hidden"
            >
                <div
                    className="flex-auto
 w-2/5
 p-24"
                >
                    <h1
                        className="capitalize
 text-[40px]
 font-black
 leading-tight
 pb-6"
                    >
                        anisa sickle <br></br> cell foundation
                    </h1>

                    <p
                        className="text-[14px]
 leading-6
 pb-6"
                    >
                        <span className="font-extrabold">
                            Anisa Sickle-Cell Foundation is a non-profit
                            organization locally based in Nigeria, advocating
                            for a sickle-cell free generation.&nbsp;
                        </span>
                        It intends to also serve as a psychosocial support for
                        individuals living with sickle cell disease and to
                        facilitate enacting of inclusive policies at local and
                        national levels. The big picture we aspire to work
                        toward is being a fore frontier promoting initiatives
                        focused on reducing prevalence of sickle cell disease to
                        the barest minimum.
                    </p>
                    <button
                        className="bg-red-500
  px-4 py-2 
  text-white 
  rounded 
  shadow-md
  font-bold
  text-sm
  font-roboto"
                    >
                        LEARN MORE
                    </button>
                </div>

                <img
                    className="flex-auto
 w-3/5
 h-screen"
                    src="/main.jpg"
                />
            </section>
        </>
    );
};

export default Home;
