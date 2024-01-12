import { useEffect, useState } from "react";
import FilterSection from "../../sharedComponents/FilterSection";
import { iGeneral } from "../../interface/iGeneral";
import { fetchService, iUseFetchReturn } from "../../services/fetchService";

const Products = () => {
  const [dataFetch, setDataFetch] = useState<iUseFetchReturn>();
  const [tmpdataFetchList, setTmpdataFetchList] = useState<iGeneral>();

  const handleFilterItem = async (URL: string) => {
    const data = await fetchService(URL);
    setDataFetch(data);
    setTmpdataFetchList(data.data);
  };
  return (
    <div className="Products">
      <h1>Products</h1>
      <FilterSection handleFilterItem={handleFilterItem} />
      {/* <Table 
            data={tmpdataFetchList} 
            handleSelectedItem=(selectedProd)=>{...}
          /> */}
      {/* <Product selectedProduct={selectedProduct}/> */}
    </div>
  );
};

export default Products;
