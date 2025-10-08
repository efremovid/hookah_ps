import React, { useState } from "react";
import "./SliderTag.css";

const SliderTag = ({ photosTaganka }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photosTaganka.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photosTaganka.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <button className="slider-button left" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-content">
        <img
          src={photosTaganka[currentIndex]}
          alt={`slide-${currentIndex}`}
          className="slider-image"
        />
      </div>
      <button className="slider-button right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default SliderTag;
