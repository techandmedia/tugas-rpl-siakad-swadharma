import React from "react";
// import Loadable from 'react-loadable'
import { Row } from "antd";
import { DarkCard as Card, JumboCard } from "../Basic Component/Card";
import { BaseButton as Button } from "../Basic Component/Button";

// const Loading = () => <div>Loading...</div>;

// when no user sign in
// const MainContent = Loadable({
//   loader: () => import("./Components/Content/MainContent"),
//   loading: Loading
// });

const PublicContent = props => {
  return (
    <React.Fragment>
      <JumboCard title="Demo - Sistem Informasi Akademik Kampus">
        <p>
          Ini adalah demonstrasi penggunaan Sistem Informasi Akademik Kampus
          berbasis online. Anda sedang menjalankan aplikasi ini dari MODE{" "}
          {process.env.NODE_ENV}. Silahkan klik pada "Tentang Siakad" pada menu di atas untuk mengetahui perkembangan sistem siakad ini.
        </p>
        <hr style={{ borderBottom: "none" }} />
        <p>
          Gunakan login ini di bawah ini untuk masuk ke masing masing role /
          tipe login. Anda juga dapat login dan logout dengan menggunakan menu
          Member Login di kanan atas.
        </p>
        <p>
          Anda juga dapat register dan dapat mendaftar sebagai Admin, Dosen atau
          Mahasiswa. Sebagian besar fitur masih dalam perkembangan namun login,
          registrasi dan validasi login sudah dapat berjalan baik. Masing masing
          role akan memiliki warna sidebar yang berbeda sebagai tanda Anda login
          dengan role yang dimaksud.
        </p>
      </JumboCard>
      
      <Row type="flex" justify="space-around">

        <Card title="Admin">
          <p>Email: admin@swa.com</p>
          <p>Password: 123</p>
          <hr />
          <br />
          <Button onClick={() => props.onRouteChange("signin")}>
            {props.signinLabel}
          </Button>
          <br />
          <br />
          <Button onClick={() => props.onRouteChange("register")}>
            {props.registerLabel}
          </Button>
        </Card>

        <Card title="Dosen">
          <p>Email: adi@swa.com</p>
          <p>Password: 123</p>
          <hr />
          <br />
          <Button onClick={() => props.onRouteChange("signin")}>
            {props.signinLabel}
          </Button>
          <br />
          <br />
          <Button onClick={() => props.onRouteChange("register")}>
            {props.registerLabel}
          </Button>
        </Card>
        
        <Card title="Mahasiswa">
          <p>Email: and@swa.com</p>
          <p>Password: 123</p>
          <hr />
          <br />
          <Button onClick={() => props.onRouteChange("signin")}>
            {props.signinLabel}
          </Button>
          <br />
          <br />
          <Button onClick={() => props.onRouteChange("register")}>
            {props.registerLabel}
          </Button>
        </Card>
      </Row>
    </React.Fragment>
  );
};

export default PublicContent;
