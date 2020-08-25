import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";
import Center from "../../../theme/layout/Center";
import "./Loading.less";

const spinIndicator = <LoadingOutlined style={{ fontSize: "6.25rem" }} spin />;

interface LoadingProps {
  readonly loadingText?: string;
}

function Loading({ loadingText }: LoadingProps): JSX.Element {
  const tip = loadingText || "Loading...";

  return (
    <Center tag="main" className="Loading">
      <Spin indicator={spinIndicator} tip={tip} className="Spin" />
    </Center>
  );
}

export default Loading;