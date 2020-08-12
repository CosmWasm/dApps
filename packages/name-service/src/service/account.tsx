import { Account } from "@cosmjs/launchpad";
import * as React from "react";
import { useError } from "./error";
import { useSdk } from "./wallet";

interface State {
  readonly account?: Account;
}

interface AccountContextType extends State {
  readonly refreshAccount: () => void;
}

const defaultContext: AccountContextType = {
  refreshAccount: () => {
    return;
  },
};

const AccountContext = React.createContext<AccountContextType>(defaultContext);

export const useAccount = (): AccountContextType => React.useContext(AccountContext);

export function AccountProvider({ children }: React.HTMLAttributes<HTMLOrSVGElement>): JSX.Element {
  const { setError } = useError();
  const sdk = useSdk();

  const [value, setValue] = React.useState<State>({});

  function refreshAccount() {
    if (sdk.initialized) {
      sdk
        .getClient()
        .getAccount()
        .then((account) => setValue({ account }))
        .catch(setError);
    }
  }

  // this should just be called once on startup
  React.useEffect(refreshAccount, [sdk, setError]);

  const context: AccountContextType = {
    refreshAccount,
    account: value.account,
  };

  return <AccountContext.Provider value={context}>{children}</AccountContext.Provider>;
}
