import { useParams, Link } from "react-router-dom";
import PopularPosts from "../components/PopularPosts/PopularPosts"; // Popular Posts Component
import RecentPosts from "../components/RecentPosts/RecentPosts"; // Recent Posts Component
import RelatedPosts from "../components/RelatedPosts/RelatedPosts"; // Related Posts Component
import { useState } from "react";

const BlogDetails = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id.toString() === postId);

  const [activeTab, setActiveTab] = useState("popular");

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>🚫 Post not found.</p>
        <Link to="/" className="text-blue-500 underline mt-4 block">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="text-blue-500 underline mb-4 block">← Back to Home</Link>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-700 mb-2"><strong>Author:</strong> {post.author}</p>
        <p className="text-gray-600 mb-4"><strong>Category:</strong> {post.category}</p>
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
      </div>

      {/* Tabs for Related, Popular, Recent */}
      <div className="tabs mt-6">
        <button onClick={() => setActiveTab("related")} className={`tab-button ${activeTab === "related" ? "active" : ""}`}>Related</button>
        <button onClick={() => setActiveTab("popular")} className={`tab-button ${activeTab === "popular" ? "active" : ""}`}>Popular</button>
        <button onClick={() => setActiveTab("recent")} className={`tab-button ${activeTab === "recent" ? "active" : ""}`}>Recent</button>
      </div>

      <div className="mt-6">
        {activeTab === "related" && <RelatedPosts posts={posts} category={post.category} />}
        {activeTab === "popular" && <PopularPosts posts={posts} />}
        {activeTab === "recent" && <RecentPosts posts={posts} />}
      </div>
    </div>
  );
};

export default BlogDetails;
