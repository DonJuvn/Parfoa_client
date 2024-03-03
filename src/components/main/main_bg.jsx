import React, { useState, useEffect } from "react";import styled from "styled-components";

// const images = ["url(about.svg)", "url(test2.jpg)", "url(test3.jpg)"];

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

   @media only screen and (max-width: 480px) {
      width: 100%;
      height: auto;
      object-position: center;
   }
`;

const Video = styled.video`
   width: 100%; /* Set the width to 100% of the parent container */
   max-width: 100%; /* Ensure the video doesn't exceed its natural size */
   height: auto; /* Maintain the aspect ratio */
   display: block; /* Remove extra space below the inline element */
   margin: 0 auto; /* Center the video horizontally */
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
         <Video
            className="video"
            autoPlay
            loop
            controls
            playsInline
            src="a-la-rose2.mp4"
         ></Video>
      </SliderContainer>
   );
};

export default Main;
