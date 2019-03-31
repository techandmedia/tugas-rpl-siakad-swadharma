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
    render: (text, record) => (
      <span>
        {record.nilai > 80
          ? 4 * record.sks
          : record.nilai > 70
          ? 3 * record.sks
          : record.nilai > 60
          ? 2 * record.sks
          : record.nilai > 50
          ? 1 * record.sks
          : 0}
      </span>
    ),
    width: 150
  }
];

const formItemLayout = {
  labelCol: {
    xs: { span: 10, offset: 0 },
    sm: { span: 10, offset: 0 }
  },
  wrapperCol: {
    xs: { span: 6, offset: 0 },
    sm: { span: 6, offset: 0 }
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
  const [nim, setNim] = useState(null);
  const [name, setName] = useState(null);
  const [kumulatif, setKumulatif] = useState(0);
  const [sks, setSks] = useState(0);
  const [ipk, setIpk] = useState(0);

  useEffect(() => {
    if (nilai !== undefined) {
      setDatable(nilai.data);
    }
  }, [nilai]);

  useEffect(() => {
    if (nilai !== undefined) {
      if (nim !== undefined || nim[0] !== null || name !== undefined) {
        let temp = nilai.data.filter(data => {
          return data.id_mahasiswa === nim[0];
        });
        setDatable(temp);
        let tempKumulatif = temp.map(data =>
          data.nilai > 80
            ? data.sks * 4
            : data.nilai > 70
            ? data.sks * 3
            : data.nilai > 60
            ? data.sks * 2
            : data.nilai > 50
            ? data.sks * 1
            : 0
        );
        let tempSks = temp.map(data => data.sks);
        console.log(tempSks);

        const reducer = (accumulator, currentValue) =>
          accumulator + currentValue;

        setSks(tempSks.reduce(reducer));
        setKumulatif(tempKumulatif.reduce(reducer));
      }
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
      <Row gutter={0}>
        <Form {...formItemLayout} style={{ marginTop: 10 }}>
          <Col span={2} />
          <Col span={10}>
            {/* Daftar Mahasiswa */}

            <Form.Item label="Cari NIM Mahasiswa" style={{ marginBottom: 20 }}>
              {getFieldDecorator("nim", {})(
                <Cascader options={daftarNim} onChange={onNimChange} />
              )}
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Cari Nama Mahasiswa">
              {getFieldDecorator("nama", {})(
                <Cascader options={daftarMahasiswa} onChange={onNameChange} />
              )}
            </Form.Item>
          </Col>
          <Col span={2} />
        </Form>
      </Row>
      <Table
        columns={columns}
        dataSource={dataTable}
        bordered
        rowKey="id_daftar_nilai"
        title={() => "Daftar Kartu Rencana Studi Mahasiswa"}
        footer={() => {
          return (
            <React.Fragment>
              <p style={{ marginLeft: 590 }}>
                Jumlah SKS :{" "}
                <span
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    marginLeft: 10
                  }}
                >
                  {sks}
                </span>
              </p>
              <p style={{ marginLeft: 536 }}>
                Total Nilai Kumulatif :{" "}
                <span
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    marginLeft: 10
                  }}
                >
                  {kumulatif}
                </span>
              </p>
              <p style={{ marginLeft: 640 }}>
                IPK :{" "}
                <span
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    marginLeft: 10
                  }}
                >
                  {kumulatif / sks === NaN ? 0 : kumulatif / sks}
                </span>
              </p>
            </React.Fragment>
          );
        }}
      />
    </React.Fragment>
  );
}

const FormKRS = Form.create()(DaftarNilai);

export default FormKRS;
