import data from "../data/fixtures.json";
import { Composer } from "./Composer";
import { PostCard } from "./PostCard";

export const Feed = () => {
  return (
    <div className="space-y-4">
      <Composer />
      {data.posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
