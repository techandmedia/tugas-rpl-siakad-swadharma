import React from "react";
import { Modal, Button } from "antd";
import FormIsiJadwalKuliah from "./FormIsiJadwalKuliah";

export default function ModalJadwalKuliah(props) {
  const { selectedDate, visible, loading, handleOk, handleCancel } = props;

  const Title = `Form Jadwal Kuliah untuk tanggal ${selectedDate}`;

  return (
    <Modal
      // width="900px"
      {...props}
      visible={visible}
      selectedDate={selectedDate}
      title={Title}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Batal
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={handleOk}
        >
          Kembali ke Kalender
        </Button>
      ]}
    >
      <FormIsiJadwalKuliah {...props} />
    </Modal>
  );
}
