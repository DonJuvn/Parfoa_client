import React, { useState, useEffect } from "react";import { Link } from "react-router-dom";
import Card from "./card";

const Catalog = () => {
   const [cardsData, setCardsData] = useState([]);

   useEffect(() => {
      // Simulating data fetching from an API
      const fetchedData = [
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
            volume: "250ml",
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
            volume: "250ml",
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
            volume: "250ml",
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

   return (
      <div id="catalog">
         <div className="container">
            <h1>Каталог</h1>
            <div className="catalog">
               {cardsData.slice(0, 4).map((card, index) => (
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
            <Link className="link" to="/catalog">
               Еще
            </Link>
         </div>
      </div>
   );
};

export default Catalog;
