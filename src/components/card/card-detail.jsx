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

   const apiUrl = baseUrl + `/api/shop/perfums/${id}/`;
   // const apiUrl = baseLocalUrl + `/api/shop/perfums/${id}/`;

   useEffect(() => {
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
            backgroundColor: "#343434",
            color: "white",
         };
      }
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
                     style={getButtonStyle(perfumeDetail.price_5ml)}
                     onClick={() => setQuantity(perfumeDetail.price_5ml)}
                  >
                     5 ml
                  </button>
                  <button
                     className="volume-selector"
                     style={getButtonStyle(perfumeDetail.price_10ml)}
                     onClick={() => setQuantity(perfumeDetail.price_10ml)}
                  >
                     10 ml
                  </button>
                  <button
                     className="volume-selector"
                     style={getButtonStyle(perfumeDetail.price_15ml)}
                     onClick={() => setQuantity(perfumeDetail.price_15ml)}
                  >
                     15 ml
                  </button>
                  <button
                     className="volume-selector"
                     style={getButtonStyle(perfumeDetail.price_20ml)}
                     onClick={() => setQuantity(perfumeDetail.price_20ml)}
                  >
                     20 ml
                  </button>
                  <button
                     className="volume-selector"
                     style={getButtonStyle(perfumeDetail.price_full)}
                     onClick={() => setQuantity(perfumeDetail.price_full)}
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
                           {/* Static buttons */}
                           <button
                              className={`note ${
                                 activeNote === "note_category1" ? "active" : ""
                              }`}
                              onClick={() => handleNoteClick("note_category1")}
                           >
                              Верхние
                           </button>
                           <button
                              className={`note ${
                                 activeNote === "note_category2" ? "active" : ""
                              }`}
                              onClick={() => handleNoteClick("note_category2")}
                           >
                              Средние
                           </button>
                           <button
                              className={`note ${
                                 activeNote === "note_category3" ? "active" : ""
                              }`}
                              onClick={() => handleNoteClick("note_category3")}
                           >
                              Базовые
                           </button>
                        </div>
                     </div>
                  )}

                  {showNoteDetails && (
                     <div className="note-details">
                        <p>{perfumeDetail[activeNote]}</p>
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
