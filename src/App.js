import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfiniteSlider from "./components/InfiniteSlider";
import News from "./components/news";
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
            <InfiniteSlider data={brands} />
            <News />
            {/* <Routes>
               <Route path="/:id" element={<NewsDetail />} />
            </Routes> */}
         </div>
      </Router>
   );
};

export default App;
