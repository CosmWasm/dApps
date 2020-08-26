import { FeeTable } from "@cosmjs/cosmwasm";
import { Coin } from "@cosmjs/launchpad";
import { Decimal } from "@cosmjs/math";
import { AppConfig } from "../config";

// NARROW NO-BREAK SPACE (U+202F)
const thinSpace = "\u202F";

function printableCoin(coin?: Coin): string {
  if (!coin) {
    return "0";
  }
  if (coin.denom.startsWith("u")) {
    const ticker = coin.denom.slice(1).toUpperCase();
    return Decimal.fromAtomics(coin.amount, 6).toString() + thinSpace + ticker;
  } else {
    return coin.amount + thinSpace + coin.denom;
  }
}

function printableBalance(balance?: readonly Coin[]): string {
  if (!balance || balance.length === 0) return "–";
  return balance.map(printableCoin).join(", ");
}

function buildFeeTable({ feeToken, gasPrice }: AppConfig): FeeTable {
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

interface MappedCoin {
  readonly denom: string;
  readonly fractionalDigits: number;
}

interface CoinMap {
  [key: string]: MappedCoin;
}

function mapCoin(coin: Coin, coinMap: CoinMap): Coin {
  if (!coinMap) return coin;

  const mappedCoin = coinMap[coin.denom];
  if (!mappedCoin) return coin;

  let mappedAmount = "0";

  if (mappedCoin.fractionalDigits > 0) {
    mappedAmount = Decimal.fromAtomics(coin.amount, mappedCoin.fractionalDigits).toString();
  } else {
    mappedAmount = (parseFloat(coin.amount) * 10 ** Math.abs(mappedCoin.fractionalDigits)).toString();
  }

  return { denom: mappedCoin.denom, amount: mappedAmount };
}

export { printableCoin, printableBalance, buildFeeTable, MappedCoin, CoinMap, mapCoin };
