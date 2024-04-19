import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);
   const [showOverlay, setShowOverlay] = useState(false);

   const handleButtonClick = () => {
      setMenuOpen(!isMenuOpen);
      setShowOverlay(!showOverlay);
   };

   const handleOverlayClick = () => {
      setMenuOpen(false);
      setShowOverlay(false);
   };

   return (
      <div id="footer">
         <div className="container">
            {showOverlay && (
               <div className="overlay" onClick={handleOverlayClick}></div>
            )}
            <div className="footer">
               <div className="nav">
                  <a href="#about-us">О нас</a>
                  <a href="#blog">Блог</a>
                  <a onClick={handleButtonClick}>Контакты</a>
               </div>
               <div className="logo">
                  <img src={process.env.PUBLIC_URL + "/Logotype.svg"} alt="" />
                  <p>2024 Parfoa Все права защищены</p>
               </div>
               <div className="sm">
                  <p>Следите за нами в социальных сетях</p>
                  <div className="buttons">
                     {/* <Link to="#facebook">
                        {""}
                        <img
                           src={process.env.PUBLIC_URL + `/facebook.svg`}
                           alt=""
                        />
                        {""}
                     </Link> */}
                     <Link to="https://www.instagram.com/parfoa/">
                        {""}
                        <img
                           src={process.env.PUBLIC_URL + `/instagram.svg`}
                           alt=""
                        />
                        {""}
                     </Link>
                     <Link to="https://www.tiktok.com/@parfoa6?_t=8kOtuafjKdR&_r=1">
                        {""}
                        <img
                           src={process.env.PUBLIC_URL + `/tiktok.svg`}
                           alt=""
                        />
                        {""}
                     </Link>
                  </div>
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
                           <p className="desc-header">parfoa@gmail.com</p>
                           <p>
                              <a
                                 onClick={handleButtonClick}
                                 className="desc-header"
                                 href="tel:+77072019505"
                              >
                                 +7 707 201 95 05
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
      </div>
   );
};

export default Footer;
