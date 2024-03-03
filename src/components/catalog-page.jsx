import React, { useState, useEffect } from "react";
import Card from "./card/card";
import Filter from "./filter";
import { baseUrl } from "./baseUrl";
import { baseLocalUrl } from "./baseUrl";

const Catalog = () => {
   const [cardsData, setCardsData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [resetFilter, setResetFilter] = useState(false);

   // const apiUrl = "http://127.0.0.1:8000/api/shop/perfums/";
   // const apiUrl = baseUrl + `/api/shop/perfums/`;
   const apiUrl = baseLocalUrl + `/api/shop/perfums/`;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
               throw new Error("Failed to fetch data");
            }
            const fetchedData = await response.json();
            setCardsData(fetchedData);

            console.log({ fetched: fetchedData });
            console.log("whats wrong?");
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData();
   }, []);

   const handleFilterClick = () => {
      // Filter data to include only perfumes with quantity 250
      const filtered = cardsData.filter((perfume) => perfume.quantity === 250);
      setFilteredData(filtered);
   };

   const handleResetFilterClick = () => {
      // Reset filter and show all perfumes
      setFilteredData([]);
      setResetFilter((prevReset) => !prevReset);
   };

   return (
      <div id="catalog">
         <Filter
            setFilteredData={setFilteredData}
            cardsData={cardsData}
            setResetFilter={setResetFilter}
         />
         <div className="container">
            <button className="test" onClick={handleFilterClick}>
               Filter 250ml Perfumes
            </button>
            <button className="test" onClick={handleResetFilterClick}>
               Reset Filter
            </button>
            <h1 id="title">Каталог</h1>
            <div className="catalog" id="full">
               {filteredData.length > 0
                  ? filteredData.map((card, index) => (
                       <Card
                          key={index}
                          id={card.id}
                          imagePath={card.image}
                          title={card.name}
                          description={card.description}
                          price={card.price}
                          volume={card.quantity}
                       />
                    ))
                  : cardsData.map((card, index) => (
                       <Card
                          key={index}
                          id={card.id}
                          imagePath={card.image}
                          title={card.name}
                          description={card.description}
                          price={card.price}
                          volume={card.quantity}
                       />
                    ))}
            </div>
         </div>
      </div>
   );
};

export default Catalog;
