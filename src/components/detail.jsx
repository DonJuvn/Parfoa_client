import React from "react";


const DetailPage = ({ ImagePath, title, description, price, volume }) => {
   return (
      <div className="container">
         <div className="detail">
            <div className="main-img">
               <img src={process.env.PUBLIC_URL + `/${ImagePath}`} alt="" />
            </div>
            <div className="details">
               <h1>{title}</h1>
               <p>{description}</p>
               <h1>{price}</h1>
               <h1>{title}</h1>
            </div>
         </div>
      </div>
   );
};

export default DetailPage;
