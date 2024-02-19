// App.js
import React from "react";
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Navigate,
} from "react-router-dom";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Main from "./components/main_bg";
import AboutUs from "./components/about-us";
import InfiniteSlider from "./components/InfiniteSlider";
import News from "./components/news";
import Catalog from "./components/catalog";
import Blogs from "./components/blogs";
import CatalogLayout from "./layouts/catalog";
import "./App.css";

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
               <Route path="/catalog/:id" element={<DetailPage />} />
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
         <InfiniteSlider data={brands} />
         <News />
         <Catalog />
         <Blogs />
      </div>
   );
};

const DetailPage = () => {
   return (
      <div>
         <DetailPage />
         <Catalog />
      </div>
   );
};

export default App;
