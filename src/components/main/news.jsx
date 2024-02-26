import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes, css } from "styled-components";

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}

const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-50px);
  }
`;

const slideInAnimationCSS = css`
   ${slideInAnimation} 1s ease-out forwards;
`;

const NewsContainer = styled.div`
   opacity: 0;
   transform: translateY(50px);
   animation: ${(props) => props.isVisible && slideInAnimationCSS};
`;

const News = () => {
   const [shuffledData, setShuffledData] = useState([]);
   const [isVisible, setIsVisible] = useState(false);
   const newsRef = useRef(null);

   useEffect(() => {
      // Your data array
      const data_initial = [
         { id: "topCold10.svg", text: "Top Cold 10", link: "/topCold10" },
         { id: "top2024.svg", text: "Top 2024", link: "/top2024" },
         { id: "topSweet20.svg", text: "Top Sweet 20", link: "/topSweet20" },
      ];

      // Shuffle the data array
      const shuffledArray = shuffleArray([...data_initial]);
      setShuffledData(shuffledArray);
   }, []);

   const handleScroll = () => {
      if (newsRef.current) {
         const rect = newsRef.current.getBoundingClientRect();
         const isVisible = rect.top <= window.innerHeight * 0.6; // Adjust the buffer as needed
         setIsVisible(isVisible);
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <NewsContainer id="news" ref={newsRef} isVisible={isVisible}>
         <div className="container">
            <div className="parent">
               <div className="row-of-two">
                  {shuffledData.slice(0, 2).map((item, index) => (
                     <div
                        key={index}
                        className={index === 0 ? "left" : "right"}
                     >
                        <img
                           width={100}
                           src={`${process.env.PUBLIC_URL}/${item.id}`}
                           alt={item.text}
                           className="top-img"
                           href={item.link}
                        />
                     </div>
                  ))}
               </div>
               <div className="big-child">
                  <img
                     width={100}
                     src={`${process.env.PUBLIC_URL}/${shuffledData[2]?.id}`}
                     alt={shuffledData[2]?.text}
                     className="top-img"
                     href={shuffledData[2]?.link}
                  />
               </div>
            </div>
         </div>
      </NewsContainer>
   );
};

export default News;
