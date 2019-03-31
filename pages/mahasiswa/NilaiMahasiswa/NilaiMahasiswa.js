import React, { useEffect, useState } from "react";
import { Table, Form, Cascader, Row, Col } from "antd";
import getNilai from "./getNilai";
import getAllData from "../../admin/getAllData";

import "./style.less";

const columns = [
  {
    title: "No",
    dataIndex: "id_daftar_nilai",
    render: (text, record) => <span>{record.id_daftar_nilai}</span>,
    width: 150
  },
  {
    title: "Mata Kuliah",
    dataIndex: "nama_mata_kuliah"
  },
  {
    title: "Nilai Angka",
    dataIndex: "nilai",
    width: 150
  },
  {
    title: "Nilai Huruf",
    dataIndex: "nilai_huruf",
    render: (text, record) => (
      <span>
        {record.nilai > 80
          ? "A"
          : record.nilai > 70
          ? "B"
          : record.nilai > 60
          ? "C"
          : record.nilai > 50
          ? "D"
          : "E"}
      </span>
    ),
    width: 150
  },
  {
    title: "SKS",
    dataIndex: "sks",
    width: 150
  },
  {
    title: "Bobot",
    dataIndex: "address",
    render: (text, record) => <span>{record.nilai * record.sks}</span>,
    width: 150
  }
];

const formItemLayout = {
  labelCol: {
    xs: { span: 8 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 8 },
    sm: { span: 8 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

function DaftarNilai(props) {
  const nilai = getNilai();
  const data = getAllData();
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
  const [daftarNim, setDaftarNim] = useState([]);
  const [dataTable, setDatable] = useState([]);
  const [mahasiswa, setMahasiswa] = useState("");
  const [nim, setNim] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    if (nilai !== undefined) {
      console.log(nilai);
      setDatable(nilai.data);
    }
  }, [nilai]);

  useEffect(() => {
    if (nilai !== undefined) {
      if (nim !== undefined || name !== undefined) {
        // console.log(nilai);
        setDatable(
          nilai.data.filter(data => {
            // console.log(data);
            return data.id_mahasiswa === nim[0];
            // if (data.id_mahasiswa === parseInt(nim[0])) {
            console.log(data.id_mahasiswa, nim[0]);
            // }
          })
        );
      }
      console.log(nim);
    }
  }, [nim, name]);

  useEffect(() => {
    if (data !== undefined) {
      setDaftarMahasiswa(data.daftarMahasiswa);
      setDaftarNim(data.daftarNimMahasiswa);
    }
  }, [data]);

  function onNimChange(value) {
    console.log(value);
    props.form.setFieldsValue({
      nama: value
    });
    setName(value);
  }

  function onNameChange(value) {
    console.log(value);
    props.form.setFieldsValue({
      nim: value
    });
    setNim(value);
  }

  const { getFieldDecorator } = props.form;

  return (
    <React.Fragment>
      <Form {...formItemLayout}>
        {/* Daftar Mahasiswa */}
        <Row>
          <Col span={4} />
          <Col span={10}>
            <Form.Item label="Pilih NIM Mahasiswa">
              {getFieldDecorator("nim", {})(
                <Cascader options={daftarNim} onChange={onNimChange} />
              )}
            </Form.Item>
          </Col>

          <Col span={10} offset={0}>
            <Form.Item label="Pilih Nama Mahasiswa">
              {getFieldDecorator("nama", {})(
                <Cascader options={daftarMahasiswa} onChange={onNameChange} />
              )}
            </Form.Item>
          </Col>
          <Col span={4} />
        </Row>
      </Form>
      <Table
        columns={columns}
        dataSource={dataTable}
        bordered
        rowKey="id_daftar_nilai"
        title={() => "Daftar Kartu Rencana Studi Mahasiswa"}
        footer={() => {
          return (
            <React.Fragment>
              <p style={{ marginLeft: 690 }}>Jumlah SKS</p>
              <p style={{ marginLeft: 690 }}>Total Nilai Kumulatif</p>
              <p style={{ marginLeft: 690 }}>IPK</p>
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
}

const FormKRS = Form.create()(DaftarNilai);

export default FormKRS;
