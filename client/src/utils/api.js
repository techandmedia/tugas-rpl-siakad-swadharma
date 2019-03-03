import axios from "axios";
import config from "./config";

const url =
  process.env.NODE_ENV === "production"
    ? config.PRODUCTION_URL
    : config.DEVELOPMENT_URL;

function getData(api) {
  return axios.get(url + api).then(response => response.data);
}

export function getDataDosen(query) {
  return getData(query);
}

export function getStatusPegawai(query) {
  return getData(query);
}

export function getStatusMengajar(query) {
  return getData(query);
}

export function getStatusDosen(query) {
  return getData(query);
}
