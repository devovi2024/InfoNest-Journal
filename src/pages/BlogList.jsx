import React from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard/BlogCard";
import TrendingNews from "../components/TrendingNews/TrendingNews";
import "../styles/styles.css";

const BlogList = ({ posts }) => {
  const { categoryName } = useParams();
  
  // Filter posts by category
  const filteredPosts = posts.filter(post => post.category.toLowerCase() === categoryName.toLowerCase());

  return (
    <div className="blog-list">
      <h2>Posts in {categoryName}</h2>
      <div className="grid">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <p>No posts found in this category.</p>
        )}
      </div>

      {/* Trending News Section */}
      <div className="trending-news-section">
        <TrendingNews posts={posts} />
      </div>
    </div>
  );
};

export default BlogList;
