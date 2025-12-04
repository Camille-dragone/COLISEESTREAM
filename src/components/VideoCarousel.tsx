import React, { useRef } from "react";

export interface ImageData {
  imageUrl: string;
  title?: string;
  description?: string;
}

interface VideoCarouselProps {
  images: ImageData[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.querySelector<HTMLDivElement>(".thumbnail");
    if (!card) return;
    const gap = 24;
    carouselRef.current.scrollBy({ left: -card.clientWidth - gap, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.querySelector<HTMLDivElement>(".thumbnail");
    if (!card) return;
    const gap = 24;
    carouselRef.current.scrollBy({ left: card.clientWidth + gap, behavior: "smooth" });
  };

  return (
    <div className="video-carousel-wrapper">
      <button className="carousel-button left" onClick={scrollLeft}>‹</button>

      <div className="video-carousel" ref={carouselRef}>
        {images.map((img, index) => (
          <div className="thumbnail" key={index}>
            <img src={img.imageUrl} alt={img.title || "image"} draggable={false} />
            {img.title && <p className="thumbnail-title">{img.title}</p>}
            {img.description && (
              <div className="overlay">
                <div className="overlay-text">{img.description}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="carousel-button right" onClick={scrollRight}>›</button>
    </div>
  );
};

export default VideoCarousel;
