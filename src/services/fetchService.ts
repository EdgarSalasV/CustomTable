import axios from "axios";
import { iGeneral } from "../interface/iGeneral";

export interface iUseFetchReturn {
  status: number;
  data?: iGeneral | iGeneral[] | undefined;
  error?: string;
  loading: boolean;
}
export const fetchService = async (URL: string): Promise<iUseFetchReturn> => {
  let data: iGeneral | iGeneral[];
  const error: string = "";
  const loading: boolean = true;

  try {
    data = await axios.get(URL);
  } catch (error) {
    console.error(error);
    return { status: 500, error: "error", loading: !!loading };
  }

  return { status: 200, data, loading: !!loading };
};
