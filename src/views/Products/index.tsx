import { useState } from "react";
import FilterSection from "../../sharedComponents/FilterSection";

const Products = () => {
  const [tmpProductList, setTmpProductList] = useState<string>("");
  const handleFilterItem = (filterText: string) => {
    console.log('filterText', filterText)
    setTmpProductList(filterText);
  };
  return (
    <div className="Products">
      <h1>Products</h1>
      <FilterSection handleFilterItem={handleFilterItem} />
      {/* <Table 
            data={tmpProductList} 
            handleSelectItem=(selectedProd)=>{...}
          /> */}
      {/* <Product selectedProduct={selectedProduct}/> */}
    </div>
  );
};

export default Products;
