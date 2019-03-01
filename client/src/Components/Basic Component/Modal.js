import React from "react";
import { Modal } from "antd";

export default class BaseModal extends React.Component {
  state = {
    ModalText: "Fitur ini sedang dalam pengembangan, terimakasih.",
    // visible: false,
    confirmLoading: false
  };

  // showModal = () => {
  //   this.setState({
  //     visible: true
  //   });
  // };

  handleOk = () => {
    this.setState({
      ModalText: "Pesan ini akan tertutup dalam 2 detik",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  render() {
    const { confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Modal
          title="Title"
          visible={this.props.visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

// export default BaseModal;
