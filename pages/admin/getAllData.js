// import React, { useState, useEffect } from "react";
import useAxios from "../../utils/api";

function getDataMahasiswa() {
  const { data, isLoading } = useAxios("mahasiswa");
  return { dataMahasiswa: data, isMahasiswaLoading: isLoading };
}
function getDataMataKuliah() {
  const { data, isLoading } = useAxios("mata_kuliah");
  return { dataMataKuliah: data, isMataKuliahLoading: isLoading };
}

export { getDataMahasiswa, getDataMataKuliah };
