import { PageLayout } from "@cosmicdapp/design";
import { Button, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathClaims, pathDetails, pathPurchase, pathWallet, pathWithdraw } from "../../paths";
import { ButtonStack, MainStack, NavCenter, TitleNavStack } from "./style";

const { Title } = Typography;

const dataMap = { "Total Stake": "11,000", Contract: "3,700", "Atom/Token": "1.175" };

export function Home(): JSX.Element {
  const history = useHistory();

  function goToWallet() {
    history.push(pathWallet);
  }

  function goToDetails() {
    history.push(pathDetails);
  }

  function goToPurchase() {
    history.push(pathPurchase);
  }

  function goToWithdraw() {
    history.push(pathWithdraw);
  }

  function goToClaims() {
    history.push(pathClaims);
  }

  return (
    <PageLayout>
      <MainStack>
        <HeaderBackMenu />
        <TitleNavStack>
          <Title>Iris Net</Title>
          <NavCenter>
            <ButtonStack>
              <Button type="primary" onClick={goToWallet}>
                Wallet
              </Button>
              <Button type="primary" onClick={goToDetails}>
                View Details
              </Button>
            </ButtonStack>
          </NavCenter>
        </TitleNavStack>
        <DataList {...dataMap} />
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
