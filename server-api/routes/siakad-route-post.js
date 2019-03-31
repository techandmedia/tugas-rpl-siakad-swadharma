const express = require("express");
const router = express.Router();
const mySQL = require("../config/my-sql");

exports.postJadwalKuliah = router.post("/api/jadwal/new", (req, res) => {
  console.log("reqbody 6", req.body);
  var today = new Date();
  var jadwal = {
    tanggal: req.body.tanggal,
    id_dosen: req.body.id_dosen,
    id_jam_kuliah: req.body.id_jam_kuliah,
    id_jurusan: req.body.id_jurusan,
    id_nama_kelas: req.body.id_nama_kelas,
    id_mata_kuliah: req.body.id_mata_kuliah,
    id_ruangan: req.body.id_ruangan,
    id_semester: req.body.id_semester,
    id_status_kelas: req.body.id_status_kelas,
    id_program_studi: req.body.id_program_studi,
    created: today,
    modified: today
  };

  console.log(jadwal);
  mySQL.query(
    "INSERT INTO jadwal_kuliah SET ?",
    jadwal,
    (err, results, fields) => {
      res.send(JSON.stringify(results));
      //   res.send({
      //     code: 200,
      //     status: "Success",
      //     message: "Jadwal is successfully added"
      //   });
    }
  );
});

module.exports = router;
