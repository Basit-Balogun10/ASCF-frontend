import React from "react";
import Link from "next/link";

import styles from "../styles/BlogIndex.module.css";

type propsType = {
    hasBottomBorder: boolean;
    post: BlogPostType;
};

export interface BlogPostType {
    id: string;
    title: string;
    date: string;
    author: string;
    body: string;
    imageUrl: string;
    imageAltText: string;
}

const BlogPost = ({ hasBottomBorder, post }: propsType) => {
    return (
        <Link href="/blog" passHref>
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className={`group w-full mt-6 pb-6 flex flex-wrap items-center justify-between ${
                    hasBottomBorder
                        ? "border-b-4 md:border-b-[3px] border-ourRed border-dashed"
                        : ""
                }`}
            >
                <div className="space-y-6 md:w-3/4 cursor-pointer">
                    <div className="flex justify-start items-center md:space-x-8">
                        <div className="hidden md:block w-3 h-10 bg-ourRed"></div>
                        <div className="text-right md:text-left">
                            <h2 className="font-bold text-xl dark:text-gray-200">
                                {post.title}
                            </h2>
                            <h3 className="italic text-sm md:text-base dark:text-gray-200">
                                {post.date} by {post.author}
                            </h3>
                        </div>
                    </div>
                    <div className="">
                        <img
                            src={post.imageUrl}
                            className="md:hidden h-full cursor-pointer group-hover:scale-110 rounded transition-transform"
                            alt={post.imageAltText}
                        />
                    </div>
                    <p
                        className={`${styles.postBody} text-sm font-medium text-gray-800 dark:text-stone-400/80 group-hover:text-ourRed transition-colors`}
                    >
                        {post.body}
                    </p>
                </div>

                <img
                    src={post.imageUrl}
                    className="hidden md:block md:w-1/5 h-full cursor-pointer group-hover:scale-110 rounded transition-transform"
                    alt={post.imageAltText}
                />
            </div>
        </Link>
    );
};

export default BlogPost;
