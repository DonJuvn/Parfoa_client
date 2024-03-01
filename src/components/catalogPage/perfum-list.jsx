import React, { useState, useEffect } from "react";
import Card from "../card/card";
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

   useEffect(() => {
      // Fetch data from the API endpoint
      fetch("http://127.0.0.1:8000/api/shop/perfums/")
         .then((response) => response.json())
         .then((data) => {
            setPerfumes(data);
            setFilteredPerfumes(data);

            console.log({ fetched: filteredPerfumes });
            console.log({ perfumes: perfumes });
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
         console.log({ perfumes: perfumes });
         console.log({ filteredData: filteredData });
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
         {/* <input
            type="text"
            placeholder="Искать..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
         /> */}
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
                        onChange={(e) =>
                           setGenderFilter(parseInt(e.target.value))
                        }
                        className="selector"
                     >
                        <option value={null}>Пол</option>
                        <option value={1}>Мужские</option>
                        <option value={2}>Женские</option>
                        <option value={3}>Унисекс</option>
                     </select>
                  </label>

                  <label>
                     <select
                        onChange={(e) =>
                           setTypeFilter(parseInt(e.target.value))
                        }
                        className="selector"
                     >
                        <option value={null}>Тип</option>
                        <option value={1}>Холодные</option>
                        <option value={2}>Сладкие</option>
                        <option value={3}>Кожаные</option>
                        <option value={4}>Древесные</option>
                        <option value={5}>Цитрусовые</option>
                        <option value={6}>Цветочные</option>
                     </select>
                  </label>
                  <label>
                     <select
                        onChange={(e) =>
                           setIntensiveFilter(parseInt(e.target.value))
                        }
                        className="selector"
                     >
                        <option value={null}>Интенсивность</option>
                        <option value={1}>1-15%</option>
                        <option value={2}>16-40%</option>
                        <option value={3}>41-65%</option>
                        <option value={4}>66-90%</option>
                     </select>
                  </label>
                  <label>
                     <select
                        onChange={(e) =>
                           setNotesFilter(parseInt(e.target.value))
                        }
                        className="selector"
                     >
                        <option value={null}>Ноты</option>
                        <option value={1}>Перец</option>
                        <option value={2}>Цитрус</option>
                        <option value={3}>Мускус</option>
                        <option value={4}>Древесные</option>
                        <option value={5}>Цветочные</option>
                     </select>
                  </label>
                  <label>
                     <select
                        onChange={(e) =>
                           setBrandFilter(parseInt(e.target.value))
                        }
                        className="selector"
                     >
                        <option value={null}>Бренд</option>
                        <option value={1}>Gucci</option>
                        <option value={2}>Hermes</option>
                        <option value={3}>Dior</option>
                        <option value={4}>Tiziana Terenzi</option>
                        <option value={5}>Armani</option>
                        <option value={6}>Hacivat</option>
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
