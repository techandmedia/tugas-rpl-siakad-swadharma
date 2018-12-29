import React from "react";
import { Form, Icon, Input, Checkbox, Row } from "antd";

import { NormalCard as Card } from "../Basic Component/Card";
import { BaseButton as Button } from "../Basic Component/Button";
import { success, error } from "../Basic Component/InformationModal";

import { loginUser } from "../data/PostData";
import "./signin.css";

const FormItem = Form.Item;

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  // componentDidMount() {
  //   console.log(values);
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const email = values.email
      const password = values.password
      if (!err) {
        loginUser(this.props.URL, email, password).then(
          response => {
            const user = response.data[0];
            const code = response.data.code;
            if (code === 204) {
              error(
                "Email dan Password salah",
                "Silahkan masukkan email dan password yang benar"
              );
            } else if (code === 205) {
              error(
                "Email Tidak Terdaftar",
                "Silahkan masukkan email yang sudah terdaftar, atau silahkan register untuk membuat akun baru"
              );
            } else if (user.id) {
              success("Sukses", "Anda berhasil log in");
              this.props.loadUser(user);
              this.props.onRouteChange("dashboard");
            } else {
              alert(
                "Ada sesuatu yang salah dengan diri Anda :). Just Kidding. Mungkin internet Anda sedang error. Coba lagi ya!"
              );
            }
          }
        );
      }
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { onRouteChange } = this.props;

    return (
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "65vh", padding: "1em" }}
      >
        <Card>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "The input is not valid E-mail!"
                  },
                  { required: true, message: "Please input your Email!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Email"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="/">
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or{" "}
              <span onClick={() => onRouteChange("register")}>
                Register now!
              </span>
            </FormItem>
          </Form>
        </Card>
      </Row>
    );
  }
}

const WrappedSignInForm = Form.create()(SignIn);

export default WrappedSignInForm;
