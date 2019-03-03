import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { getStatusDosen } from "../../utils/api";
import columns from "./column-jadwal";


export default function JadwalKuliah() {
  const [initialStatus, setInitialStatus] = useState([]);
  const [daftarStatusDosen, setDaftarStatus] = useState([]);

  useEffect(() => {
    getStatusDosen("status_dosen").then(response => setInitialStatus(response));
  }, []);

  useEffect(() => {
    setDaftarStatus(
      initialStatus.map((data, index) => ({
        key: index,
        no: index + 1,
        name: data.nama_dosen,
        mengajar: [data.mengajar],
        pegawai: [data.pegawai]
      }))
    );
  }, [initialStatus]);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Daftar Dosen STMIK Swadharma</h1>
      <Table
        columns={columns}
        dataSource={daftarStatusDosen}
      />
    </React.Fragment>
  );
}
