import React from "react";
import { Button } from "antd";

export function BaseButton(props) {
  return (
    <Button
      {...props}
      block={true}
      type="primary"
      style={{ background: "rgba(24, 144, 255, 0.7)" }}
    />
  );
}

export function FloatRightButton(props) {
  return (
    <Button
      {...props}
      type="primary"
      style={{ float: "right", marginTop: "17px", marginRight: "15px" }}
    />
  );
}
