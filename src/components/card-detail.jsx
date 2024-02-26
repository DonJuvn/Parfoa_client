// import React, { useState, useEffect } from "react";// const CardDetail = ({ ImagePath, title, description, price, volume }) => {//    const [isFavorite, setIsFavorite] = useState(false);
//    const toggleFavorite = () => {
//       setIsFavorite((prevState) => !prevState);
//    };

//    return (
//       <div id="card-detail">
//          Hello world
//          <div className={`card ${isFavorite ? "favorite" : ""}`}>
//             <img src={process.env.PUBLIC_URL + `/${ImagePath}`} alt="" />
//             <div className="container">
//                <h3>{title}</h3>
//                <p className="description">{description}</p>
//                <div className="card-details">
//                   <p className="price">{price}</p>
//                   <p className="volume">{volume}</p>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default CardDetail;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
   const { id } = useParams();
   const [perfumeDetail, setPerfumeDetail] = useState(null);

   const apiUrl = `http://127.0.0.1:8000/api/shop/perfums/${id}/`;

   useEffect(() => {
      // Fetch the details of the perfume using the ID
      fetch(apiUrl)
         .then((response) => response.json())
         .then((data) => setPerfumeDetail(data))
         .catch((error) => console.error("Error fetching data:", error));
      console.log(apiUrl);
   }, [id]);

   if (!perfumeDetail) {
      return <div>Loading...</div>;
   }

   return (
      <div className="container">
         <div className="detail">
            <img src={perfumeDetail.image} alt={perfumeDetail.name} />
            <h2>{perfumeDetail.name}</h2>

            <p>{perfumeDetail.description}</p>
            <p>Price: {perfumeDetail.price}</p>
            <p>Volume: {perfumeDetail.quantity}</p>
            {/* Add other details as needed */}
         </div>
      </div>
   );
};

export default CardDetail;
