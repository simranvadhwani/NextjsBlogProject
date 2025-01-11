import PostCard from "../../components/PostCard";
import getPostMetada from "../../utils/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetada("recipes");
  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}
