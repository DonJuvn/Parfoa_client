import React, { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../baseUrl";
const CardCarousel = ({
   id,
   imagePath,
   title,
   gender,
   price,
   volume,
   link,
}) => {
   const [isFavorite, setIsFavorite] = useState(false);

   const toggleFavorite = () => {
      setIsFavorite((prevState) => !prevState);
   };

   return (
      <div id="card-carousel">
         {/* <Link to={`perfume/${id}`}> */}
         <Link to={link}>
            <div className={`card`}>
               {/* <img src={`http://localhost:8000/${imagePath}`} alt="" /> */}
               {/* <img src={apiUrl + `media/perfume_images/${imagePath}`} alt="" /> */}
               <img src={process.env.PUBLIC_URL + `${imagePath}`} alt="" />
               <div className="container">
                  <h3>{title}</h3>
                  {/* <p className="description">{description}</p> */}
                  <p className="description">{gender}</p>
                  <div className="card-details">
                     <p className="price">KZT {price}.00</p>
                     <p className="volume">{volume} ml</p>
                  </div>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default CardCarousel;
