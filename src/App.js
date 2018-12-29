import React from "react";
import Loadable from 'react-loadable'
import { Helmet } from "react-helmet";
import { Layout } from "antd";

import Particles from "./Components/Content/Particles";
import TopNavigation from "./Components/Navigation/TopNavigation";

import "./App.css";
import userConfig from "./Components/data/ConfigData";

const Loading = () => <div>Loading...</div>;

// when no user sign in
const MainContent = Loadable({
  loader: () => import("./Components/Content/MainContent"),
  loading: Loading
});

// when the user sign in
const MainDashboard = Loadable({
  loader: () => import("./Components/Dashboard/MainDashboard"),
  loading: Loading
});

class App extends React.Component {  
  state = {
    isSignedIn: true,
    componentUpdate: false,
    route: "dashboard",
    badgename: "Andri",
    sidebar: "Mahasiswa",
    // isSignedIn: false,
    // route: "home",
    // badgename: "Guest",
    // sidebar: null,
    users: {
      first_name: "Eko",
      last_name: "Andri",
      email: "eko.andri@icloud.com",
      role: "Mahasiswa",
      notifications: 4
      // first_name: null,
      // last_name: null,
      // email: null,
      // role: null,
      // notifications: null
    }
  };

  // componentDidMount() {
  //   console.log(this.state.route, this.state.isSignedIn);
  // }

  loadUser = data => {
    this.setState({
      users: {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        role: data.role
      }
    });
    if (this.state.users.role === "Admin") {
      this.setState({ sidebar: "sidebarAdmin" });
    } else if (this.state.users.role === "Dosen") {
      this.setState({ sidebar: "sidebarDosen" });
    } else if (this.state.users.role === "Mahasiswa") {
      this.setState({ sidebar: "sidebarMahasiswa" });
    }
  };

  onRouteChange = route => {
    if (route === "dashboard") {
      this.setState({ isSignedIn: true });
      this.setState({
        badgename: this.state.users.first_name,
        notifications: 4
      });
    } else if (route === "home" || "signout") {
      this.setState({ isSignedIn: false });
      this.setState({
        badgename: "Guest",
        notifications: "0"
      });
    }
    this.setState({ route: route });
  };

  render() {
    const {
      schoolName,
      registerLabel,
      signinLabel,
      devURL,
      prodURL
    } = userConfig;
    const URL = process.env.NODE_ENV === "production" ? prodURL : devURL;

    const { badgename, isSignedIn, route, componentUpdate } = this.state;
    const { onRouteChange, loadUser } = this;
    const {
      first_name,
      notifications
      // last_name, role, email
    } = this.state.users;

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{userConfig.mainTitle}</title>
          <link rel="canonical" href="http://tugaskuliah.subarnanto.com" />
          <meta
            name="description"
            content="Demo Sistem STMIK Swadharma - created by Eko Andri"
          />
        </Helmet>
        <Particles />
        <Layout>
          <TopNavigation
            first_name={first_name}
            notifications={notifications}
            isSignedIn={isSignedIn}
            schoolName={schoolName}
            route={route}
            onRouteChange={onRouteChange}
          />
          {/* // If the User Sign In, load the dashboard */}
          {route === "dashboard" && isSignedIn ? (
            <MainDashboard
              URL={URL}
              badgename={badgename}
              onRouteChange={onRouteChange}
              {...this.state.users}
              componentUpdate={componentUpdate}
            />
          ) : (
            <MainContent
              route={route}
              URL={URL}
              onRouteChange={onRouteChange}
              registerLabel={registerLabel}
              signinLabel={signinLabel}
              loadUser={loadUser}
            />
          )}
        </Layout>
      </Layout>
    );
  }
}

export default App;
