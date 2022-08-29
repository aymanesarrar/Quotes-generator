import { useState, useEffect } from "react";

export interface Data {
  _id: string;
  quoteText: string;
  quoteAuthor: string;
  quoteGenre: string;
  __v: string;
}

const useFetch = (endpoint: string): Data[] | undefined => {
  const [data, setData] = useState<Data[] | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(endpoint).then((res) => res.json());
      if ("data" in data) setData(data.data);
    };
    getData();
  }, [endpoint]);
  return data;
};
export default useFetch;
