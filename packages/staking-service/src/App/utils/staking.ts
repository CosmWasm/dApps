import { useSdk } from "@cosmicdapp/logic";
import { StakingDelegationResponse, StakingValidatorResponse } from "@cosmjs/launchpad/types/lcdapi";
import { Decimal } from "@cosmjs/math";
import { useEffect, useState } from "react";

export type StakingValidator = StakingValidatorResponse["result"];
export type StakingDelegation = StakingDelegationResponse["result"];

export function useStakingValidator(validatorAddress: string): StakingValidator {
  const { getStakingClient } = useSdk();
  const [validator, setValidator] = useState<StakingValidator>();

  useEffect(() => {
    getStakingClient()
      .staking.validator(validatorAddress)
      .then(({ result: validator }) => setValidator(validator));
  }, [getStakingClient, validatorAddress]);

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
