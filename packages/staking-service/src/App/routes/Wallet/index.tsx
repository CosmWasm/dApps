import { PageLayout } from "@cosmicdapp/design";
import { CW20, Investment, TokenInfo, useSdk } from "@cosmicdapp/logic";
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
  readonly numClaims: number;
}

function getValidatorDataMap(validatorData: ValidatorData) {
  if (!validatorData) return {};

  const stakePerToken = validatorData.investment.nominal_value;
  const balance = Decimal.fromAtomics(validatorData.balance, validatorData.tokenInfo.decimals).toString();
  const claims = validatorData.numClaims.toString();

  return { "Stake/Token": stakePerToken, Balance: balance, Claims: claims };
}

interface WalletParams {
  readonly validatorAddress: string;
}

export function Wallet(): JSX.Element {
  const history = useHistory();
  const { validatorAddress } = useParams<WalletParams>();
  const { getClient, address } = useSdk();

  const [validatorData, setValidatorData] = useState<ValidatorData>();

  useEffect(() => {
    const client = getClient();

    (async function updateValidatorData() {
      const contract = await client.getContract(validatorAddress);
      const cw20Contract = CW20(client).use(contract.address);

      const [tokenInfo, investment, balance, { claims }] = await Promise.all([
        cw20Contract.tokenInfo(),
        cw20Contract.investment(),
        cw20Contract.balance(address),
        cw20Contract.claims(address),
      ]);

      setValidatorData({ tokenInfo, investment, balance, numClaims: claims.length });
    })();
  }, [getClient, validatorAddress, address]);

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
        <HeaderBackMenu path={`${pathValidator}/${validatorAddress}`} />
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
          <Button type="primary" onClick={goToClaims}>
            Claims
          </Button>
        </ButtonStack>
      </MainStack>
    </PageLayout>
  );
}
