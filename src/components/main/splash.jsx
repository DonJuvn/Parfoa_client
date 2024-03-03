import React, { useEffect, useState } from "react";import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
   const [visible, setVisible] = useState(true);
   const navigate = useNavigate();

   useEffect(() => {
      // Simulate some initialization process (e.g., fetching data, loading resources)
      const timer = setTimeout(() => {
         // Hide the splash screen after 2 seconds (adjust as needed)
         navigate("/main");
         setVisible(false);
      }, 1500);

      return () => clearTimeout(timer);
   }, [navigate]);

   return visible ? (
      <div className="splash-screen">
         <h1>Parfoa</h1>
      </div>
   ) : null;
};

export default SplashScreen;
