import React from "react";

const Blog = ({ ImagePath, title, onClick }) => {
   return (
      <div className="blog" onClick={onClick}>
         <img src={process.env.PUBLIC_URL + `/${ImagePath}`} alt={title} />
         <div className="link-to-blog">
            <p>{title}</p>
            <img src={process.env.PUBLIC_URL + `/link-icon.svg`} alt="" />
         </div>
      </div>
   );
};

export default Blog;
