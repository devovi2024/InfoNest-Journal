import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard/BlogCard";
import '../styles/styles.css'
const BlogList = () => {
  const { categoryName } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (post) =>
            post.category.trim().toLowerCase() ===
            categoryName.trim().toLowerCase()
        );
        setPosts(filtered);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [categoryName]);

  return (
    <div className="container">
      <Link to="/">← Back</Link>
      <h2>Posts in: {categoryName}</h2>
      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post) => <BlogCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default BlogList;
