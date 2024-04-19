import React, { useState, useEffect } from "react";import { Link, useNavigate } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget"; // Adjust import statement
import "react-whatsapp-widget/dist/index.css"; // Import WhatsAppWidget styles
// import { useHistory } from "react-router-dom";
import { baseUrl, baseLocalUrl } from "../baseUrl";

const Navigation = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);
   const [isCartOpen, setCartOpen] = useState(false);
   const [showOverlay, setShowOverlay] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   const [name, setName] = useState("");
   const [address, setAddress] = useState("");

   const navigate = useNavigate();

   useEffect(() => {
      const cartItemsString = localStorage.getItem("cartItems");
      const parsedCartItems = cartItemsString
         ? JSON.parse(cartItemsString)
         : [];
      setCartItems(parsedCartItems);
   }, []);

   const calculateTotalSum = () => {
      // Get existing items from local storage or initialize an empty array
      const existingItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      // Initialize total sum
      let totalSum = 0;

      // Iterate over each item and sum up their prices
      existingItems.forEach((item) => {
         totalSum = totalSum + parseInt(item.price);
      });

      return totalSum;
   };

   const total_sum = calculateTotalSum();

   // const total_sum = cartItems.reduce((accumulator, currentItem) => {
   //    return accumulator + currentItem.price;
   // }, 0);

   const handleButtonClick = () => {
      setMenuOpen(!isMenuOpen);
      setShowOverlay(!showOverlay);
   };

   const handleCartClick = () => {
      setCartOpen(!isCartOpen);
      setShowOverlay(!showOverlay);
   };

   const handleDeleteItem = (index) => {
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(index-1, 1); // Remove the item at the specified index
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
   };

   const handleOverlayClick = () => {
      setMenuOpen(false);
      setCartOpen(false);
      setShowOverlay(false);
   };

   // async function handleBuy() {
   //    // Validate input fields before proceeding
   //    if (!name || !address) {
   //       alert("Напишите свой номер и адрес.");
   //       return;
   //    }

   //    // Redirect to the payment page
   //    window.location.href = `https://pay.kaspi.kz/pay/s8w3za6b`;
   //    // navigate("https://pay.kaspi.kz/pay/s8w3za6b");

   //    // Save data for display on the admin page
   //    const orderData = {
   //       total_sum,
   //       name,
   //       address,
   //       // cartItems,
   //    };

   //    // Assuming there's a function to save data to admin page
   //    // console.log({ orderData: orderData });

   //    try {
   //       // Assuming there's an API endpoint to save data to the admin page
   //       const response = await fetch(baseUrl + `api/orders/`, {
   //          method: "POST",
   //          headers: {
   //             "Content-Type": "application/json",
   //          },
   //          body: JSON.stringify(orderData),
   //       });

   //       if (!response.ok) {
   //          throw new Error("Failed to save order data to the server.");
   //       }
   //    } catch (error) {
   //       console.error("Error saving order data to the server:", error.message);
   //       // Assuming there's a function to handle API errors
   //    }

   //    console.log({ orderData: orderData });
   //    console.log({ url: baseUrl + `/api/orders/` });
   //    setCartItems([]);
   //    localStorage.removeItem("cartItems");
   // }

   const handleBuy = () => {
      // Validate input fields before proceeding
      if (!name || !address) {
         alert("Напишите свой номер и адрес.");
         return;
      }

      // Construct the message with order data
      const user_data = `Мой номер телефона ${name} и доставка по адресу ${address}`;
      const message = `Здравствуйте, ${user_data}. Я хочу сделать заказ: \n`;
      const orderDetails = cartItems.map(
         (item) => `${item.name}, ${item.quantity} (${item.price} KZT)`
      );
      const orderText = `${message}${orderDetails.join("\n")}`;

      // Open WhatsApp chat with the message
      window.open(
         `https://api.whatsapp.com/send?phone=+770720195052&text=${encodeURIComponent(
            orderText
         )}`,
         "_blank"
      );
   };

   const DeleteItems = () => {
      setCartItems([]);
      localStorage.removeItem("cartItems");
   };

   const reversedCartItems = [...cartItems].reverse();

   return (
      <div id="navigation">
         <div className="container">
            {showOverlay && (
               <div className="overlay" onClick={handleOverlayClick}></div>
            )}
            <div className="navigation">
               <button className="burger" onClick={handleButtonClick}>
                  <img src={process.env.PUBLIC_URL + `/burger.svg`} alt="" />
               </button>
               <div className="logotype">
                  <Link to="/">
                     <img
                        src={process.env.PUBLIC_URL + `/Logotype.svg`}
                        alt=""
                     />
                  </Link>
               </div>
               <div className="icons">
                  <Link to="/catalog">
                     <button className="search">
                        <img
                           src={process.env.PUBLIC_URL + `/search.svg`}
                           alt=""
                        />
                     </button>
                  </Link>
                  <button className="favorites" onClick={handleCartClick}>
                     <img src={process.env.PUBLIC_URL + `/cart.svg`} alt="" />
                  </button>
               </div>
            </div>
         </div>
         <div id="tabs">
            <div className="container">
               <div className="tabs">
                  <Link to={"/catalog"}>
                     <p className="tab">
                        Парфюмы
                        <img
                           src={process.env.PUBLIC_URL + `/drop-down-arrow.png`}
                           alt=""
                        />
                     </p>
                  </Link>
                  <Link to={"/cosmetics"}>
                     <p className="tab">
                        Косметика
                        <img
                           src={process.env.PUBLIC_URL + `/drop-down-arrow.png`}
                           alt=""
                        />
                     </p>
                  </Link>
                  <Link to={"/room-fragnances"}>
                     <p className="tab">
                        Дефузоры
                        <img
                           src={process.env.PUBLIC_URL + `/drop-down-arrow.png`}
                           alt=""
                        />
                     </p>
                  </Link>
               </div>
            </div>
         </div>

         {isMenuOpen && (
            
         )}
         {isCartOpen && (
            <div id="cart">
               <div className="cart">
                  <div className="container">
                     <div className="open-close">
                        <button onClick={handleCartClick}>
                           <img
                              src={process.env.PUBLIC_URL + `/cancel.svg`}
                              alt=""
                           />
                        </button>
                     </div>

                     <div className="cart-content">
                        <h2>Корзина покупок</h2>
                        {cartItems.length === 0 ? (
                           <p>Ваша корзина пуста.</p>
                        ) : (
                           <div id="cart-item">
                              {reversedCartItems.map((item, index) => (
                                 <div className="cart-item" key={index}>
                                    <img
                                       className="cart-img"
                                       src={item.image}
                                    ></img>
                                    <div className="details">
                                       <p className="title">{item.name} </p>
                                       <p className="title">{item.gender} </p>
                                       <p> {item.price} KZT </p>
                                       <div className="itog">
                                          <p>
                                             Итог: <span>{item.price}</span>
                                          </p>
                                          <button
                                             onClick={() =>
                                                handleDeleteItem(index)
                                             }
                                             className="delete"
                                          >
                                             Удалить
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        )}

                        <div>
                           {/* <h2>Checkout Page</h2> */}
                           <form>
                              <label>
                                 Номер вашего телефона:
                                 <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                 />
                              </label>
                              <br />
                              <label>
                                 Ваша страна, ваш город, ваш адрес:
                                 <input
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                 />
                              </label>
                              <br />
                              {/* <button type="button" onClick={handleBuy}>
                                 Proceed to Payment
                              </button> */}
                           </form>
                        </div>

                        <div className="sum">
                           <p className="sum-child1">Общий счет:</p>
                           <p className="sum-child2"> KZT {total_sum}.00</p>
                        </div>

                        <button className="buy-button" onClick={handleBuy}>
                           Купить
                        </button>
                        <button
                           className="buy-button"
                           id="delete"
                           onClick={DeleteItems}
                        >
                           Очистить корзину
                        </button>
                     </div>
                  </div>
               </div>
               <div className="tab-bar"></div>
            </div>
         )}
      </div>
   );
};

export default Navigation;
