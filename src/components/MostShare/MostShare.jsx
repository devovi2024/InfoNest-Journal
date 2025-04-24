import BlogCard from "../BlogCard/BlogCard";
import "../../styles/styles.css";

const MostShare = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  const mostSharedPosts = [...posts]
    .sort((a, b) => b.shares - a.shares)
    .slice(0, 4);

  return (
    <div className="most-shared mt-10">
      <h2 className="text-xl font-bold mb-4">🔥 Most Shared</h2>
      <div className="most-shared-grid grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mostSharedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MostShare;
