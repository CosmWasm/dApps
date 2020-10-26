import { PageLayout } from "@cosmicdapp/design";
import { CW20, Investment, nativeCoinToDisplay, TokenInfo, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import {
  pathClaims,
  pathDetail,
  pathPurchase,
  pathValidator,
  pathValidators,
  pathWallet,
  pathWithdraw,
} from "../../paths";
import { ButtonStack, MainStack, NavCenter, TitleNavStack } from "./style";

const { Title } = Typography;

interface ValidatorData {
  readonly tokenInfo: TokenInfo;
  readonly investment: Investment;
}

function getValidatorDataMap(validatorData: ValidatorData) {
  if (!validatorData) return {};

  const totalSupply = Decimal.fromAtomics(
    validatorData.tokenInfo.total_supply,
    validatorData.tokenInfo.decimals,
  ).toString();
  const stakedCoin = validatorData.investment.staked_tokens;
  const stakedAmount = nativeCoinToDisplay(stakedCoin, config.coinMap).amount;
  const stakePerToken = validatorData.investment.nominal_value;

  return { "Total Supply": totalSupply, "Staked Tokens": stakedAmount, "Stake/Token": stakePerToken };
}

interface ValidatorHomeParams {
  readonly validatorAddress: string;
}

export function ValidatorHome(): JSX.Element {
  const history = useHistory();
  const { validatorAddress } = useParams<ValidatorHomeParams>();
  const { getClient } = useSdk();

  const [validatorData, setValidatorData] = useState<ValidatorData>();

  useEffect(() => {
    const client = getClient();

    (async function updateValidatorData() {
      const contract = await client.getContract(validatorAddress);
      const cw20Contract = CW20(client).use(contract.address);

      const [tokenInfo, investment] = await Promise.all([
        cw20Contract.tokenInfo(),
        cw20Contract.investment(),
      ]);

      setValidatorData({ tokenInfo, investment });
    })();
  }, [getClient, validatorAddress]);

  function goToWallet() {
    history.push(`${pathWallet}/${validatorAddress}`);
  }

  function goToValidatorDetail() {
    history.push(`${pathValidator}/${validatorAddress}${pathDetail}`);
  }

  function goToPurchase() {
    history.push(`${pathPurchase}/${validatorAddress}`);
  }

  function goToWithdraw() {
    history.push(`${pathWithdraw}/${validatorAddress}`);
  }

  function goToClaims() {
    history.push(`${pathClaims}/${validatorAddress}`);
  }

  return (
    <PageLayout>
      <MainStack>
        <HeaderBackMenu path={pathValidators} />
        <TitleNavStack>
          <Title>{validatorData?.tokenInfo.name ?? ""}</Title>
          <NavCenter>
            <ButtonStack>
              <Button type="primary" onClick={goToWallet}>
                Wallet
              </Button>
              <Button type="primary" onClick={goToValidatorDetail}>
                View Details
              </Button>
            </ButtonStack>
          </NavCenter>
        </TitleNavStack>
        <DataList {...getValidatorDataMap(validatorData)} />
        <ButtonStack>
          <Button type="primary" onClick={goToPurchase}>
            Buy
          </Button>
          <Button type="primary" onClick={goToWithdraw}>
            Withdraw
          </Button>
          <Button type="primary" onClick={goToClaims}>
            Claims
          </Button>
        </ButtonStack>
      </MainStack>
    </PageLayout>
  );
}
