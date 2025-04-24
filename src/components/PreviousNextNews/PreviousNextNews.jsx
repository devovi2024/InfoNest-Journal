import React from "react"; 
import { Link } from "react-router-dom";

const PreviousNextPost = ({ posts, currentPostId }) => {
  const currentIndex = posts.findIndex((post) => post.id.toString() === currentPostId);

  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 mt-12 border-t border-gray-300 rounded-lg shadow-lg">
      
      {/* Previous Post Section */}
      <div className="flex flex-1 items-center justify-start gap-6">
        {prevPost ? (
          <Link
            to={`/post/${prevPost.id}`}
            className="text-primary font-semibold text-lg md:text-xl transition-all hover:text-accent transform hover:scale-105"
          >
            <span className="inline-block text-lg md:text-xl text-black bg-white py-2 px-6 rounded-full mr-4 shadow-lg hover:shadow-xl">⬅️</span>
            <span className="text-black">{prevPost.title}</span>
          </Link>
        ) : (
          <span className="text-gray-600 text-sm md:text-base">⬅️ No previous post</span>
        )}
      </div>

      {/* Next Post Section */}
      <div className="flex flex-1 items-center justify-end gap-6">
        {nextPost ? (
          <Link
            to={`/post/${nextPost.id}`}
            className="text-primary font-semibold text-lg md:text-xl transition-all hover:text-accent transform hover:scale-105"
          >
            <span className="text-black">{nextPost.title}</span>
            <span className="inline-block text-lg md:text-xl text-black bg-white py-2 px-6 rounded-full ml-4 shadow-lg hover:shadow-xl">➡️</span>
          </Link>
        ) : (
          <span className="text-gray-600 text-sm md:text-base">No next post ➡️</span>
        )}
      </div>
    </div>
  );
};

export default PreviousNextPost;
