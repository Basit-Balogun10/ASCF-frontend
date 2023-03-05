import { useState, useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { GoSearch } from "react-icons/go";
import { FiXCircle } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import { capitalizeString } from "../../utils";
import BlogPost from "../../components/BlogPost";
import type { BlogPostType } from "../../components/BlogPost";

interface sortOptionsType {
    id: string;
    optionName: string;
}

const articleText =
    "Millions of people around the world, including 100,000 in the United States suffer from sickle cell disease, a brutally painful inherited blood disorder with about 30% of them being African descent. Over time, the disease worsens and can cause infections, organ damage, blindness, stroke and early death. Lorem ipsum dolor consectetur, adipisicing elit. Eligendi minima delectus ullam tenetur sed? Laboriosam accusantium, consectetur saepe quia suscipit deserunt modi fugiat omnis amet necessitatibus reiciendis debitis expedita atque! Nam qui ab recusandae veritatis reiciendis ducimus libero velit possimus in. Maiores omnis error esse obcaecati molestiae reiciendis alias dignissimos ad quaerat, hic, quisquam harum quos iste aliquid corporis quasi! Suscipit, optio corrupti! Tempore neque vero ut enim repellat quod fuga? Autem magni ullam iusto quibusdam labore animi cumque maiores consectetur placeat non. Quidem ea blanditiis iusto voluptatem, maiores modi. Ipsum sunt est quidem iure labore commodi ipsa distinctio maiores culpa cumque tempore, sint ea libero expedita mollitia officia voluptates. Doloremque itaque ea quibusdam eum asperiores cupiditate inventore accusantium aliquid!";

const blogPosts: BlogPostType[] = [
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

const sortOptions: sortOptionsType[] = [
    {
        id: "1",
        optionName: "title",
    },
    {
        id: "2",
        optionName: "date",
    },
    {
        id: "3",
        optionName: "likes",
    },
    {
        id: "4",
        optionName: "reads",
    },
];

const Blog: NextPage = () => {
    const searchInput = useRef<HTMLInputElement | null>(null);
    const [searchInputFocused, setSearchInputFocused] = useState<
        boolean | null
    >(null);
    const [searchText, setSearchText] = useState<string>("");
    const [dropdownToggled, setDropdownToggled] = useState<boolean>(false);

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
                <section className="h-min px-4 md:px-20 py-6 md:py-10 md:mx-4 space-y-3 md:space-y-0 flex flex-wrap items-center md:justify-between bg-ourDarkRed transition-all">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="1500"
                        className="text-center md:text-left"
                    >
                        <h1 className="font-bold text-4xl mb-2">ASCF BLOG</h1>
                        <h3 className="font-medium text-sm">
                            Stay up-to-date on the progression and treatment of
                            Sickle Cell Disease
                        </h3>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="md:w-1/2 flex items-center justify-center md:justify-end space-x-6"
                    >
                        <div className="relative w-1/2">
                            <input
                                ref={searchInput}
                                onFocus={() => setSearchInputFocused(true)}
                                onBlur={() => setSearchInputFocused(false)}
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search"
                                className="w-full h-10 py-1 px-10 text-sm font-poppins dark:bg-ourBlack dark:border-gray-100 appearance-none focus:outline-none rounded-full"
                            />
                            <GoSearch className="absolute w-4 h-4 top-3 left-4 text-gray-400" />
                            {searchText && (
                                <FiXCircle
                                    onClick={() => setSearchText("")}
                                    className="absolute w-5 h-5 top-[0.65rem] right-4 text-ourDarkRed hover:text-ourRed cursor-pointer transition-all ease-in-out"
                                />
                            )}
                        </div>
                        <div className="relative">
                            <div
                                onClick={() => {
                                    setDropdownToggled(!dropdownToggled);
                                }}
                                className="w-[6.5rem] p-2 flex items-center justify-between bg-white dark:bg-ourBlack rounded-md cursor-pointer"
                            >
                                <p className="text-sm">Sort by:</p>
                                {dropdownToggled ? (
                                    <MdKeyboardArrowUp className="absolute w-4 h-4 top-3 right-2" />
                                ) : (
                                    <MdKeyboardArrowDown className="absolute w-4 h-4 top-3 right-2" />
                                )}
                            </div>

                            {dropdownToggled && (
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    className="mt-4 bg-white dark:bg-ourBlack rounded-md shadow-md"
                                >
                                    <ul className="space-y-1">
                                        {sortOptions.map((sortOption) => (
                                            <Link
                                                key={sortOption.id}
                                                href="/"
                                                passHref
                                            >
                                                <li
                                                    className={`hover:bg-gray-200 dark:hover:bg-gray-100/20 ${
                                                        sortOption.id === "1" &&
                                                        "rounded-t-md pt-1"
                                                    } ${
                                                        sortOption.id ===
                                                            String(
                                                                sortOptions.length
                                                            ) &&
                                                        "rounded-b-md pb-1"
                                                    } cursor-pointer transitions-color ease-in-out`}
                                                >
                                                    <p className="px-2 text-sm">
                                                        {capitalizeString(
                                                            sortOption.optionName
                                                        )}
                                                    </p>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <section className="w-full mt-12 md:mt-0 px-6 md:px-24 items-center">
                    {blogPosts.map((post, index) => (
                        <>
                            <BlogPost
                                key={post.id}
                                hasBottomBorder={index != blogPosts.length - 1}
                                post={post}
                            />
                        </>
                    ))}
                </section>
            </section>
        </>
    );
};

export default Blog;
// todo: See how to optimize img elements with picture elements or using the Image component
