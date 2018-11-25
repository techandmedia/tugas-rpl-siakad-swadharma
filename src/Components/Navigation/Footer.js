import React from "react";
import { Layout } from "antd";
import './footer.css'

const { Footer } = Layout;

const ThisFooter = () => {
  return (
    <React.Fragment>
      <Footer className="footer">
      {/* <Footer style={footerStyle}> */}
        <p>Sistem Informasi Akademi Kampus - Tugas Kuliah RPL © 2018</p>
        <p>Created by Eko Andri Subarnanto - Web Developer & Designer</p>
      </Footer>
    </React.Fragment>
  );
};

export default ThisFooter;

const footerStyle = {
  background: "transparent",
  lineHeight: "0.5em",
  padding: "0.5em",
  paddingTop: "1em",
  textAlign: "center",
  color: "white",
  fontSize: "0.9em",
  marginTop: "5em"
};
