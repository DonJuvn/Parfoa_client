import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./card";

const FullCatalog = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/shop/perfums/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const fetchedData = await response.json();
        setCardsData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="catalog">
      <div className="container">
        <h1 id="title">Каталог</h1>
        <div className="catalog" id="full">
          {cardsData.map((card, index) => (
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
      </div>
    </div>
  );
};

export default FullCatalog;