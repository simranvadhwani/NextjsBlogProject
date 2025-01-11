import React from "react";
import Markdown from "markdown-to-jsx";
import getPostMetada from "../../../../utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";

function getContent(slug) {
  const folder = "recipes/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetada("recipes");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " . " + params?.slug : "";
  return { title: `The Bubbly Baker  ${id.replaceAll("_", "")}` };
}

export default function Recipepage(props) {
  const slug = props.params.slug;
  const post = getContent(slug);
  console.log(post);
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
