import { FC, useState } from "react";
import { iInputEvent } from "../interface/iEventInputs";
interface iInputSearchProps {
  handleValue: (text: string) => void;
}
const InputSearch: FC<iInputSearchProps> = ({ handleValue }) => (
  <input
    // value={text}
    onChange={({ target: { value } }: iInputEvent) => {
      console.log('value', value)
      handleValue(value);
      // setText(value);
    }}
  />
);

export default InputSearch;
