import BlogCard from "../BlogCard/BlogCard";
import "../../styles/styles.css";

const TrendingNews = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const trendingPosts = [...posts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 4);

  return (
    <div className="trending-news mt-10">
      <h2 className="text-xl font-bold mb-4">🔥 Trending</h2>
      <div className="trending-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {trendingPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
