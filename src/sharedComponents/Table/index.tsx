import { FC, useEffect, useState } from "react";
import { iGeneral } from "../../interface/iGeneral";
import Thead from "./Thead";
import Tbody from "./Tbody";

interface iCustomTable {
  caption: string;
  populate: iGeneral | iGeneral[];
  handleSelectedItem: (selectedItem: iGeneral) => void;
}

const CustomTable: FC<iCustomTable> = ({ caption, populate }) => {
  const [tHeadList, setTHeadList] = useState<string[]>([]);
  const [tBodyData, setTBodyData] = useState<iGeneral | iGeneral[]>([]);
  const [isArrayData, setIsArrayData] = useState<boolean>(false);

  useEffect(() => {
    setTHeadList(getKeyList(populate));
    setTBodyData(populate);
  }, []);

  function getKeyList(populate: iGeneral | iGeneral[]) {
    const isArr = Array.isArray(populate);
    setIsArrayData(isArr);
    return isArr ? Object.keys(populate[0]) : Object.keys(populate);
  }
  return (
    <table>
      <caption>{caption}</caption>
      <Thead headerList={tHeadList} />
      <Tbody bodyData={tBodyData} />
    </table>
  );
};

export default CustomTable;
