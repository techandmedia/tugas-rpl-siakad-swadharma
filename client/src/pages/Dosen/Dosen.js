import React, { useEffect, useState } from "react";
import { Table } from "antd";
import useAxios from "../../utils/api";
import columns from "./column-dosen";

export default function DosenList() {
  const { data, loading } = useAxios("status_dosen");
  const [daftarStatusDosen, setDaftarStatus] = useState([]);

  useEffect(() => {
    if (data) {
      setDaftarStatus(
        data.map((data, index) => ({
          key: index,
          no: index + 1,
          name: data.nama_dosen,
          mengajar: [data.mengajar],
          pegawai: [data.pegawai]
        }))
      );
    }
  }, [data]);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Daftar Dosen STMIK Swadharma</h1>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <Table columns={columns} dataSource={daftarStatusDosen} />
      )}
    </React.Fragment>
  );
}
