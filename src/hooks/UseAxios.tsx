import axios from "axios";
import { FC, useEffect, useState } from "react";
import { iGeneral } from "../interface/iGeneral";

export interface iUseFetchReturn {
  data: iGeneral | iGeneral[] | undefined;
  error: undefined;
  loading: boolean;
}
export const useFetch = (url: string): iUseFetchReturn => {
  const [data, setData] = useState<iGeneral | iGeneral[]>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((data: iGeneral) => {
        setData(data);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
