const express = require("express");
const router = express.Router();
const mySQL = require("../../config/my-sql");

exports.getAllDosen = router.get("/api/dosen", (req, res) => {
  mySQL.query("SELECT * from dosen ORDER BY nama_dosen ASC", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

exports.getStatusPegawai = router.get("/api/status_pegawai", (req, res) => {
  mySQL.query(
    "SELECT * from status_pegawai ORDER BY id_status_pegawai ASC",
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

exports.getStatusMengajar = router.get("/api/status_mengajar", (req, res) => {
  mySQL.query(
    "SELECT * from status_mengajar ORDER BY id_status_mengajar ASC",
    (err, results) => {
      if (err) console.log(err);
      res.send(JSON.stringify(results));
    }
  );
});

// === Status Dosen =========================================================
const statusDosenAPI =
  "SELECT d.nama_dosen AS nama_dosen, sm.nama_status AS mengajar, sp.nama_status AS pegawai FROM status_dosen sd INNER JOIN dosen d ON d.id_dosen = sd.id_dosen INNER JOIN status_mengajar sm ON sm.id_status_mengajar = sd.id_status_mengajar INNER JOIN status_pegawai sp ON sp.id_status_pegawai = sd.id_status_pegawai ORDER BY d.nama_dosen ASC";

  exports.getStatusDosen = router.get("/api/status_dosen", (req, res) => {
  mySQL.query(statusDosenAPI, (err, results) => {
    console.log(results);
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
