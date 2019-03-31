import Link from "next/link";
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
      id: "login",
      name: "Login"
    },
    {
      id: "register",
      name: "Register"
    },
    {
      id: "teacher",
      name: "Daftar Dosen"
    },
    {
      id: "isi-data-nilai",
      name: "Isi Nilai Mahasiswa"
    },
    {
      id: "student",
      name: "Daftar Mahasiswa"
    },
    {
      id: "status",
      name: "Status Mahasiswa"
    }
  ];

  const renderQuickAccess = menuQuickAccess.map(route => {
    return (
      <Menu.Item key={route.id}>
        <Link href={route.id}>
          <a>{route.name}</a>
        </Link>
      </Menu.Item>
    );
  });

  function onMenuClick(e) {
    console.log(e.key);
    console.log(props);
    // props.setMainRoute(e.key);
  }

  return (
    <React.Fragment>
      <Menu
        theme="light"
        // selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="home" className="header-1-logo">
          <Link href="/">
            <a>
              <Icon type="home" />
              Logo123
            </a>
          </Link>
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
