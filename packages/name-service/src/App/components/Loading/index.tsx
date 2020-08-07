import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
import Center from "../../../theme/layout/Center";
import "./Loading.less";

const spinIndicator = <LoadingOutlined style={{ fontSize: "6.25rem" }} spin />;

function Loading(): JSX.Element {
  return (
    <Center tag="main" className="Loading">
      <Spin indicator={spinIndicator} tip="Loading..." className="Spin" />
    </Center>
  );
}

export default Loading;
