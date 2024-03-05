import React, { useState, useEffect } from "react";
import Card from "../card/card";

import { baseUrl } from "../baseUrl";
import { baseLocalUrl } from "../baseUrl";

const PerfumeList = () => {
   const [perfumes, setPerfumes] = useState([]);
   const [filteredPerfumes, setFilteredPerfumes] = useState([]);
   const [intensiveFilter, setIntensiveFilter] = useState(null);
   const [genderFilter, setGenderFilter] = useState(null);
   const [typeFilter, setTypeFilter] = useState(null);
   const [notesFilter, setNotesFilter] = useState(null);
   const [brandFilter, setBrandFilter] = useState(null);
   const [isFilterOpen, setIsFilterOpen] = useState(false);
   const [searchQuery, setSearchQuery] = useState("");
   const [isSearchOpen, setIsSearchOpen] = useState(false);

   // const apiUrl = baseLocalUrl + `/api/shop/perfums/`;
   const apiUrl = baseUrl + `/api/shop/perfums/`;

   useEffect(() => {
      // Fetch data from the API endpoint
      fetch(apiUrl)
         .then((response) => response.json())
         .then((data) => {
            setPerfumes(data);
            setFilteredPerfumes(data);

            console.log({ fetched: perfumes });
            console.log({ fetched: filteredPerfumes });
            console.log(apiUrl);
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

      // else if (genderFilter === null) {
      //    setFilteredPerfumes(perfumes);
      // }

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

      if (searchQuery !== "") {
         filteredData = filteredData.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
      searchQuery,
   ]);

   const toggleFilter = () => {
      setIsFilterOpen(!isFilterOpen);
   };

   const toggleSearch = () => {
      setIsSearchOpen(!isSearchOpen);
      resetFilters();
   };

   const resetFilters = () => {
      setIntensiveFilter(null);
      setGenderFilter(null);
      setTypeFilter(null);
      setNotesFilter(null);
      setBrandFilter(null);
      setSearchQuery("");
   };

   return (
      <div className="container">
         <center>
            <h1>Парфюмерия</h1>
         </center>
         <div className="search-icon">
            {isSearchOpen && (
               <input
                  type="text"
                  placeholder="Искать..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
               />
            )}
            <img
               onClick={toggleSearch}
               src={process.env.PUBLIC_URL + `/search.svg`}
               alt=""
            />
         </div>

         <h3 className="filter-h3" onClick={toggleFilter}>
            Фильтр
         </h3>
         {isFilterOpen && (
            <div className="filter">
               <div className="selectors">
                  <label>
                     {/* Gender Category: */}
                     <select
                        onChange={(e) => setGenderFilter(e.target.value)}
                        className="selector"
                     >
                        <option value={null}>Пол</option>
                        <option value="male">Мужские</option>
                        <option value="female">Женские</option>
                        <option value="uni">Унисекс</option>
                     </select>
                  </label>

                  <label>
                     <select
                        onChange={(e) => setTypeFilter(e.target.value)}
                        className="selector"
                     >
                        <option value={null}>Тип</option>
                        <option value="cold">Холодные</option>
                        <option value="sweet">Сладкие</option>
                        <option value="leather">Кожаные</option>
                        <option value="woody">Древесные</option>
                        <option value="citrus">Цитрусовые</option>
                        <option value="floral">Цветочные</option>
                     </select>
                  </label>
                  <label>
                     <select
                        onChange={(e) => setIntensiveFilter(e.target.value)}
                        className="selector"
                     >
                        <option value={null}>Интенсивность</option>
                        <option value="1-15%">1-15%</option>
                        <option value="16-40%">16-40%</option>
                        <option value="41-65%">41-65%</option>
                        <option value="66-90%">66-90%</option>
                     </select>
                  </label>
                  <label>
                     <select
                        onChange={(e) => setNotesFilter(e.target.value)}
                        className="selector"
                     >
                        <option value={null}>Ноты</option>
                        <option value="pepper">Перец</option>
                        <option value="citrus">Цитрус</option>
                        <option value="musky">Мускус</option>
                        <option value="woody">Древесные</option>
                        <option value="floral">Цветочные</option>
                     </select>
                  </label>
                  <label>
                     <select
                        onChange={(e) => setBrandFilter(e.target.value)}
                        className="selector"
                     >
                        <option value={null}>Бренд</option>
                        <option value="Gucci">Gucci</option>
                        <option value="Hermes">Hermes</option>
                        <option value="Dior">Dior</option>
                        <option value="Tiziana Terenzi">Tiziana Terenzi</option>
                        <option value="Armani">Armani</option>
                        <option value="Hacivat">Hacivat</option>
                     </select>
                  </label>
                  <button className="reset-filters" onClick={resetFilters}>
                     Сбросить фильтры
                  </button>
               </div>
            </div>
         )}
         <div className="catalog">
            {filteredPerfumes.map((card, index) => (
               <Card
                  key={index}
                  id={card.id}
                  imagePath={card.image}
                  title={card.name}
                  description={card.description}
                  gender={card.gender_category}
                  price={card.price}
                  volume={card.quantity}
                  link={`perfume/${card.id}`}
               />
            ))}
         </div>
      </div>
   );
};

export default PerfumeList;
