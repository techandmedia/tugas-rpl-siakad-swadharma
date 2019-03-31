import React, { useState, useEffect } from "react";
import { Form, Cascader, Input, Button } from "antd";
import { getDataMahasiswa, getDataMataKuliah } from "./getAllData";

function IsiDataNilai(props) {
  const { dataMahasiswa, isMahasiswaLoading } = useState(getDataMahasiswa());
  const dataMataKuliah = getDataMataKuliah();

  let a = getDataMahasiswa();
  console.log(a.dataMahasiswa);
  // const [daftarMataKuliah, setDaftarMataKuliah] = useState([]);
  // const [dataMahasiswa, loadMahasiswa] = useAxios("mahasiswa");
  // const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);

  console.log(dataMahasiswa, isMahasiswaLoading);
  useEffect(() => {
    console.log(dataMahasiswa);
    if (dataMahasiswa) {
      // setDaftarMataKuliah(
      //   dataMataKuliah.map(data => ({
      //     key: data.id_mata_kuliah,
      //     value: data.id_mata_kuliah,
      //     label: data.nama_mata_kuliah
      //   }))
      // );
      // setDaftarMahasiswa(
      //   dataMahasiswa.map(data => ({
      //     key: data.id_mahasiswa,
      //     value: data.id_mahasiswa,
      //     label: data.nama_penduduk
      //   }))
      // );
    }
  }, [dataMahasiswa]);

  const { getFieldDecorator } = props.form;

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

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFieldsAndScroll((err, values) => {
      const nim = values.nim;
      const mata_kuliah = values.matkul[0];
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Form ISI Data Nilai Mahasiswa</h1>
      {/* <Form {...formItemLayout} onSubmit={handleSubmit}> */}
      {/* Daftar Mahasiswa */}
      {/* <Form.Item label="Pilih NIM Mahasiswa">
          {getFieldDecorator("nim", {})(<Cascader options={daftarMahasiswa} />)}
        </Form.Item>

        <Form.Item label="Daftar Mata Kuliah">
          {getFieldDecorator("matkul", {})(
            <Cascader options={daftarMataKuliah} />
          )}
        </Form.Item>

        <Form.Item label="Masukkan Nilai">
          {getFieldDecorator("nilai", {})(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form> */}
    </React.Fragment>
  );
}

const IrappedisiDataNilai = Form.create({ name: "register" })(IsiDataNilai);

export default IrappedisiDataNilai;
