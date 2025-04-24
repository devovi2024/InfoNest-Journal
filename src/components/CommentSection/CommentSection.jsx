import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !text) return;

    const newComment = {
      id: Date.now(),
      name,
      text,
      date: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setName("");
    setText("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">💬 Leave a Comment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-3 py-2 rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Write your comment..."
          className="w-full border px-3 py-2 rounded-md"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Post Comment
        </button>
      </form>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">📝 Comments</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-t pt-3 mt-3">
              <p className="font-semibold text-gray-800">{comment.name}</p>
              <p className="text-gray-600">{comment.text}</p>
              <span className="text-xs text-gray-400">{comment.date}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
