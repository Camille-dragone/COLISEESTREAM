import React from "react";
import VideoCarousel from "../components/VideoCarousel";
import { categories } from "../data/categories";
import "./Replay.css";

const Replay: React.FC = () => {
  return (
    <div className="replay-page">
      <h1>Galerie</h1>

      {categories.map((category) => (
        <div key={category.id} className="category-section">
          <h2>{category.name}</h2>
          <VideoCarousel images={category.images} />
        </div>
      ))}
    </div>
  );
};

export default Replay;
