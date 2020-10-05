import { PageLayout } from "@cosmicdapp/design";
import { nativeCoinToDisplay, useAccount, useSdk } from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathClaims, pathDetail, pathPurchase, pathValidator, pathWithdraw } from "../../paths";
import { formatShares, StakingDelegation, useStakingValidator } from "../../utils/staking";
import { ButtonStack, MainStack, NavCenter, TitleNavStack } from "./style";

const { Title } = Typography;

const emptyDelegation: StakingDelegation = {
  delegator_address: "",
  validator_address: "",
  shares: "0",
  balance: { amount: "0", denom: "" },
};

function getDelegationDataMap(delegation: StakingDelegation) {
  if (!delegation) return;

  const shares = formatShares(delegation.shares);
  const balance = nativeCoinToDisplay(delegation.balance, config.coinMap).amount;

  return { Shares: shares, Balance: balance };
}

interface WalletParams {
  readonly validatorAddress: string;
}

export function Wallet(): JSX.Element {
  const history = useHistory();
  const { getStakingClient } = useSdk();
  const { account } = useAccount();
  const { validatorAddress } = useParams<WalletParams>();
  const validator = useStakingValidator(validatorAddress);

  const [delegation, setDelegation] = useState<StakingDelegation>(emptyDelegation);

  useEffect(() => {
    getStakingClient()
      .staking.delegation(account.address, validatorAddress)
      .then(({ result: delegation }) => setDelegation(delegation))
      .catch(console.error);
  }, [getStakingClient, account.address, validatorAddress]);

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
          <Title>{validator?.description.moniker ?? ""}</Title>
          <NavCenter>
            <Button type="primary" onClick={goToValidatorDetail}>
              View Details
            </Button>
          </NavCenter>
        </TitleNavStack>
        <DataList {...getDelegationDataMap(delegation)} />
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
