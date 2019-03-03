import React, { useEffect, useState } from "react";
import DosenPage from "./Dosen/Dosen";
import JadwalKuliah from "./Mahasiswa/JadwalKuliah";

export default function UserPage(props) {
  console.log(props);
  const userRoute = props.mainRoute;
  const [component, setComponent] = useState(null);

  const Component = [
    {
      route: "student",
      component: <DosenPage />
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
  },[]);

  function getRoute() {
    for (let i = 0; i < Component.length; i++) {
      if (userRoute === Component[i].route) {
        return Component[i].component;
      }
    }
  }

  return <React.Fragment>{component}</React.Fragment>;
}
