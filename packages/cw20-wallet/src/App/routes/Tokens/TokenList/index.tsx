import { CW20, CW20Instance, useContracts, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../../../../config";
import { pathTokenDetail } from "../../../paths";
import { TokenItem, TokenStack } from "./style";

const { Text } = Typography;

interface TokenData {
  readonly coin: Coin;
  readonly fractionalDigits: number;
  readonly address: string;
}

async function getTokenData(contract: CW20Instance): Promise<TokenData> {
  const { symbol: denom, decimals: fractionalDigits } = await contract.tokenInfo();
  const address = contract.contractAddress;
  const amount = await contract.balance();

  return { coin: { denom, amount }, fractionalDigits, address };
}

function tokenCompare(a: TokenData, b: TokenData) {
  if (a.coin.denom < b.coin.denom) {
    return -1;
  }
  if (a.coin.denom > b.coin.denom) {
    return 1;
  }
  return 0;
}

function TokenList(): JSX.Element {
  const history = useHistory();
  const { getClient } = useSdk();
  const { contracts: cw20Contracts, addContract } = useContracts();

  const [tokens, setTokens] = useState<readonly TokenData[]>([]);

  useEffect(() => {
    if (!config.codeId) return;
    const client = getClient();

    client.getContracts(config.codeId).then((contracts) => {
      contracts.forEach((contract) => {
        const newCw20contract = CW20(client).use(contract.address);
        addContract(newCw20contract);
      });
    });
  }, [getClient, addContract]);

  useEffect(() => {
    const tokenPromises = cw20Contracts.map(getTokenData);
    Promise.all(tokenPromises).then((tokens) => setTokens(tokens.sort(tokenCompare)));
  }, [cw20Contracts]);

  function goTokenDetail(tokenAddress: string) {
    history.push(`${pathTokenDetail}/${tokenAddress}`);
  }

  return (
    <TokenStack>
      {tokens.map((token) => {
        const amountToDisplay = Decimal.fromAtomics(token.coin.amount, token.fractionalDigits).toString();

        return (
          <Button
            key={token.coin.denom}
            data-size="large"
            type="primary"
            onClick={() => goTokenDetail(token.address)}
          >
            <TokenItem>
              <Text>{token.coin.denom}</Text>
              <Text>{amountToDisplay !== "0" ? amountToDisplay : "No tokens"}</Text>
            </TokenItem>
          </Button>
        );
      })}
    </TokenStack>
  );
}

export default TokenList;
