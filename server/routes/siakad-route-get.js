const express = require("express");
const router = express.Router();
const mySQL = require("../config/my-sql");

exports.getHome = router.get("/", (req, res) => {
  console.log("You are inside a home page");
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
  mySQL.query(
    "SELECT * from mata_kuliah ORDER BY nama_mata_kuliah ASC",
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
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
