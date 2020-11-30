# How to add a new dApp

## Prerequisites

1. Install Node.js. Tested for version 14.
2. Install Yarn. Tested for version 1.22.

## New dApp from monorepo template

1. With the v0.4.0 release of the `CosmWasm/dApps` monorepo cloned, copy the `_template` directory to `packages/` and rename it to your app's name.
2. Customize `README.md` and `package.json`'s fields as you want.
3. Customize the `Login` component according to `@cosmicdapp/design`'s `Login` component's [`README.md`](https://github.com/CosmWasm/dApps/tree/master/packages/design/src/components/logic/Login).
4. In the root directory of the monorepo, run:

   ```shell
   yarn
   yarn build-deps
   ```

5. In the packages/`[your-app]` directory, run:

   ```shell
   yarn start
   ```

## New dApp from standalone template

### Create project

1. Bootstrap a Create React App project preloaded with `@cosmicdapp`'s `logic` and `design` libraries.

   Run the following command in any directory you want:

   ```shell
   yarn create react-app [your-app] --template @cosmicdapp/cra-template
   ```

   Or if you prefer to use `npm`:

   ```shell
   npx create-react-app [your-app] --template @cosmicdapp/cra-template
   ```

2. Customize `README.md` and `package.json`'s fields as you want.

3. In `[your-app]` directory, run:

   ```shell
   yarn
   yarn build-deps
   ```

4. And then:

   ```shell
   yarn start
   ```

### Generate types from a contract

The bootstraped project has [`cw20-base`](https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-base) types included in `src/contracts/types`.

In order to generate types from another contract you might need, follow these steps:

1. Copy the contract into `src/contracts/[your-contract]`.

2. In `src/contracts`, run:

   ```shell
   ./scripts/make_dts.sh ./[your-contract]
   ```
