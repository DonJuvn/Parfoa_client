import React, { useState, useEffect } from "react";
const CardDetail = ({ ImagePath, title, description, price, volume }) => {
   const [isFavorite, setIsFavorite] = useState(false);

   const toggleFavorite = () => {
      setIsFavorite((prevState) => !prevState);
   };

   return (
      <div id="card-detail">
         <div  className={`card ${isFavorite ? "favorite" : ""}`}>
            <img src={process.env.PUBLIC_URL + `/${ImagePath}`} alt="" />
            <div className="container">
               <h3>{title}</h3>
               <p className="description">{description}</p>
               <div className="card-details">
                  <p className="price">{price}</p>
                  <p className="volume">{volume}</p>
               </div>
               {/* <button className="favorite-button" onClick={toggleFavorite}>
                  <span className="heart-icon">&#10084;</span>
               </button> */}
            </div>
         </div>
      </div>
   );
};

export default CardDetail;