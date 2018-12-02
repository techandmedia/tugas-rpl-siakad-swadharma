import React from "react";
import { Layout } from "antd";

import SideNav from "../Navigation/SideNav";
import Footer from "../Navigation/Footer";

import DashboardCalendar from "./CalendarDashboard";
import DashboardProfilUser from "./ProfileDashboard";

export default class MainDashboard extends React.Component {
  state = {
    route: "dashboard-main",
    role: "mahasiswa",
    // route: "dashboard-user-profile",
  };

  componentDidMount() {
    // this.onRouteChange(this.state.route);
    // console.log('18',this.onRouteChange);
    // console.log('19',this.state.route);
  }

  onRouteChange = route => {
    // console.log("22", route);
    if (route === "dashboard-user-profile") {
      this.setState({ route: route });
      // this.setState({
      //   badgename: this.state.users.first_name,
      //   notifications: 4
      // });
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
    const { Content } = Layout;
    const { URL, badgename } = this.props;
    const { role, route } = this.state;

    return (
      <Layout>
        <SideNav role={role} badgename={badgename} onRouteChange={this.onRouteChange} />
        <Layout>
          <Content style={{ justifyContent: "center", alignItems: "center" }}>
            {route === "dashboard-user-profile" ? (
              <DashboardProfilUser />
            ) : route === "dashboard-main" ? (
              <DashboardCalendar {...this.props.users} URL={URL} />
            ) : (
              <DashboardCalendar {...this.props.users} URL={URL} />
            )}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
