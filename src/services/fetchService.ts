import axios, { AxiosHeaders } from "axios";
import { iGeneral } from "../interface/iGeneral";

interface iDataAxios {
  data: { data: iGeneral | iGeneral[] };
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: 200;
  statusText: "";
}

export interface iUseFetchReturn {
  status: number;
  URL?: string;
  data?: iGeneral | iGeneral[];
  error?: string;
}
export const fetchService = async (URL: string): Promise<iUseFetchReturn> => {
  let dataFetch: iDataAxios;

  try {
    dataFetch = (await axios.get(URL)).data;
    console.log("dataFetch", dataFetch);
  } catch (error) {
    console.error(error);
    return { status: 500, error: "error" };
  }

  return { status: 200, data: dataFetch, URL };
};
