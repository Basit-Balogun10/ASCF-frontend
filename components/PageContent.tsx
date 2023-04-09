import React, { useEffect, useState } from "react";
import Link from "next/link";

import { FaHeart, FaUsers, FaComments } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import styles from "../styles/PageContent.module.css";
import { checkIsMobile } from "../utils";

export interface pageContentType {
    attendees?: string;
    author?: string;
    date?: string;
    date_end?: string;
    date_start?: string;
    body: string;
    category?: string;
    comments?: string;
    id: string;
    imageAltText?: string;
    imageUrl?: string;
    likes?: string;
    theme?: string;
    time_end?: string;
    time_start?: string;
    title: string;
    type?: "blog" | "event" | "";
    venue?: string;
}

type propsType = {
    content: pageContentType;
    hasBottomBorder: boolean;
    hasExtraInfo: boolean;
    href: string;
};


const PageContent = ({
    content,
    hasBottomBorder,
    hasExtraInfo,
    href,
}: propsType) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        setIsMobile(checkIsMobile());
    }, []);


    if (!content.type) {
        content.type = "";
    }

    if (!content.category) {
        content.category = "";
    }

    const LINK_TEMPLATE = `/${href}/${content.category}/${content.title.toLowerCase() + "-" + content.id}`

    const handleLike = (e: React.MouseEvent, contentId: string) => {
        e.preventDefault();
        alert("CONTENT LIKED");
    };

    return (
        <Link href={`${content.type ? LINK_TEMPLATE : "/"}`} passHref>
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset="100"
                className={`${
                    content.imageUrl ? "group" : ""
                } w-full mt-6 pb-6 flex flex-wrap items-center justify-between ${
                    hasBottomBorder
                        ? "border-b-4 md:border-b-[3px] border-ourRed border-dashed"
                        : ""
                }`}
            >
                <div
                    className={`peer ${
                        content.imageUrl ? "cursor-pointer" : "group"
                    } space-y-6 md:w-3/4`}
                >
                    <div className="hidden md:flex justify-start items-center md:space-x-8">
                        <div className="md:block w-3 h-10 bg-ourRed"></div>
                        <div className="">
                            <h2 className="font-bold text-xl dark:text-gray-200">
                                {content.title}
                            </h2>
                            {hasExtraInfo && (
                                <div className="flex items-center space-x-16">
                                    <h3 className="italic text-sm md:text-sm dark:text-gray-200">
                                        <span>{content.date}</span>{" "}
                                        {content.type == "blog" && (
                                            <span>by {content.author}</span>
                                        )}
                                        {content.type == "event" && (
                                            <span>
                                                by {content.time_start} -{" "}
                                                {content.time_end} •{" "}
                                                {content.venue}
                                            </span>
                                        )}
                                    </h3>
                                    <div className="flex items-center space-x-4">
                                        <span
                                            className="flex items-center space-x-2"
                                            title="Like"
                                        >
                                            <span>{content.likes}</span>
                                            {/* <AiFillHeart className="w-6 h-6 text-ourRed" /> */}
                                            <AiOutlineHeart
                                                onClick={(e) =>
                                                    handleLike(e, content.id)
                                                }
                                                className="w-6 h-6 text-ourRed cursor-pointer"
                                            />
                                        </span>
                                        {content.type == "blog" && (
                                            <span className="flex items-center space-x-2">
                                                <span>{content.comments}</span>
                                                <FaComments className="w-6 h-6 " />
                                            </span>
                                        )}
                                        {content.type == "event" && (
                                            <>
                                                <span
                                                    className="flex items-center space-x-2"
                                                    title={`${content.attendees} attendees`}
                                                >
                                                    <span>
                                                        {content.attendees}
                                                    </span>
                                                    <FaUsers className="w-6 h-6 " />
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {isMobile && (
                        // MOBILE LAYOUT
                        <div className="md:hidden space-y-3">
                            <h2 className="font-bold text-xl text-center dark:text-gray-200">
                                {content.title}
                            </h2>
                            {content.imageUrl && (
                                <img
                                    src={content.imageUrl}
                                    className="h-full rounded transition-transform"
                                    alt={content.imageAltText}
                                />
                            )}
                            {hasExtraInfo && (
                                <div className="flex justify-between items-center">
                                    <h3 className="italic text-sm md:text-sm dark:text-gray-200">
                                        <span>{content.date}</span>
                                        {content.type == "blog" && (
                                            <p>{content.author}</p>
                                        )}
                                        {content.type == "event" && (
                                            <p>
                                                {content.time_start} -{" "}
                                                {content.time_end} •{" "}
                                                {content.venue}
                                            </p>
                                        )}
                                    </h3>
                                    <div className="flex items-center space-x-4">
                                        <span className="flex items-center space-x-2">
                                            <span>{content.likes}</span>
                                            <AiOutlineHeart
                                                className="w-6 h-6 text-ourRed cursor-pointer"
                                                onClick={(e) =>
                                                    handleLike(e, content.id)
                                                }
                                            />
                                        </span>
                                        {content.type == "blog" && (
                                            <span className="flex items-center space-x-2">
                                                <span>{content.comments}</span>
                                                <FaComments className="w-6 h-6 " />
                                            </span>
                                        )}
                                        {content.type == "event" && (
                                            <>
                                                <span className="flex items-center space-x-2">
                                                    <span>
                                                        {content.attendees}
                                                    </span>
                                                    <FaUsers className="w-6 h-6 " />
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    <p
                        className={`${
                            styles.contentBody
                        } text-sm font-medium text-gray-800 dark:text-stone-400/80 ${
                            content.imageUrl ? "group-hover:text-ourRed" : ""
                        } transition-colors`}
                    >
                        {content.body}
                    </p>
                </div>

                {content.imageUrl && (
                    <img
                        src={content.imageUrl}
                        className={`hidden md:block md:w-1/5 h-full ${
                            content.imageUrl ? "cursor-pointer" : ""
                        } hover:scale-110 group-hover:scale-110 rounded transition-transform`}
                        alt={content.imageAltText}
                    />
                )}
            </div>
        </Link>
    );
};

export default PageContent;
