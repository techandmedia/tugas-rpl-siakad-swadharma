import { withRouter } from "next/router";
import Layout from "../layout/Layout";
import Home from "./home/Home";
import Login from "./users/Login";
import Register from "./users/Register";
import MahasiswaPage from "./mahasiswa/DaftarMahasiswa/Mahasiswa";
import StatusMahasiswa from "./mahasiswa/StatusMahasiswa/StatusMahasiswa";
import Dosen from "./Dosen/Dosen";
import IsiDataNilai from './admin/IsiDataNilai'

const clientRoute = [
  {
    route: "/",
    component: <Home />
  },
  {
    route: "/login",
    component: <Login />
  },
  {
    route: "/isi-data-nilai",
    component: <IsiDataNilai />
  },
  {
    route: "/register",
    component: <Register />
  },
  {
    route: "/teacher",
    component: <Dosen />
  },
  {
    route: "/student",
    component: <MahasiswaPage />
  },
  {
    route: "/status",
    component: <StatusMahasiswa />
  }
];

const Page = withRouter(props => {
  const route = props.router.asPath;
  function renderComponent() {
    // clientRoute.forEach(componentRoute => {
    //   console.log(componentRoute);
    //   if (componentRoute.route === route) {
    //     return <React.Fragment> {componentRoute.component}</React.Fragment>;
    //   }
    // });
    for (let i = 0; i < clientRoute.length; i++) {
      if (clientRoute[i].route === route) {
        return <React.Fragment>{clientRoute[i].component}</React.Fragment>;
      }
    }
  }
  console.log(route);
  return <Layout title="Users Login/Register">{renderComponent()}</Layout>;
});

export default Page;
