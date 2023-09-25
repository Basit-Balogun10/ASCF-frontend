import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import PageHeader from "../../../components/PageHeader";
import { pageContentType } from "../../../components/PageContent";
const articleText =
    "Millions of people around the world, including 100,000 in the United States suffer from sickle cell disease, a brutally painful inherited blood disorder with about 30% of them being African descent. Over time, the disease worsens and can cause infections, organ damage, blindness, stroke and early death. Lorem ipsum dolor consectetur, adipisicing elit. Eligendi minima delectus ullam tenetur sed? Laboriosam accusantium, consectetur saepe quia suscipit deserunt modi fugiat omnis amet necessitatibus reiciendis debitis expedita atque! Nam qui ab recusandae veritatis reiciendis ducimus libero velit possimus in. Maiores omnis error esse obcaecati molestiae reiciendis alias dignissimos ad quaerat, hic, quisquam harum quos iste aliquid corporis quasi! Suscipit, optio corrupti! Tempore neque vero ut enim repellat quod fuga? Autem magni ullam iusto quibusdam labore animi cumque maiores consectetur placeat non. Quidem ea blanditiis iusto voluptatem, maiores modi. Ipsum sunt est quidem iure labore commodi ipsa distinctio maiores culpa cumque tempore, sint ea libero expedita mollitia officia voluptates. Doloremque itaque ea quibusdam eum asperiores cupiditate inventore accusantium aliquid!";

const post: pageContentType = {
    id: "1",
    title: "A GENETIC CURE FOR SICKLE CELL DISEASE MOVES CLOSER TO REALITY",
    date: "February 09, 2022",
    author: "Article Writer",
    body: articleText,
    category: "news",
    type: "blog",
    imageUrl: "/images/home-1.png",
    imageAltText: "Blog post image",
};

const BlogPostDetail = () => {
    const router = useRouter();
    const { blogPostDetail } = router.query;
    if (blogPostDetail) {
        const postId: string = (blogPostDetail as string).split("-")[1];
    }

    return (
        <>
            <Head>
                <title>ASCF Blog | {post.title}</title>
                <meta
                    name="description"
                    content="anisa sickle cell foundation"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <PageHeader
                desc={`${post.date} by ${post.author}`}
                pageTitle={post.title}
            >
                {null}
            </PageHeader>
            <section
                data-aos="fade-up"
                data-aos-duration="1500"
                className="flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row items-start justify-between w-full md:space-x-12 mt-8 md:mt-12 px-6 md:px-24"
            >
                <div className="md:basis-3/4 font-raleway text-base md:text-[0.95rem] text-gray-500 dark:text-stone-400/80">
                    <p className="text-black dark:text-gray-200">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Perferendis, laudantium reprehenderit eaque quo
                        voluptatem modi laborum beatae repudiandae cum illum
                        placeat excepturi eveniet dignissimos nostrum! Cumque
                        nihil expedita quidem voluptatem! Blanditiis aut maxime
                        saepe facere asperiores. Magnam, exercitationem ipsa.
                        Porro provident molestias fugit vitae praesentium
                        architecto consequuntur similique, illum sapiente
                        aperiam.
                    </p>
                    <br />

                    <p>
                        Voluptatibus quaerat iusto nobis vero alias, tenetur
                        ipsa in. Optio quibusdam possimus ullam rem ipsam
                        nostrum aliquid eos! Deserunt saepe alias perspiciatis
                        sequi tempora. Beatae, nam! Odio accusamus voluptates
                        laudantium! Distinctio iste optio quis explicabo
                        eligendi fuga ipsum nam. Labore cum voluptatibus
                        voluptate nisi dicta distinctio explicabo ipsum, eius
                        minima sint id libero repudiandae adipisci animi? Quas
                        facilis cupiditate cumque quia nemo soluta quo, quae
                        quibusdam? Dignissimos, quis aliquid? Magni similique
                        nostrum amet architecto, asperiores, delectus iusto
                        excepturi reprehenderit accusamus quos dolorum quia
                        vero! Ipsum sed fugit delectus, nulla quisquam modi,
                        quaerat dolor consectetur blanditiis, sit qui nobis
                        suscipit. Excepturi veritatis nisi eius, doloribus,
                        eligendi minus natus quibusdam eaque fugiat inventore
                        provident sunt optio cum veniam ipsa neque
                        necessitatibus exercitationem magni culpa cupiditate
                        modi maxime omnis blanditiis voluptates.
                    </p>
                    <br />

                    <p>
                        Nobis. Dignissimos at minima asperiores laudantium
                        eveniet aliquid obcaecati quas iusto voluptatibus
                        veritatis, alias minus cum, recusandae quia dolore
                        repellat odit, quaerat voluptas exercitationem suscipit
                        necessitatibus laborum dolorem dolores. Blanditiis,
                        dolore! Adipisci, dolorem et eum necessitatibus fuga
                        reiciendis, ducimus hic libero facere sunt, repellat
                        deleniti aliquam laboriosam itaque quam excepturi
                        mollitia commodi ipsam aperiam perspiciatis assumenda ea
                        tempore eaque! Eos, sequi. Illo consequuntur
                        necessitatibus, veniam molestiae deserunt nisi aut totam
                        ut? Fugit quidem alias natus ea similique enim quis ipsa
                        adipisci recusandae repellendus, eos sed. Assumenda
                        nobis similique omnis provident consequuntur. Ipsa quasi
                        esse explicabo tempore iusto enim suscipit praesentium!
                        Aperiam ea provident iusto. Unde excepturi commodi illo
                        eveniet adipisci magnam odio vitae. Facere atque facilis
                        animi numquam eos soluta minima? Molestiae impedit rerum
                        magni tempora non numquam fugit illo voluptatem nisi rem
                        nulla aperiam nesciunt dicta eius officiis pariatur,
                        commodi tempore ad sint dolor perspiciatis.
                    </p>
                    <br />

                    <p>
                        Aliquid temporibus rerum odio. Aliquam. Amet esse
                        dignissimos ipsa quis harum quo perspiciatis saepe ex,
                        inventore praesentium repellendus labore. Itaque
                        voluptates, numquam excepturi, voluptatibus quisquam ea
                        asperiores molestias aperiam magni nesciunt, maiores
                        accusamus sint dolore! Soluta, in ipsam nisi perferendis
                        minus adipisci dolorum nam atque iste temporibus
                        quaerat. Consequuntur ea quos exercitationem quo non,
                        nam doloribus suscipit neque numquam minima eligendi
                        soluta, in id maxime? Vel rem assumenda natus officia
                        tempore beatae esse ab voluptates ipsa! Id iusto maxime
                        natus voluptate deserunt pariatur exercitationem ea
                        corrupti eveniet! Cupiditate id repellendus laborum
                        quia.
                    </p>
                    <br />
                </div>
                <img
                    src={post.imageUrl}
                    className={`mb-6 md:basis-1/4 h-64 rounded`}
                    alt={post.imageAltText}
                />
            </section>
        </>
    );
};

export default BlogPostDetail;
