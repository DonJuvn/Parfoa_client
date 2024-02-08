import React, { useState, useEffect } from "react"; // import "./InfiniteSlider.css";

const InfiniteSlider = ({ data = [], interval = 1500 }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   useEffect(() => {
      const updateSlider = () => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % (data.length * 2));
      };

      const intervalId = setInterval(updateSlider, interval);

      // Clear interval on component unmount
      return () => {
         clearInterval(intervalId);
      };
   }, [interval, data.length]);

   const imageStyle = {
      transform: `translateX(${-currentIndex * (100 / (data.length * 3))}%)`,
      transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      display: "flex", // Ensure flex layout for smoother transition
   };

   return (
      <div className="infinite-slider">
         <div className="container">
            <div className="slider-wrapper" style={imageStyle}>
               {data.map((data, index) => (
                  <img
                     key={index}
                     src={process.env.PUBLIC_URL + `/${data}`}
                     alt={`slide-${index}`}
                     className="slider-image"
                  />
               ))}
               {data.map((data, index) => (
                  <img
                     key={index + data.length} // Ensure unique keys
                     src={process.env.PUBLIC_URL + `/${data}`}
                     alt={`slide-${index + data.length}`}
                     className="slider-image"
                  />
               ))}
               {data.map((data, index) => (
                  <img
                     key={index + data.length * 2} // Ensure unique keys
                     src={process.env.PUBLIC_URL + `/${data}`}
                     alt={`slide-${index + data.length * 2}`}
                     className="slider-image"
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default InfiniteSlider;
