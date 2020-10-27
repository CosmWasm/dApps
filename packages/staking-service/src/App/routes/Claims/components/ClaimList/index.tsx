import { Button } from "antd";
import React from "react";
import { ClaimData } from "../..";
import { ButtonStack } from "./style";

interface ClaimListParams {
  readonly claimsData: readonly ClaimData[];
  readonly setClaimIndex: React.Dispatch<React.SetStateAction<number>>;
  readonly balanceToClaim: string;
  readonly claimAll: () => Promise<void>;
}

export function ClaimList({
  claimsData,
  setClaimIndex,
  balanceToClaim,
  claimAll,
}: ClaimListParams): JSX.Element {
  function disableClaimAll() {
    if (!claimsData.length) return true;

    const now = new Date().valueOf();
    return claimsData.every((claim) => claim.date.valueOf() > now);
  }

  return (
    <>
      <ButtonStack>
        {claimsData.map((claimData, index) => (
          <Button
            key={index}
            type="primary"
            onClick={() => {
              setClaimIndex(index);
            }}
          >
            {`${claimData.date.toLocaleDateString()} - ${claimData.balance} tokens`}
          </Button>
        ))}
      </ButtonStack>
      <Button disabled={disableClaimAll()} type="primary" onClick={claimAll}>
        Claim {balanceToClaim}
      </Button>
    </>
  );
}
