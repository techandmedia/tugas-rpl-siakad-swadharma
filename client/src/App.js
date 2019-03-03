import React, { useState, useEffect } from "react";
import MainLayout from "./layout/MainLayout.js";
import HeaderOne from "./layout/Header-1";
import HeaderTwo from "./layout/Header-2";
import Sider from "./layout/Sider";

import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import UserPage from "./pages/UserPage";

import "./utils/style.css";

function App() {
  const [mainRoute, setMainRoute] = useState("home");
  const [component, setComponent] = useState(null);

  const Component = [
    {
      route: "home",
      component: <Homepage />
    },
    {
      route: "login",
      component: <LoginPage />
    },
    {
      route:
        mainRoute === "teacher" ||
        mainRoute === "student" ||
        mainRoute === "status"
          ? mainRoute
          : null,
      component: <UserPage mainRoute={mainRoute} />
    }
  ];

  useEffect(() => {
    getComponentToRender();
  }, [mainRoute]);

  function getComponentToRender() {
    for (let i = 0; i < Component.length; i++) {
      if (mainRoute === Component[i].route) {
        setComponent(Component[i].component);
      }
    }
  }

  return (
    <MainLayout
      headerOne={<HeaderOne setMainRoute={setMainRoute} />}
      headerTwo={<HeaderTwo />}
      sider={<Sider />}
    >
      {component}
    </MainLayout>
  );
}

export default App;
