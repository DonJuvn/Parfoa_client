import React, { useState, useEffect } from "react"; // import "./InfiniteSlider.css";
const InfiniteSlider = ({ imageNames = [], interval = 1500 }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const updateSlider = () => {
         setCurrentIndex(
            (prevIndex) => (prevIndex + 1) % (imageNames.length * 2)
         );
      };

      const intervalId = setInterval(updateSlider, interval);

      // Clear interval on component unmount
      return () => {
         clearInterval(intervalId);
      };
   }, [interval, imageNames.length]);

   const imageStyle = {
      transform: `translateX(${
         -currentIndex * (100 / (imageNames.length * 3))
      }%)`,
      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "flex", // Ensure flex layout for smoother transition
   };

   return (
      <div className="infinite-slider">
         <div className="slider-wrapper" style={imageStyle}>
            {imageNames.map((imageName, index) => (
               <img
                  key={index}
                  src={process.env.PUBLIC_URL + `/${imageName}`}
                  alt={`slide-${index}`}
                  className="slider-image"
               />
            ))}
            {imageNames.map((imageName, index) => (
               <img
                  key={index + imageNames.length} // Ensure unique keys
                  src={process.env.PUBLIC_URL + `/${imageName}`}
                  alt={`slide-${index + imageNames.length}`}
                  className="slider-image"
               />
            ))}
            {imageNames.map((imageName, index) => (
               <img
                  key={index + imageNames.length * 2} // Ensure unique keys
                  src={process.env.PUBLIC_URL + `/${imageName}`}
                  alt={`slide-${index + imageNames.length * 2}`}
                  className="slider-image"
               />
            ))}
         </div>
      </div>
   );
};

export default InfiniteSlider;
