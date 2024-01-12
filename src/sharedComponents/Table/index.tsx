import { FC } from "react";
import { iGeneral } from "../../interface/iGeneral";
interface iCustomTable {
  data: iGeneral;
  handleSelectedItem: () => void;
}
const CustomTable: FC<iCustomTable> = () => {
  return <table>
    
  </table>;
};

export default CustomTable;
