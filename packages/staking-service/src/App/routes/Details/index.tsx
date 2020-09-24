import { PageLayout } from "@cosmicdapp/design";
import { Typography } from "antd";
import React from "react";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { MainStack } from "./style";

const { Title } = Typography;

const dataMap = { "Total Stake": "11,000", Comission: "15%", Uptime: "99.99%" };

export function Details(): JSX.Element {
  return (
    <PageLayout>
      <MainStack>
        <HeaderBackMenu />
        <Title>Iris Net</Title>
        <DataList {...dataMap} />
      </MainStack>
    </PageLayout>
  );
}
