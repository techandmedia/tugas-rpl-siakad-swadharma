import React from "react";
import { Menu, Layout, Icon } from "antd";

export default class SideNav extends React.Component {
  state = {
    collapsed: true
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
    if (e.key === "profil-dosen") {
      this.props.onRouteChange("dashboard-user-profile");
    } else if (e.key === "profil-mahasiswa") {
      this.props.onRouteChange("dashboard-user-profile");
    } else if (e.key === "profil-calon-mahasiswa") {
      this.props.onRouteChange("dashboard-user-profile");
    } else if (e.key === "dashboard-main") {
      this.props.onRouteChange("dashboard-main");
    } else return null;
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const SubMenu = Menu.SubMenu;
    const { Sider } = Layout;

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
        theme="dark"
        width="150px"
        className="sider"
      >
        <Menu
          onClick={this.handleClick}
          className="sider"
          theme="dark"
          defaultSelectedKeys={["dashboard-main"]}
          mode="inline"
        >
          <Menu.Item key="dashboard-main">
            <Icon type="pie-chart" />
            <span>Dasboard</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="profil"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="profil-dosen">Dosen</Menu.Item>
            <Menu.Item key="profil-mahasiswa">Mahasiswa</Menu.Item>
            <Menu.Item key="profil-calon-mahasiswa">Calon Mahasiswa</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
