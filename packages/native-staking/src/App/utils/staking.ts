import { useError, useSdk } from "@cosmicdapp/logic";
import { StakingDelegationResponse, StakingValidatorResponse } from "@cosmjs/launchpad";
import { Decimal } from "@cosmjs/math";
import { useEffect, useState } from "react";

export type StakingValidator = StakingValidatorResponse["result"];
export type StakingDelegation = StakingDelegationResponse["result"];

export function useStakingValidator(validatorAddress: string): StakingValidator {
  const { setError } = useError();
  const { getStakingClient } = useSdk();
  const [validator, setValidator] = useState<StakingValidator>();

  useEffect(() => {
    (async function updateValidator() {
      try {
        const { result: validator } = await getStakingClient().staking.validator(validatorAddress);
        setValidator(validator);
      } catch (error) {
        setError(error.message);
        console.error(error);
      }
    })();
  }, [getStakingClient, validatorAddress, setError]);

  return validator;
}

export function formatShares(shares: string): string {
  return Decimal.fromUserInput(shares, 18).toString();
}

export function formatUpdateTime(updateTime: string): string {
  return new Date(updateTime).toLocaleString(undefined, {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  });
}
