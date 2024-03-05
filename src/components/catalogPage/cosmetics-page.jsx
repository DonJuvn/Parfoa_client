import React, { useState, useEffect } from "react";
import Card from "../card/card";
import { baseUrl } from "../baseUrl";

const CosmeticsPage = () => {
   const [perfumes, setPerfumes] = useState([]);

   // const apiUrl = baseLocalUrl + `/api/shop/perfums/`;
   const apiUrl = baseUrl + `/api/room-fragnances/`;

   useEffect(() => {
      // Fetch data from the API endpoint
      fetch(apiUrl)
         .then((response) => response.json())
         .then((data) => {
            setPerfumes(data);
            console.log({ fetched: perfumes });
            console.log(apiUrl);
         })
         .catch((error) => console.error("Error fetching data:", error));
   }, [apiUrl]);

   return (
      <div className="container">
         <div className="search-icon">
            <img
               src={process.env.PUBLIC_URL + `/search.svg`}
               alt=""
            />
         </div>

         <div className="catalog">
            {perfumes.map((card, index) => (
               <Card
                  key={index}
                  id={card.id}
                  imagePath={card.image}
                  title={card.name}
                  description={card.description}
                  gender={card.gender_category}
                  price={card.price}
                  volume={card.quantity}
                  link={`perfume/${card.id}`}
               />
            ))}
         </div>
      </div>
   );
};

export default CosmeticsPage;
