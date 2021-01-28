#!/bin/bash

# Build all packages
yarn build

# Copy the packages we want to publish with desired url name
cp -R packages/name-service/build gh-pages-config/names
cp -R packages/wallet/build gh-pages-config/wallet
cp -R packages/cw20-wallet/build gh-pages-config/cw20-wallet
cp -R packages/native-staking/build gh-pages-config/staking
cp -R packages/staking-service/build gh-pages-config/cw20-staking
