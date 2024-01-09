import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/slideshow.css";
import listImg from "/general-images/slideshow/list_painting.jpeg";
import jazzImg from "/general-images/slideshow/swing_dance.jpg";
import orchestraImg from "/general-images/slideshow/orchestra.jpeg";

const slidesData = [
  {
    image: listImg,
    caption: "7 Dec: Visual Art Bingo Night at List",
    link: "https://events.brown.edu/event/276122-va-bingo-night"
  },
  {
    image: jazzImg,
    caption: "8 Dec: \"All That Jazz\" Ball at Sayles",
    link: "https://events.brown.edu/event/276062-all-that-jazz-ball"
  },
  {
    image: orchestraImg,
    caption: "9 Dec: Orchestra Concert at Lindemann",
    link: "https://events.brown.edu/event/272867-brown-university-orchestra-concert"
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className="mySlides fade"
          style={{
            display: index === currentSlide ? "block" : "none",
          }}
        >
          <Link to={slide.link} target="_blank" rel="noopener noreferrer">
          <img src={slide.image} style={{ width: "100%" }} />
          <div className="text">{slide.caption}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
