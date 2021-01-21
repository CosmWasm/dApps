# How to upgrade a dApp to Stargate

This guide is intended for dApp developers who have created a functional frontend application using @cosmjs based on v0.23 for a launchpad-based chain, and who wish to upgrade the dApp to work well with a stargate based chain.

## Dependencies

The first step that needs to be made is to ensure the dApp is using a Stargate compatible version of CosmJS, that being v0.24.0-alpha.17 or greater.

## SigningCosmWasmClient

In order to create a signing client, instead of using:

```typescript
new SigningCosmWasmClient(endpoint, address, signer, gasPrice, gasLimits);
```

Use the following:

```typescript
SigningCosmWasmClient.connectWithSigner(endpoint, signer, options);
```

The `options` argument is a `SigningCosmWasmClientOptions` object with several properties, being the `registry` the most notable one. It comes from `@cosmjs/proto-signing` and it needs to be instantiated with the types you may need, like this:

```typescript
import { Registry } from "@cosmjs/proto-signing";

const typeRegistry = new Registry();

typeRegistry.register("/cosmwasm.wasm.v1beta1.MsgStoreCode", MsgStoreCode);
typeRegistry.register("/cosmwasm.wasm.v1beta1.MsgInstantiateContract", MsgInstantiateContract);
typeRegistry.register("/cosmwasm.wasm.v1beta1.MsgExecuteContract", MsgExecuteContract);
```

The generated types come from the `codec` namespace in `@cosmjs/cosmwasm-stargate`:

```typescript
import { codec } from "@cosmjs/cosmwasm-stargate";

const { MsgStoreCode, MsgInstantiateContract, MsgExecuteContract } = codec.cosmwasm.wasm.v1beta1;
```

## Balance query

The Launchpad version of the dApps used to have an `AccountProvider` for accessing an account's address and balance. Since the `Account` interface from Stargate no longer provides its balance, it has been removed in favor of `SdkProvider`, which queries it with:

```typescript
CosmWasmClient.getBalance(address: string, searchDenom: string);
```

It now makes it accessible via a React hook, along with the address and a method to refresh the balance:

```typescript
const { address, balance, refreshBalance } = useSdk();
```

## Execute contract

The `SigningCosmWasmClient.execute()` method now has a `senderAddress` string as first parameter, so the following methods from the CW20 service's `CW20Instance` object also need to have that parameter: `balance`, `minter`, `mint`, `transfer`, `burn`, `increaseAllowance`, `decreaseAllowance`, `transferFrom`, `bond`, `unbond`, `claim`.

## Login with Ledger

The Chrome backend for USB support has been recently changed and so the `@ledgerhq/hw-transport-webusb` dependency has been updated to the latest stable release (`5.39.1`) in order for the ledger to work as usual.

## Login with Keplr

The current signer provided by the published version of Keplr does not provide the needed `signAmino()` method, but it provides a `sign()` method with the same signature. A copy of this method renamed to `signAmino` is added to the signer if it does not already exist, before using it to the client.
