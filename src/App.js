import React from "react";
import InfiniteSlider from "./components/InfiniteSlider";
import "./App.css";

const App = () => {
   const imageNames = [
      "armani.png",
      "chanel.png",
      "dior.png",
      "hermes.png",

      // Add more image paths as needed
   ];

   return (
      <div>
         <InfiniteSlider imageNames={imageNames} />
      </div>
   );
};

export default App;
