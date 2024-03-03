import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../card/card";
import { baseUrl } from "../baseUrl";
import { baseLocalUrl } from "../baseUrl";

const Catalog = () => {
   const [cardsData, setCardsData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);

   // const apiUrl = baseUrl + `api/shop/perfums/`;
   const apiUrl = baseLocalUrl + `api/shop/perfums/`;

   useEffect(() => {
      // Fetch data from the API endpoint
      // fetch("http://127.0.0.1:8000/api/shop/perfums/")
      fetch(apiUrl)
         .then((response) => response.json())
         .then((data) => {
            setCardsData(data);
            console.log({ data: data });
         })
         .catch((error) => console.error("Error fetching data:", error));
   }, []);

   const getRandomCards = (data, numCards) => {
      // Shuffle the array randomly
      const shuffledData = [...data].sort(() => Math.random() - 0.5);

      // Take the first 'numCards' elements
      const randomCards = shuffledData.slice(0, numCards);

      return randomCards;
   };

   // Assuming 'filteredData' is your data array
   const randomCards = getRandomCards(
      filteredData.length > 0 ? filteredData : cardsData,
      4
   );

   const handleFilterClick = () => {
      // Filter data to include only perfumes with volume 750ml
      const filtered = cardsData.filter(
         (perfume) => perfume.volume === "750ml"
      );
      setFilteredData(filtered);
   };

   return (
      <div id="catalog-section">
         <div className="container">
            <h1 id="title">Каталог</h1>
            <div className="catalog">
               {cardsData.slice(0, 4).map((card, id) => (
                  <Link to={`catalog/perfume/${id}`}>
                     <Card
                        id={card.id}
                        imagePath={card.image}
                        title={card.name}
                        description={card.description}
                        gender={card.gender_category}
                        price={card.price}
                        volume={card.quantity}
                        link={`catalog/`}
                     />
                  </Link>
               ))}
            </div>
            {/* You might want to adjust the link based on your routing structure */}
            <Link className="link" to="/catalog">
               Ещё...
            </Link>
         </div>
      </div>
   );
};

export default Catalog;
