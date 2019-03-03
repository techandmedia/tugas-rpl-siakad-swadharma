import React from "react";
import { Layout } from "antd";
import "./ant-style.css";

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout(props) {
  
  return (
    <Layout>
      <Header id="header-1" className="header-1">
        {props.headerOne}
      </Header>
      <Header id="header-2" className="header-2">
        {props.headerTwo}
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
          // bottom: 0,
          padding: 10,
          // left: "50%",
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
  );
}
