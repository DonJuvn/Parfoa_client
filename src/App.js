import React, { useState, useEffect } from "react";
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate,
} from "react-router-dom";
import Navigation from "./components/main/navigation";
import Footer from "./components/main/footer";
import Main from "./components/main/main_bg";
import AboutUs from "./components/main/about-us";
import InfiniteSlider from "./components/main/InfiniteSlider";
import News from "./components/main/news";
import Catalog from "./components/main/catalog";
import Blogs from "./components/main/blogs";
import CatalogLayout from "./layouts/catalog";
import Detail from "./components/detail";
import CardDetail from "./components/card/card-detail";
import "./App.css";
import Card from "./components/card/card";
import AdminPage from "./components/admin/admin";
import Top10 from "./components/carousel/top10";
import CosmeticsPage from "./components/catalogPage/cosmetics-page";
import RoomFragnances from "./components/catalogPage/room-fragnances";
import CosmeticDetail from "./components/card/cosmetic-detail";
import RoomFragnanceDetail from "./components/card/room-fragnance-detail";
import MainVideo from "./components/main/main_video";
import DeepSeekChat from "./components/DeepSeekChat";
import GeminiChat from "./components/DeepSeekChat";
import AIChat from "./components/DeepSeekChat";

const App = () => {
   const brands = [
      "prada.svg",
      "armani.svg",
      "chanel.svg",
      "dior.svg",
      "hermes.svg",
      "prada.svg",
      "armani.svg",
      "chanel.svg",
      "dior.svg",
      "hermes.svg",
   ];

   return (
      // <Router>
      //    <div>
      //       <Navigation />
      //       <Routes>
      //          <Navigate path="/catalog" element={<CatalogPage />} />
      //       </Routes>
      //       <Main />
      //       <AboutUs />
      //       <InfiniteSlider data={brands} />
      //       <News />
      //       <Catalog />
      //       <Blogs />
      //       <Footer />
      //       {/* Additional routes or components can be added here */}
      //    </div>
      // </Router>

      <Router>
         <div>
            <Navigation />
            <Routes>
               <Route path="/" element={<MainPage />} />
               <Route path="/catalog" element={<CatalogPage />} />
               <Route
                  path="/catalog/perfume/:id"
                  element={<CardDetailPage />}
               />
               <Route
                  path="/room-fragnances/product/:id"
                  element={<RoomFragnancesDetailPage />}
               />
               <Route
                  path="/cosmetics/product/:id"
                  element={<CosmeticsDetailPage />}
               />
               <Route path="/admin" element={<AdminPage />} />
               <Route path="/cosmetics" element={<CosmeticsPage />} />
               <Route path="/room-fragnances" element={<RoomFragnances />} />
            </Routes>
            <AIChat />
            {/* <GeminiChat /> */}
            <Footer />
         </div>
      </Router>
   );
};

const CatalogPage = () => {
   return (
      <div>
         <CatalogLayout />
      </div>
   );
};

const MainPage = () => {
   const brands = [
      "prada.svg",
      "armani.svg",
      "chanel.svg",
      "dior.svg",
      "hermes.svg",
   ];
   return (
      <div>
         {/* <Main /> */}
         <MainVideo />
         <Top10 />
         <AboutUs />
         {/* <News /> */}
         <InfiniteSlider data={brands} />
         <Catalog />
         <Blogs />
      </div>
   );
};

const CardDetailPage = () => {
   return (
      <div>
         <CardDetail />
         <Catalog />
      </div>
   );
};
const CosmeticsDetailPage = () => {
   return (
      <div>
         <CosmeticDetail />
         <Catalog />
      </div>
   );
};
const RoomFragnancesDetailPage = () => {
   return (
      <div>
         <RoomFragnanceDetail />
         <Catalog />
      </div>
   );
};

export default App;
