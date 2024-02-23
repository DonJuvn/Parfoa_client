import React from "react";
import Filter from "../components/filter";
import FullCatalog from "../components/catalog-page";
import PerfumeList from "../components/perfum-list";

const CatalogLayout = () => {
   return (
      <div>
         {/* <Filter /> */}
         {/* <FullCatalog /> */}
         <PerfumeList />
      </div>
   );
};

export default CatalogLayout;
