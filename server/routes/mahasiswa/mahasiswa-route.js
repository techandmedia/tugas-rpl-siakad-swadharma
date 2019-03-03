const express = require("express");
const router = express.Router();
const mySQL = require("../../config/my-sql");

// === Daftar Mahsiswa =======================================
const mahasiswa =
  "SELECT m.id_mahasiswa, p.nama_penduduk, jp.jenjang_pendidikan, ps.program_studi, s.semester, k.nama_kelas, pd.sekolah_asal, ks.kelurahan as kota_saatini, ka.kelurahan as kota_asal FROM mahasiswa m INNER JOIN penduduk p ON p.id_penduduk = m.id_penduduk INNER JOIN program_studi ps ON ps.id_program_studi = m.id_program_studi     INNER JOIN jenjang_pendidikan jp ON jp.id_jenjang_pendidikan = m.id_jenjang_pendidikan INNER JOIN semester s ON s.id_semester = m.id_semester INNER JOIN kelas k ON k.id_nama_kelas = m.id_kelas INNER JOIN pindahan pd ON pd.id_pindahan = m.id_pindahan INNER JOIN kota ks ON ks.kode_pos = p.kota_saat_ini INNER JOIN kota ka ON ka.kode_pos = p.kota_asal ORDER BY p.nama_penduduk";
exports.getAllMahasiswa = router.get("/api/mahasiswa", (req, res) => {
  mySQL.query(mahasiswa, (err, results) => {
    if (err) console.log(err);
    console.log(results);
    res.send(JSON.stringify(results));
  });
});

module.exports = router;
