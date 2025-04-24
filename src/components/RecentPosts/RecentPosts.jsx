import React from "react";
import { Link } from "react-router-dom";

export default function RecentPosts({ posts }) {
  const sortedPostsByDate = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="space-y-4 h-[450px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {sortedPostsByDate.map((post) => (
        <Link
          to={`/post/${post.id}`}
          key={post.id}
          className="flex gap-4 border-b border-gray-200 pb-4 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg p-2 group"
          aria-label={`Read post: ${post.title}`}
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-[100px] h-[70px] sm:w-[120px] sm:h-[80px] object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
                {post.category}
              </span>
              <span className="text-xs text-gray-500 font-normal">
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
              {post.title.length > 60
                ? post.title.slice(0, 60) + "..."
                : post.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}