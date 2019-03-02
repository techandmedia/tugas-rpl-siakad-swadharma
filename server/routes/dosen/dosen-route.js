const express = require("express");
const router = express.Router();
const mySQL = require("../../config/my-sql");

exports.getAllDosen = router.get("/api/dosen", (req, res) => {
  mySQL.query("SELECT * from dosen ORDER BY nama_dosen ASC", (err, results) => {
    if (err) console.log(err);
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
