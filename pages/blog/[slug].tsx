import { GetStaticPaths } from "next";
import { getPosts, PostMetadata } from "../../utils/getPosts";
import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import Header from "../../components/Header";

type PostProps = {
  content: string;
  metadata: PostMetadata;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: (context) => Promise<{
  props: {
    metadata: any;
    mdxContent: MDXRemoteSerializeResult;
  };
}> = async (context) => {
  const slug = context.params?.slug as string;
  const filePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  const mdxContent = await serialize(content);

  return {
    props: {
      mdxContent,
      metadata: data,
    },
  };
};

// @ts-ignore
const PostPage: React.FC<PostProps> = ({ mdxContent, metadata }) => (
  <div>
    <Header />
    <div className="max-w-2xl mx-auto mt-12 px-4">
      <h1 className="text-4xl font-semibold mb-4">{metadata.title}</h1>
      <p className="text-gray-500 italic mb-8">{metadata.date}</p>
      <div className="prose prose-blue md:prose-lg">
        <MDXRemote {...mdxContent} />
      </div>
    </div>
  </div>
);

export default PostPage;
