import { useEffect, useState } from "react";
import useAxios from "../../../utils/api";

function getAllData() {
  const [nilai] = useAxios("nilai");
  const [daftarNilai, setNilai] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (nilai.isLoading === false) {
      setNilai(nilai);
      setLoading(false);
    }
  }, [nilai]);

  if (isLoading === false) {
    return daftarNilai ;
  } else {
    return;
  }
}

export default getAllData;
