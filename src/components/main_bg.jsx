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
