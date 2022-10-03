import type { NextPage } from "next";
import Head from "next/head";

interface blogPostsType {
    id: string;
    title: string;
    date: string;
    author: string;
    body: string;
}

const articleText =
    "Millions of people around the world, including 100,000 in the United States suffer from sickle cell disease, a brutally painful inherited blood disorder with about 30% of them being African descent. Over time, the disease worsens and can cause infections, organ damage, blindness, stroke and early death. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi minima delectus ullam tenetur sed? Laboriosam accusantium, consectetur saepe quia suscipit deserunt modi fugiat omnis amet necessitatibus reiciendis debitis expedita atque! Nam qui ab recusandae veritatis reiciendis ducimus libero velit possimus in. Maiores omnis error esse obcaecati molestiae reiciendis alias dignissimos ad quaerat, hic, quisquam harum quos iste aliquid corporis quasi! Suscipit, optio corrupti! Tempore neque vero ut enim repellat quod fuga? Autem magni ullam iusto quibusdam labore animi cumque maiores consectetur placeat non. Quidem ea blanditiis iusto voluptatem, maiores modi. Ipsum sunt est quidem iure labore commodi ipsa distinctio maiores culpa cumque tempore, sint ea libero expedita mollitia officia voluptates. Doloremque itaque ea quibusdam eum asperiores cupiditate inventore accusantium aliquid!";

const blogPosts: blogPostsType[] = [
    {
        id: "1",
        title: "A GENETIC CURE FOR SICKLE CELL DISEASE MOVES CLOSER TO REALITY",
        date: "February 9 2022",
        author: "Article Writer",
        body: articleText,
    },
    {
        id: "2",
        title: "SICKLE CELL TREATMENTS ARE GETTING BETTER",
        date: "February 9 2022",
        author: "Article Writer",
        body: articleText,
    },
    {
        id: "3",
        title: "ANOTHER SICKLE CELL TITLE FOR US TO VISUALIZE",
        date: "February 9 2022",
        author: "Article Writer",
        body: articleText,
    },
    {
        id: "4",
        title: "YET ANOTHER SICKLE CELL TITLE FOR US TO VISUALIZE",
        date: "February 9 2022",
        author: "Article Writer",
        body: articleText,
    },
];

const Blog: NextPage = () => {
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
                <section className="bg-ourDarkRed px-20 py-8">
                    <h1 className="font-bold text-4xl">ASCF BLOG</h1>
                    <h3>
                        Stay up-to-date on the progression and treatment of
                        Sickle Cell Disease
                    </h3>
                </section>
                <section className="w-full px-20 items-center">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="mt-12">
                            <div className="flex justify-start space-x-8">
                                <div className="w-2 h-12 bg-ourDarkRed"></div>
                                <div>
                                    <h2>{post.title}</h2>
                                    <h3>
                                        {post.date} by {post.author}
                                    </h3>
                                </div>
                            </div>
                            <p>{post.body}</p>
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
};

export default Blog;
