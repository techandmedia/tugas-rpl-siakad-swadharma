import React, { useEffect, useState } from "react";
import DosenPage from "./Dosen/Dosen";
import MahasiswaPage from "./Mahasiswa/DaftarMahasiswa/Mahasiswa";
import StatusMahasiswa from "./Mahasiswa/StatusMahasiswa/StatusMahasiswa";
import JadwalKuliah from "./Mahasiswa/JadwalKuliah";

export default function UserPage(props) {
  const userRoute = props.mainRoute;
  console.log(userRoute);
  const [component, setComponent] = useState(null);

  const Component = [
    {
      route: "student",
      component: <MahasiswaPage />
    },
    {
      route: "status",
      component: <StatusMahasiswa />
    },
    {
      route: "teacher",
      component: <DosenPage />
    },
    {
      route: "jadwal",
      component: <JadwalKuliah />
    }
  ];

  useEffect(() => {
    setComponent(getRoute());
  }, [userRoute]);

  function getRoute() {
    for (let i = 0; i < Component.length; i++) {
      if (userRoute === Component[i].route) {
        return Component[i].component;
      }
    }
  }

  return <React.Fragment>{component}</React.Fragment>;
}
