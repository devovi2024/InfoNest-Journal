import React from "react";
import { Link } from "react-router-dom";

export default function RelatedPosts({ posts, category }) {
  const relatedPosts = posts.filter(post => post.category === category);

  return (
    <div className="space-y-4">
      {relatedPosts.map((post) => (
        <Link
          to={`/post/${post.id}`}
          key={post.id}
          className="flex gap-3 border-b pb-3 hover:bg-gray-50 transition-all"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-[80px] h-[60px] object-cover"
          />
          <div>
            <p className="text-xs text-blue-600 font-bold uppercase">
              {post.category}
              <span className="text-gray-500 font-normal ml-2">
                {post.date}
              </span>
            </p>
            <p className="text-sm font-medium text-black">
              {post.title.length > 60
                ? post.title.slice(0, 60) + "..."
                : post.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
