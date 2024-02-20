import React, { useState } from "react";const Card = ({ imagePath, title, description, price, volume }) => {
   const [isFavorite, setIsFavorite] = useState(false);

   const toggleFavorite = () => {
      setIsFavorite((prevState) => !prevState);
   };

   return (
      <div id="card">
         <div className={`card ${isFavorite ? "favorite" : ""}`}>
            {/* <img src={process.env.PUBLIC_URL + `/${ImagePath}`} alt="" /> */}
            <img src={imagePath} alt="" />
            <div className="container">
               <h3>{title}</h3>
               <p className="description">{description}</p>
               <div className="card-details">
                  <p className="price">{price}</p>
                  <p className="volume">{volume}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Card;
