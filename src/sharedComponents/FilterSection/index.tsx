import { FC } from "react";
import InputSearch from "../InputSearch";

interface iFilterSection {
  handleFilterItem: (text: string) => void;
}
const FilterSection: FC<iFilterSection> = ({ handleFilterItem }) => {
  return (
    <div className="FilterSection">
      <InputSearch handleValue={handleFilterItem} />
      {/* .... Agrupadores, filtercustoms */}
    </div>
  );
};

export default FilterSection;
