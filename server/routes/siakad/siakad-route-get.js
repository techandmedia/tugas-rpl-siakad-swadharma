const express = require("express");
const router = express.Router();
const mySQL = require("../../config/config-MySQL");

exports.getAllJadwal = router.get("/api/jadwal_kuliah", (req, res) => {
  mySQL.query("SELECT id_jadwal_kuliah, j.tanggal, m.nama_mata_kuliah, d.nama_dosen, sk.status_kelas, nk.nama_kelas, rk.no_ruangan, ju.nama_jurusan, ja.jam_kuliah_awal,ja.jam_kuliah_akhir FROM jadwal_kuliah j INNER JOIN dosen d ON d.id_dosen = j.id_dosen INNER JOIN mata_kuliah m ON m.id_mata_kuliah = j.id_mata_kuliah INNER JOIN jam_kuliah ja on ja.id_jam_kuliah = j.id_jam_kuliah INNER JOIN jurusan ju ON ju.id_jurusan = j.id_jurusan INNER JOIN nama_kelas nk ON nk.id_nama_kelas = j.id_nama_kelas INNER JOIN ruangan_kuliah rk on rk.id_ruangan = j.id_ruangan     INNER JOIN status_kelas sk on sk.id_status_kelas = j.id_status_kelas ORDER BY j.tanggal, m.nama_mata_kuliah ASC", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getAllDosen = router.get("/api/dosen", (req, res) => {
  mySQL.query("SELECT * from dosen ORDER BY nama_dosen ASC", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getAllJamKuliah = router.get("/api/jam_kuliah", (req, res) => {
  mySQL.query("SELECT * from jam_kuliah", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getAllJurusan = router.get("/api/jurusan", (req, res) => {
  mySQL.query("SELECT * from jurusan", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getAllMataKuliah = router.get("/api/mata_kuliah", (req, res) => {
  mySQL.query("SELECT * from mata_kuliah ORDER BY nama_mata_kuliah ASC", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getAllNamaKelas = router.get("/api/nama_kelas", (req, res) => {
  mySQL.query("SELECT * from nama_kelas", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getAllProgramStudi = router.get("/api/program_studi", (req, res) => {
  mySQL.query("SELECT * from program_studi", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getRuanganKuliah = router.get("/api/ruangan_kuliah", (req, res) => {
  mySQL.query("SELECT * from ruangan_kuliah", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getSemester = router.get("/api/semester", (req, res) => {
  mySQL.query("SELECT * from semester", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getStatusKelas = router.get("/api/status_kelas", (req, res) => {
  mySQL.query("SELECT * from status_kelas", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getRole = router.get("/api/role", (req, res) => {
  mySQL.query("SELECT * from role", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

module.exports = router;