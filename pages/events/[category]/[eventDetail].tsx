import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { FaLocationArrow, FaUsers } from "react-icons/fa";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";

import PageHeader from "../../../components/PageHeader";
import { pageContentType } from "../../../components/PageContent";
import Link from "next/link";


const articleText =
    "Millions of people around the world, including 100,000 in the United States suffer from sickle cell disease, a brutally painful inherited blood disorder with about 30% of them being African descent. Over time, the disease worsens and can cause infections, organ damage, blindness, stroke and early death. Lorem ipsum dolor consectetur, adipisicing elit. Eligendi minima delectus ullam tenetur sed? Laboriosam accusantium, consectetur saepe quia suscipit deserunt modi fugiat omnis amet necessitatibus reiciendis debitis expedita atque! Nam qui ab recusandae veritatis reiciendis ducimus libero velit possimus in. Maiores omnis error esse obcaecati molestiae reiciendis alias dignissimos ad quaerat, hic, quisquam harum quos iste aliquid corporis quasi! Suscipit, optio corrupti! Tempore neque vero ut enim repellat quod fuga? Autem magni ullam iusto quibusdam labore animi cumque maiores consectetur placeat non. Quidem ea blanditiis iusto voluptatem, maiores modi. Ipsum sunt est quidem iure labore commodi ipsa distinctio maiores culpa cumque tempore, sint ea libero expedita mollitia officia voluptates. Doloremque itaque ea quibusdam eum asperiores cupiditate inventore accusantium aliquid!";

const event: pageContentType = {
    id: "1",
    title: "ASCF'S ANNUAL SICKLE CELL DISEASE",
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
    category: "physical",
    type: "event",
};

const EventDetail = () => {
    const router = useRouter();
    const { eventDetail } = router.query;
    if (eventDetail) {
        const eventId: string = (eventDetail as string).split("-")[1];
    }

    const handleLike = (e: React.MouseEvent, contentId: string) => {
        e.preventDefault();
        alert("CONTENT LIKED");
    };

    return (
        <>
            <Head>
                <title>ASCF Events | {event.title}</title>
                <meta
                    name="description"
                    content="anisa sickle cell foundation"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageHeader
                // desc={`${event.date} by ${event.time_start} - ${event.time_end} • ${event.venue}`}
                desc={event.theme}
                pageTitle={event.title}
                alignLeft={true}
            >
                <div className="flex-auto flex items-center justify-center md:justify-end space-x-12">
                    <div className="flex items-center space-x-3">
                        <span
                            className="flex items-center space-x-2"
                            title="Like"
                        >
                            <span>{event.likes}</span>
                            {/* <AiFillHeart className="w-6 h-6 text-ourRed" /> */}
                            <AiOutlineHeart
                                onClick={(e) => handleLike(e, event.id)}
                                className="w-6 h-6 cursor-pointer"
                            />
                        </span>
                        <span
                            className="flex items-center space-x-2"
                            title={`${event.attendees} attendees`}
                        >
                            <span>{event.attendees}</span>
                            <FaUsers className="w-6 h-6 " />
                        </span>
                    </div>
                    <a className="py-2 px-4 w-max flex items-center space-x-4 bg-ourBlack dark:bg-white hover:bg-black dark:hover:bg-red-100 text-center text-ourRed text-base md:text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black transition-colors ease-in-out">
                        <Link href="/">ADD TO CALENDAR</Link>
                        <IoCalendarOutline className="hidden md:block w-5 h-5 text-ourRed" />
                    </a>
                    {/* {event.category == "physical" && (
                        <a className="py-2 px-4 w-max flex items-center space-x-4 bg-ourBlack dark:bg-white hover:bg-black dark:hover:bg-red-100 text-center text-ourRed text-base md:text-[0.8rem] tracking-wide font-extrabold rounded cursor-pointer shadow-md shadow-black transition-colors ease-in-out">
                            <Link href="/">GET DIRECTIONS</Link>
                            <FaLocationArrow className="w-5 h-5 text-ourRed" />
                        </a>
                    )} */}
                </div>
            </PageHeader>
            <section
                data-aos="fade-up"
                data-aos-duration="1500"
                className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row items-start justify-between w-full md:space-x-12 mt-8 md:mt-12 px-6 md:px-24"
            >
                <div className="md:basis-3/5">
                    <div className="pb-8 mb-8 font-raleway text-base md:text-[0.95rem] text-gray-500 dark:text-stone-400/80 border-b border-black/60 dark:border-stone-400/80">
                        <p className="text-black dark:text-gray-200">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Perferendis, laudantium reprehenderit eaque
                            quo voluptatem modi laborum beatae repudiandae cum
                            illum placeat excepturi eveniet dignissimos nostrum!
                            Cumque nihil expedita quidem voluptatem! Blanditiis
                            aut maxime saepe facere asperiores. Magnam,
                            exercitationem ipsa. Porro provident molestias fugit
                            vitae praesentium architecto consequuntur similique,
                            illum sapiente aperiam.
                        </p>
                        <br />

                        <p>
                            Voluptatibus quaerat iusto nobis vero alias, tenetur
                            ipsa in. Optio quibusdam possimus ullam rem ipsam
                            nostrum aliquid eos! Deserunt saepe alias
                            perspiciatis sequi tempora. Beatae, nam! Odio
                            accusamus voluptates laudantium! Distinctio iste
                            optio quis explicabo eligendi fuga ipsum nam. Labore
                            cum voluptatibus voluptate nisi dicta distinctio
                            explicabo ipsum, eius minima sint id libero
                            repudiandae adipisci animi? Quas facilis cupiditate
                            cumque quia nemo soluta quo, quae quibusdam?
                            Dignissimos, quis aliquid? Magni similique nostrum
                            amet architecto, asperiores, delectus iusto
                            excepturi reprehenderit accusamus quos dolorum quia
                            vero! Ipsum sed fugit delectus, nulla quisquam modi,
                            quaerat dolor consectetur blanditiis, sit qui nobis
                            suscipit. Excepturi veritatis nisi eius, doloribus,
                            eligendi minus natus quibusdam eaque fugiat
                            inventore provident sunt optio cum veniam ipsa neque
                            necessitatibus exercitationem magni culpa cupiditate
                            modi maxime omnis blanditiis voluptates.
                        </p>
                    </div>
                    <div>
                        <p>
                            {event.category == "virtual" ? (
                                <>
                                    <span className="font-bold">
                                        Meeting Link:{" "}
                                    </span>
                                    <Link href="https://zoom.com" passHref>
                                        <span className="hover:underline text-ourRed text-sm cursor-pointer">
                                            https://zoom.com
                                        </span>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <span className="font-bold">Venue: </span>
                                    <Link href="https://zoom.com" passHref>
                                        <span className="hover:underline text-ourRed text-sm cursor-pointer">
                                            Get direction
                                        </span>
                                    </Link>
                                </>
                            )}
                        </p>
                    </div>
                </div>
                <div className="">
                    <img
                        src={event.imageUrl}
                        className={`mb- 6 h-64 rounded`}
                        alt={event.imageAltText}
                    />
                    <p>Frequency: One-time or Multi-day</p>
                    <p>Format: In-person or Virtual</p>
                    <p>Status: Upcoming or Past or Ongoing</p>
                    <p>Time (Start to end)</p>
                    <p>Event Link | Venue</p>
                </div>
            </section>
        </>
    );
};

export default EventDetail;
