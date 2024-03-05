import React, { useState, useEffect } from "react";import { useParams } from "react-router-dom";
import { baseUrl } from "../baseUrl";
import { baseLocalUrl } from "../baseUrl";

const CardDetail = () => {
   const { id } = useParams();
   const [perfumeDetail, setPerfumeDetail] = useState(null);
   const [quantity, setQuantity] = useState(null);

   const [showPerfumDetails, setShowPerfumDetails] = useState(false);
   const [showPerfumDetailsDescription, setShowPerfumDetailsDescription] =
      useState(false);

   const [activeNote, setActiveNote] = useState(null);
   const [showNoteDetails, setShowNoteDetails] = useState(false);

   const noteTexts = {
      Верхние: "Top notes provide the initial scent of the perfume.",
      Средние: "Middle notes make up the heart of the perfume's fragrance.",
      Базовые:
         "Base notes are the final and longest-lasting scents in a perfume.",
   };

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

   const isActive = (volume) => quantity === volume;

   const getButtonStyle = (volume) => {
      if (isActive(volume)) {
         return {
            backgroundColor: "#343434", // Change this to your desired active style
            color: "white", // Change this to your desired active text color
         };
      }
      // Add more styles for non-active state if needed
      return {};
   };

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
            volume: perfumeDetail.quantity,
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

   const handleSostavClick = () => {
      setShowPerfumDetails(!showPerfumDetails);
      setActiveNote(false);
   };

   const handleDescriptionClick = () => {
      setShowPerfumDetailsDescription(!showPerfumDetailsDescription);
   };

   const handleNoteClick = (note) => {
      if (activeNote === note) {
         setActiveNote(null);
         setShowNoteDetails(false);
      } else {
         setActiveNote(note);
         setShowNoteDetails(true);
      }
   };

   return (
      <div className="container">
         <div className="detail-page">
            <img src={perfumeDetail.image} alt={perfumeDetail.name} />
            <div className="details">
               <div className="title">
                  <h2>{perfumeDetail.name}</h2>
               </div>
               <div className="price-gender">
                  <p className="detail-text-price">KZT {perfumeDetail.price}</p>
                  <p className="detail-text-style">
                     {perfumeDetail.gender_category} perfume
                  </p>
               </div>

               <div className="volume-buttons">
                  <button
                     className="volume-selector"
                     style={getButtonStyle(5)}
                     onClick={() => setQuantity(5)}
                  >
                     5 ml
                  </button>
                  <button
                     className="volume-selector"
                     style={getButtonStyle(10)}
                     onClick={() => setQuantity(10)}
                  >
                     10 ml
                  </button>
                  <button
                     className="volume-selector"
                     style={getButtonStyle(15)}
                     onClick={() => setQuantity(15)}
                  >
                     15 ml
                  </button>
                  <button
                     className="volume-selector"
                     style={getButtonStyle(20)}
                     onClick={() => setQuantity(20)}
                  >
                     20 ml
                  </button>
                  <button
                     className="volume-selector"
                     style={getButtonStyle(perfumeDetail.quantity)}
                     onClick={() => setQuantity(perfumeDetail.quantity)}
                  >
                     Полноценно, {perfumeDetail.quantity}
                  </button>
               </div>

               <div className="perfum-details">
                  <div onClick={handleSostavClick} className="title">
                     <h3>Состав</h3>
                     <img src={process.env.PUBLIC_URL + `/link.svg`} alt="" />
                  </div>

                  {showPerfumDetails && (
                     <div>
                        <p className="intense">
                           Интенсивность:{" "}
                           <span>{perfumeDetail.intensive_category}</span>
                        </p>
                        <div className="notes">
                           <h4>Ноты:</h4>
                           <button
                              className={`note ${
                                 activeNote === "Верхние" ? "active" : ""
                              }`}
                              onClick={() => handleNoteClick("Верхние")}
                           >
                              Верхние
                           </button>
                           <button
                              className={`note ${
                                 activeNote === "Средние" ? "active" : ""
                              }`}
                              onClick={() => handleNoteClick("Средние")}
                           >
                              Средние
                           </button>
                           <button
                              className={`note ${
                                 activeNote === "Базовые" ? "active" : ""
                              }`}
                              onClick={() => handleNoteClick("Базовые")}
                           >
                              Базовые
                           </button>
                        </div>
                     </div>
                  )}

                  {showNoteDetails && (
                     <div className="note-details">
                        <p>{noteTexts[activeNote]}</p>
                     </div>
                  )}

                  <div onClick={handleDescriptionClick} className="title">
                     <h3>Описание</h3>
                     <img src={process.env.PUBLIC_URL + `/link.svg`} alt="" />
                  </div>

                  {showPerfumDetailsDescription && (
                     <p>{perfumeDetail.description}</p>
                  )}
               </div>

               <p className="logistics">Отправка в течении 5-7 рабочих дней</p>

               <div className="buy">
                  <button className="buy-button" onClick={handleBuyClick}>
                     В корзину{" "}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardDetail;
