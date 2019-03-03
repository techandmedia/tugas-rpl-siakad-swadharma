import React from "react";
import { Menu, Icon } from "antd";

export default function Header_1(props) {
  // const [current] = useState("Logo");

  const mainMenuList = [
    {
      route: "quick",
      name: "Quick Access",
      class: `header-1 swadharma`,
      logo: "setting"
    },
    {
      route: "site",
      name: "Site Map",
      class: `header-1 quick`,
      logo: "contacts"
    },
    {
      route: "study",
      name: "Study in Swadharma",
      class: `header-1 site-map`,
      logo: "codepen"
    }
  ];

  const menuQuickAccess = [
    {
      route: "login",
      name: "Login"
    },
    {
      route: "teacher",
      name: "Teacher"
    },
    {
      route: "student",
      name: "Student"
    }
  ];

  const renderQuickAccess = menuQuickAccess.map(item => {
    return <Menu.Item key={item.route}>{item.name}</Menu.Item>;
  });

  function onMenuClick(e) {
    console.log(e.key, props);
    props.setMainRoute(e.key);
  }

  return (
    <React.Fragment>
      <Menu
        theme="light"
        onClick={e => onMenuClick(e)}
        // selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="home" className="header-1-logo">
          <Icon type="home" />
          Logo123
        </Menu.Item>

        {mainMenuList.map(menu => {
          return (
            // Sub Menu tidak bisa onClick, harus di Menu.Item
            <Menu.SubMenu
              key={menu.route}
              className={menu.class}
              title={
                <span className="submenu-title-wrapper">
                  <Icon type={menu.logo} />
                  {menu.name}
                </span>
              }
            >
              {menu.route === "quick" ? renderQuickAccess : null}
            </Menu.SubMenu>
          );
        })}
      </Menu>
    </React.Fragment>
  );
}
