import { useState, useRef } from "react"
import type { NextPage } from "next";
import Link from "next/link";
import { GoSearch } from "react-icons/go"
import { FiArrowDown } from "react-icons/fi"
import Head from "next/head";
import styles from "../../styles/BlogIndex.module.css";

interface blogPostsType {
    id: string;
    title: string;
    date: string;
    author: string;
    body: string;
    imageUrl: string;
    imageAltText: string;
}

const articleText =
    "Millions of people around the world, including 100,000 in the United States suffer from sickle cell disease, a brutally painful inherited blood disorder with about 30% of them being African descent. Over time, the disease worsens and can cause infections, organ damage, blindness, stroke and early death. Lorem ipsum dolor consectetur, adipisicing elit. Eligendi minima delectus ullam tenetur sed? Laboriosam accusantium, consectetur saepe quia suscipit deserunt modi fugiat omnis amet necessitatibus reiciendis debitis expedita atque! Nam qui ab recusandae veritatis reiciendis ducimus libero velit possimus in. Maiores omnis error esse obcaecati molestiae reiciendis alias dignissimos ad quaerat, hic, quisquam harum quos iste aliquid corporis quasi! Suscipit, optio corrupti! Tempore neque vero ut enim repellat quod fuga? Autem magni ullam iusto quibusdam labore animi cumque maiores consectetur placeat non. Quidem ea blanditiis iusto voluptatem, maiores modi. Ipsum sunt est quidem iure labore commodi ipsa distinctio maiores culpa cumque tempore, sint ea libero expedita mollitia officia voluptates. Doloremque itaque ea quibusdam eum asperiores cupiditate inventore accusantium aliquid!";

const blogPosts: blogPostsType[] = [
    {
        id: "1",
        title: "A GENETIC CURE FOR SICKLE CELL DISEASE MOVES CLOSER TO REALITY",
        date: "February 09, 2022",
        author: "Article Writer",
        body: articleText,
        imageUrl: "/images/home-1.png",
        imageAltText: "Blog post image",
    },
    {
        id: "2",
        title: "SICKLE CELL TREATMENTS ARE GETTING BETTER",
        date: "February 09, 2022",
        author: "Article Writer",
        body: articleText,
        imageUrl: "/images/home-2.png",
        imageAltText: "Blog post image",
    },
    {
        id: "3",
        title: "ANOTHER SICKLE CELL TITLE FOR US TO VISUALIZE",
        date: "February 09, 2022",
        author: "Article Writer",
        body: articleText,
        imageUrl: "/images/home-3.png",
        imageAltText: "Blog post image",
    },
    {
        id: "4",
        title: "YET ANOTHER SICKLE CELL TITLE FOR US TO VISUALIZE",
        date: "February 09, 2022",
        author: "Article Writer",
        body: articleText,
        imageUrl: "/images/logo.png",
        imageAltText: "Blog post image",
    },
];

const Blog: NextPage = () => {
    const searchInput = useRef<HTMLInputElement | null>(null)
    const [searchInputFocused, setSearchInputFocused] = useState<boolean | null>(null)
    
    return (
        <>
            <Head>
                <title>ASCF | Blog</title>
                <meta
                    name="description"
                    content="anisa sickle cell foundation"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="w-full">
                <section className="px-20 py-10 mx-4 flex items-center justify-between bg-ourDarkRed">
                    <div>
                        <h1 className="font-bold text-4xl mb-2">ASCF BLOG</h1>
                        <h3 className="font-medium text-sm">
                            Stay up-to-date on the progression and treatment of
                            Sickle Cell Disease
                        </h3>
                    </div>
                    <div className="w-1/2 flex items-center justify-end space-x-6">
                        <div className="relative w-1/2">
                            <input
                                ref={searchInput}
                                onFocus={() => setSearchInputFocused(true)}
                                onBlur={() => setSearchInputFocused(false)}
                                placeholder="Search"
                                className="w-full h-12 px-4 font-poppins dark:bg-ourBlack dark:border-gray-300/50 border-2 appearance-none focus:outline-none rounded-lg"
                            />
                            {!searchInputFocused && (
                                <GoSearch className="absolute w-6 h-6 top-3 right-4" />
                            )}
                        </div>
                        <div className="relative">
                            <label className="mr-2">Sort by:</label>
                            <select className="w-28 p-2 dark:bg-ourBlack dark:border-gray-300/50 border-2 appearance-none cursor-pointer focus:outline-none rounded-lg">
                                <option>Title</option>
                                <option>Date</option>
                                <option>Likes</option>
                                <option>Reads</option>
                            </select>
                            <FiArrowDown className="absolute w-4 h-4 top-4 right-2" />
                        </div>
                    </div>
                </section>
                <section className="w-full px-24 items-center">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href="/blog" passHref>
                            <div className="group w-full mt-12 flex items-center justify-between">
                                <div className="space-y-6 w-3/4 cursor-pointer">
                                    <div className="flex justify-start items-center space-x-8">
                                        <div className="w-3 h-10 bg-ourRed"></div>
                                        <div>
                                            <h2 className="font-bold text-xl text-gray-200">
                                                {post.title}
                                            </h2>
                                            <h3 className="italic text text-gray-200">
                                                {post.date} by {post.author}
                                            </h3>
                                        </div>
                                    </div>
                                    <p
                                        className={`${styles.postBody} text-sm font-medium dark:text-stone-400/80 group-hover:text-ourRed transition-colors`}
                                    >
                                        {post.body}
                                    </p>
                                </div>

                                <img
                                    src={post.imageUrl}
                                    className="w-1/5 h-full cursor-pointer group-hover:scale-110 rounded transition-transform"
                                    alt={post.imageAltText}
                                />
                            </div>
                        </Link>
                    ))}
                </section>
            </section>
        </>
    );
};

export default Blog;
