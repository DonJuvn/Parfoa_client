import React from "react";
import InfiniteSlider from "./components/InfiniteSlider";
import "./App.css";

const App = () => {
   const brands = [
      "prada.svg",
      "armani.svg",
      "chanel.svg",
      "dior.svg",
      "hermes.svg",

      // Add more image paths as needed
   ];

   return (
      <div>
         <InfiniteSlider imageNames={brands} />
      </div>
   );
};

export default App;
