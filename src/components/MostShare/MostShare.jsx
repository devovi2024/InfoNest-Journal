import React from "react";
import BlogCard from "../BlogCard/BlogCard";

const MostShare = ({ posts }) => {
  if (!posts?.length) return null;

  const topShared = [...posts]
    .sort((a, b) => b.shares - a.shares)
    .slice(0, 4);

  return (
    <section className="my-2">
      <h2 className="text-sm font-bold text-gray-800 flex items-center gap-1 mb-2">
        <span className="text-red-500">🔥</span> Most Shared
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {topShared.map(post => (
          <div key={post.id} className="rounded overflow-hidden">
            <BlogCard post={post} compact />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostShare;
