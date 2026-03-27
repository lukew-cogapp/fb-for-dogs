import { useState } from "react";
import strings from "../i18n/en.json";

interface Post {
  id: string;
  author: string;
  avatar: string;
  breed: string;
  time: string;
  content: string;
  wags: number;
  barks: number;
  image: string | null;
}

export const PostCard = ({ post }: { post: Post }) => {
  const [wags, setWags] = useState(post.wags);
  const [wagged, setWagged] = useState(false);

  const handleWag = () => {
    setWagged(!wagged);
    setWags(wagged ? post.wags : post.wags + 1);
  };

  return (
    <article className="fur-shadow rounded-2xl bg-white/70 p-5 backdrop-blur-sm">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-3xl">{post.avatar}</span>
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

      <div className="flex border-t border-fur-medium/20 pt-3">
        <button
          type="button"
          onClick={handleWag}
          className={`paw-button flex flex-1 items-center justify-center gap-1 rounded-xl py-2 text-sm transition-colors ${
            wagged
              ? "font-bold text-paw-pink"
              : "text-fur-dark hover:bg-fur-cream/50"
          }`}
        >
          {wagged ? "🐾" : "🐕‍🦺"} {strings.feed.like}
        </button>
        <button
          type="button"
          className="paw-button flex flex-1 items-center justify-center gap-1 rounded-xl py-2 text-sm text-fur-dark transition-colors hover:bg-fur-cream/50"
        >
          💬 {strings.feed.comment}
        </button>
        <button
          type="button"
          className="paw-button flex flex-1 items-center justify-center gap-1 rounded-xl py-2 text-sm text-fur-dark transition-colors hover:bg-fur-cream/50"
        >
          🦴 {strings.feed.share}
        </button>
      </div>
    </article>
  );
};
