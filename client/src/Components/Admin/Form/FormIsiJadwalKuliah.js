import React from "react";
import { Form, Cascader, Button } from "antd";
import { success, error } from "../../Basic Component/InformationModal";
import { postJadwalKuliah } from "../../data/PostData";
// import './styles.css'

// Form Isi Jadwal
const FormItem = Form.Item;

class FormJadwal extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    dosen: [],
    jamKuliah: [],
    jurusan: [],
    mataKuliah: [],
    namaKelas: [],
    programStudi: [],
    ruanganKuliah: [],
    semester: [],
    statusKelas: [],
    values: [],
    role: [],
  };

  buatJadwal = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        postJadwalKuliah(
          this.props.URL,
          values.id_dosen,
          values.id_jam_kuliah,
          values.id_jurusan,
          values.id_nama_kelas,
          values.id_mata_kuliah,
          values.id_ruangan,
          values.id_semester,
          values.id_status_kelas,
          values.id_program_studi,
          this.props.tanggal
        );
        success("Sukses", "Anda berhasil menambahkan jadwal");
      } else if (err) {
        error("Error", "Cek kembali masukkan Anda");
      }
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  componentDidMount() {
    console.log(this.props)
    this.setState({
      dosen: this.props.dosen.map(data => ({
        id: data.id_dosen,
        value: data.id_dosen,
        label: data.nama_dosen
      }))
    });

    // mataKuliah
    this.setState({
      mataKuliah: this.props.mataKuliah.map(data => ({
        id: data.id_mata_kuliah,
        value: data.id_mata_kuliah,
        label: data.nama_mata_kuliah
      }))
    });

    // namaKelas
    this.setState({
      namaKelas: this.props.namaKelas.map(data => ({
        id: data.id_nama_kelas,
        value: data.id_nama_kelas,
        label: data.nama_kelas
      }))
    });

    // jamKuliah
    this.setState({
      jamKuliah: this.props.jamKuliah.map(data => ({
        id: data.id_jam_kuliah,
        value: data.id_jam_kuliah,
        label: `${data.jam_kuliah_awal}-${data.jam_kuliah_akhir}`
      }))
    });

    // jurusan
    this.setState({
      jurusan: this.props.jurusan.map(data => ({
        id: data.id_jurusan,
        value: data.id_jurusan,
        label: data.nama_jurusan
      }))
    });

    // programStudi
    this.setState({
      programStudi: this.props.programStudi.map(data => ({
        id: data.id_program_studi,
        value: data.id_program_studi,
        label: data.program_studi
      }))
    });

    // ruanganKuliah
    this.setState({
      ruanganKuliah: this.props.ruanganKuliah.map(data => ({
        id: data.id_ruangan,
        value: data.id_ruangan,
        label: data.no_ruangan
      }))
    });

    // semester
    this.setState({
      semester: this.props.semester.map(data => ({
        id: data.id_semester,
        value: data.id_semester,
        label: data.semester
      }))
    });

    // statusKelas
    this.setState({
      statusKelas: this.props.statusKelas.map(data => ({
        id: data.id_status_kelas,
        value: data.id_status_kelas,
        label: data.status_kelas
      }))
    });

    // role
    this.setState({
      role: this.props.role.map(data => ({
        id: data.id_role,
        value: data.id_role,
        label: data.nama_role
      }))
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
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

    return (
      <Form onSubmit={this.buatJadwal}>
        <FormItem {...formItemLayout} label="Jam Kuliah">
          {getFieldDecorator("id_jam_kuliah", {
            // initialValue: ["Admin"],
            rules: [
              {
                required: true,
                message: "Harap isi jam kuliah"
              }
            ]
          })(<Cascader options={this.state.jamKuliah} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Jurusan">
          {getFieldDecorator("id_jurusan", {
            // initialValue: ["Admin"],
            rules: [
              {
                required: true,
                message: "Harap isi jurusan"
              }
            ]
          })(<Cascader options={this.state.jurusan} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Mata Kuliah">
          {getFieldDecorator("id_mata_kuliah", {
            rules: [
              {
                // type: "array",
                required: true,
                message: "Harap isi mata kuliah"
              }
            ]
          })(<Cascader options={this.state.mataKuliah} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Dosen">
          {getFieldDecorator("id_dosen", {
            rules: [
              {
                required: true,
                message: "Harap isi nama Dosen"
              }
            ]
          })(<Cascader options={this.state.dosen} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Nama Kelas">
          {getFieldDecorator("id_nama_kelas", {
            rules: [
              {
                required: true,
                message: "Harap isi nama Kelas"
              }
            ]
          })(<Cascader options={this.state.namaKelas} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Program Studi">
          {getFieldDecorator("id_program_studi", {
            rules: [
              {
                required: true,
                message: "Harap isi Program Studi"
              }
            ]
          })(<Cascader options={this.state.programStudi} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Ruangan Kuliah">
          {getFieldDecorator("id_ruangan", {
            rules: [
              {
                required: true,
                message: "Harap isi no ruangan"
              }
            ]
          })(<Cascader options={this.state.ruanganKuliah} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Semester">
          {getFieldDecorator("id_semester", {
            rules: [
              {
                required: true,
                message: "Harap isi semester"
              }
            ]
          })(<Cascader options={this.state.semester} />)}
        </FormItem>

        <FormItem {...formItemLayout} label="Status Kelas">
          {getFieldDecorator("id_status_kelas", {
            rules: [
              {
                required: true,
                message: "Harap isi status Kelas"
              }
            ]
          })(<Cascader options={this.state.statusKelas} />)}
        </FormItem>

        {/* Buat Jadwal */}
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Buat Jadwal
          </Button>
        </FormItem>

        {/* Reset Jadwal */}
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" onClick={this.handleReset}>
            Reset
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const FormJadwalKuliah = Form.create()(FormJadwal);

export default FormJadwalKuliah;
