import React from "react";
import { Card } from "antd";

// Base Card
// const BaseCard = props => (
//   <Card
//     {...props}
//     bordered={false}
//     headStyle={{ fontWeight: 300 }}
//     style={{
//       margin: "0.6em",
//       background: "rgba(255,255,255, 0.7)",
//       width: "auto"
//     }}
//   />
// );

const NormalCard = props => (
  <Card
    {...props}
    bordered={false}
    style={{
      // margin: "0.6em",
      background: "rgba(255,255,255, 0.7)"
      // width: "auto"
    }}
  />
);

// Dark Background Card
const DarkCard = props => (
  <Card
    {...props}
    bordered={false}
    // hoverable={true} > mengubah cursor menjadi pointer
    headStyle={{
      color: "rgb(200, 200, 200)",
      fontWeight: "300",
      fontSize: "1.5em"
    }}
    style={{
      fontSize: "1.1em",
      fontWeight: "400",
      color: "rgb(200, 200, 200)",
      textAlign: "center",
      lineHeight: "1em",
      margin: "0.6em",
      width: "400px",
      background: "rgba(46, 21, 49, 0.7)"
    }}
  />
);

// Jumbo Card for Jumbotron like from Bootstrap
const JumboCard = props => (
  <Card
    {...props}
    bordered={false}
    headStyle={{
      fontSize: "2em",
      fontWeight: "200"
    }}
    style={{
      margin: "0.6em",
      // maxWidth: "1980px",
      background: "none",
      fontSize: "1.15em"
    }}
  />
);

// const BlueJumboCard = props => (
//   <Card
//     {...props}
//     bordered={false}
//     headStyle={{
//       fontSize: "3.5em",
//       fontWeight: "200"
//     }}
//     style={{
//       margin: "0.6em",
//       // maxWidth: "1980px",
//       background: "rgba(33,31,39, 0.5)",
//       fontSize: "1.15em"
//     }}
//   />
// );

const WhiteJumboCard = props => (
  <Card
    {...props}
    bordered={false}
    headStyle={{
      fontSize: "3.5em",
      fontWeight: "200"
    }}
    style={{
      margin: "0.6em",
      // maxWidth: "1980px",
      background: "rgba(255,255,255, 0.6)",
      fontSize: "1.15em"
    }}
  />
);

export {
  // BaseCard,
  DarkCard,
  NormalCard,
  JumboCard,
  // BlueJumboCard,
  WhiteJumboCard
};
