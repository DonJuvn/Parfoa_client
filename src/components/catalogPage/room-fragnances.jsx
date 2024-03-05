// import React, { useState, useEffect } from "react";// import Card from "../card/card";// import { baseUrl } from "../baseUrl";// const RoomFragnances = () => {
//    const [roomFragnances, setRoomFragnances] = useState([]); // Updated state variable name

//    const apiUrl = baseUrl + `/api/room-fragnances`;

//    useEffect(() => {
//       // Fetch data from the API endpoint
//       fetch(apiUrl)
//          .then((response) => response.json())
//          .then((data) => {
//             setRoomFragnances(data); // Updated state variable name
//             console.log({ fetched: roomFragnances }); // Updated state variable name
//             console.log(apiUrl);
//          })
//          .catch((error) => console.error("Error fetching data:", error));
//    }, [apiUrl]);

//    return (
//       <div className="container">
//          <div className="search-icon">
//             <img src={process.env.PUBLIC_URL + `/search.svg`} alt="" />
//          </div>

//          <div className="catalog">
//             {roomFragnances.map(
//                (
//                   card,
//                   index // Updated state variable name
//                ) => (
//                   <div>
//                      <p>{index}</p>
//                      <p>{card.id}</p>
//                      <p>{card.image}</p>
//                      <p>{card.name}</p>
//                      <p>{card.description}</p>
//                      <p>{card.gender_category}</p>
//                      <p>{card.price}</p>
//                      <p>{card.quantity}</p>
//                      <p>{`room-fragnance/${card.id}`}</p>
//                   </div>
//                )
//             )}
//          </div>
//       </div>
//    );
// };

// export default RoomFragnances;

import React, { useState, useEffect } from "react";

const RoomFragnances = () => {
   const [productData, setProductData] = useState(null);
   const apiUrl = "https://parfua.pythonanywhere.com/api/room-fragrances"; // Replace with your actual API endpoint

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
               throw new Error("Network response was not ok");
            }

            const data = await response.json();
            setProductData(data);
            console.log(data);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };

      fetchData();
   }, [apiUrl]);

   return (
      <div>
         {productData ? (
            <div>
               <h2>{productData.name}</h2>
               <img src={productData.image} alt={productData.name} />
               <p>{productData.description}</p>
               <p>Price: ${productData.price}</p>
               <p>Volume: {productData.volume} ml</p>
            </div>
         ) : (
            <p>Loading...</p>
         )}
      </div>
   );
};

export default RoomFragnances;
