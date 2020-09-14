import { RedirectLocation, useAccount, useSdk } from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PageLayout } from "../../layout/PageLayout";
import { Loading } from "../../logic/Loading";
import { LightText, MainStack, WelcomeStack } from "./style";

const { Title } = Typography;

interface LoginProps {
  readonly pathAfterLogin: string;
  readonly appName: string;
  readonly appLogo: string;
}

export function Login({ pathAfterLogin, appName, appLogo }: LoginProps): JSX.Element {
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
        history.push(pathAfterLogin);
      }
    }
  }, [account, state, history]);

  return initializing ? (
    <Loading loadingText="Initializing app..." />
  ) : (
    <PageLayout>
      <MainStack>
        <img src={appLogo} alt="CosmWasm logo" />
        <WelcomeStack>
          <Typography>
            <Title level={2}>Hello!</Title>
            <LightText>Welcome to your {appName}</LightText>
            <LightText>Select one of the following options to start:</LightText>
          </Typography>
          <Button type="primary" onClick={init}>
            Browser (Demo)
          </Button>
          <Button disabled type="primary">
            Keplr (Secure)
          </Button>
        </WelcomeStack>
      </MainStack>
    </PageLayout>
  );
}
