import { Divider } from "antd";
import React from "react";
import { DataRow, KeyText, ListStack, ValueText } from "./style";

export interface DataListProps {
  readonly [key: string]: string;
}

export function DataList(dataMap: DataListProps): JSX.Element {
  return (
    <ListStack>
      {Object.entries(dataMap).map(([key, value], index) => (
        <React.Fragment key={key}>
          {index > 0 && <Divider />}
          <DataRow>
            <KeyText>{key}</KeyText>
            <ValueText>{value}</ValueText>
          </DataRow>
        </React.Fragment>
      ))}
    </ListStack>
  );
}
