import { useState, useEffect } from "react";
import styles from "./AutoSlider.module.css"; // CSS module for slider styles

const slides = [
  {
    id: 1,
    image:
      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5287cfe7-d246-4e2a-ecc6-d5cd80300400/public",
  },
  {
    id: 2,
    image:
      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ae87bc3c-2a89-4311-fb8b-4b5d29f0a400/public",
  },
  {
    id: 3,
    image:
      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/38dd4f80-1dbc-4b95-4cae-9a2e1143a900/public",
  },
  {
    id: 4,
    image:
      "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e92492f0-d984-4259-52cc-6cdb6f276c00/public",
    videoEmbed:
      "https://customer-qp4u7i1mf8x9obux.cloudflarestream.com/1e77c70bc4ded96f671a8b40fa034b2e/iframe?loop=true&autoplay=true&poster=https%3A%2F%2Fcustomer-qp4u7i1mf8x9obux.cloudflarestream.com%2F1e77c70bc4ded96f671a8b40fa034b2e%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",
  },
];

const AutoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;

    if (currentSlide === 3) {
      setIsPlaying(true);
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 17000);
    } else {
      setIsPlaying(false);
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.mainImageContainer}>
        {currentSlide === 3 ? (
          <div style={{ position: "relative", paddingTop: "100%" }}>
            <iframe
              src={slides[3].videoEmbed}
              loading="lazy"
              style={{
                border: "none",
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "100%",
                background: "white",
              }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <img
            className={styles.mainImage}
            src={slides[currentSlide].image}
            alt={`Slide ${slides[currentSlide].id}`}
          />
        )}
      </div>

      <div className={styles.dotsContainer}>
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            className={`${styles.dotImage} ${
              currentSlide === index ? styles.activeDot : ""
            }`}
            src={slide.image}
            alt={`Dot ${slide.id}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlider;
