import React from "react";const Navigation = () => {
   return (
      <div id="navigation">
         <div className="container">
            <div className="navigation">
               <button>
                  <img src={process.env.PUBLIC_URL + `/burger.svg`} alt="" />
               </button>
               <div className="logotype">
                  <img src={process.env.PUBLIC_URL + `/Logotype.svg`} alt="" />
               </div>
               <div className="icons">
                  <img src={process.env.PUBLIC_URL + `/search.svg`} alt="" />
                  <img src={process.env.PUBLIC_URL + `/favorites.svg`} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navigation;
