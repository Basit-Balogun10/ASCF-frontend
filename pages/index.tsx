import React, { useEffect, useState } from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import CommonButton from "../components/CommonButton";
import { checkIsMobile } from "../utils";


const Home = () => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null)
    useEffect(() => {
        setIsMobile(checkIsMobile())
        console.log('checked mobile')
    }, []);
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

            <section className="w-full md:h-screen md:relative">
                {!isMobile && <Header displayNavBar={true} />}
                <section className="md:flex md:flex-row md:flex-nowrap md:my-1">
                    <div
                        className={`${styles.hero} w-full flex flex-col justify-start h-[40rem] md:w-3/5 md:block md:absolute md:top-0 md:right-0 md:h-full bg-blend-overlay bg-no-repeat bg-center bg-contain`}
                    >
                        {isMobile ? (
                            <Header displayLogo={true} />
                        ) : (
                            <Header displayLogo={false} />
                        )}
                        <div className="md:hidden self-center my-auto">
                            <h1 className="font-poppins text-5xl text-center text-white font-black leading-tight pb-6">
                                ANISA SICKLE CELL FOUNDATION
                            </h1>
                        </div>
                    </div>
                    <div className="w-full mt-4 md:mt-0 md:w-2/5 md:px-8">
                        <div className="px-6 md:px-0 md:w-2/3 md:mx-auto text-center md:text-left">
                            <h1 className="hidden md:block capitalize text-4xl font-black leading-tight pb-6">
                                anisa sickle <br></br> cell foundation
                            </h1>

                            <p className="pb-6 mt-6 md:mt-0 text-md text-lg md:text-sm font-extrabold tracking-wide md:tracking-normal md:leading-6">
                                <span className="dark:text-gray-200 md:dark:text-white">
                                    Anisa Sickle-Cell Foundation is a non-profit
                                    organization locally based in Nigeria,
                                    advocating for a sickle-cell free
                                    generation.&nbsp;
                                </span>
                                <span className="md:text-gray-800 dark:text-gray-200 md:dark:text-stone-400/80">
                                    It intends to also serve as a psychosocial
                                    support for individuals living with sickle
                                    cell disease and to facilitate enacting of
                                    inclusive policies at local and national
                                    levels. The big picture we aspire to work
                                    toward is being a fore frontier promoting
                                    initiatives focused on reducing prevalence
                                    of sickle cell disease to the barest
                                    minimum.
                                </span>
                            </p>
                            <div className="text-center md:text-left">
                                <CommonButton
                                    bigText={isMobile as boolean}
                                    buttonText="LEARN MORE"
                                    isPrimary={true}
                                    onClickHandler={() => {}}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
