import { useState, useRef } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { GoSearch } from "react-icons/go";
import { FiXCircle } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import { capitalizeString } from "../../utils";
import PageLayout from "../../components/PageLayout";
import { pageContentType } from "../../components/PageContent";
import SortOrFilter from "../../components/SortOrFilter";

interface sortOptionsType {
    id: string;
    optionName: string;
}

const articleText =
    "Millions of people around the world, including 100,000 in the United States suffer from sickle cell disease, a brutally painful inherited blood disorder with about 30% of them being African descent. Over time, the disease worsens and can cause infections, organ damage, blindness, stroke and early death. Lorem ipsum dolor consectetur, adipisicing elit. Eligendi minima delectus ullam tenetur sed? Laboriosam accusantium, consectetur saepe quia suscipit deserunt modi fugiat omnis amet necessitatibus reiciendis debitis expedita atque! Nam qui ab recusandae veritatis reiciendis ducimus libero velit possimus in. Maiores omnis error esse obcaecati molestiae reiciendis alias dignissimos ad quaerat, hic, quisquam harum quos iste aliquid corporis quasi! Suscipit, optio corrupti! Tempore neque vero ut enim repellat quod fuga? Autem magni ullam iusto quibusdam labore animi cumque maiores consectetur placeat non. Quidem ea blanditiis iusto voluptatem, maiores modi. Ipsum sunt est quidem iure labore commodi ipsa distinctio maiores culpa cumque tempore, sint ea libero expedita mollitia officia voluptates. Doloremque itaque ea quibusdam eum asperiores cupiditate inventore accusantium aliquid!";

const blogPosts: pageContentType[] = [
    {
        id: "1",
        title: "A GENETIC CURE FOR SICKLE CELL DISEASE MOVES CLOSER TO REALITY",
        date: "February 09, 2022",
        author: "Article Writer",
        body: articleText,
        likes: "4",
        comments: "2",
        category: "news",
        type: "blog",
        imageUrl: "/images/home-1.png",
        imageAltText: "Blog post image",
    },
    {
        id: "2",
        title: "SICKLE CELL TREATMENTS ARE GETTING BETTER",
        date: "February 09, 2022",
        author: "Article Writer",
        body: articleText,
        likes: "10",
        comments: "7",
        category: "update",
        type: "blog",
        imageUrl: "/images/home-2.png",
        imageAltText: "Blog post image",
    },
    {
        id: "3",
        title: "ANOTHER SICKLE CELL TITLE FOR US TO VISUALIZE",
        date: "February 09, 2022",
        author: "Article Writer",
        body: articleText,
        likes: "4",
        comments: "3",
        category: "news",
        type: "blog",
        imageUrl: "/images/home-3.png",
        imageAltText: "Blog post image",
    },
    {
        id: "4",
        title: "YET ANOTHER SICKLE CELL TITLE FOR US TO VISUALIZE",
        date: "February 09, 2022",
        author: "Article Writer",
        body: articleText,
        likes: "0",
        comments: "7",
        category: "update",
        type: "blog",
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

const BLOG_INDEX_DESCRIPTION_TEXT =
    "Stay up-to-date on the progression and treatment of Sickle Cell Disease";

const BLOG_PAGE_TITLE = "ASCF BLOG";

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
            <PageLayout
                desc={BLOG_INDEX_DESCRIPTION_TEXT}
                hasExtraInfo={true}
                href="blog"
                pageContents={blogPosts}
                pageTitle={BLOG_PAGE_TITLE}
            >
                <SortOrFilter />
            </PageLayout>
        </>
    );
};

export default Blog;
// todo: See how to optimize img elements with picture elements or using the Image component
