# Demo app

## How to run demo app

1. Customize this `README.md` and `package.json`'s fields as you want.

2. In `[your-app]` directory, run:

   ```shell
   yarn install
   ```

3. And then:

- If you want to connect to local chain [(how to set up)](https://docs.cosmwasm.com/getting-started/setting-env.html#run-local-node-optional):
  ```shell
  yarn start
  ```
- If you want to connect to Heldernet:
  ```shell
  yarn start:heldernet
  ```

## Generate types from a contract

The bootstraped project has [`cw20-base`](https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-base) types included in `src/contracts/types`.

In order to generate types from another contract you might need, follow these steps:

1. Copy the contract into `src/contracts/[your-contract]`.

2. In `src/contracts`, run:

   ```shell
   ./scripts/make_dts.sh ./[your-contract]
   ```

## Resources

- CosmWasm docs: https://docs.cosmwasm.com/
- CosmWasm repo: https://github.com/CosmWasm/cosmwasm
- CosmJS repo: https://github.com/cosmos/cosmjs
- dApps repo: https://github.com/CosmWasm/dApps
