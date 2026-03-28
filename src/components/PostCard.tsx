import { useState } from "react";
import strings from "../i18n/en.json";
import type { Post } from "../types";

export const PostCard = ({ post }: { post: Post }) => {
  const [wags, setWags] = useState(post.wags);
  const [wagged, setWagged] = useState(false);

  const handleWag = () => {
    const newWagged = !wagged;
    setWagged(newWagged);
    setWags(newWagged ? post.wags + 1 : post.wags);
  };

  return (
    <article className="fur-card relative overflow-hidden rounded-2xl bg-white/70 p-5 shadow-fur">
      <div className="mb-3 flex items-center gap-3">
        <span
          className="fur-avatar-ring flex h-10 w-10 items-center justify-center rounded-full bg-fur-cream text-3xl"
          role="img"
          aria-label={post.breed}
        >
          {post.avatar}
        </span>
        <div>
          <h3 className="font-bold text-fur-chocolate">{post.author}</h3>
          <p className="text-xs text-fur-dark">
            {post.breed} · {post.time}
          </p>
        </div>
      </div>

      <p className="mb-4 leading-relaxed text-fur-chocolate/90">
        {post.content}
      </p>

      <div className="mb-3 flex gap-4 text-xs text-fur-dark">
        <span>{strings.feed.wagsCount.replace("{count}", String(wags))}</span>
        <span>
          {strings.feed.barksCount.replace("{count}", String(post.barks))}
        </span>
      </div>

      <hr className="hair-divider mb-3" />
      <div className="flex">
        <button
          type="button"
          onClick={handleWag}
          className={`flex flex-1 items-center justify-center gap-1 rounded-xl py-2 text-sm transition-all duration-200 hover:scale-105 active:scale-97 ${
            wagged
              ? "font-bold text-paw-pink"
              : "text-fur-dark hover:bg-fur-cream/50"
          }`}
        >
          {wagged ? "🐾" : "🐕‍🦺"} {strings.feed.like}
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded-xl py-2 text-sm text-fur-dark transition-all duration-200 hover:scale-105 hover:bg-fur-cream/50 active:scale-97"
        >
          💬 {strings.feed.comment}
        </button>
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1 rounded-xl py-2 text-sm text-fur-dark transition-all duration-200 hover:scale-105 hover:bg-fur-cream/50 active:scale-97"
        >
          🦴 {strings.feed.share}
        </button>
      </div>
    </article>
  );
};
