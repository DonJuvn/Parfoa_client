import React, { useState, useEffect } from "react";import CardDetail from "./card/card-detail";

const CardDetailPage = () => {
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

      setCardsData(fetchedData[0]);
   }, []);

   return (
      <div id="catalog">
         <div className="container">
            <h1 id="title">Каталог</h1>
            <div className="catalog">
               {cardsData.map((card, index) => (
                  <CardDetail
                     key={index}
                     ImagePath={card.ImagePath}
                     title={card.title}
                     description={card.description}
                     price={card.price}
                     volume={card.volume}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default CardDetailPage;
