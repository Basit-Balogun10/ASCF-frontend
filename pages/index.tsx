import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import CommonButton from "../components/CommonButton";
import { checkIsMobile } from "../utils";
import PageLayout from "../components/PageLayout";
import { pageContentType } from "../components/PageContent";

const articleText =
    "Millions of people around the world, including 100,000 in the United States suffer from sickle cell disease, a brutally painful inherited blood disorder with about 30% of them being African descent. Over time, the disease worsens and can cause infections, organ damage, blindness, stroke and early death. Lorem ipsum dolor consectetur, adipisicing elit. Eligendi minima delectus ullam tenetur sed? Laboriosam accusantium, consectetur saepe quia suscipit deserunt modi fugiat omnis amet necessitatibus reiciendis debitis expedita atque! Nam qui ab recusandae veritatis reiciendis ducimus libero velit possimus in. Maiores omnis error esse obcaecati molestiae reiciendis alias dignissimos ad quaerat, hic, quisquam harum quos iste aliquid corporis quasi! Suscipit, optio corrupti! Tempore neque vero ut enim repellat quod fuga? Autem magni ullam iusto quibusdam labore animi cumque maiores consectetur placeat non. Quidem ea blanditiis iusto voluptatem, maiores modi. Ipsum sunt est quidem iure labore commodi ipsa distinctio maiores culpa cumque tempore, sint ea libero expedita mollitia officia voluptates. Doloremque itaque ea quibusdam eum asperiores cupiditate inventore accusantium aliquid!";

const aboutItems: pageContentType[] = [
    {
        id: "",
        title: "SO, WHO ARE WE?",
        body: articleText,
    },
    {
        id: "",
        title: "ARE WE FIRST AND FOREMOST INTERNATIONAL?",
        body: articleText,
    },
    {
        id: "",
        title: "WHY SHOULD USERS GO TO OUR STORE?",
        body: articleText,
    },
    {
        id: "",
        title: "IS ASCF PRIMARILY A STORE?",
        body: articleText,
    },
];

const ABOUT_PAGE_DESCRIPTION_TEXT =
    "We aspire to work toward being a fore-frontier in  promoting initiatives focused on reducing prevalence of sickle cell disease";

const ABOUT_PAGE_TITLE = "Anisa Sickle Cell Foundation";

const Home = () => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [learnMore, setLearnMore] = useState<boolean>(false);

    useEffect(() => {
        setIsMobile(checkIsMobile());
        console.log("checked mobile");
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

            {learnMore ? (
                <>
                    <Header animate={false} />
                    <PageLayout
                        desc={ABOUT_PAGE_DESCRIPTION_TEXT}
                        hasExtraInfo={false}
                        href=""
                        pageContents={aboutItems}
                        pageTitle={ABOUT_PAGE_TITLE}
                    >
                        <a className="px-3 py-2 bg-ourBlack dark:bg-white hover:bg-black dark:hover:bg-red-100 text-ourRed text-base md:text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black transition-colors ease-in-out">
                            <Link href="/">BECOME A SPONSOR</Link>
                        </a>
                    </PageLayout>
                </>
            ) : (
                // TODO: WILL LIKE THIS SECTION TO ANIMATE OUT AFTER 'LEARN MORE' BTN IS CLICKED
                <section className="w-full md:h-screen md:relative">
                    {!isMobile && <Header displayNavBar={true} />}
                    <section className="md:flex md:flex-row md:flex-nowrap md:my-1">
                        <div
                            data-aos={`${isMobile ? "" : "fade-left"}`} // Empty value when isMobile is true fixes bug in navbar animation
                            data-aos-duration={`${isMobile ? "1000" : "1500"}`}
                            data-aos-once="true"
                            className={`${styles.hero} md:block relative w-full md:w-3/5 h-[35rem] md:h-full md:absolute md:top-0 md:right-0 flex flex-col justify-start bg-blend-overlay bg-no-repeat bg-center bg-contain`}
                        >
                            {isMobile ? (
                                <Header displayLogo={true} />
                            ) : (
                                <Header displayLogo={false} />
                            )}
                            <div className="md:hidden absolute top-[33%]">
                                <h1 className="font-secularOne text-6xl text-center text-white pb-6">
                                    Anisa Sickle Cell Foundation
                                </h1>
                            </div>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-once="true"
                            className="w-full mt-4 md:mt-0 md:w-2/5 md:px-8"
                        >
                            <div className="px-4 md:px-0 md:w-2/3 md:mx-auto text-center md:text-left">
                                <h1 className="hidden md:block font-secularOne font-extrabold capitalize text-4xl leading-tight pb-6">
                                    anisa sickle <br></br> cell foundation
                                </h1>

                                <p className="pb-6 mt-6 md:mt-0 text-md text-lg md:text-sm md:font-extrabold md:tracking-normal md:leading-6">
                                    <span className="dark:text-gray-200 md:dark:text-white">
                                        Anisa Sickle-Cell Foundation is a
                                        non-profit organization locally based in
                                        Nigeria, advocating for a sickle-cell
                                        free generation.&nbsp;
                                    </span>
                                    <span className="md:text-gray-800 dark:text-gray-200 md:dark:text-stone-400/80">
                                        It intends to also serve as a
                                        psychosocial support for individuals
                                        living with sickle cell disease and to
                                        facilitate enacting of inclusive
                                        policies at local and national levels.
                                        The big picture we aspire to work toward
                                        is being a fore frontier promoting
                                        initiatives focused on reducing
                                        prevalence of sickle cell disease to the
                                        barest minimum.
                                    </span>
                                </p>
                                <div className="text-center md:text-left">
                                    <CommonButton
                                        bigText={isMobile as boolean}
                                        buttonText="LEARN MORE"
                                        isPrimary={true}
                                        onClickHandler={() => {
                                            setLearnMore(!learnMore);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            )}
        </>
    );
};

export default Home;
