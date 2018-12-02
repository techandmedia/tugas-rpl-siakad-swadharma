import React from "react";
import { Tabs } from "antd";
import {
  // DarkCard as Card,
  WhiteJumboCard as JumboCard
} from "../Basic Component/Card";
import KalenderKuliah from "../Form/JadwalKuliah";
import JadwalKuliah from "../Mahasiswa/Table/JadwalKuliah";

const TabPane = Tabs.TabPane;

function callback(key) {
  // console.log(key);
}

// karena pass props dengan cara {...this.state.users} dari App.js
// maka pass props bisa dengan 2 cara
// cara 1. memanggil rest of props yang akan diterima dalam bentuk array
// export default function Dashboard(...props) {
// console.log('URL', props[0].URL)
// penggunaan nya dengan cara props[array dengan index 0].nama props nya

// cara ke 2, dengan menggunakan deconstrcution props dari nama nya
// cara ini lebih mudah dalam penggunaan nya pada saat memanggil
// cukup dengan nama props.nama field, tidak perlu tambahan index
// dan lebih mudah dideconstruct

export default class Dashboard extends React.Component {
  state = {
    tableUpdate: null
  }

  render() {
    const { URL, first_name, last_name } = this.props;
    const { tableUpdate } = this.state

    return (
      <React.Fragment>
        <JumboCard>
          <h1
            style={{
              // color: "#ffcecc",
              cursor: "pointer",
              fontSize: "1.6em",
              fontWeight: "300"
            }}
          >
            Selamat Datang {first_name} {last_name}
            {/* Selamat Datang {props[0].first_name} {props[0].last_name} */}
          </h1>
          <Tabs onChange={callback} type="card">
            <TabPane tab="Isi Jadwal Kuliah" key="1">
              {}
              <KalenderKuliah URL={URL} tableUpdate={tableUpdate} />
              {/* <JadwalKuliah URL={URL}/> */}

              <hr style={{ borderBottom: "none" }} />
            </TabPane>
            <TabPane tab="Lihat Jadwal Kuliah" key="2">
              <JadwalKuliah URL={URL} tableUpdate={tableUpdate}/>
            </TabPane>
            <TabPane tab="Tab Next" key="3">
              <p>
                Ini adalah demonstrasi penggunaan Sistem Informasi Akademik
                Kampus berbasis online. Anda sedang menjalankan aplikasi ini
                dari MODE {process.env.NODE_ENV}.
              </p>
              <hr style={{ borderBottom: "none" }} />
              <p>
                Gunakan login ini di bawah ini untuk masuk ke masing masing role
                / tipe login. Anda juga dapat login dan logout dengan
                menggunakan menu Member Login di kanan atas.
              </p>
              <p>
                Anda juga dapat register dan dapat mendaftar sebagai Admin,
                Dosen atau Mahasiswa. Sebagian besar fitur masih dalam
                perkembangan namun login, registrasi dan validasi login sudah
                dapat berjalan baik. Masing masing role akan memiliki warna
                sidebar yang berbeda sebagai tanda Anda login dengan role yang
                dimaksud.
              </p>
            </TabPane>
          </Tabs>
        </JumboCard>

        {/* <Row type="flex" justify="space-around" /> */}
      </React.Fragment>
    );
  }
}
