import { AppConfig } from "../config";
import { FeeTable } from "@cosmjs/cosmwasm";

export function buildFeeTable({ feeToken, gasPrice }: AppConfig): FeeTable {
  const stdFee = (gas: number, denom: string, price: number) => {
    const amount = Math.floor(gas * price);
    return {
      amount: [{ amount: amount.toString(), denom: denom }],
      gas: gas.toString(),
    };
  };

  return {
    upload: stdFee(1500000, feeToken, gasPrice),
    init: stdFee(600000, feeToken, gasPrice),
    exec: stdFee(200000, feeToken, gasPrice),
    migrate: stdFee(600000, feeToken, gasPrice),
    send: stdFee(80000, feeToken, gasPrice),
    changeAdmin: stdFee(80000, feeToken, gasPrice),
  };
}
