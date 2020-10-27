# Login

The reusable React component that provides the dApps with a local burner wallet, a ledger wallet, or a Keplr extension wallet.

Live example of this component in the native wallet dApp: https://dapps.cosmwasm.com/wallet/

## How to use

In a new dApp, that has the local `@cosmicdapp/design` package as a dependency, add the following code to the login route.

```jsx
import { Login as LoginDesign } from "@cosmicdapp/design";
import React from "react";
import { config } from "[path-to-config]";
import { [path-to-after-login] } from "[path-to-paths]";
import appLogo from "[path-to-logo]";

export function Login(): JSX.Element {
  return <LoginDesign pathAfterLogin={[path-to-after-login]} appName="[app-name]" appLogo={appLogo} config={config} />;
}
```

Now substitute the following placeholders:

- `[path-to-config]`: the path to the new dApp config file that exports an [AppConfig](https://github.com/CosmWasm/dApps/blob/master/packages/logic/src/config.ts#L34).
- `[path-to-after-login]`: a string that your app's router matches to the route that shold be navigated to after the login, for example: `"/home"`.
- `[path-to-paths]`: the path to the file that exports the previous variable.
- `[path-to-logo]`: the path to the `.svg` logo file.
- `[app-name]`: a string with the name of the new dApp.

The `Login` component from `@cosmicdapp/design` is imported as `LoginDesign` (for example) in order to be able to use "Login" as the name for the React component of the new dApp's login route.

## How it works

This components shows 3 buttons with the following `onClick` logic:

- `Browser`: makes use of [loadOrCreateWallet](https://github.com/CosmWasm/dApps/blob/master/packages/logic/src/service/sdk.ts#L37) from `@cosmicdapp/logic` to get a burner signer.
- `Ledger`: makes use of [loadLedgerWallet](https://github.com/CosmWasm/dApps/blob/master/packages/logic/src/service/sdk.ts#L44) from `@cosmicdapp/logic` to get a ledger signer.
- `Keplr`: makes use of [loadKeplrWallet](https://github.com/CosmWasm/dApps/blob/master/packages/logic/src/service/sdk.ts#L51) from `@cosmicdapp/logic` to get a Keplr signer.

After loading the signer, it is used to initialize the `SigningCosmWasmClient` so it is able to be queried inside the dApp after the login process. Once this initialization has been done and the client is now available, the user is navigated to the path indicated in `[path-to-after-login]`.
