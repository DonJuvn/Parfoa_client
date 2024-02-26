import React, { useState, useEffect } from "react";
import styled from "styled-components";

const images = ["url(about.svg)", "url(test2.jpg)", "url(test3.jpg)"];

const SliderContainer = styled.div`
   position: block;
   width: 90%;
   height: 80vh;
   display: flex;
   object-fit: cover;
   align-items: center;
   justify-content: center;
   background-size: cover;
   transition: background-image 1s ease-in-out;
   margin: auto;
   border-radius: 0 50px 0 50px;
`;

const Main = () => {
   // const [index, setIndex] = useState(0);

   // useEffect(() => {
   //    const interval = setInterval(() => {
   //       setIndex((prevIndex) => (prevIndex + 1) % images.length);
   //    }, 2000);

   //    return () => clearInterval(interval);
   // }, []);

   return (
      <SliderContainer>
         <video
            className="test"
            autoPlay
            loop
            controls
            src="a-la-rose2.mp4"
         ></video>
      </SliderContainer>
   );
};

export default Main;
