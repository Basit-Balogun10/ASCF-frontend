import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import CommonButton from "../components/CommonButton";

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

            <section className="w-full h-screen relative">
                <Header displayNavBar={true} />
                <section className="flex my-12">
                    <div className="w-2/5 px-8">
                        <div className="w-2/3 mx-auto">
                            <h1 className="capitalize text-4xl font-black leading-tight pb-6">
                                anisa sickle <br></br> cell foundation
                            </h1>

                            <p className="pb-6 text-sm font-extrabold leading-6">
                                <span className="">
                                    Anisa Sickle-Cell Foundation is a non-profit
                                    organization locally based in Nigeria,
                                    advocating for a sickle-cell free
                                    generation.&nbsp;
                                </span>
                                <span className="text-gray-800 dark:text-stone-400/80">
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
                            <CommonButton
                                buttonText="LEARN MORE"
                                isPrimary={true}
                                onClickHandler={() => {}}
                            />
                        </div>
                    </div>

                    <div
                        className={`${styles.hero} w-3/5 absolute top-0 right-0 h-full bg-blend-overlay bg-no-repeat bg-center bg-contain`}
                    >
                        <Header displayLogo={false} />
                    </div>
                </section>
            </section>
        </>
    );
};

export default Home;
