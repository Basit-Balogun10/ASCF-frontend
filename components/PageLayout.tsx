import { useState, useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { GoSearch } from "react-icons/go";
import { FiXCircle } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import { capitalizeString } from "../utils";
import PageContent from "./PageContent";
import PageHeader from "./PageHeader";
import type { pageContentType } from "./PageContent";

interface propsType {
    children: React.ReactNode;
    desc: string;
    hasExtraInfo: boolean;
    href: string;
    pageContents: pageContentType[];
    pageTitle: string;
}

const PageLayout = ({
    children,
    desc,
    hasExtraInfo,
    href,
    pageContents,
    pageTitle,
}: propsType) => {
    return (
        <section className="w-full">
            <PageHeader desc={desc} pageTitle={pageTitle}>
                {children}
            </PageHeader>
            <section className="w-full mt-6 md:mt-0 px-6 md:px-24 items-center">
                {pageContents.map((content, index) => (
                    <PageContent
                        key={index}
                        content={content}
                        hasBottomBorder={index != pageContents.length - 1}
                        hasExtraInfo={hasExtraInfo}
                        href={href}
                    />
                ))}
            </section>
        </section>
    );
};

export default PageLayout;
// todo: See how to optimize img elements with picture elements or using the Image component
