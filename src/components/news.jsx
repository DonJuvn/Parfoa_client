// import React from "react";// const News = () => {//    const data =//    return (//       <div id="news">//          <div className="container">
//             <div className="parent">
//                <div className="row-of-two">
//                   {data.map((index, data, text, link) => (
//                      <img
//                         key={index}
//                         src={process.env.PUBLIC_URL + `/${data}`}
//                         alt={text}
//                         className="top-img"
//                         href={link}
//                      />
//                   ))}
//                </div>
//                <div className="big-child"></div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default News;

import React from "react";

const News = () => {
   const data = [
      { id: "topCold10.svg", text: "Top Cold 10", link: "/topCold10" },
      { id: "top2024.svg", text: "Top 2024", link: "/top2024" },
      { id: "topSweet20.svg", text: "Top Sweet 20", link: "/topSweet20" },
   ];

   return (
      <div id="news">
         <div className="container">
            <div className="parent">
               <div className="row-of-two">
                  {/* {data.map(({ id, text, link }) => ( */}
                  <img
                     width={100}
                     // key={id}
                     src={`${process.env.PUBLIC_URL}/topSweet20.svg`}
                     // alt={text}
                     className="top-img"
                     // href={link}
                  />
                  // ))}
               </div>
               <div className="big-child"></div>
            </div>
         </div>
      </div>
   );
};

export default News;
