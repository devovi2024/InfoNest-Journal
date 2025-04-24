import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import "../styles/styles.css";
import NewsCarousel from "../components/NewsCarousel/NewsCarousel";
import VideoSlider from "../components/VideoSlider/VideoSlider";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = [...new Set(data.map((post) => post.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="container">
      <h1>Choose a Category</h1>
      <div className="category-list">
        {categories.map((cat, i) => (
          <CategoryCard key={i} category={cat} />
        ))}
      </div>

      <div>
        <NewsCarousel />
      </div>

      <div>
  <VideoSlider
    videoUrls={[
      "https://files.catbox.moe/aupwi9.mp4",
      "https://files.catbox.moe/aupwi9.mp4",
      "https://files.catbox.moe/aupwi9.mp4",
      "https://files.catbox.moe/aupwi9.mp4",
    ]}
  />
</div>

    </div>
  );
};

export default Home;
