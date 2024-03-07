import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CardCarousel from "./card";

const Top10 = () => {
   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 5,
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 6,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 4,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 3,
      },
   };

   const perfumes = [
      {
         id: 1,
         imagePath: "Jon Cartie.svg",
         title: "Fancy Fragrance",
         description: "A captivating scent that lingers all day.",
         gender: "Unisex",
         price: 49.99,
         volume: "50ml",
         link: "catalog/1",
      },
      {
         id: 1,
         imagePath: "Jon Cartie.svg",
         title: "Fancy Fragrance",
         description: "A captivating scent that lingers all day.",
         gender: "Unisex",
         price: 49.99,
         volume: "50ml",
         link: "catalog/1",
      },
      {
         id: 1,
         imagePath: "Jon Cartie.svg",
         title: "Fancy Fragrance",
         description: "A captivating scent that lingers all day.",
         gender: "Unisex",
         price: 49.99,
         volume: "50ml",
         link: "catalog/1",
      },
      {
         id: 1,
         imagePath: "Jon Cartie.svg",
         title: "Fancy Fragrance",
         description: "A captivating scent that lingers all day.",
         gender: "Unisex",
         price: 49.99,
         volume: "50ml",
         link: "catalog/1",
      },
      {
         id: 1,
         imagePath: "Jon Cartie.svg",
         title: "Fancy Fragrance",
         description: "A captivating scent that lingers all day.",
         gender: "Unisex",
         price: 49.99,
         volume: "50ml",
         link: "catalog/1",
      },
      {
         id: 1,
         imagePath: "Jon Cartie.svg",
         title: "Fancy Fragrance",
         description: "A captivating scent that lingers all day.",
         gender: "Unisex",
         price: 49.99,
         volume: "50ml",
         link: "catalog/1",
      },
      {
         id: 2,
         imagePath: "Jon Cartie.svg",
         title: "Elegant Essence",
         description: "An essence that defines sophistication.",
         gender: "Female",
         price: 59.99,
         volume: "75ml",
         link: "catalog/2",
      },
      {
         id: 3,
         imagePath: "Jon Cartie.svg",
         title: "Bold Bouquet",
         description: "A bold and daring fragrance for him.",
         gender: "Male",
         price: 54.99,
         volume: "100ml",
         link: "catalog/3",
      },
      {
         id: 4,
         imagePath: "path/to/image4.jpg",
         title: "Sweet Serenade",
         description: "A sweet and romantic scent for her.",
         gender: "Female",
         price: 44.99,
         volume: "50ml",
         link: "catalog/4",
      },
      {
         id: 5,
         imagePath: "path/to/image5.jpg",
         title: "Mystical Musk",
         description: "A mystical and enchanting musk fragrance.",
         gender: "Unisex",
         price: 64.99,
         volume: "75ml",
         link: "catalog/5",
      },
   ];

   return (
      <div className="top10">
         <center>
            <h1 className="carousel-title">Выбор наших клиентов</h1>
         </center>
         <div className="container">
            <div className="carousel">
               <Carousel responsive={responsive}>
                  {perfumes.map((perfume) => (
                     <CardCarousel
                        key={perfume.id}
                        id={perfume.id}
                        imagePath={perfume.imagePath}
                        title={perfume.title}
                        description={perfume.description}
                        gender={perfume.gender}
                        price={perfume.price}
                        volume={perfume.volume}
                        link={perfume.link}
                     />
                  ))}
               </Carousel>
            </div>
         </div>
      </div>
   );
};

export default Top10;
