import { Account } from "@cosmjs/launchpad";
import * as React from "react";

import { useError } from "./error";
import { useSdk } from "./wallet";

interface State {
  readonly account?: Account;
}

export interface AccountContextType extends State {
  readonly refreshAccount: () => void;
}

function dummyRefresh(): void {}

const defaultContext = (): AccountContextType => {
  return {
    refreshAccount: dummyRefresh,
  };
};

export const AccountContext = React.createContext<AccountContextType>(defaultContext());

export const useAccount = (): AccountContextType => React.useContext(AccountContext);

export function AccountProvider(props: { readonly children: any }): JSX.Element {
  const [value, setValue] = React.useState<State>({});
  const { loading, getClient } = useSdk();
  const { setError } = useError();

  const refreshAccount = (): void => {
    if (!loading) {
      getClient()
        .getAccount()
        .then((account) => setValue({ account }))
        .catch(setError);
    }
  };

  // this should just be called once on startup
  React.useEffect(refreshAccount, [loading, getClient, setError]);

  const context: AccountContextType = {
    refreshAccount,
    account: value.account,
  };

  return <AccountContext.Provider value={context}>{props.children}</AccountContext.Provider>;
}
