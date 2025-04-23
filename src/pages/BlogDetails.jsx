import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/styles.css'
const BlogDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id.toString() === postId);
        setPost(found);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [postId]);

  if (!post) {
    return (
      <div className="container">
        <p>Loading or post not found...</p>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/">← Back to Home</Link>
      <h2>{post.title}</h2>
      <p><strong>Author:</strong> {post.name}</p>
      <p><strong>Category:</strong> {post.category}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a sample detailed description for the post.</p>
    </div>
  );
};

export default BlogDetails;
