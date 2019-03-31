import React, { useEffect, useState } from "react";
import { Table } from "antd";
import useAxios from "../../utils/api";
import columns from "./column-dosen";

export default function DosenList() {
  const [dosen] = useAxios("status_dosen");
  const [daftarDosen, setDaftarDosen] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(dosen, isLoading);
    if (dosen.isLoading === false) {
      setDaftarDosen(
        dosen.data.map((data, index) => ({
          key: index,
          no: index + 1,
          name: data.nama_dosen,
          mengajar: [data.mengajar],
          pegawai: [data.pegawai]
        }))
      );
      setIsLoading(false);
    }
  }, [dosen]);

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Daftar Dosen STMIK Swadharma</h1>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <Table columns={columns} dataSource={daftarDosen} />
      )}
    </React.Fragment>
  );
}
