import React, { useEffect, useState } from "react";
import { Table } from "antd";
import useAxios from "../../../utils/api";
import columns from "./column-mahasiswa";

export default function MahasiswaList() {
  const { data, loading } = useAxios("mahasiswa");
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);

  useEffect(() => {
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
          sekolah_asal: data.sekolah_asal
        }))
      );
      console.log(data);
    }
  }, [data]);

  return (
    <React.Fragment>
      <h1 style={{ marginLeft: 20 }}>Daftar Mahasiswa STMIK Swadharma</h1>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <Table columns={columns} dataSource={daftarMahasiswa} />
      )}
    </React.Fragment>
  );
}
