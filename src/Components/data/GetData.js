import axios from "axios";

export function getJadwalKuliah(URL) {
  return axios.get(URL + "api/jadwal_kuliah");
}

export function getDosen(URL) {
  return axios.get(URL + "api/dosen");
  // kalau pakai async await di cDM
  // .then(respon => {
  //   return respon.data;
  // });
}

export function getJamKuliah(URL) {
  return axios.get(URL + "api/jam_kuliah");
}

export function getJurusan(URL) {
  return axios.get(URL + "api/jurusan");
}

export function getMataKuliah(URL) {
  return axios.get(URL + "api/mata_kuliah");
}

export function getNamaKelas(URL) {
  return axios.get(URL + "api/nama_kelas");
}

export function getProgramStudi(URL) {
  return axios.get(URL + "api/program_studi");
}

export function getRuanganKuliah(URL) {
  return axios.get(URL + "api/ruangan_kuliah");
}

export function getSemester(URL) {
  return axios.get(URL + "api/semester");
}

export function getStatusKelas(URL) {
  return axios.get(URL + "api/status_kelas");
}

export function getRole(URL) {
  return axios.get(URL + "api/role");
}
