# How to upgrade a dApp to Stargate

This guide is intended for dApp developers who have created a functional frontend application using @cosmjs based on v0.23 for a launchpad-based chain, and who wish to upgrade the dApp to work well with a stargate based chain.

## Dependencies

The first step that needs to be made is to ensure the dApp is using a Stargate compatible version of CosmJS, that being v0.24.0-alpha.17 or greater.

## SigningCosmWasmClient

In order to create a signing client, instead of using:

```typescript
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-launchpad";

const client = new SigningCosmWasmClient(endpoint, address, signer, gasPrice, gasLimits);
```

Use the following:

```typescript
import { SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";

const client = SigningCosmWasmClient.connectWithSigner(endpoint, signer, options);
```

The `options` argument is a `SigningCosmWasmClientOptions` object with several properties that you may need to configure:

```typescript
import { CosmWasmFeeTable } from "@cosmjs/cosmwasm-launchpad";
import { GasLimits, GasPrice } from "@cosmjs/launchpad";

const gasLimits: GasLimits<CosmWasmFeeTable> = {
  upload: 1500000,
  init: 600000,
  exec: 400000,
  migrate: 600000,
  send: 80000,
  changeAdmin: 80000,
};

const options = {
  prefix: "wasm",
  gasPrice: GasPrice.fromString("0.025ucosm"),
  gasLimits: gasLimits,
};
```

## Balance query

The Launchpad version of the dApps used to have an `AccountProvider` for accessing an account's address and balance. Since the `Account` interface from Stargate no longer provides its balance, it has been removed in favor of `SdkProvider`, which queries it with:

```typescript
client.getBalance(address: string, searchDenom: string);
```

It now makes it accessible via a React hook, along with the address and a method to refresh the balance:

```typescript
import { useSdk } from "@cosmicdapp/logic";

const { address, balance, refreshBalance } = useSdk();
```

## Execute contract

The `SigningCosmWasmClient.execute()` method now has a `senderAddress` string as first parameter, so the following methods from the CW20 service's `CW20Instance` object also need to have that parameter: `balance`, `minter`, `mint`, `transfer`, `burn`, `increaseAllowance`, `decreaseAllowance`, `transferFrom`, `bond`, `unbond`, `claim`.

## Login with Ledger

The Chrome backend for USB support has been recently changed and so the `@ledgerhq/hw-transport-webusb` dependency has been updated to the latest stable release (`5.39.1`) in order for the ledger to work as usual.

## Login with Keplr

The current signer provided by the published version of Keplr does not provide the needed `signAmino()` method, but it provides a `sign()` method with the same signature. A copy of this method renamed to `signAmino` is added to the signer if it does not already exist, before using it to the client.
