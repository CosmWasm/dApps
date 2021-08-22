import { CW20, CW20Instance, useContracts, useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/stargate";
import { Decimal } from "@cosmjs/math";
import { Typography } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../../../../config";
import { pathTokenDetail } from "../../../paths";
import { BorderContainer, TokenItem, TokenStack } from "./style";

const { Text } = Typography;

interface TokenData {
  readonly coin: Coin;
  readonly fractionalDigits: number;
  readonly address: string;
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
  const { getClient, address } = useSdk();
  const { contracts: cw20Contracts, addContract } = useContracts();

  const [tokens, setTokens] = useState<readonly TokenData[]>([]);

  const getTokenData = useCallback(
    async function getTokenData(contract: CW20Instance): Promise<TokenData> {
      const { symbol: denom, decimals: fractionalDigits } = await contract.tokenInfo();
      const amount = await contract.balance(address);

      return { coin: { denom, amount }, fractionalDigits, address: contract.contractAddress };
    },
    [address],
  );

  useEffect(() => {
    if (!config.codeId) return;
    const client = getClient();

    client.getContracts(config.codeId).then((contracts) => {
      contracts.forEach((contract) => {
        const newCw20contract = CW20(client).use(contract);
        addContract(newCw20contract);
      });
    });
  }, [getClient, addContract]);

  useEffect(() => {
    const tokenPromises = cw20Contracts.map(getTokenData);
    Promise.all(tokenPromises).then((tokens) => setTokens(tokens.sort(tokenCompare)));
  }, [cw20Contracts, getTokenData]);

  function goTokenDetail(tokenAddress: string) {
    history.push(`${pathTokenDetail}/${tokenAddress}`);
  }

  return (
    <TokenStack>
      {tokens.map((token) => {
        const amountToDisplay = Decimal.fromAtomics(token.coin.amount, token.fractionalDigits).toString();

        return (
          <TokenItem key={token.address} onClick={() => goTokenDetail(token.address)}>
            <BorderContainer>
              <Text>{token.coin.denom}</Text>
              <Text>{amountToDisplay !== "0" ? amountToDisplay : "No tokens"}</Text>
            </BorderContainer>
          </TokenItem>
        );
      })}
    </TokenStack>
  );
}

export default TokenList;
