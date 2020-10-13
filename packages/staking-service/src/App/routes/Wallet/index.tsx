import { PageLayout } from "@cosmicdapp/design";
import { Claims, CW20, Investment, TokenInfo, useAccount, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathClaims, pathDetail, pathPurchase, pathValidator, pathWithdraw } from "../../paths";
import { ButtonStack, MainStack, NavCenter, TitleNavStack } from "./style";

const { Title } = Typography;

interface ValidatorData {
  readonly tokenInfo: TokenInfo;
  readonly investment: Investment;
  readonly balance: string;
  readonly claims: Claims;
}

function getValidatorDataMap(validatorData: ValidatorData) {
  if (!validatorData) return {};

  const stakePerToken = validatorData.investment.nominal_value;
  const balance = Decimal.fromAtomics(validatorData.balance, validatorData.tokenInfo.decimals).toString();
  const claims = validatorData.claims.claims.toString();

  return { "Stake/Token": stakePerToken, Balance: balance, Claims: claims };
}

interface WalletParams {
  readonly validatorAddress: string;
}

export function Wallet(): JSX.Element {
  const history = useHistory();
  const { validatorAddress } = useParams<WalletParams>();
  const { getClient } = useSdk();
  const { account } = useAccount();

  const [validatorData, setValidatorData] = useState<ValidatorData>();

  useEffect(() => {
    const client = getClient();

    client.getContract(validatorAddress).then(async (contract) => {
      const cw20contract = CW20(client).use(contract.address);
      const tokenInfo = await cw20contract.tokenInfo();
      const investment = await cw20contract.investment();
      const balance = await cw20contract.balance(account.address);
      const claims = await cw20contract.claims(account.address);

      setValidatorData({ tokenInfo, investment, balance, claims });
    });
  }, [getClient, validatorAddress, account.address]);

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
        <HeaderBackMenu />
        <TitleNavStack>
          <Title>{validatorData?.tokenInfo.name ?? ""}</Title>
          <NavCenter>
            <Button type="primary" onClick={goToValidatorDetail}>
              View Details
            </Button>
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
          {/* Disable while claims are only a number */}
          <Button disabled type="primary" onClick={goToClaims}>
            Claims
          </Button>
        </ButtonStack>
      </MainStack>
    </PageLayout>
  );
}
