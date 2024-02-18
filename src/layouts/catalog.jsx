import React from "react";
import Filter from "../components/filter";
import FullCatalog from "../components/catalog-page";

const CatalogLayout = () => {
   return (
      <div>
         <Filter />
         <FullCatalog />
      </div>
   );
};

export default CatalogLayout;
