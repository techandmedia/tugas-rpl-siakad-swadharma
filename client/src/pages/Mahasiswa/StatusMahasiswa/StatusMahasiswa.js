import React, { PureComponent } from "react";
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

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c9pL8k61/";

  render() {
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
            <Legend layout='vertical' verticalAlign='middle' align="right"/>
          </PieChart>
        </Col>
        <Col span={16}>
          <PieChart width={500} height={500}>
            <Pie
              data={data2}
              cx={200}
              cy={250}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={180}
              fill="#8884d8"
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            {/* sesuaikan koordinat cx dan cy, dan juga ukuran width/height
                agar posisinya align di tengah
            */}
            <Legend layout='vertical' verticalAlign='middle' align="right"/>
          </PieChart>
        </Col>
      </Row>
    );
  }
}