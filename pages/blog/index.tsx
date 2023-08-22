import { GetStaticProps } from "next";
import { getPosts, PostMetadata } from "../../utils/getPosts";
import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Head from "next/head";

type BlogProps = {
  posts: PostMetadata[];
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  let posts = getPosts();

  posts = posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return {
    props: {
      posts,
    },
  };
};

const Blog: React.FC<BlogProps> = ({ posts }) => (
  <div>
    <Head>
      <title>Florin Dobinciuc | Blog</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>
    <Header />

    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-extrabold mb-12 text-black">Blog</h1>

        {posts[0] && (
          <Link href={`/blog/${posts[0].slug}`} passHref>
            <div className="block mb-12 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2 cursor-pointer">
              <h2 className="text-3xl font-bold mb-4 text-black">
                {posts[0].title}
              </h2>
              <p className="mb-4">
                {new Date(posts[0].date).toLocaleDateString("en-US")}
              </p>
              <p>{posts[0].excerpt}</p>
            </div>
          </Link>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post) => (
            <Link key={post.title} href={`/blog/${post.slug}`} passHref>
              <div className="block p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 dynamic-gradient cursor-pointer">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {post.title}
                </h2>
                <p className="text-white mb-4">
                  {new Date(post.date).toLocaleDateString("en-US")}
                </p>
                <p className="text-white">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

    <Footer className="bg-[#003366]" />
  </div>
);

export default Blog;
