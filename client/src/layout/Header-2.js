import React, { useState } from "react";
import { Menu, Icon } from "antd";

export default function Header_2() {
  const [current] = useState(1);
  const menuList = [
    {
      key: 1,
      name: "Home",
      class: `header-2-home`
    },
    {
      key: 2,
      name: "Contact Us",
      class: `header-2`
    },
    {
      key: 3,
      name: "About Us",
      class: `header-2`
    }
  ];

  return (
    <React.Fragment>
      <Menu
        theme="light"
        // onClick={setBackgroundColor}
        selectedKeys={[current]}
        mode="horizontal"
      >
        {menuList.map(item => {
          return (
            <Menu.Item key={item.key} className={item.class}>
              {/* <img src={item.img} alt={item.name} className={item.imageCss} /> */}
              <h3 className={item.textCss}>{item.name}</h3>
            </Menu.Item>
          );
        })}
      </Menu>
    </React.Fragment>
  );
}
