import React from "react";import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div id="footer">
         <div className="container">
            <div className="footer">
               <div className="nav">
                  <a href="#about">О нас</a>
                  <a href="#blog">Блог</a>
                  <a href="#contacts">Контакты</a>
               </div>
               <div className="logo">
                  <img src={process.env.PUBLIC_URL + "/Logotype.svg"} alt="" />
                  <p>2024 Parfoa Все права защищены</p>
               </div>
               <div className="sm">
                  <p>Следите за нами в социальных сетях</p>
                  <div className="buttons">
                     <Link to="#facebook">
                        {""}
                        <img
                           src={process.env.PUBLIC_URL + `/facebook.svg`}
                           alt=""
                        />
                        {""}
                     </Link>
                     <Link to="#instagram">
                        {""}
                        <img
                           src={process.env.PUBLIC_URL + `/instagram.svg`}
                           alt=""
                        />
                        {""}
                     </Link>
                     <Link to="#tiktok">
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
      </div>
   );
};

export default Footer;
