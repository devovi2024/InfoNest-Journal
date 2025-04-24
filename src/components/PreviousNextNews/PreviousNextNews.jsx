import React from "react";
import { Link } from "react-router-dom";

const PreviousNextPost = ({ posts, currentPostId }) => {
  const currentIndex = posts.findIndex((post) => post.id.toString() === currentPostId);

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 border-t border-gray-300 mt-8 bg-white shadow-lg rounded-lg">
      <div className="flex flex-1 items-center justify-start">
        {prevPost ? (
          <Link
            to={`/post/${prevPost.id}`}
            className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-all"
          >
            ⬅️ {prevPost.title}
          </Link>
        ) : (
          <span className="text-gray-500 text-sm md:text-base">⬅️ No previous post</span>
        )}
      </div>

      <div className="flex flex-1 items-center justify-end">
        {nextPost ? (
          <Link
            to={`/post/${nextPost.id}`}
            className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-all"
          >
            {nextPost.title} ➡️
          </Link>
        ) : (
          <span className="text-gray-500 text-sm md:text-base">No next post ➡️</span>
        )}
      </div>
    </div>
  );
};

export default PreviousNextPost;
