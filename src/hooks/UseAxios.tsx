import axios from "axios";
import { useEffect, useState } from "react";
interface iAxios {
  [id: string]: any;
}
export const useFetch = (url: string) => {
  const [data, setData] = useState<iAxios | iAxios[]>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(url)
      .then((data: iAxios) => {
        setData(data);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};
