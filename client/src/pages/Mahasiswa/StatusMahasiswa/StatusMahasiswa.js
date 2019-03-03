import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";
import { Row, Col } from "antd";

const data1 = [
  { name: "Group A", value: 800 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const data2 = [
  { name: "Group A", value: 1800 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 200 },
  { name: "Group F", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function StatusMahasiswa({ daftarMahasiswa }) {
  const [initial, setInitial] = useState(false);
  const [loading, setLoading] = useState(false);
  const dataKotaAsal = [];
  const dataKotaSaatIni = [];
  const kota_asal = {};
  const kota_saatini = [];

  useEffect(() => {
    getDataStatus();
    console.log(daftarMahasiswa);
  }, [daftarMahasiswa]);

  useEffect(() => {
    getDataKota();
    console.log(dataKotaAsal);
    console.log(data1);
    setLoading(true);
  }, [initial]);

  function getDataKota() {
    if (kota_asal && kota_saatini) {
      for (const [kota, total] of Object.entries(kota_asal)) {
        dataKotaAsal.push({
          name: kota.toString(),
          value: total * 10
        });
      }
      for (const [kota, total] of Object.entries(kota_saatini)) {
        dataKotaSaatIni.push({
          name: kota.toString(),
          value: total * 10
        });
      }
    }
  }

  function getDataStatus() {
    if (daftarMahasiswa) {
      daftarMahasiswa.forEach(function(item) {
        kota_asal[item.kota_asal] = (kota_asal[item.kota_asal] || 0) + 1;
        kota_saatini[item.kota_saatini] =
          (kota_saatini[item.kota_saatini] || 0) + 1;
      });
      setInitial(true);
    }
  }

  return (
    <Row gutter={16}>
      <Col span={8}>
        <PieChart width={400} height={400}>
          <Pie
            data={data1}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data1.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend layout="vertical" verticalAlign="middle" align="right" />
        </PieChart>
      </Col>
      <Col span={16}>
        {loading ? (
          <PieChart width={500} height={500}>
            <Pie
              data={dataKotaAsal}
              cx={200}
              cy={250}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              fill="#8884d8"
              dataKey="value"
            >
              {dataKotaAsal.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* sesuaikan koordinat cx dan cy, dan juga ukuran width/height
                agar posisinya align di tengah
            */}
            <Legend layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        ) : (
          <h1>Loading</h1>
        )}
      </Col>
    </Row>
  );
}
