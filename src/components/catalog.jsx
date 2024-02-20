import React, { useState, useEffect } from "react";import { Link } from "react-router-dom";
import Card from "./card";

const Catalog = () => {
   const [cardsData, setCardsData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);

   useEffect(() => {
      // Simulating data fetching from an API
      const fetchedData = [
         {
            ImagePath: "swy.jpg",
            title: "Perfume №5 CHANEL eau de parfum",
            description: "Women parfume",
            price: "KZT 55.250",
            volume: "150ml",
         },
         {
            ImagePath: "swy.jpg",
            title: "Perfume №5 CHANEL eau de parfum",
            description: "Women parfume",
            price: "KZT 55.250",
            volume: "250ml",
         },
         {
            ImagePath: "swy.jpg",
            title: "Perfume №5 CHANEL eau de parfum",
            description: "Women parfume",
            price: "KZT 55.250",
            volume: "750ml",
         },
         {
            ImagePath: "swy.jpg",
            title: "Perfume №5 CHANEL eau de parfum",
            description: "Women parfume",
            price: "KZT 55.250",
            volume: "850ml",
         },
         {
            ImagePath: "swy.jpg",
            title: "Perfume №5 CHANEL eau de parfum",
            description: "Women parfume",
            price: "KZT 55.250",
            volume: "450ml",
         },
         {
            ImagePath: "swy.jpg",
            title: "Perfume №5 CHANEL eau de parfum",
            description: "Women parfume",
            price: "KZT 55.250",
            volume: "350ml",
         },
         {
            ImagePath: "swy.jpg",
            title: "Perfume №5 CHANEL eau de parfum",
            description: "Women parfume",
            price: "KZT 55.250",
            volume: "250ml",
         },
      ];

      setCardsData(fetchedData);
   }, []);

   const handleFilterClick = () => {
      // Filter data to include only perfumes with volume 250ml
      const filtered = cardsData.filter(
         (perfume) => perfume.volume === "750ml"
      );
      setFilteredData(filtered);
   };

   return (
      <div id="catalog">
         <div className="container">
            <h1 id="title">Каталог</h1>
            <button className="test" onClick={handleFilterClick}>
               Filter 250ml Perfumes
            </button>
            <div className="catalog">
               {filteredData.length > 0
                  ? filteredData.map((card, index) => (
                       <Card
                          key={index}
                          ImagePath={card.ImagePath}
                          title={card.title}
                          description={card.description}
                          price={card.price}
                          volume={card.volume}
                       />
                    ))
                  : cardsData.map((card, index) => (
                       <Card
                          key={index}
                          ImagePath={card.ImagePath}
                          title={card.title}
                          description={card.description}
                          price={card.price}
                          volume={card.volume}
                       />
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
