import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMetadata = {
  title: string;
  date: string;
  slug: string;
  excerpt?: string;
  filename: string;
};

export const getPosts = (): PostMetadata[] => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents) as unknown as { data: PostMetadata };

    return {
      ...data,
      slug: filename.replace(".mdx", ""),
    };
  });
};
