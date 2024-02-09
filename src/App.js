import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main_bg";
import AboutUs from "./components/about-us";
import InfiniteSlider from "./components/InfiniteSlider";
import News from "./components/news";
import Catalog from "./components/catalog";
import Footer from "./components/footer";
import "./App.css";

const App = () => {
   const brands = [
      "prada.svg",
      "armani.svg",
      "chanel.svg",
      "dior.svg",
      "hermes.svg",
   ];

   return (
      <Router>
         <div>
            <Main />
            <AboutUs />
            <InfiniteSlider data={brands} />
            <News />
            <Catalog />
            <Footer />
            {/* <Routes>
               <Route path="/:id" element={<NewsDetail />} />
            </Routes> */}
         </div>
      </Router>
   );
};

export default App;
