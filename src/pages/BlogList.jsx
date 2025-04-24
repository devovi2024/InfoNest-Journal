import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard/BlogCard";
import "../styles/styles.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const BlogList = ({ posts }) => {
  const { categoryName } = useParams();
  const postsPerPage = 6; 

  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts by category
  const filteredPosts = posts.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Calculate the index of the first and last posts on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // Get the current posts to display
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredPosts.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        Posts in <span className="capitalize">{categoryName}</span>
      </h2>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No posts found in this category.
          </p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex justify-between sm:hidden">
          <button
            onClick={handlePreviousPage}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">{indexOfFirstPost + 1}</span> to{" "}
              <span className="font-medium">
                {indexOfLastPost > filteredPosts.length
                  ? filteredPosts.length
                  : indexOfLastPost}
              </span>{" "}
              of <span className="font-medium">{filteredPosts.length}</span> results
            </p>
          </div>
          <div>
            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
              <button
                onClick={handlePreviousPage}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon aria-hidden="true" className="size-5" />
              </button>
              <button
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {currentPage}
              </button>
              <button
                onClick={handleNextPage}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon aria-hidden="true" className="size-5" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
