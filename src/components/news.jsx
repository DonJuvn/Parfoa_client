import React from "react";function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
   return array;
}

const News = () => {
   // Your data array
   const data_initial = [
      { id: "topCold10.svg", text: "Top Cold 10", link: "/topCold10" },
      { id: "top2024.svg", text: "Top 2024", link: "/top2024" },
      { id: "topSweet20.svg", text: "Top Sweet 20", link: "/topSweet20" },
   ];

   // Shuffle the data array
   const data = shuffleArray([...data_initial]);

   return (
      <div id="news">
         <div className="container">
            <div className="parent">
               <div className="row-of-two">
                  <div className="left">
                     <img
                        width={100}
                        src={`${process.env.PUBLIC_URL}/${data[0].id}`}
                        alt={data[0].text}
                        className="top-img"
                        href={data[0].link}
                     />
                  </div>
                  <div className="right">
                     <img
                        width={100}
                        src={`${process.env.PUBLIC_URL}/${data[1].id}`}
                        alt={data[1].text}
                        className="top-img"
                        href={data[1].link}
                     />
                  </div>
               </div>
               <div className="big-child">
                  <img
                     width={100}
                     src={`${process.env.PUBLIC_URL}/${data[2].id}`}
                     alt={data[2].text}
                     className="top-img"
                     href={data[2].link}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default News;
