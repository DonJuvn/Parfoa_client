import React, { useState, useEffect } from "react";
const InfiniteSlider = ({ data = [], interval = 1500 }) => {
   const [currentIndex, setCurrentIndex] = useState(0);

   // Assuming data is a fixed set of brand names
   const dataSets = [data, data, data]; // Create three sets of data

   useEffect(() => {
      const updateSlider = () => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % (data.length * 3));
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
               {dataSets.map((dataset, setIndex) =>
                  dataset.map((brand, index) => (
                     <img
                        key={index + setIndex * data.length}
                        src={process.env.PUBLIC_URL + `/${brand}`}
                        alt={`slide-${index + setIndex * data.length}`}
                        className="slider-image"
                     />
                  ))
               )}
            </div>
         </div>
      </div>
   );
};

export default InfiniteSlider;
