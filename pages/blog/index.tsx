import { GetStaticProps } from "next";
import { getPosts, PostMetadata } from "../../utils/getPosts";
import React from "react";
import Link from "next/link";
import Header from "../../components/Header";

type BlogProps = {
  posts: PostMetadata[];
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
};

const Blog: React.FC<BlogProps> = ({ posts }) => (
  <div>
    <Header />
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-black">Blog Posts</h1>
        {posts.map((post) => (
          <Link key={post.title} href={`/blog/${post.slug}`} passHref>
            <div className="block mb-8 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer dynamic-gradient">
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
);

export default Blog;
