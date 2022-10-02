import type { NextPage } from "next";
import Head from "next/head";

const Blog: NextPage = () => {
    return (
        <div className="h-screen bg-black">
            <Head>
                <title>ASCF | Blog</title>
                <meta
                    name="description"
                    content="anisa sickle cell foundation"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
};

export default Blog;
