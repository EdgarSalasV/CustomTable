import { FC, useState } from "react";
import InputSearch from "../InputSearch";

interface iFilterSection {
  handleFilterItem: (text: string) => void;
}
const FilterSection: FC<iFilterSection> = ({ handleFilterItem }) => {
  const [text, setText] = useState<string>("");
  return (
    <div className="FilterSection">
      <InputSearch handleValue={setText} />
      <input
        type="button"
        value="search"
        onClick={() => handleFilterItem(text)}
      />
      {/* .... Agrupadores, filtercustoms */}
    </div>
  );
};

export default FilterSection;
