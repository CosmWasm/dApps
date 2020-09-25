import { Loading, PageLayout } from "@cosmicdapp/design";
import { RedirectLocation, useAccount, useSdk } from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { pathHome } from "../../paths";
import cosmWasmLogo from "./assets/cosmWasmLogo.svg";
import { LightText, MainStack, WelcomeStack } from "./style";

const { Title } = Typography;

export function Login(): JSX.Element {
  const history = useHistory();
  const state = history.location.state as RedirectLocation;
  const sdk = useSdk();
  const { refreshAccount, account } = useAccount();

  const [initializing, setInitializing] = useState(false);

  function init() {
    setInitializing(true);
    sdk.init();
  }

  useEffect(() => {
    if (sdk.initialized) {
      refreshAccount();
    }
  }, [sdk.initialized, refreshAccount]);

  useEffect(() => {
    if (account) {
      if (state) {
        history.push(state.redirectPathname, state.redirectState);
      } else {
        history.push(pathHome);
      }
    }
  }, [account, state, history]);

  return initializing ? (
    <Loading loadingText="Initializing app..." />
  ) : (
    <PageLayout>
      <MainStack>
        <img src={cosmWasmLogo} alt="CosmWasm logo" />
        <WelcomeStack>
          <Typography>
            <Title level={2}>Hello!</Title>
            <LightText>Welcome to your Staking service</LightText>
            <LightText>Select one of the following options to start:</LightText>
          </Typography>
          <Button disabled type="primary">
            Forbole
          </Button>
          <Button disabled type="primary">
            Chorus One
          </Button>
          <Button type="primary" onClick={init}>
            Iris Net
          </Button>
        </WelcomeStack>
      </MainStack>
    </PageLayout>
  );
}
