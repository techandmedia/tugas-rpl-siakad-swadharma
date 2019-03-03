import { useEffect, useState } from "react";
import axios from "axios";
import config from "./config";

const url =
  process.env.NODE_ENV === "production"
    ? config.PRODUCTION_URL
    : config.DEVELOPMENT_URL;

function useAxios(api) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  function getData() {
    return axios.get(url + api).then(response => {
      return response.data;
    });
  }

  useEffect(() => {
    getData().then(response => setData(response));
    setLoading(false);
  }, []);

  return { data, loading };
}

export default useAxios;
