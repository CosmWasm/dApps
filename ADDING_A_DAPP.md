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

5. In the packages/[your-app] directory, run:

```shell
yarn start
```

## New dApp from standalone template

👷 Coming soon!
