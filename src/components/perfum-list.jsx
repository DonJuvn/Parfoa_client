import React, { useState, useEffect } from "react";
import Card from "./card";
const PerfumeList = () => {
   const [perfumes, setPerfumes] = useState([]);
   const [filteredPerfumes, setFilteredPerfumes] = useState([]);
   const [intensiveFilter, setIntensiveFilter] = useState(null);
   const [genderFilter, setGenderFilter] = useState(null);
   const [typeFilter, setTypeFilter] = useState(null);
   const [notesFilter, setNotesFilter] = useState(null);
   const [brandFilter, setBrandFilter] = useState(null);

   useEffect(() => {
      // Fetch data from the API endpoint
      fetch("http://127.0.0.1:8000/api/shop/perfums/")
         .then((response) => response.json())
         .then((data) => {
            setPerfumes(data);
            setFilteredPerfumes(data);
         })
         .catch((error) => console.error("Error fetching data:", error));
   }, []);

   useEffect(() => {
      let filteredData = perfumes;

      if (intensiveFilter !== null) {
         filteredData = filteredData.filter(
            (item) => item.intensive_category === intensiveFilter
         );
      }

      if (genderFilter !== null) {
         filteredData = filteredData.filter(
            (item) => item.gender_category === genderFilter
         );
      }

      if (typeFilter !== null) {
         filteredData = filteredData.filter(
            (item) => item.type_category === typeFilter
         );
      }

      if (notesFilter !== null) {
         filteredData = filteredData.filter(
            (item) => item.note_category === notesFilter
         );
      }

      if (brandFilter !== null) {
         filteredData = filteredData.filter(
            (item) => item.brand_category === brandFilter
         );
      }

      setFilteredPerfumes(filteredData);
   }, [
      intensiveFilter,
      genderFilter,
      typeFilter,
      notesFilter,
      brandFilter,
      perfumes,
   ]);

   return (
      <div className="container">
         <div className="filter">
            <h1>Filter</h1>

            <div>
               <label>
                  Gender Category:
                  <select
                     onChange={(e) => setGenderFilter(parseInt(e.target.value))}
                  >
                     <option value={null}>All</option>
                     <option value={1}>male</option>
                     <option value={2}>female</option>
                  </select>
               </label>

               <label>
                  Type Category:
                  <select
                     onChange={(e) => setTypeFilter(parseInt(e.target.value))}
                  >
                     <option value={null}>All</option>
                     <option value={1}>1</option>
                     <option value={2}>2</option>
                  </select>
               </label>
               <label>
                  Intensive Category:
                  <select
                     onChange={(e) =>
                        setIntensiveFilter(parseInt(e.target.value))
                     }
                  >
                     <option value={null}>All</option>
                     <option value={1}>Intensive Category 1</option>
                     <option value={2}>Intensive Category 2</option>
                  </select>
               </label>
               <label>
                  Notes Category:
                  <select
                     onChange={(e) => setNotesFilter(parseInt(e.target.value))}
                  >
                     <option value={null}>All</option>
                     <option value={1}>1</option>
                     <option value={2}>2</option>
                  </select>
               </label>
               <label>
                  Brand Category:
                  <select
                     onChange={(e) => setBrandFilter(parseInt(e.target.value))}
                  >
                     <option value={null}>All</option>
                     <option value={1}>1</option>
                     <option value={2}>2</option>
                  </select>
               </label>
            </div>
         </div>

         <div className="catalog">
            {filteredPerfumes.map((card, index) => (
               <Card
                  key={index}
                  imagePath={card.image}
                  title={card.name}
                  description={card.description}
                  price={card.price}
                  volume={card.quantity}
               />
            ))}
         </div>
      </div>
   );
};

export default PerfumeList;
