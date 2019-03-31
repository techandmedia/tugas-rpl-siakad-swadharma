import axios from "axios";
import config from "./config";

const url =
  process.env.NODE_ENV === "production"
    ? config.PRODUCTION_URL
    : config.DEVELOPMENT_URL;

// ==== POST Nilai ==================================
export async function postNilai(queries) {
  console.log(queries);
  const data = await axios.post(url + "nilai/new", queries).then(res => {
    console.log(res.data);
    return res.data;
  });
  // console.log(data)
  return data;
}
