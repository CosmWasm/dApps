import { LoadingOutlined } from "@ant-design/icons";
import * as React from "react";
import { PageLayout } from "../../layout/PageLayout";
import { StyledSpin } from "./style";

const spinIndicator = <LoadingOutlined style={{ fontSize: "6.25rem" }} spin />;

interface LoadingProps {
  readonly loadingText?: string;
}

export function Loading({ loadingText }: LoadingProps): JSX.Element {
  const tip = loadingText || "Loading...";

  return (
    <PageLayout>
      <StyledSpin indicator={spinIndicator} tip={tip} />
    </PageLayout>
  );
}
