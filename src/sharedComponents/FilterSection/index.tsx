import { FC, useState } from "react";
import InputSearch from "../InputSearch";

interface iFilterSection {
  fetchCustomUrl: (text: string) => void;
}
const FilterSection: FC<iFilterSection> = ({ fetchCustomUrl }) => {
  // TODO SET DEFAULT "" IN TEXT STATE
  const [text, setText] = useState<string>("https://pokeapi.co/api/v2/berry");
  return (
    <div className="FilterSection">
      <InputSearch handleValue={setText} />
      <input
        type="button"
        value="search"
        onClick={() => fetchCustomUrl(text)}
      />
      {/* .... Agrupadores, filtercustoms */}
    </div>
  );
};

export default FilterSection;
