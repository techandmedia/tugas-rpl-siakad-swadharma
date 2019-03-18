import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";
import { Row, Col } from "antd";

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
  // const [initial, setInitial] = useState(false);
  // const [loading, setLoading] = useState(true);
  const [dataKotaAsal, setDataKotaAsal] = useState([]);
  const [dataKotaSaatIni, setDataKotaSaatIni] = useState([]);
  const kota_asal = [];
  const kota_saatini = [];

  useEffect(() => {
    getDataStatus();
    // setLoading(false);
  }, []);

  function getDataStatus() {
    if (daftarMahasiswa) {
      daftarMahasiswa.forEach(function(item) {
        kota_asal[item.kota_asal] = (kota_asal[item.kota_asal] || 0) + 1;
        kota_saatini[item.kota_saatini] =
          (kota_saatini[item.kota_saatini] || 0) + 1;
      });
      const kotaAsal = Object.entries(kota_asal);
      setDataKotaAsal(
        kotaAsal.map(([name, value]) => ({
          name: name,
          value: value * 10
        }))
      );
      const kotaSaatIni = Object.entries(kota_saatini);
      setDataKotaSaatIni(
        kotaSaatIni.map(([name, value]) => ({
          name: name,
          value: value * 20
        }))
      );
      // setInitial(true);
    }
  }

  return (
    <Row gutter={16}>
      <Col span={8}>
        <PieChart width={400} height={400}>
          <Pie
            data={dataKotaAsal} className="tes"
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            style={{ marginRight: 20 }}
          >
            {dataKotaAsal.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
          
            layout="vertical"
            verticalAlign="middle"
            align="right"
            // style={{ margin: 10 }}
            
          />
        </PieChart>
      </Col>
      <Col span={16}>
        {/* {loading ? ( */}
        <PieChart width={500} height={500}>
          <Pie
            data={dataKotaSaatIni}
            cx={200}
            cy={250}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={180}
            fill="#8884d8"
            dataKey="value"
          >
            {dataKotaSaatIni.map((entry, index) => (
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
        ){/* : (
          <h1>Loading</h1>
        )} */}
      </Col>
    </Row>
  );
}
