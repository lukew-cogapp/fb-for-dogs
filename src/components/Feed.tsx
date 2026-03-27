import { useState } from "react";
import strings from "../i18n/en.json";
import { PostCard } from "./PostCard";

export const Feed = () => {
  const [postText, setPostText] = useState("");

  return (
    <div className="space-y-4">
      <div className="fur-card fur-shadow rounded-2xl bg-white/70 p-4 backdrop-blur-sm">
        <h2 className="fuzzy-text mb-3 text-lg font-bold text-fur-chocolate">
          {strings.feed.title}
        </h2>
        <div className="flex gap-3">
          <div className="text-3xl">🐕</div>
          <input
            type="text"
            placeholder={strings.feed.createPost}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="fur-input flex-1 rounded-full border border-fur-medium/30 bg-fur-cream/50 px-4 py-2 text-sm outline-none placeholder:text-fur-dark/50 focus:border-paw-pink focus:ring-2 focus:ring-paw-pink/20"
          />
          <button
            type="button"
            className="paw-button rounded-full bg-paw-pink px-5 py-2 text-sm font-bold text-white"
          >
            🐾
          </button>
        </div>
      </div>

      {strings.posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
