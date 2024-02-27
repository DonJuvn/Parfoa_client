import React, { useState } from "react";
import { Link } from "react-router-dom";
const Card = ({ id, imagePath, title, description, price, volume, link }) => {
   const [isFavorite, setIsFavorite] = useState(false);

   const toggleFavorite = () => {
      setIsFavorite((prevState) => !prevState);
   };

   return (
      <div id="card">
         {/* <Link to={`perfume/${id}`}> */}
         <Link to={link}>
            <div className={`card ${isFavorite ? "favorite" : ""}`}>
               <img src={`http://localhost:8000/${imagePath}`} alt="" />
               <div className="container">
                  <h3>{title}</h3>
                  <p className="description">{description}</p>
                  <div className="card-details">
                     <p className="price">{price}</p>
                     <p className="volume">{volume}</p>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default Card;
