import fs from "fs";
import matter from "gray-matter";

export default function getPostMetada(basePath) {
  const folder = basePath + "/";
  const files = fs.readdirSync(folder);
  const mackDownPost = files.filter((f) => f.endsWith(".md"));

  //get file data
  const posts = mackDownPost.map((filename) => {
    const fileContent = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      prep_time: matterResult.data.prep_time,
      cook_time: matterResult.data.cook_time,
      bio: matterResult.data.description,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
