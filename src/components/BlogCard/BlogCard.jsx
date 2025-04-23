import { Link } from "react-router-dom";

const BlogCard = ({ post, linkToDetail = true }) => {
  const cardContent = (
    <div className="blog-card p-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition">
      <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
      <p className="mt-2 text-sm text-gray-500">
        {post.content.substring(0, 100)}...
      </p>
      <p className="text-sm text-gray-600">
        <strong>লেখক:</strong> {post.author}
      </p>
    </div>
  );

  return linkToDetail ? (
    <Link to={`/post/${post.id}`}>{cardContent}</Link>
  ) : (
    cardContent
  );
};

export default BlogCard;
