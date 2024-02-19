import React, { useState } from "react";const Filter = () => {
   const [gender, setGender] = useState("");
   const [fragranceType, setFragranceType] = useState("");
   const [intensity, setIntensity] = useState("");
   const [notes, setNotes] = useState("");
   const [brand, setBrand] = useState("");

   const handleDropdownToggle = (setState) => {
      setState((prevState) => !prevState);
   };

   const handleButtonClick = (option, setState) => {
      // Handle button click and update state
      console.log(`Button clicked: ${option}`);
      setState(option);
   };

   const handleFormSubmit = (event) => {
      event.preventDefault();

      // Create a JSON object with the selected data
      const formData = {
         gender,
         fragranceType,
         intensity,
         notes,
         brand,
      };

      // Send a POST request to the backend with the JSON data
      fetch("localhost:5000", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData),
      })
         .then((response) => response.json())
         .then((data) => {
            // Handle the response from the backend
            console.log(data);
         })
         .catch((error) => {
            console.error("Error:", error);
         });
   };

   return (
      <div className="container">
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
                        <button
                           onClick={() => handleButtonClick("Male", setGender)}
                        >
                           Мужской
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Female", setGender)
                           }
                        >
                           Женский
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
                              handleButtonClick("Option 1", setFragranceType)
                           }
                        >
                           Option 1
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Option 2", setFragranceType)
                           }
                        >
                           Option 2
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Option 3", setFragranceType)
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
                           onClick={() =>
                              handleButtonClick("Option 1", setIntensity)
                           }
                        >
                           Option 1
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Option 2", setIntensity)
                           }
                        >
                           Option 2
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Option 3", setIntensity)
                           }
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
                           onClick={() =>
                              handleButtonClick("Option 1", setNotes)
                           }
                        >
                           Option 1
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Option 2", setNotes)
                           }
                        >
                           Option 2
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Option 3", setNotes)
                           }
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
                           onClick={() =>
                              handleButtonClick("Option 1", setBrand)
                           }
                        >
                           Option 1
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Option 2", setBrand)
                           }
                        >
                           Option 2
                        </button>
                        <button
                           onClick={() =>
                              handleButtonClick("Option 3", setBrand)
                           }
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
      </div>
   );
};

export default Filter;
