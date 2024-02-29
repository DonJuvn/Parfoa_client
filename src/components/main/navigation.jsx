import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);
   const [isCartOpen, setCartOpen] = useState(false);
   const [showOverlay, setShowOverlay] = useState(false);
   const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
      const cartItemsString = localStorage.getItem("cartItems");
      const parsedCartItems = cartItemsString
         ? JSON.parse(cartItemsString)
         : [];
      setCartItems(parsedCartItems);
   }, []);

   // Calculate the total sum of prices
   const totalSum = cartItems.reduce(
      (accumulator, currentItem) =>
         accumulator + currentItem.price * currentItem.quantity,
      0
   );

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
      updatedCartItems.splice(index, 1); // Remove the item at the specified index
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
   };

   const handleOverlayClick = () => {
      setMenuOpen(false);
      setCartOpen(false);
      setShowOverlay(false);
   };

   return (
      <div id="navigation">
         <div className="container">
            {showOverlay && (
               <div className="overlay" onClick={handleOverlayClick}></div>
            )}
            <div className="navigation">
               <button onClick={handleButtonClick}>
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
                  <button className="search">
                     <img src={process.env.PUBLIC_URL + `/search.svg`} alt="" />
                  </button>
                  <button className="favorites" onClick={handleCartClick}>
                     <img src={process.env.PUBLIC_URL + `/cart.svg`} alt="" />
                  </button>
               </div>
            </div>
         </div>

         {isMenuOpen && (
            <div id="menu">
               <div className="container">
                  <div className="menu">
                     <div className="open-close">
                        <button onClick={handleButtonClick}>
                           <img
                              src={process.env.PUBLIC_URL + `/burger.svg`}
                              alt=""
                           />
                        </button>
                        <button onClick={handleButtonClick}>
                           <img
                              src={process.env.PUBLIC_URL + `/cancel.svg`}
                              alt=""
                           />
                        </button>
                     </div>
                     <div className="navigation-header">
                        <a
                           onClick={handleButtonClick}
                           className="title-header"
                           href="#about-us"
                        >
                           О нас
                        </a>
                        <a
                           onClick={handleButtonClick}
                           className="title-header"
                           href="#catalog-section"
                        >
                           Каталог
                        </a>
                        <a
                           onClick={handleButtonClick}
                           className="title-header"
                           href="#blog"
                        >
                           Блог
                        </a>
                        <a
                           onClick={handleButtonClick}
                           className="title-header"
                           href="#footer"
                        >
                           Контакты
                        </a>
                        <div className="adress">
                           <p className="title-header">Адресс:</p>
                           <p className="desc-header">Казахстан, Тараз</p>
                        </div>
                        <div className="adress">
                           <p className="title-header">Контакты:</p>
                           <p className="desc-header">parfoe@gmail.com</p>
                           <p>
                              <a
                                 onClick={handleButtonClick}
                                 className="desc-header"
                                 href="tel:+123456789"
                              >
                                 +7 705 482 16 01
                              </a>
                           </p>
                        </div>
                        <div className="logotype">
                           <img
                              src={process.env.PUBLIC_URL + `/Logotype.svg`}
                              alt=""
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
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
                              {cartItems.map((item, index) => (
                                 <div className="cart-item" key={index}>
                                    <img
                                       className="cart-img"
                                       src={item.image}
                                    ></img>
                                    <div className="details">
                                       <p className="title">{item.name} </p>
                                       <p className="title">{item.gender} </p>
                                       <p>
                                          {item.quantity} ml - {item.price} KZT{" "}
                                       </p>
                                       <div className="itog">
                                          <p>
                                             Итог:{" "}
                                             <span>
                                                {item.price * item.quantity}
                                             </span>
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
                        <div className="sum">
                           <p className="sum-child1">Общий счет:</p>
                           <p className="sum-child2"> KZT {totalSum} </p>
                        </div>
                        <button className="buy-button">Купить</button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Navigation;
