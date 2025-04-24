import { useParams, Link, Links } from "react-router-dom";
import PopularPosts from "../components/PopularPosts/PopularPosts";
import RecentPosts from "../components/RecentPosts/RecentPosts";
import RelatedPosts from "../components/RelatedPosts/RelatedPosts";
import { useState, useEffect } from "react";
import MostShare from "../components/MostShare/MostShare";
import SocialStats from '../components/SocialStats/SocialStats'
import Newsletter from "../components/Newsletter/Newsletter";

const BlogDetails = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find((p) => p.id.toString() === postId);

  const [activeTab, setActiveTab] = useState("popular");
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);


  // voice start -------**

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      const englishVoice = availableVoices.find(v =>
        v.lang.startsWith("en") || v.name.toLowerCase().includes("english")
      );
      setSelectedVoice(englishVoice || availableVoices[0]);
    };

    loadVoices();

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleReadAloud = () => {
    if (!post || !post.content) return;
    const utterance = new SpeechSynthesisUtterance(post.content);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }
    speechSynthesis.cancel(); 
    speechSynthesis.speak(utterance);
  };

  // */ voice end ------**

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500 font-semibold">🚫 Post not found.</p>
        <Link to="/" className="text-blue-500 underline mt-4 block">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <Link to="/" className="text-blue-500 underline mb-4 block">← Back to Home</Link>

      <section>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1 mb-6 lg:mb-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold text-gray-800">{post.title}</h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleReadAloud}
                  className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                  🔊
                </button>
              </div>
            </div>

            <div className="mb-4 text-gray-600">
              <p><strong>Author:</strong> {post.author}</p>
              <p><strong>Category:</strong> {post.category}</p>
              <p><strong>Published on:</strong> {new Date(post.date).toLocaleDateString()}</p>
            </div>

            <p className="text-gray-800 leading-relaxed">{post.content}</p>
          </div>

          <div className="lg:w-1/3">
            <div className="tabs flex space-x-4 mb-6">
              <button
                onClick={() => setActiveTab("related")}
                className={`tab-button px-4 py-2 rounded-md ${activeTab === "related" ? "bg-blue-500 text-white" : "text-gray-700"}`}
              >
                Related
              </button>
              <button
                onClick={() => setActiveTab("popular")}
                className={`tab-button px-4 py-2 rounded-md ${activeTab === "popular" ? "bg-blue-500 text-white" : "text-gray-700"}`}
              >
                Popular
              </button>
              <button
                onClick={() => setActiveTab("recent")}
                className={`tab-button px-4 py-2 rounded-md ${activeTab === "recent" ? "bg-blue-500 text-white" : "text-gray-700"}`}
              >
                Recent
              </button>
            </div>

            <div className="mt-6">
              {activeTab === "related" && <RelatedPosts posts={posts} category={post.category} />}
              {activeTab === "popular" && <PopularPosts posts={posts} />}
              {activeTab === "recent" && <RecentPosts posts={posts} />}
            </div>

            <div className="relative mt-14
            
            ">
            {/* Purchase Image Link */}
            <Link to="/purchase">
              <img
                src="https://i.ibb.co.com/Hf63Swx9/purchase.png"
                alt="Purchase"
                className=" h-84 w-84"
              />
            </Link>
          </div>

            
            <SocialStats/>
            <MostShare posts={posts} />
            <Newsletter/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
