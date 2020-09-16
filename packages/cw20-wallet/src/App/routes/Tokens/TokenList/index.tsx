import { useSdk } from "@cosmicdapp/logic";
import { Coin } from "@cosmjs/launchpad";
import { Decimal } from "@cosmjs/math";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { config } from "../../../../config";
import { pathTokenDetail } from "../../../paths";
import { useContracts } from "../../../service/contracts";
import { CW20, CW20Instance } from "../../../service/cw20";
import { BorderContainer, TokenItem, TokenStack } from "./style";

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

function TokenList(): JSX.Element {
  const history = useHistory();
  const { getClient } = useSdk();
  const { contracts: cw20Contracts, addContract } = useContracts();

  const [tokens, setTokens] = useState<readonly TokenData[]>([]);

  useEffect(() => {
    setTokens([]);

    const client = getClient();

    client
      .getContracts(config.codeId)
      .then((contracts) => {
        contracts.forEach((contract) => {
          const newCw20contract = CW20(client).use(contract.address);
          addContract(newCw20contract);
        });
      })
      .then(() => {
        cw20Contracts.forEach((contract) =>
          getTokenData(contract).then((token) => setTokens((tokens) => [...tokens, token])),
        );
      });
  }, [getClient, addContract, cw20Contracts]);

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
