import React, { useEffect, useState } from "react";
const AboutUs = () => {
   const [hasAnimated, setHasAnimated] = useState(false);

   useEffect(() => {
      const aboutUsElement = document.getElementById("about-us");
      const aboutTextElements = document.querySelectorAll(".about-text");

      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         const elementOffset = aboutUsElement.offsetTop;

         if (
            !hasAnimated &&
            scrollPosition + window.innerHeight > elementOffset
         ) {
            aboutTextElements.forEach((textElement, index) => {
               textElement.classList.add("slide-in-animation");
            });
            setHasAnimated(true); // Set the flag to true after animating
         }
      };

      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [hasAnimated]);

   return (
      <div id="about-us">
         <div className="container">
            <div className="about-us">
               <p className="about-text">Только</p>
               <p className="about-text">Оригинальные</p>
               <p className="about-text">Парфюмы</p>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;
