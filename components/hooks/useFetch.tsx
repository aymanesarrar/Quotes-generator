import { useState, useEffect } from "react";

type Data = Record<string, string>;

const useFetch = (endpoint: string) => {
  const [data, setData] = useState<Data | undefined>(undefined);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(endpoint).then((res) => res.json());
      return data;
    };
  }, []);
};
