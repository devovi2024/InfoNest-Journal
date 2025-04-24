import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard/BlogCard";
import "../styles/styles.css";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import RelatedPosts from "../components/RelatedPosts/RelatedPosts"; 
import PopularPosts from "../components/PopularPosts/PopularPosts"; 
import RecentPosts from "../components/RecentPosts/RecentPosts";   
import SocialFollowCards from "../components/SocialStats/SocialStats";

const BlogList = ({ posts }) => {
  const { categoryName } = useParams();
  const postsPerPage = 6; 
  const [activeTab, setActiveTab] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts by category
  const filteredPosts = posts.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

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
<section className="py-10 bg-gray-50">
  <div className="container mx-auto px-4">
    {/* Section Title */}
    <h2 className="text-3xl font-bold text-center mb-10 text-indigo-600">
      Posts in <span className="capitalize">{categoryName}</span>
    </h2>

    <div className="flex flex-col lg:flex-row gap-10">
      {/* Main Content */}
      <div className="flex-1">
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
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
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 bg-white px-4 py-6 sm:px-6">
          <p className="text-sm text-gray-700 mb-4 sm:mb-0">
            Showing <span className="font-medium">{indexOfFirstPost + 1}</span> to{" "}
            <span className="font-medium">
              {indexOfLastPost > filteredPosts.length
                ? filteredPosts.length
                : indexOfLastPost}
            </span>{" "}
            of <span className="font-medium">{filteredPosts.length}</span> results
          </p>

          <nav className="inline-flex shadow-sm rounded-md" aria-label="Pagination">
            <button
              onClick={handlePreviousPage}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm text-gray-500 bg-white hover:bg-gray-100 rounded-l-md"
            >
              <ChevronLeftIcon className="w-5 h-5" />
              <span className="sr-only">Previous</span>
            </button>
            <span className="px-4 py-2 text-sm bg-indigo-600 text-white font-semibold">
              {currentPage}
            </span>
            <button
              onClick={handleNextPage}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm text-gray-500 bg-white hover:bg-gray-100 rounded-r-md"
            >
              <ChevronRightIcon className="w-5 h-5" />
              <span className="sr-only">Next</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Sidebar Tabs */}
      <div className="w-full lg:w-1/3">
          <div>
              {/* Tabs */}
            <div className="flex flex-wrap gap-4 mb-6">
              {["related", "popular", "recent"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-indigo-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 gap-6">
              {activeTab === "related" && <RelatedPosts posts={posts} category={categoryName} />}
              {activeTab === "popular" && <PopularPosts posts={posts} />}
              {activeTab === "recent" && <RecentPosts posts={posts} />}
            </div>

            <div className="mt-10">
              <SocialFollowCards/>
            </div>

            <div className=" mt-14">
            <Link to="/purchase">
              <img
                src="https://i.ibb.co/Hf63Swx/purchase.png"
                alt="Purchase"
                className="w-full max-w-[300px] mx-auto"
              />
            </Link>
          </div>
          </div>
            
      </div>
    </div>
  </div>
</section>

  );
};

export default BlogList;
