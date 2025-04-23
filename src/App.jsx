import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/category/:categoryName" element={<BlogList posts={posts} />} />
        <Route path="/post/:postId" element={<BlogDetails posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;
