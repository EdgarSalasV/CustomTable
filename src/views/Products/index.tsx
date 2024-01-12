import { useState } from "react";
import FilterSection from "../../sharedComponents/FilterSection";
import { iGeneral } from "../../interface/iGeneral";
import { fetchService, iUseFetchReturn } from "../../services/fetchService";
import Table from "../../sharedComponents/Table";

const Products = () => {
  const [dataFetch, setDataFetch] = useState<iUseFetchReturn>();
  const [tmpdataFetchList, setTmpdataFetchList] =        useState<iGeneral>();
  const [selectedItem, setSelectedItem] = useState<iGeneral>();

  const fetchCustomUrl = async (URL: string) => {
    const dataFetch = await fetchService(URL);
    if (dataFetch && dataFetch.status === 200) {
      setDataFetch(dataFetch);
      setTmpdataFetchList(dataFetch.data);
    }
  };
  const handleSelectedItem = () => {};
  return (
    <div className="Products">
      <h1>Products</h1>
      <FilterSection fetchCustomUrl={fetchCustomUrl} />
      {tmpdataFetchList && dataFetch?.URL && (
        <Table
          caption={dataFetch.URL}
          populate={tmpdataFetchList}
          handleSelectedItem={handleSelectedItem}
        />
      )}
      {/* <Card selectedItem={selectedItem} /> */}
    </div>
  );
};

export default Products;
