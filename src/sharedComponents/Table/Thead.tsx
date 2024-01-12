import { FC } from "react";

interface iThead {
  headerList: string[];
}
const Thead: FC<iThead> = ({ headerList }) => {
  const thList = headerList.map((headerKey, i) => <th key={i}>{headerKey}</th>);
  return (
    <thead>
      <tr>{thList}</tr>
    </thead>
  );
};

export default Thead;
