import React, { useState, useEffect } from "react";
import Card from "../card/card";
import { baseUrl } from "../baseUrl";

const RoomFragnances = () => {
   const [productData, setProductData] = useState(null);
   const [isSearchOpen, setIsSearchOpen] = useState(false);
   const [searchQuery, setSearchQuery] = useState("");

   const apiUrl = baseUrl + "api/cosmetics/"; // Replace with your actual API endpoint

   useEffect(() => {
      // Fetch data from the API endpoint
      fetch(apiUrl)
         .then((response) => response.json())
         .then((data) => {
            setProductData(data);
            console.log(data);
         })
         .catch((error) => console.error("Error fetching data:", error));
   }, [apiUrl]);

   const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
   };

   const filteredProducts = productData
      ? productData.filter((product) =>
           product.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

   return (
      <div className="container">
         <div className="search-icon">
            {isSearchOpen && (
               <input
                  type="text"
                  placeholder="Искать..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            )}
            <img
               onClick={toggleSearch}
               src={process.env.PUBLIC_URL + `/search.svg`}
               alt=""
            />
         </div>

         {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
               <Card
                  key={product.id}
                  id={product.id}
                  imagePath={product.image}
                  title={product.name}
                  description={product.description}
                  gender={product.description}
                  price={product.price}
                  volume={product.volume}
                  link={`perfume/${product.id}`}
               />
            ))
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
};

export default RoomFragnances;