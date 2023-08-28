/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import "../styles/caraousel.css";

function Caraousel({ images, auto = true, intialIndex = 0, delay = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(intialIndex);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev == 0) {
        return images.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev == images.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    if (auto) setTimeout(handleNext, delay);
  }, [currentIndex]);

  return (
    <div className="caraousel">
      <button className="prev" onClick={handlePrev}>
        <ChevronLeft />
      </button>

      <div className="images">
        {images.map((e, i) => (
          <img
            key={i}
            style={{ transform: `translateX(-${currentIndex}00%)` }}
            src={e.src}
            alt="alt tag"
          />
        ))}
      </div>

      <button className="next" onClick={handleNext}>
        <ChevronRight />
      </button>
    </div>
  );
}

export default Caraousel;
