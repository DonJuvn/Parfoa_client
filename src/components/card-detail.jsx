import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "./baseUrl";
import { baseLocalUrl } from "./baseUrl";

const CardDetail = () => {
   const { id } = useParams();
   const [perfumeDetail, setPerfumeDetail] = useState(null);
   const [quantity, setQuantity] = useState(null);

   // const apiUrl = `http://127.0.0.1:8000/api/shop/perfums/${id}/`;
   const apiUrl = baseUrl + `/api/shop/perfums/${id}/`;
   // const apiUrl = baseLocalUrl + `/api/shop/perfums/${id}/`;

   useEffect(() => {
      // Fetch the details of the perfume using the ID
      fetch(apiUrl)
         .then((response) => response.json())
         .then((data) => setPerfumeDetail(data))
         .catch((error) => console.error("Error fetching data:", error));
      console.log(apiUrl);
   }, [id]);

   const handleBuyClick = () => {
      if (quantity > 0) {
         // Get existing items from local storage or initialize an empty array
         const existingItems =
            JSON.parse(localStorage.getItem("cartItems")) || [];

         // Add the current item to the cart
         console.log(perfumeDetail);
         const newItem = {
            id: perfumeDetail.id,
            name: perfumeDetail.name,
            price: perfumeDetail.price,
            image: perfumeDetail.image,
            gender: perfumeDetail.gender_category,
            quantity,
         };

         console.log(newItem);

         const updatedItems = [...existingItems, newItem];

         console.log(updatedItems);

         // Save the updated cart items to local storage
         localStorage.setItem("cartItems", JSON.stringify(updatedItems));

         alert("Добавлено в корзину!");

         window.location.reload();
      } else {
         alert("Выберите объем перед добавлением в корзину");
      }
   };

   if (!perfumeDetail) {
      return <div>Loading...</div>;
   }

   if (quantity != 0) {
   }

   return (
      <div className="container">
         <div className="detail-page">
            <img src={perfumeDetail.image} alt={perfumeDetail.name} />
            <div className="details">
               <div className="title">
                  <h2>{perfumeDetail.name}</h2>
               </div>
               <p className="detail-text-style">
                  {perfumeDetail.gender_category} perfume
               </p>
               <p className="detail-text-price">
                  1ml = KZT {perfumeDetail.price}
               </p>
               <div className="perfum-details">
                  <p>
                     Тип аромата: <span>{perfumeDetail.type_category}</span>
                  </p>
                  <p>
                     Интенсивность:{" "}
                     <span>{perfumeDetail.intensive_category}</span>
                  </p>
                  <p>
                     Ноты: <span>{perfumeDetail.note_category}</span>
                  </p>
                  <p>
                     Бренд: <span>{perfumeDetail.brand_category}</span>
                  </p>
                  {/* <p>Volume: {perfumeDetail.quantity}</p> */}
               </div>
               <div className="details-description">
                  <p>Описание:</p>
                  <p>{perfumeDetail.description}</p>
               </div>
               <div className="buy">
                  <select
                     onChange={(e) => setQuantity(parseInt(e.target.value))}
                     className="volume"
                  >
                     <option value={0}>Объём</option>
                     <option value={5}>5</option>
                     <option value={10}>10</option>
                     <option value={15}>15</option>
                     <option value={20}>20</option>
                     <option value="full">Полноценно</option>
                  </select>
                  <button className="buy-button" onClick={handleBuyClick}>
                     В корзину{" "}
                     {/* <img src={process.env.PUBLIC_URL + `/cart.svg`} alt="" /> */}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardDetail;
