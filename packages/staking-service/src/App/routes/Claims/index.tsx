import { PageLayout } from "@cosmicdapp/design";
import { Button, Typography } from "antd";
import React, { useState } from "react";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { ButtonStack, HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

interface MockClaim {
  readonly Date: string;
  readonly Tokens: string;
  readonly Atom: string;
}

function getClaimLabel(claim: MockClaim) {
  const [day, month] = claim.Date.split("/");
  return `${day} ${month} - ${claim.Tokens.split(",")[0]} tokens`;
}

const mockClaims: MockClaim[] = [
  { Date: "20/Oct/20", Tokens: "500,000", Atom: "586" },
  { Date: "18/Nov/20", Tokens: "140,000", Atom: "425" },
];

export function Claims(): JSX.Element {
  const [claimIndex, setClaimIndex] = useState<number>();

  const showClaimDetail = claimIndex !== undefined;
  const disableNext = claimIndex === mockClaims.length - 1;
  const disablePrevious = claimIndex === 0;

  return (
    <PageLayout>
      <MainStack>
        <HeaderTitleStack>
          <HeaderBackMenu />
          <Title>Pending Claims</Title>
          <Title level={2}>Iris Net</Title>
        </HeaderTitleStack>
        {!showClaimDetail && (
          <ButtonStack>
            {mockClaims.map((claim, index) => (
              <Button
                key={claim.Tokens + "todofixthiskey"}
                type="primary"
                onClick={() => {
                  setClaimIndex(index);
                }}
              >
                {getClaimLabel(claim)}
              </Button>
            ))}
          </ButtonStack>
        )}
        {showClaimDetail && (
          <>
            <DataList {...mockClaims[claimIndex]} />
            <ButtonStack>
              <Button
                type="primary"
                disabled={disableNext}
                onClick={() => {
                  !disableNext && setClaimIndex((claimIndex) => claimIndex + 1);
                }}
              >
                Next
              </Button>
              <Button
                type="primary"
                disabled={disablePrevious}
                onClick={() => {
                  !disablePrevious && setClaimIndex((claimIndex) => claimIndex - 1);
                }}
              >
                Previous
              </Button>
            </ButtonStack>
          </>
        )}
      </MainStack>
    </PageLayout>
  );
}
