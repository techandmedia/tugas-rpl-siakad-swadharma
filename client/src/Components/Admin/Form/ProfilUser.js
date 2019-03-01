import React from "react";
import {
  Form,
  Input,
  // Tooltip,
  // Icon,
  // Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button
  // AutoComplete
  // Card
} from "antd";
import { NormalCard as Card } from "../../Basic Component/Card";
import {
  success,
  error,
  info,
  warning
} from "../../Basic Component/InformationModal";

import { registerUser } from "../../data/PostData";

const FormItem = Form.Item;
const Option = Select.Option;
// const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      select: null,
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      const first_name = values.first_name;
      const last_name = values.last_name;
      const email = values.email;
      const password = values.password;
      const role = values.role;

      if (!err) {
        registerUser(
          this.props.URL,
          first_name,
          last_name,
          role,
          email,
          password
        ).then(res => {
          const code = res.data.code;
          if (code === 700) {
            error("Input Kosong", "Input tidak boleh ada yang kosong");
          } else if (code === 200) {
            success(
              "Anda berhasil mendaftar",
              "Silahkan Login untuk masuk ke dashboard Anda"
            );
          } else if (code === 204) {
            warning(
              "Email sudah terdaftar",
              "Pilih login untuk masuk ke dashboard Anda atau gunakan email Account lain"
            );
          } else {
            info(
              "Masalah Koneksi",
              "Ada masalah dengan koneksi Anda, harap cek koneksi internet Anda dan ulangi lagi"
            );
          }
        });
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  infoClick() {
    info("Fitur ini belum tersedia", "Silahkan kembali lagi nanti");
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    // const { autoCompleteResult } = this.state;

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
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "62"
    })(
      <Select style={{ width: 70 }}>
        <Option value="62">+62</Option>
        <Option value="61">+61</Option>
      </Select>
    );

    // const websiteOptions = autoCompleteResult.map(website => (
    //   <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    // ));

    return (
      <Row
        type="flex"
        justify="center"
        style={{ marginTop: "1em", padding: "1em" }}
      >
        <Col md={10}>
          <Card
            title="Demo Register - Silahkan buat Account baru dan sesuaikan dengan status Anda (Admin, Dosen, Mahasiswa, Calon Mahasiswa)"
            headStyle={{
              fontWeight: 300,
              color: "#ba2644",
              textAlign: "center"
            }}
          >
            <Form onSubmit={this.handleSubmit}>
              <FormItem {...formItemLayout} label={"First Name"}>
                {getFieldDecorator("first_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your first name!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="Nama Depan Anda" />)}
              </FormItem>
              <FormItem {...formItemLayout} label={"Last Name"}>
                {getFieldDecorator("last_name", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your last name!",
                      whitespace: false
                    }
                  ]
                })(<Input placeholder="Nama Depan Anda" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="E-mail">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input placeholder="youraccount@email.com" />)}
              </FormItem>
              <FormItem {...formItemLayout} label="Password">
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "Please input your password!"
                    },
                    {
                      validator: this.validateToNextPassword
                    }
                  ]
                })(
                  <Input type="password" placeholder="Make a strong password" />
                )}
              </FormItem>
              {/* <FormItem {...formItemLayout} label="Confirm Password">
                {getFieldDecorator("confirm", {
                  rules: [
                    {
                      required: true,
                      message: "Please confirm your password!"
                    },
                    {
                      validator: this.compareToFirstPassword
                    }
                  ]
                })(
                  <Input
                    type="password"
                    onBlur={this.handleConfirmBlur}
                    placeholder="Ulangi Password Anda"
                  />
                )}
              </FormItem> */}
              {/* <FormItem
                {...formItemLayout}
                label={
                  <span>
                    Nickname&nbsp;
                    <Tooltip title="What do you want others to call you?">
                      <Icon type="question-circle-o" />
                    </Tooltip>
                  </span>
                }
              >
                {getFieldDecorator("nickname", {
                  rules: [
                    {
                      required: false,
                      message: "Please input your nickname!",
                      whitespace: true
                    }
                  ]
                })(<Input placeholder="Nama Panggilan/Singkatan Anda" />)}
              </FormItem> */}
              <FormItem {...formItemLayout} label="Status">
                {getFieldDecorator("role", {
                  // initialValue: ["Calon Mahasiswa", "Admin"],
                  rules: [
                    {
                      // type: "array",
                      required: true,
                      message: "Harap isi Status/Role Anda!"
                    }
                  ]
                })(
                  <Select placeholder="Pilih Status/Role Anda">
                    <Option value="Admin">Admin</Option>
                    <Option value="Dosen">Dosen</Option>
                    <Option value="Mahasiswa">Mahasiswa</Option>
                    <Option value="Calon Mahasiswa">Calon Mahasiswa</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem {...formItemLayout} label="Phone Number">
                {getFieldDecorator("phone", {
                  rules: [
                    {
                      required: false,
                      message: "Please input your phone number!"
                    }
                  ]
                })(
                  <Input
                    addonBefore={prefixSelector}
                    style={{ width: "100%" }}
                    placeholder="Nomor Anda tidak akan disimpan, fitur ini belum tersedia"
                  />
                )}
              </FormItem>
              {/* <FormItem {...formItemLayout} label="Website">
                {getFieldDecorator("website", {
                  rules: [{ required: false, message: "Please input website!" }]
                })(
                  <AutoComplete
                    dataSource={websiteOptions}
                    onChange={this.handleWebsiteChange}
                    // placeholder="website"
                  >
                    <Input placeholder="Field Website boleh kosong" />
                  </AutoComplete>
                )}
              </FormItem>
              <FormItem
                {...formItemLayout}
                label="Captcha"
                extra="We must make sure that your are a human."
              >
                <Row gutter={8}>
                  <Col span={12}>
                    {getFieldDecorator("captcha", {
                      rules: [
                        {
                          required: false,
                          message: "Please input the captcha you got!"
                        }
                      ]
                    })(<Input placeholder="Field ini boleh kosong" />)}
                  </Col>
                  <Col span={12}>
                    <Button type="primary" onClick={this.infoClick}>
                      Get captcha
                    </Button>
                  </Col>
                </Row>
              </FormItem> */}
              <FormItem {...tailFormItemLayout}>
                {getFieldDecorator("agreement", {
                  valuePropName: "checked"
                })(
                  <Checkbox>
                    I have read the <a href="/">agreement</a>
                  </Checkbox>
                )}
              </FormItem>
              <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

const WrappedRegistrationForm = Form.create()(RegistrationForm);

export default WrappedRegistrationForm;
