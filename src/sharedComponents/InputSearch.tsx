import { FC, useState } from "react";
import { iInputEvent } from "../interface/iEventInputs";
interface iInputSearchProps {
  handleValue: (text: string) => void;
}
const InputSearch: FC<iInputSearchProps> = ({ handleValue }) => {
  const [text, setText] = useState<string>("");
  //TODO refactorizar
  return (
    <input
      value={text}
      onChange={({ target: { value } }: iInputEvent) => {
        handleValue(value);
        setText(value);
      }}
    />
  );
};

export default InputSearch;