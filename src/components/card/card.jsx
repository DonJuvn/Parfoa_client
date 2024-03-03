import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../baseUrl";
const Card = ({
   id,
   imagePath,
   title,
   description,
   gender,
   price,
   volume,
   link,
}) => {
   const [isFavorite, setIsFavorite] = useState(false);

   const toggleFavorite = () => {
      setIsFavorite((prevState) => !prevState);
   };

   const apiUrl = baseUrl;

   return (
      <div id="card">
         {/* <Link to={`perfume/${id}`}> */}
         <Link to={link}>
            <div className={`card ${isFavorite ? "favorite" : ""}`}>
               {/* <img src={`http://localhost:8000/${imagePath}`} alt="" /> */}
               <img src={apiUrl + `/${imagePath}`} alt="" />
               <div className="container">
                  <h3>{title}</h3>
                  {/* <p className="description">{description}</p> */}
                  <p className="description">{gender}</p>
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
