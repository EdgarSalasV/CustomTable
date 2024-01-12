import { FC } from "react";
import { iGeneral } from "../../interface/iGeneral";

interface iTbody {
  bodyData: iGeneral | iGeneral[];
}
const Tbody: FC<iTbody> = ({ bodyData }) => {
  function mapFn(bodyData: iGeneral) {
    const keyList = Object.keys(bodyData);
    const td = keyList.map((item) => (
      <td key={item}>{JSON.stringify(bodyData[item])}</td>
    ));
    return td;
  }
  function trList() {
    if (!Array.isArray(bodyData)) {
      const td = mapFn(bodyData);
      return <tr>{td}</tr>;
    }
    return bodyData.map((rowItem) => {
      const td = mapFn(rowItem);
      return <tr>{td}</tr>;
    });
  }
  return <tbody>{trList()}</tbody>;
};

export default Tbody;
