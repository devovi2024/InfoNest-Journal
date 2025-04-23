import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id}`}>
      <div className="blog-card">
        <h3>{post.title}</h3>
        <p>
          <strong>Author:</strong> {post.name}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
