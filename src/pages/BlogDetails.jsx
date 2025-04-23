import { useParams, Link } from "react-router-dom";

const BlogDetails = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id.toString() === postId);

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
        <p className="text-gray-700 mb-2"><strong>লেখক:</strong> {post.author}</p>
        <p className="text-gray-600 mb-4"><strong>ক্যাটাগরি:</strong> {post.category}</p>
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
