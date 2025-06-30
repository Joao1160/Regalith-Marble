import { useState, useEffect } from "react";
import "../css/style.css";
import home1 from "../images/Home1.jpg";
import home2 from "../images/Home2.jpg";
import home3 from "../images/Home3.jpg";
import home4 from "../images/Home4.jpg";

const images = [home1, home2, home3 , home4];

const Landing = ({scrollToCategory}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider fade-slider">
      <div className="landing">
        <h1 className="landing-title">
          discover the beauty of <span>marble</span>
        </h1>
        
        <button onClick={scrollToCategory} className="explore-btn">
          Explore Marble Types
        </button>
      </div>
     {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      <button className="arrow left-arrow" onClick={goToPrev}>
        ❮
      </button>
      <button className="arrow right-arrow" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Landing;
