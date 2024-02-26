import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
   const [isMenuOpen, setMenuOpen] = useState(false);
   const [showOverlay, setShowOverlay] = useState(false);

   const handleButtonClick = () => {
      setMenuOpen(!isMenuOpen);
      setShowOverlay(!showOverlay);
   };

   return (
      <div id="navigation">
         <div className="container">
            {showOverlay && <div className="overlay"></div>}
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
                  <img src={process.env.PUBLIC_URL + `/search.svg`} alt="" />
                  <img src={process.env.PUBLIC_URL + `/favorites.svg`} alt="" />
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
                           href="#catalog"
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
                           href="#contacts"
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
      </div>
   );
};

export default Navigation;
