import React from "react";import Carousel from "react-multi-carousel";
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
         imagePath: "ManceraRed.svg",
         title: "Mancera Red Tobacco",
         description:
            "Red Tobacco от Mancera — это аромат древесно-пряных оттенков для женщин и мужчин. Red Tobacco выпущен в 2017 году. Верхние ноты: Корица, Уд, Ладан, Шафран, Мускатный орех, Зеленое яблоко и Белая груша; средние ноты: Пачули и Жасмин; базовые ноты: Табак, Мадагаскарская ваниль, Амбра, Сандал, Гуаяк, Белый мускус и Гаитянский ветивер",
         gender: "Unisex",
         price: 5000.0,
         volume: "120",
         link: "catalog/perfume/46",
      },
      {
         id: 2,
         imagePath: "BlackAfgano.svg",
         title: "Black Afgano Nasomatto",
         description:
            "Black Afgano Nasomatto — это аромат для мужчин и женщин, он принадлежит к группе древесные фужерные. Парфюмер: Alessandro Gualtieri. Верхние ноты: Конопля и Зеленые ноты; средние ноты: Cмолы, Древесные ноты, Табак и Кофе; базовые ноты: Уд и Ладан.",
         gender: "Unisex",
         price: 15490.0,
         volume: "30",
         link: "catalog/perfume/45",
      },
      {
         id: 3,
         imagePath: "BlackOrchid.svg",
         title: "Black Orchid Tom Ford",
         description:
            "Black Orchid Tom Ford — это аромат для женщин, он принадлежит к группе восточные цветочные. Black Orchid выпущен в 2006 году. Black Orchid был создан David Apel и Pierre Negrin. Верхние ноты: Трюфель, Гардения, Черная смородина, Иланг-иланг, Жасмин, Бергамот, Мандарин и Лимон; средние ноты: Орхидея, Специи, Гардения, Фруктовые ноты, Иланг-иланг, Жасмин и Лотос; базовые ноты: Мексиканский шоколад, Пачули, Ваниль, Ладан, Амбра, Сандал, Ветивер и Белый мускус.",
         gender: "Unisex",
         price: 8100.0,
         volume: "100",
         link: "catalog/perfume/57",
      },
      {
         id: 4,
         imagePath: "Ganymede.svg",
         title: "Ganymede Marc-Antoine Barrois",
         description:
            "Ganymede от Marc-Antoine Barrois — это аромат древесно-пряных оттенков для женщин и мужчин. Ganymede выпущен в 2019 году. Автор аромата – Квентин Биш.",
         gender: "Unisex",
         price: 10000.0,
         volume: "100",
         link: "catalog/perfume/14",
      },
      {
         id: 5,
         imagePath: "Megamare.svg",
         title: "Megamare Orto Parisi",
         description: "A captivating scent that lingers all day.",
         gender: "Unisex",
         price: 13990.0,
         volume: "30",
         link: "catalog/perfume/16",
      },
      {
         id: 6,
         imagePath: "FanFlame.svg",
         title: "Fan Your Flames Nishane",
         description: "A captivating scent that lingers all day.",
         gender: "Unisex",
         price: 9990.0,
         volume: "50",
         link: "catalog/perfume/61",
      },
      {
         id: 7,
         imagePath: "Cedrat.svg",
         title: "Cedrat Boise Mancera",
         description: "An essence that defines sophistication.",
         gender: "Unisex",
         price: 5140.0,
         volume: "120",
         link: "catalog/perfume/17",
      },
      {
         id: 8,
         imagePath: "OudWood.svg",
         title: "Oud Wood Intense Tom Ford",
         description: "A bold and daring fragrance for him.",
         gender: "Unisex",
         price: 12900.0,
         volume: "100",
         link: "catalog/perfume/32",
      },
      {
         id: 9,
         imagePath: "Kirke.svg",
         title: "Kirke Tiziana Terenzi",
         description: "A sweet and romantic scent for her.",
         gender: "Unisex",
         price: 6490.0,
         volume: "100",
         link: "catalog/perfume/21",
      },
      // {
      //    id: 5,
      //    imagePath: "path/to/image5.jpg",
      //    title: "Mystical Musk",
      //    description: "A mystical and enchanting musk fragrance.",
      //    gender: "Unisex",
      //    price: 64.99,
      //    volume: "75ml",
      //    link: "catalog/5",
      // },
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
