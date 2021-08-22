import { useError, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { codec } from "@cosmjs/stargate";
import { useEffect, useState } from "react";

export type StakingValidator = codec.cosmos.staking.v1beta1.IValidator;
export interface EncodeObject<T, V> {
  readonly typeUrl: T;
  readonly value: V;
}
export type EncodeMsgDelegate = EncodeObject<
  "/cosmos.staking.v1beta1.MsgDelegate",
  codec.cosmos.staking.v1beta1.IMsgDelegate
>;
export type EncodeMsgUndelegate = EncodeObject<
  "/cosmos.staking.v1beta1.MsgUndelegate",
  codec.cosmos.staking.v1beta1.IMsgUndelegate
>;
export type EncodeMsgWithdrawDelegatorReward = EncodeObject<
  "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  codec.cosmos.distribution.v1beta1.IMsgWithdrawDelegatorReward
>;

export function useStakingValidator(validatorAddress: string): StakingValidator {
  const { setError } = useError();
  const { getStakingClient } = useSdk();
  const [validator, setValidator] = useState<StakingValidator>();

  useEffect(() => {
    (async function updateValidator() {
      try {
        const { validator } = await getStakingClient().staking.validator(validatorAddress);
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
