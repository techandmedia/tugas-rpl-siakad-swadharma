import React, { useState } from "react";
import { Menu, Icon } from "antd";

export default function Header_1() {
  const [current] = useState(1);

  const mainMenuList = [
    {
      key: 1,
      name: "Logo",
      class: `header-1-logo`,
      logo: "home"
    },
    {
      key: 2,
      name: "Quick Access",
      class: `header-1 swadharma`,
      logo: "setting"
    },
    {
      key: 3,
      name: "Site Map",
      class: `header-1 quick`,
      logo: "contacts"
    },
    {
      key: 4,
      name: "Study in Swadharma",
      class: `header-1 site-map`,
      logo: "codepen"
    }
  ];

  const menuQuickAccess = [
    {
      key: 1,
      name: "Login"
    },
    {
      key: 2,
      name: "Teacher"
    },
    {
      key: 3,
      name: "Student"
    }
  ];

  const renderQuickAccess = menuQuickAccess.map(item => {
    return <Menu.Item key={item.key}>{item.name}</Menu.Item>;
  });

  return (
    <React.Fragment>
      <Menu
        theme="light"
        // onClick={setBackgroundColor}
        selectedKeys={[current]}
        mode="horizontal"
      >
        {mainMenuList.map(menu => {
          return (
            <Menu.SubMenu
              className={menu.class}
              title={
                <span className="submenu-title-wrapper">
                  <Icon type={menu.logo} />
                  {menu.name}
                </span>
              }
            >
              {menu.key === 2 ? renderQuickAccess : null}
            </Menu.SubMenu>
          );
        })}
      </Menu>
    </React.Fragment>
  );
}
