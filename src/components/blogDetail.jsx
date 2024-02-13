import React from "react";
const BlogDetail = ({ blog, onClose }) => {
   const { title, description, ImagePath } = blog;

   return (
      <div className="container">
         <div className="popup">
            <div className="popup-content">
               <button className="close" onClick={onClose}>
                  Закрыть
               </button>
               <p>{description}</p>
            </div>
         </div>
      </div>
   );
};

export default BlogDetail;
