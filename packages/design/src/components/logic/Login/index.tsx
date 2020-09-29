import {
  loadLedgerWallet,
  loadOrCreateWallet,
  RedirectLocation,
  useAccount,
  useSdk,
} from "@cosmicdapp/logic";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PageLayout } from "../../layout/PageLayout";
import { Loading } from "../../logic/Loading";
import { LightText, MainStack, WelcomeStack } from "./style";

const { Title } = Typography;

function disableLedgerLogin() {
  const anyNavigator: any = navigator;
  return !anyNavigator?.usb;
}

interface LoginProps {
  readonly pathAfterLogin: string;
  readonly appName: string;
  readonly appLogo: string;
  readonly addressPrefix?: string;
}

export function Login({ addressPrefix, pathAfterLogin, appName, appLogo }: LoginProps): JSX.Element {
  const history = useHistory();
  const state = history.location.state as RedirectLocation;
  const sdk = useSdk();
  const { refreshAccount, account } = useAccount();

  const [initializing, setInitializing] = useState(false);

  function initBrowser() {
    setInitializing(true);
    sdk.init(() => loadOrCreateWallet(addressPrefix));
  }

  function initLedger() {
    setInitializing(true);
    sdk.init(() => loadLedgerWallet(addressPrefix));
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
          <Button type="primary" onClick={initBrowser}>
            Browser (Demo)
          </Button>
          <Button type="primary" disabled={disableLedgerLogin()} onClick={initLedger}>
            Ledger (Secure)
          </Button>
          <Button type="primary" disabled>
            Keplr (Secure)
          </Button>
        </WelcomeStack>
      </MainStack>
    </PageLayout>
  );
}
