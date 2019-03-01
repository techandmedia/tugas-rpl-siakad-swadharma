import React from "react";
import { Row, Col } from "antd";
import { NormalCard as Card, JumboCard } from "../Basic Component/Card";

const TentangSiakad = props => {
  return (
    <React.Fragment>
      <JumboCard
        headStyle={{ fontSize: 18 }}
        title="Tentang Siakad - Sistem Informasi Akademik Kampus"
      >
        <p style={{ fontSize: 18 }}>
          Saat ini sistem berada di versi 0.2. Banyak perubahan yang terjadi di
          dalam sistem; berikut penjelasannya.
        </p>
        <p style={{ fontSize: 12 }}>
          Versi 0.2, rilis pada tanggal: 14 November 2018
        </p>
        <hr style={{ borderBottom: "none" }} />
        <Row type="flex" justify="space-around">
          <Col md={7}>
            <Card bodyStyle={{ textAlign: "left", lineHeight: "1.3em" }}>
              {/* jangan pakai ul di dalam card, karena text tidak align properly */}
              <p style={{ fontWeight: "bold" }}>Untuk Sistem Front End</p>
              <p>Mengganti CSS Framework dari Bootstrap ke Ant Design</p>
              <p>Membuat Fitur Tambah Jadwal Kuliah</p>
              <p>Membuat Fitur Lihat Jadwal Kuliah</p>
              <p>
                Pada fitur Tambah Jadwal Kuliah, terdapat Menu Drop Down untuk
                pilihan dosen, mata kuliah, jam kuliah, dan lain lain
              </p>
            </Card>
          </Col>

          <Col md={7}>
            <Card bodyStyle={{ textAlign: "left", lineHeight: "1.3em" }}>
              <p style={{ fontWeight: "bold" }}>Untuk Sistem Back End</p>
              <p>
                Refactor route siakad ke dalam folder tersendiri dan membuuat
                route untuk Sign In dan Register
              </p>
              <p>
                Membuat get-route untuk tabel dosen, jadwal, semester (dll) dan
                post-route untuk tambah jadwal
              </p>
              <p>Query pada getRoute Jadwal Kuliah menggunakan INNER JOIN</p>
              {/* <p>
              "SELECT j.tanggal, m.nama_mata_kuliah, d.nama_dosen,
              sk.status_kelas, nk.nama_kelas, rk.no_ruangan, ju.nama_jurusan,
              ja.jam_kuliah_awal,ja.jam_kuliah_akhir FROM jadwal_kuliah j INNER
              JOIN dosen d ON d.id_dosen = j.id_dosen INNER JOIN mata_kuliah m
              ON m.id_mata_kuliah = j.id_mata_kuliah INNER JOIN jam_kuliah ja on
              ja.id_jam_kuliah = j.id_jam_kuliah INNER JOIN jurusan ju ON
              ju.id_jurusan = j.id_jurusan INNER JOIN nama_kelas nk ON
              nk.id_nama_kelas = j.id_nama_kelas INNER JOIN ruangan_kuliah rk on
              rk.id_ruangan = j.id_ruangan INNER JOIN status_kelas sk on
              sk.id_status_kelas = j.id_status_kelas ORDER BY j.tanggal,
              m.nama_mata_kuliah ASC"
            </p> */}
            </Card>
          </Col>

          <Col md={7}>
            <Card bodyStyle={{ textAlign: "left", lineHeight: "1.3em" }}>
              <p style={{ fontWeight: "bold" }}>Untuk Sistem Database</p>
              <p>
                Membuat tabel tabel yang diperlukan untuk keperluan jadwal
                kuliah seperti tabel master dosen, jurusan, mata kuliah, nama
                kelas, program studi, ruangan kuliah, status kelas, semester dan
                lain lain
              </p>
              <p>Membuat Tabel transaksi Jadwal Kuliah</p>
            </Card>
          </Col>
        </Row>
      </JumboCard>

      <hr style={{ borderBottom: "none" }} />

      <JumboCard>
        <p style={{ fontSize: 18 }}>
          Berikut beberapa fitur yang sedang dalam pengembangan dan diharapkan
          dapat segera tersedia pada versi 0.3
        </p>
        <hr style={{ borderBottom: "none" }} />
        <Row type="flex" justify="space-around">
          <Col md={7}>
            <Card bodyStyle={{ textAlign: "left", lineHeight: "1.3em" }}>
              {/* jangan pakai ul di dalam card, karena text tidak align properly */}
              <p style={{ fontWeight: "bold" }}>Untuk Sistem Front End</p>
              <p>
                Membuat role/aturan di mana mahasiswa hanya dapat melihat jadwal
                kuliah sesuai dengan jurusan, program studi dan masa semester
                nya
              </p>
              <p>
                Admin dapat menambah atau mengedit user yang mendaftar dari menu
                Register
              </p>
              <p>
                Admin dapat menambah atau mengedit semua tabel master yang
                tersedia
              </p>
              <p>
                Sidebar yang berbeda sesuai dengan role login, Admin berwarna X,
                Dosen berwarna Y, mahasiswa berwarna Z
              </p>
            </Card>
          </Col>

          <Col md={7}>
            <Card bodyStyle={{ textAlign: "left", lineHeight: "1.3em" }}>
              <p style={{ fontWeight: "bold" }}>Untuk Sistem Back End</p>
              <p>Menyiapkan route sesuai dengan Front End</p>
              <p>Password dihash menggunakan library yang bernama bcrypt</p>
              <p>
                Melakukan testing API dengan 100 atau 1000 request/permintaan ke
                server
              </p>
            </Card>
          </Col>

          <Col md={7}>
            <Card bodyStyle={{ textAlign: "left", lineHeight: "1.3em" }}>
              <p style={{ fontWeight: "bold" }}>Untuk Sistem Database</p>
              <p>
                Membuat relasi mata kuliah, jurusan, program studi dan semester
              </p>
              <p>Membuat tabel sesuai dengan Front End</p>
            </Card>
          </Col>
        </Row>
      </JumboCard>
    </React.Fragment>
  );
};

export default TentangSiakad;
