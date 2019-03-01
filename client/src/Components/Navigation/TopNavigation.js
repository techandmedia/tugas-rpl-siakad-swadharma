import React from "react";
import {
  Layout,
  Menu,
  Icon,
  Row,
  Col,
  Popover,
  Avatar,
  Badge
  // Input
} from "antd";
// import Clock from '../Basic Component/Clock'

import { FloatRightButton } from "../Basic Component/Button";

const { Header } = Layout;
// const Search = Input.Search;
const SubMenu = Menu.SubMenu;

const content = (
  isSignedIn,
  handleClick,
  current,
  first_name,
  notifications
) => (
  <Menu
    // id="nav"
    onClick={handleClick}
    selectedKeys={[current]}
    mode="vertical"
  >
    <Menu.Item key="book">
      <Icon type="book" theme="twoTone" twoToneColor="#52c41a" />
      Program Akademik
    </Menu.Item>
    <Menu.Item key="siakad">
      <Icon type="appstore" theme="twoTone" twoToneColor="#52c41a" />
      Tentang Siakad
    </Menu.Item>
    {isSignedIn ? (
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Badge count={notifications}>
              Welcome {first_name}
              <Avatar
                shape="square"
                icon="user"
                style={{
                  marginLeft: 15,
                  backgroundColor: "orange",
                  verticalAlign: "middle",
                  paddingLeft: 8
                }}
              />
            </Badge>
          </span>
        }
      >
        <Menu.Item key="logout">Logout</Menu.Item>
      </SubMenu>
    ) : (
      <SubMenu
        title={
          <span className="submenu-title-wrapper">
            <Icon type="setting" />
            Member
          </span>
        }
      >
        <Menu.Item key="login">Login</Menu.Item>
        <Menu.Item key="register">Register</Menu.Item>
      </SubMenu>
    )}
  </Menu>
);

class TopNavigation extends React.Component {
  state = {
    current: null
  };

  handleClick = e => {
    // console.log("click ", e);
    this.setState({
      current: e.key
    });
    if (e.key === "login") {
      this.props.onRouteChange("signin");
    } else if (e.key === "register") {
      this.props.onRouteChange("register");
    } else if (e.key === "logout") {
      this.props.onRouteChange("home");
    } else if (e.key === "siakad") {
      this.props.onRouteChange("tentang-siakad");
    } else {return null};
  };

  render() {
    const { first_name, isSignedIn, notifications, schoolName } = this.props;
    const { current } = this.state;
    const { handleClick } = this;
    // console.log(window.innerWidth)

    return (
      <Header id="header" className="clearfix">
        <Popover
          trigger="click"
          content={content(
            isSignedIn,
            handleClick,
            current,
            first_name,
            notifications
          )}
          className="nav-icon"
        >
          <FloatRightButton>
            <Icon type="bars" theme="outlined" />
          </FloatRightButton>
        </Popover>
        <Row>
          <Col xs={24} sm={24} md={7} lg={5} xl={5} xxl={5}>
            <span
              style={{
                color: "#ffcecc",
                cursor: "pointer",
                fontSize: "1.6em",
                fontWeight: "300"
              }}
              onClick={() => this.props.onRouteChange("home")}
            >
              {schoolName}
            </span>
          </Col>
          {/* <Col xs={0} sm={1} md={1} lg={1} xl={1} xxl={1}>
            <Search
              className="search-box"
              placeholder="input search text"
              onSearch={value => console.log(value)}
              style={{ width: 150 }}
            />
          </Col> */}
          <Col xs={0} sm={0} md={17} lg={18} xl={18} xxl={20}>
            <Menu
              id="nav"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="book">
                <Icon type="book" theme="twoTone" twoToneColor="#52c41a" />
                Program Akademik
              </Menu.Item>
              <Menu.Item key="siakad">
                <Icon type="appstore" theme="twoTone" twoToneColor="#52c41a" />
                Tentang Siakad
              </Menu.Item>
              {isSignedIn ? (
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Badge count={notifications}>
                        Welcome {first_name}
                        <Avatar
                          shape="square"
                          icon="user"
                          style={{
                            marginLeft: 15,
                            backgroundColor: "orange",
                            verticalAlign: "middle",
                            paddingLeft: 8
                          }}
                        />
                      </Badge>
                    </span>
                  }
                >
                  <Menu.Item key="logout">Logout</Menu.Item>
                </SubMenu>
              ) : (
                <SubMenu
                  title={
                    <span className="submenu-title-wrapper">
                      <Icon
                        type="setting"
                        theme="twoTone"
                        twoToneColor="#eb2f96"
                      />
                      Member
                    </span>
                  }
                >
                  <Menu.Item key="login">Login</Menu.Item>
                  <Menu.Item key="register">Register</Menu.Item>
                </SubMenu>
              )}
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default TopNavigation;
