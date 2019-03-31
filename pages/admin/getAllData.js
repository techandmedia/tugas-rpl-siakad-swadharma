import { useEffect, useState } from "react";
import useAxios from "../../utils/api";

function getAllData() {
  const [mahasiswa] = useAxios("mahasiswa");
  const [mata_kuliah] = useAxios("mata_kuliah");
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
  const [daftarMataKuliah, setDaftarMataKuliah] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (mahasiswa.isLoading === false && mata_kuliah.isLoading === false) {
      // ============== //
      // re-form Mahasiswa
      const tempMahasiswa = mahasiswa.data.map(data => ({
        key: data.id_mahasiswa,
        value: data.id_mahasiswa,
        label: data.nama_penduduk
      }));
      setDaftarMahasiswa(tempMahasiswa);

      // re-form Daftar Mata Kuliah
      const tempMataKuliah = mata_kuliah.data.map(data => ({
        key: data.id_mata_kuliah,
        value: data.id_mata_kuliah,
        label: data.nama_mata_kuliah
      }));
      setDaftarMataKuliah(tempMataKuliah);

      setLoading(false);
    }
  }, [mahasiswa, mata_kuliah]);

  if (isLoading === false) {
    return { daftarMahasiswa, daftarMataKuliah };
  } else {
    return;
  }
}

export default getAllData;
