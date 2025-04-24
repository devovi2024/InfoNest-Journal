import React from 'react';
import BlogCard from "../BlogCard/BlogCard";

const LatestPost = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  return (
    <div className="latest-post mt-10">
      <h2 className="text-xl font-bold mb-4">🆕 Latest Posts</h2>
      <div className="latest-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {latestPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
