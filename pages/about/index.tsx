import type { NextPage } from "next";
import Head from "next/head";

import Header from "../../components/Header";

const About: NextPage = () => {
    return (
        <div className="h-screen bg-black">
            <Head>
                <title>ASCF | About</title>
                <meta
                    name="description"
                    content="anisa sickle cell foundation"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </div>
    );
};

export default About;
