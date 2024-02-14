import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Main from "./components/main_bg";
import AboutUs from "./components/about-us";
import InfiniteSlider from "./components/InfiniteSlider";
import News from "./components/news";
import Catalog from "./components/catalog";
import Blogs from "./components/blogs";
import Blog from "./components/blog";
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
            <Navigation />
            <Main />
            <AboutUs />
            <InfiniteSlider data={brands} />
            <News />
            <Catalog />
            <Blogs />
            <Footer />
            {/* <Routes>
               <Route path="/:id" element={<NewsDetail />} />
            </Routes> */}
         </div>
      </Router>
   );
};

export default App;
