import React, { useState, useEffect } from "react";import {
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
import CardDetail from "./components/card-detail";
import "./App.css";
import Card from "./components/card/card";
import AdminPage from "./components/admin/admin";

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
               <Route path="/admin" element={<AdminPage />} />
            </Routes>
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
         <Main />
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

export default App;
