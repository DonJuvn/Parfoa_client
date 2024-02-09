// import React, { useState, useEffect } from "react";// const Main = () => {//    const data = ["test1.jpg", "test2.jpg", "test3.jpg", "test4.jpg"];//    const interval = 1000;//    const [currentIndex, setCurrentIndex] = useState(0);//    useEffect(() => {//       const updateSlider = () => {//          setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);//       };//       const intervalId = setInterval(updateSlider, interval);//       // Clear interval on component unmount//       return () => {
//          clearInterval(intervalId);
//       };
//    }, [interval, data.length]);

//    const containerStyle = {
//       overflow: "hidden",
//       width: "100%",
//       display: "flex",
//       justifyContent: "center",
//    };

//    const sliderStyle = {
//       display: "flex",
//       transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//       transform: `translateX(${-currentIndex * 100}%)`,
//       width: `${data.length * 100}%`,
//    };

//    return (
//       <div className="bg-slider" style={containerStyle}>
//          <div className="slider-wrapper" style={sliderStyle}>
//             {data.map((image, index) => (
//                <img
//                   key={index}
//                   src={process.env.PUBLIC_URL + `/${image}`}
//                   alt={`slide-${index}`}
//                   className="slider-image"
//                   style={{ width: "100%" }}
//                />
//             ))}
//             {/* Repeat the first image at the end for smooth transition */}
//             <img
//                key={data.length}
//                src={process.env.PUBLIC_URL + `/${data[0]}`}
//                alt={`slide-${data.length}`}
//                className="slider-image"
//                style={{ width: "100%" }}
//             />
//          </div>
//       </div>
//    );
// };

// export default Main;

// src/components/BackgroundSlider.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const images = ["url(test1.jpg)", "url(test2.jpg)", "url(test3.jpg)"];

const SliderContainer = styled.div`
   position: block;
   width: 90%;
   height: 80vh;
   display: flex;
   align-items: center;
   justify-content: center;
   background-size: cover;
   transition: background-image 1s ease-in-out;
   margin: 15vh auto;
`;

const Main = () => {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);

      return () => clearInterval(interval);
   }, []);

   return <SliderContainer style={{ backgroundImage: images[index] }} />;
};

export default Main;
