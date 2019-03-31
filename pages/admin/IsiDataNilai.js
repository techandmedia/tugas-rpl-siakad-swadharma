import React, { useState, useEffect } from "react";
import { Form, Cascader, Input, Button, Row, Col } from "antd";
import getAllData from "./getAllData";
import { postNilai } from "../../utils/postData";

function IsiDataNilai(props) {
  const data = getAllData();
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
  const [daftarNim, setDaftarNim] = useState([]);
  const [daftarMataKuliah, setDaftarMataKuliah] = useState([]);

  useEffect(() => {
    if (data !== undefined) {
      // console.log(data);
      setDaftarMahasiswa(data.daftarMahasiswa);
      setDaftarMataKuliah(data.daftarMataKuliah);
      setDaftarNim(data.daftarNimMahasiswa);
    }
  }, [data]);

  // useEffect(() => {
  //   // console.log(daftarMahasiswa);
  // }, [daftarMahasiswa, daftarMataKuliah]);

  function onNimChange(value) {
    props.form.setFieldsValue({
      nama: value
    });
  }

  function onNameChange(value) {
    props.form.setFieldsValue({
      nim: value
    });
  }

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
      const id_mahasiswa = values.nim[0];
      const id_mata_kuliah = values.matkul[0];
      const nilai = parseInt(values.nilai);
      const queries = {
        id_mahasiswa: id_mahasiswa,
        id_mata_kuliah: id_mata_kuliah,
        nilai: nilai
      };
      if (!err) {
        console.log(
          "Received values of form: ",
          id_mahasiswa,
          id_mata_kuliah,
          nilai
        );
        postNilai(queries);
      }
    });
  }

  return (
    <React.Fragment>
      <Row gutter={16}>
        <Col span={4} />

        <Col span={16}>
          <h1 style={{ marginLeft: 300 }}>Form Isi Data Nilai Mahasiswa</h1>
          <Form {...formItemLayout} onSubmit={handleSubmit}>
            {/* Daftar Mahasiswa */}
            <Form.Item label="Pilih NIM Mahasiswa">
              {getFieldDecorator("nim", {})(
                <Cascader options={daftarNim} onChange={onNimChange} />
              )}
            </Form.Item>
            <Form.Item label="Pilih Nama Mahasiswa">
              {getFieldDecorator("nama", {})(
                <Cascader options={daftarMahasiswa} onChange={onNameChange} />
              )}
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
                Masukkan Nilai
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={4} />
      </Row>
    </React.Fragment>
  );
}

const FormDataNilai = Form.create({ name: "register" })(IsiDataNilai);

export default FormDataNilai;
