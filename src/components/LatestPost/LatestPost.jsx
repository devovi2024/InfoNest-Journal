import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const LatestPost = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3); // ✅ Only 3 posts as shown in image

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-semibold mb-10 text-gray-800">Our Latest Blog</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
