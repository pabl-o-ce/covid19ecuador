import { useState, useEffect } from "react";
import { Data } from './classes';

function useFetch(url: string): [Data, boolean] {
  const [data, setData] = useState(new Data());
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export { useFetch };