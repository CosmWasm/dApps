import { Button } from "antd";
import React from "react";
import { ClaimData } from "../..";
import { DataList } from "../../../../components/DataList";
import { ButtonStack } from "./style";

interface ClaimDetailParams {
  readonly claimsData: readonly ClaimData[];
  readonly claimIndex: number;
  readonly setClaimIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function ClaimDetail({ claimsData, claimIndex, setClaimIndex }: ClaimDetailParams): JSX.Element {
  const claimDataList =
    claimIndex === undefined
      ? {}
      : {
          ...claimsData[claimIndex],
          date: claimsData[claimIndex].date.toLocaleDateString(),
        };

  const disableNext = claimIndex === claimsData.length - 1;
  const disablePrevious = claimIndex === 0;

  return (
    <>
      <DataList {...claimDataList} />
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
  );
}
