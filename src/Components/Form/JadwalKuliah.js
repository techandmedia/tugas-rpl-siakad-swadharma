import React from "react";
import { Alert, Calendar, Badge } from "antd";
import ModalJadwalKuliah from "../Admin/Form/ModalIsiJadwalKuliah";
// import Clock from "../Basic Component/Clock";
import "./JadwalKuliah.css";

import {
  getDosen,
  getJamKuliah,
  getJurusan,
  getMataKuliah,
  getNamaKelas,
  getProgramStudi,
  getRuanganKuliah,
  getSemester,
  getStatusKelas,
  getRole
} from "../data/GetData";

import moment from "../data/Moment";

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." }
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." }
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." }
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

// example MySQL DATETIME
// const dateTime = "2017-02-04 11:23:54";

// let dateTimeParts = dateTime.split(/[- :]/); // regular expression split that creates array with: year, month, day, hour, minutes, seconds values
// dateTimeParts[1]--; // monthIndex begins with 0 for January and ends with 11 for December so we need to decrement by one

// const dateObject = new Date(...dateTimeParts); // our Date object

export default class JadwalKuliah extends React.Component {
  state = {
    value: moment(),
    selectedValue: moment(),
    loginDate: moment(),
    visible: false,
    loading: false,
    jadwalKuliah: [],
    dosen: [],
    jamKuliah: [],
    jurusan: [],
    mataKuliah: [],
    namaKelas: [],
    programStudi: [],
    ruanganKuliah: [],
    semester: [],
    statusKelas: [],
    role: []
  };

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
      visible: true
    });
  };

  componentDidMount() {
    getDosen(this.props.URL).then(response => {
      this.setState({
        dosen: response.data
      });
    });

    getJamKuliah(this.props.URL).then(response => {
      this.setState({
        jamKuliah: response.data
      });
    });

    getJurusan(this.props.URL).then(response => {
      this.setState({
        jurusan: response.data
      });
    });

    getMataKuliah(this.props.URL).then(response => {
      this.setState({
        mataKuliah: response.data
      });
    });

    getNamaKelas(this.props.URL).then(response => {
      this.setState({
        namaKelas: response.data
      });
    });

    getProgramStudi(this.props.URL).then(response => {
      this.setState({
        programStudi: response.data
      });
    });

    getRuanganKuliah(this.props.URL).then(response => {
      this.setState({
        ruanganKuliah: response.data
      });
    });

    getSemester(this.props.URL).then(response => {
      this.setState({
        semester: response.data
      });
    });

    getStatusKelas(this.props.URL).then(response => {
      this.setState({
        statusKelas: response.data
      });
    });

    getRole(this.props.URL).then(response => {
      this.setState({
        role: response.data
      });
    });
  }
  // Not best practice to put async await in lifecycle hooks
  // because cDM is an async function too
  // async componentDidMount() {
  //   this.setState({
  //     dataDosen: await getDosen(this.props.URL)
  //   });
  // }

  // Show Modal untuk mengisi Jadwal Kuliah
  onPanelChange = value => {
    this.setState({ value });
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 500);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { value, selectedValue, visible, loading, loginDate } = this.state;
    const selectedDate = selectedValue && selectedValue.format("D MMMM YYYY");
    const tanggal = selectedValue.format();
    const {
      dosen,
      jamKuliah,
      jurusan,
      mataKuliah,
      namaKelas,
      programStudi,
      ruanganKuliah,
      semester,
      statusKelas,
      role
    } = this.state;
    // const { tableUpdate } = this.props;

    return (
      <React.Fragment>
        <Alert
          message={`Anda Login pada tanggal: ${loginDate &&
            loginDate.format(
              "D MMMM YYYY, h:mm:ss a"
            )} - Silahkan klik pada tanggal untuk membuat Jadwal Kuliah baru`}
        />
        <Calendar
          dateCellRender={dateCellRender}
          monthCellRender={monthCellRender}
          value={value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
        />
        <ModalJadwalKuliah
          URL={this.props.URL}
          dosen={dosen}
          jamKuliah={jamKuliah}
          jurusan={jurusan}
          mataKuliah={mataKuliah}
          programStudi={programStudi}
          namaKelas={namaKelas}
          ruanganKuliah={ruanganKuliah}
          semester={semester}
          statusKelas={statusKelas}
          role={role}
          visible={visible}
          selectedDate={selectedDate}
          tanggal={tanggal}
          loading={loading}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        />
      </React.Fragment>
    );
  }
}
