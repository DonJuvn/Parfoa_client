import React, { useState, useRef, useEffect } from "react";import Card from "./card/card";

const Filter = ({ cardsData, setResetFilter }) => {
   const [gender, setGender] = useState("");
   const [fragranceType, setFragranceType] = useState("");
   const [intensity, setIntensity] = useState("");
   const [notes, setNotes] = useState("");
   const [brand, setBrand] = useState("");

   const [openDropdown, setOpenDropdown] = useState(null);
   const dropdownRef = useRef(null);
   const [filteredData, setFilteredData] = useState([]);

   const handleDropdownToggle = (setState) => {
      setState((prevState) => !prevState);
   };

   const handleFilterClick = () => {
      // Filter data to include only perfumes with volume 250ml
      const filtered = cardsData.filter((perfume) => perfume.volume === "250");
      setFilteredData(filtered);
   };

   const handleButtonClick = (option, setState) => {
      console.log(`Button clicked: ${option}`);
      setState(option);
      setOpenDropdown(null); // Close the dropdown after a button is clicked
   };

   const handleFormSubmit = (event) => {
      event.preventDefault();

      const formData = {
         gender,
         fragranceType,
         intensity,
         notes,
         brand,
      };

      // Filtering logic on frontend
      const filtered = cardsData.filter((perfume) => {
         return Object.entries(formData).every(([key, value]) => {
            if (value) {
               return perfume[key] == value; // Use == for loose equality comparison
            }
            return true;
         });
      });

      // Update the filtered data in the parent component
      setFilteredData(filtered);
      setResetFilter(false); // Set reset filter to false after filtering
      console.log(filtered);
   };

   return (
      <div className="container">
         <button className="test" onClick={handleFilterClick}>
            Filter 250ml Perfumes
         </button>
         <div className="filter">
            <h3>Фильтр</h3>
            <form className="form" onSubmit={handleFormSubmit}>
               <div className="type">
                  <h2
                     onClick={() => handleDropdownToggle(setGender)}
                     style={{ cursor: "pointer" }}
                  >
                     Пол
                     <img src={process.env.PUBLIC_URL + `/dropdown.svg`}></img>
                  </h2>

                  {gender && (
                     <div className="button-dropdown">
                        <button className="test" onClick={handleFilterClick}>
                           Filter 250ml Perfumes
                        </button>
                        <button
                           onClick={() => handleButtonClick("2", setGender)}
                        >
                           Женский
                        </button>
                        <button
                           onClick={() => handleButtonClick("3", setGender)}
                        >
                           Unisex
                        </button>
                     </div>
                  )}
               </div>

               <div className="type">
                  <h2
                     onClick={() => handleDropdownToggle(setFragranceType)}
                     style={{ cursor: "pointer" }}
                  >
                     Тип
                     <img src={process.env.PUBLIC_URL + `/dropdown.svg`}></img>
                  </h2>

                  {fragranceType && (
                     <div className="button-dropdown">
                        <button
                           onClick={() =>
                              handleButtonClick("1", setFragranceType)
                           }
                        >
                           Option 1
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("2", setFragranceType)
                           }
                        >
                           Option 2
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("3", setFragranceType)
                           }
                        >
                           Option 3
                        </button>
                     </div>
                  )}
               </div>

               <div className="type">
                  <h2
                     onClick={() => handleDropdownToggle(setIntensity)}
                     style={{ cursor: "pointer" }}
                  >
                     Интенсивность
                     <img src={process.env.PUBLIC_URL + `/dropdown.svg`}></img>
                  </h2>

                  {intensity && (
                     <div className="button-dropdown">
                        <button
                           onClick={() => handleButtonClick("1", setIntensity)}
                        >
                           Option 1
                        </button>
                        <button
                           onClick={() => handleButtonClick("2", setIntensity)}
                        >
                           Option 2
                        </button>
                        <button
                           onClick={() => handleButtonClick("3", setIntensity)}
                        >
                           Option 3
                        </button>
                     </div>
                  )}
               </div>

               <div className="type">
                  <h2
                     onClick={() => handleDropdownToggle(setNotes)}
                     style={{ cursor: "pointer" }}
                  >
                     Ноты
                     <img src={process.env.PUBLIC_URL + `/dropdown.svg`}></img>
                  </h2>

                  {notes && (
                     <div className="button-dropdown">
                        <button
                           onClick={() => handleButtonClick("1", setNotes)}
                        >
                           Option 1
                        </button>
                        <button
                           onClick={() => handleButtonClick("2", setNotes)}
                        >
                           Option 2
                        </button>
                        <button
                           onClick={() => handleButtonClick("3", setNotes)}
                        >
                           Option 3
                        </button>
                     </div>
                  )}
               </div>

               <div className="type">
                  <h2
                     onClick={() => handleDropdownToggle(setBrand)}
                     style={{ cursor: "pointer" }}
                  >
                     Бренд
                     <img src={process.env.PUBLIC_URL + `/dropdown.svg`}></img>
                  </h2>

                  {brand && (
                     <div className="button-dropdown">
                        <button
                           onClick={() => handleButtonClick("1", setBrand)}
                        >
                           Option 1
                        </button>
                        <button
                           onClick={() => handleButtonClick("2", setBrand)}
                        >
                           Option 2
                        </button>
                        <button
                           onClick={() => handleButtonClick("3", setBrand)}
                        >
                           Option 3
                        </button>
                     </div>
                  )}
               </div>

               <button className="search" type="submit">
                  <img src={process.env.PUBLIC_URL + `/search.svg`} alt="" />
               </button>
            </form>
         </div>
         <button className="test" onClick={handleFilterClick}>
            Filter 250ml Perfumes
         </button>
         <h1 id="title">Каталог</h1>
         <div className="catalog" id="full">
            {filteredData.length > 0
               ? filteredData.map((card, index) => (
                    <Card
                       key={index}
                       imagePath={card.image}
                       title={card.name}
                       description={card.description}
                       price={card.price}
                       volume={card.quantity}
                    />
                 ))
               : cardsData.map((card, index) => (
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

export default Filter;
