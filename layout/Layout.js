import { useEffect } from "react";
import Head from "next/head";

import { Layout } from "antd";

import HeaderOne from "./Header-1";
import HeaderTwo from "./Header-2";

import "./ant-style.less";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout(props) {
  useEffect(() => {
    console.log(props);
    console.log("rendering");
  });

  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <Header id="header-1" className="header-1">
          <HeaderOne />
        </Header>
        <Header id="header-2" className="header-2">
          <HeaderTwo />
        </Header>

        <Layout className="yes">
          {props.route === "user" && (
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onBreakpoint={broken => {
                console.log("broken", broken);
              }}
              onCollapse={(collapsed, type) => {
                // props.onSiderChange(collapsed);
                console.log("cc", collapsed, type);
              }}
            >
              {props.sider}
            </Sider>
          )}
          <Content
            style={{
              // background: "#fff",
              padding: 10,
              marginLeft: 30,
              marginRight: 30,
              minHeight: 450
            }}
          >
            {props.children}
          </Content>
        </Layout>
        <Footer
          style={{
            // position: "absolute",
            lineHeight: 1,
            // bottom: 0,
            padding: 10,
            marginLeft: "100px",
            // transform: "translateX(-50%)"
          }}
        >
          <a
            href="https://subarnanto.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "grey" }}
          >
            Created by Eko Andri Subarnanto <br />
            <span>Front End Web Developer @ VHP</span>
          </a>
        </Footer>
      </Layout>
    </div>
  );
}
