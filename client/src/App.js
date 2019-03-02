import React, { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout.js";
import Header_1 from "./layout/Header-1";
import Header_2 from "./layout/Header-2";
import Sider from "./layout/Sider";

import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import UserPage from "./pages/UserPage";

function App() {
  const [route, setRoute] = useState("user");
  return (
    <MainLayout
      headerOne={<Header_1 />}
      headerTwo={<Header_2 />}
      sider={<Sider />}
      route={route}
    >
      {route === "home" ? (
        <Homepage />
      ) : route === "login" ? (
        <LoginPage />
      ) : route === "user" ? (
        <UserPage />
      ) : null}
    </MainLayout>
  );
}

export default App;
