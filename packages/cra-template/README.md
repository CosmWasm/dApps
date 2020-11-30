# Cosmicdapp CRA template

## Description

This package provides a [custom template](https://create-react-app.dev/docs/custom-templates) for [Create React App](https://create-react-app.dev).

It allows you to bootstrap a [CosmJS](https://github.com/cosmos/cosmjs)-based React application by making use of [@cosmicdapp/logic](https://www.npmjs.com/package/@cosmicdapp/logic) and [@cosmicdapp/design](https://www.npmjs.com/package/@cosmicdapp/design).

It also offers a way to generate TypeScript type definitions from a [CosmWasm](https://cosmwasm.com) contract, and comes preloaded with [cw20-base](https://github.com/CosmWasm/cosmwasm-plus/tree/master/contracts/cw20-base) types.

## Usage

1. Run the following command in order to bootstrap a new project:

   ```shell
   yarn create react-app [your-app] --template @cosmicdapp/cra-template
   ```

2. Follow the instructions in the generated app's `README.md`.
