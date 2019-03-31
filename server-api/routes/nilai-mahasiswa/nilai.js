const express = require("express");
const router = express.Router();
const mySQL = require("../../config/my-sql");

exports.postNilaiMahasiswa = router.post("/api/nilai/new", (req, res) => {
  console.log("reqbody 6", req.body);

  console.log(req.body);
  mySQL.query(
    "INSERT INTO daftar_nilai SET ?",
    req.body,
    (err, results, fields) => {
      res.send(JSON.stringify(results));
    }
  );
});

exports.getAllNilai = router.get("/api/nilai", (req, res) => {
  mySQL.query(
    "SELECT dn.id_daftar_nilai, p.nama_penduduk, m.id_mahasiswa, mk.nama_mata_kuliah, dn.nilai,mk.sks FROM daftar_nilai dn INNER JOIN mata_kuliah mk ON mk.id_mata_kuliah = dn.id_mata_kuliah INNER JOIN mahasiswa m ON m.id_mahasiswa = dn.id_mahasiswa INNER JOIN penduduk p ON p.id_penduduk = m.id_penduduk",
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

module.exports = router;
