import React from "react";
import { Table, Button } from "antd";
import { getJadwalKuliah } from "../../data/GetData";
import moment from '../../data/Moment'

export default class JadwalKuliah extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    jadwalKuliah: []
  };

  componentDidMount() {
    getJadwalKuliah(this.props.URL).then(response => {
      // console.log("cdM44", response.data[0]);
      this.setState({
        jadwalKuliah: response.data.map(jadwal => ({
          key: jadwal.id_jadwal_kuliah,
          tanggal: moment(jadwal.tanggal).format("DD MMMM YYYY"),
          dosen: jadwal.nama_dosen,
          jurusan: jadwal.nama_jurusan,
          kelas: jadwal.nama_kelas,
          mata_kuliah: jadwal.nama_mata_kuliah,
          no_ruangan: jadwal.no_ruangan,
          status_kelas: jadwal.status_kelas,
          jam_kelas: `${jadwal.jam_kuliah_awal}-${jadwal.jam_kuliah_akhir}`
        }))
      });
    });
  }

  shouldComponentUpdate(){
    return true
  }

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age"
      }
    });
  };

  render() {
    // let { sortedInfo, filteredInfo } = this.state;
    // sortedInfo = sortedInfo || {};
    // filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "Tanggal",
        dataIndex: "tanggal",
        key: "tanggal"
      },
      {
        title: "Jam",
        dataIndex: "jam_kelas",
        key: "jam_kelas"
      },
      {
        title: "Kelas",
        dataIndex: "kelas",
        key: "kelas"
      },
      {
        title: "Mata Kuliah",
        dataIndex: "mata_kuliah",
        key: "mata_kuliah"
        // filters: [{ text: "Joe", value: "Joe" }, { text: "Jim", value: "Jim" }],
        // filteredValue: filteredInfo.name || null,
        // onFilter: (value, record) => record.name.includes(value),
        // sorter: (a, b) => a.name.length - b.name.length,
        // sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      {
        title: "Dosen",
        dataIndex: "dosen",
        key: "dosen"
        // sorter: (a, b) => a.age - b.age,
        // sortOrder: sortedInfo.columnKey === "age" && sortedInfo.order
      },
      {
        title: "Status",
        dataIndex: "status_kelas",
        key: "status_kelas"
        // filters: [
        //   { text: "London", value: "London" },
        //   { text: "New York", value: "New York" }
        // ],
        // filteredValue: filteredInfo.address || null,
        // onFilter: (value, record) => record.address.includes(value),
        // sorter: (a, b) => a.address.length - b.address.length,
        // sortOrder: sortedInfo.columnKey === "address" && sortedInfo.order
      },
      {
        title: "Jurusan",
        dataIndex: "jurusan",
        key: "jurusan"
      },
    ];
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button style={{ marginRight: 5 }} onClick={this.setAgeSort}>
            Sort age
          </Button>
          <Button style={{ marginRight: 5 }} onClick={this.clearFilters}>
            Clear filters
          </Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table
          columns={columns}
          dataSource={this.state.jadwalKuliah}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
