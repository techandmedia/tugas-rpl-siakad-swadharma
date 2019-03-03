import React from "react";
import { Divider, Tag } from "antd";

const colorTag = [
  {
    status: "Aktif",
    color: "green"
  },
  {
    status: "Tidak Aktif",
    color: "grey"
  },
  {
    status: "Cuti 1 Semester",
    color: "brown"
  },
  {
    status: "Cuti 2 Semester",
    color: "maroon"
  },
  {
    status: "Karyawan",
    color: "geekblue"
  },
  {
    status: "Pimpinan",
    color: "indigo"
  },
  {
    status: "Wakil Pimpinan 1",
    color: "darkslateblue"
  }
];

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <span>{text}</span>
  },
  {
    title: "Status Mengajar",
    key: "mengajar",
    dataIndex: "mengajar",
    render: mengajar => (
      <span>
        {mengajar.map(tag => {
          let color = null;
          for (let i = 0; i < colorTag.length; i++) {
            if (tag === colorTag[i].status) {
              color = colorTag[i].color;
            }
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Status Pegawai",
    key: "pegawai",
    dataIndex: "pegawai",
    render: pegawai => (
      <span>
        {pegawai.map(tag => {
          let color = null;
          for (let i = 0; i < colorTag.length; i++) {
            if (tag === colorTag[i].status) {
              color = colorTag[i].color;
            }
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="/">Edit Profil</a>
        <Divider type="vertical" />
        <a href="/">Lihat Jadwal</a>
      </span>
    )
  }
];

export default columns;
