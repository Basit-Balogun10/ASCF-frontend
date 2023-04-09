import type { NextPage } from "next";
import Head from "next/head";

import { IoCalendarOutline } from "react-icons/io5";

import PageLayout from "../../components/PageLayout";
import { pageContentType } from "../../components/PageContent";
import SortOrFilter from "../../components/SortOrFilter";

const articleText =
    "Millions of people around the world, including 100,000 in the United States suffer from sickle cell disease, a brutally painful inherited blood disorder with about 30% of them being African descent. Over time, the disease worsens and can cause infections, organ damage, blindness, stroke and early death. Lorem ipsum dolor consectetur, adipisicing elit. Eligendi minima delectus ullam tenetur sed? Laboriosam accusantium, consectetur saepe quia suscipit deserunt modi fugiat omnis amet necessitatibus reiciendis debitis expedita atque! Nam qui ab recusandae veritatis reiciendis ducimus libero velit possimus in. Maiores omnis error esse obcaecati molestiae reiciendis alias dignissimos ad quaerat, hic, quisquam harum quos iste aliquid corporis quasi! Suscipit, optio corrupti! Tempore neque vero ut enim repellat quod fuga? Autem magni ullam iusto quibusdam labore animi cumque maiores consectetur placeat non. Quidem ea blanditiis iusto voluptatem, maiores modi. Ipsum sunt est quidem iure labore commodi ipsa distinctio maiores culpa cumque tempore, sint ea libero expedita mollitia officia voluptates. Doloremque itaque ea quibusdam eum asperiores cupiditate inventore accusantium aliquid!";

const events: pageContentType[] = [
    {
        id: "1",
        title: "ASCF'S ANNUAL SICKLE CELL DISEASE RESEARCH MEETING",
        theme: "Changing the narrative one project at a time",
        date: "August 16 - 18, 2023",
        date_start: "August 16, 2023",
        date_end: "August 18, 2023",
        imageUrl: "/images/home-3.png",
        imageAltText: "Blog post image",
        venue: "Virtual",
        time_start: "3:00pm",
        time_end: "5:00pm",
        body: articleText,
        likes: "9",
        attendees: "4",
        category: "virtual",
        type: "event",
    },
    {
        id: "2",
        title: "SICKLE CELL TREATMENTS ARE GETTING BETTER",
        theme: "Changing the narrative one project at a time",
        date: "August 16 - 18, 2023",
        date_start: "August 16, 2023",
        date_end: "August 18, 2023",
        imageUrl: "/images/home-2.png",
        imageAltText: "Blog post image",
        venue: "Virtual",
        time_start: "3:00pm",
        time_end: "5:00pm",
        body: articleText,
        likes: "4",
        attendees: "7",
        category: "physical",
        type: "event",
    },
    {
        id: "3",
        title: "ANOTHER SICKLE CELL TITLE FOR US TO VISUALIZE",
        theme: "Changing the narrative one project at a time",
        date: "August 16 - 18, 2023",
        date_start: "August 16, 2023",
        date_end: "August 18, 2023",
        imageUrl: "/images/home-1.png",
        imageAltText: "Blog post image",
        venue: "Virtual",
        time_start: "3:00pm",
        time_end: "5:00pm",
        body: articleText,
        likes: "4",
        attendees: "7",
        category: "virtual",
        type: "event",
    },
    {
        id: "4",
        title: "YET ANOTHER SICKLE CELL TITLE FOR US TO VISUALIZE",
        theme: "Changing the narrative one project at a time",
        date: "August 16 - 18, 2023",
        date_start: "August 16, 2023",
        date_end: "August 18, 2023",
        imageUrl: "/images/home-4.png",
        imageAltText: "Blog post image",
        venue: "Virtual",
        time_start: "3:00pm",
        time_end: "5:00pm",
        body: articleText,
        likes: "4",
        attendees: "7",
        category: "physical",
        type: "event",
    },
];

const EVENT_PAGE_DESCRIPTION_TEXT =
    "You're highly welcomed to all of these events to catch up with our latest activities and projects";

const EVENT_PAGE_TITLE = "ASCF EVENTS";

const Event: NextPage = () => {
    return (
        <>
            <Head>
                <title>ASCF | Event</title>
                <meta
                    name="description"
                    content="anisa sickle cell foundation"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageLayout
                desc={EVENT_PAGE_DESCRIPTION_TEXT}
                hasExtraInfo={true}
                href="events"
                pageContents={events}
                pageTitle={EVENT_PAGE_TITLE}
            >
                <div className="flex-auto flex items-center justify-center md:justify-end space-x-2">

                <SortOrFilter />
                <IoCalendarOutline
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className="hidden md:block w-24 h-24 text-ourBlack dark:text-gray-200"
                />
                </div>
            </PageLayout>
        </>
    );
};

export default Event;
