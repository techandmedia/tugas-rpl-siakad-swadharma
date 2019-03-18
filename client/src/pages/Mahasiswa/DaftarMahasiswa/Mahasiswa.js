import React, { useEffect, useState } from "react";
import StatusMahasiswa from "../StatusMahasiswa/StatusMahasiswa";
import { Table, Button, Row, Col } from "antd";
import useAxios from "../../../utils/api";
import columns from "./column-mahasiswa";

const data1 = [
  { name: "Group A", value: 800 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

export default function MahasiswaList() {
  const [data, loading] = useAxios("mahasiswa");
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
  const [tampilanDaftar, setTampilanDaftar] = useState(true);
  const [tampilanStatus, setTampilanStatus] = useState(false);

  useEffect(() => {
    getDataMahasiswa();
  }, [data]);

  function getDataMahasiswa() {
    if (data) {
      setDaftarMahasiswa(
        data.map((data, index) => ({
          key: data.id_mahasiswa,
          no: index + 1,
          id_mahasiswa: data.id_mahasiswa,
          nama_penduduk: data.nama_penduduk,
          jenjang_pendidikan: data.jenjang_pendidikan,
          program_studi: data.program_studi,
          semester: data.semester,
          nama_kelas: data.nama_kelas,
          sekolah_asal: data.sekolah_asal,
          kota_asal: data.kota_asal,
          kota_saatini: data.kota_saatini
        }))
      );
      // console.log(data);
    }
  }

  function handleToggler() {
    setTampilanDaftar(!tampilanDaftar);
    setTampilanStatus(!tampilanStatus);
  }

  return (
    <React.Fragment>
      {loading ? (
        <p>Loading....</p>
      ) : tampilanDaftar ? (
        <React.Fragment>
          <Row gutter={16}>
            <Col span={10}>
              <h1>Daftar Mahasiswa STMIK Swadharma </h1>
            </Col>
            <Col>
              <Button
                className="button-mahasiswa"
                onClick={() => handleToggler()}
              >
                Lihat Status Mahasiswa
              </Button>
            </Col>
          </Row>
          <Table columns={columns} dataSource={daftarMahasiswa} />
        </React.Fragment>
      ) : tampilanStatus ? (
        <React.Fragment>
          <Row gutter={16}>
            <Col span={10}>
              <h1>Status Mahasiswa STMIK Swadharma </h1>
            </Col>
            <Col>
              <Button
                className="button-mahasiswa"
                onClick={() => handleToggler()}
              >
                Kembali ke Daftar Mahasiswa
              </Button>
            </Col>
          </Row>
          <StatusMahasiswa daftarMahasiswa={daftarMahasiswa} />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
