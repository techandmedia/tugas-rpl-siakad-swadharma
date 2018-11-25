import axios from "axios";

export function postJadwalKuliah(
  URL,
  id_dosen,
  id_jam_kuliah,
  id_jurusan,
  id_nama_kelas,
  id_mata_kuliah,
  id_ruangan,
  id_semester,
  id_status_kelas,
  id_program_studi,
  tanggal
) {
  // return console.log('dari postKul',dosen, kelas, matkul)
  axios.post(URL + "api/jadwal/new", {
    tanggal: tanggal,
    id_dosen: id_dosen,
    id_jam_kuliah: id_jam_kuliah,
    id_jurusan: id_jurusan,
    id_nama_kelas: id_nama_kelas,
    id_mata_kuliah: id_mata_kuliah,
    id_ruangan: id_ruangan,
    id_semester: id_semester,
    id_status_kelas: id_status_kelas,
    id_program_studi: id_program_studi
  });
}

export function loginUser(URL, email, password) {
  // kalau pakai axios tidak perlu lagi response.json()
  // .then(response => response.json())
  return axios.post(URL + "api/users/login", {
    email: email,
    password: password
  });
}

export function registerUser(
  URL,
  first_name,
  last_name,
  role,
  email,
  password
) {
  // kalau pakai axios tidak perlu lagi response.json()
  // .then(response => response.json())
  return axios.post(URL + "api/users/new", {
    first_name: first_name,
    last_name: last_name,
    role: role,
    email: email,
    password: password
  });
}
