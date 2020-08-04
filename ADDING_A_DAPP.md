# How to add a new DApp

## Create React App

In the packages directory, create a new Typescript Create React App project with:

```shell
yarn create react-app my-app --template typescript
```

## Ant Design

### Dependencies

In order to add Ant Design support, add the `antd` dependency:

```shell
yarn add antd
```

And the `@craco/craco` and `craco-antd` devDependencies:

```shell
yarn add --dev @craco/craco craco-antd
```

You also need to replace the `react-scripts` scripts in the new package.json with `craco`:

```json
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```

### Configuration

In the root directory of the newly created package, add a `craco.config.js` with the following content:

```javascript
const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, "src/theme/override.less"),
      },
    },
  ],
};
```

This allows you to have an `override.less` file in the `src/theme/` directory, that enables the overriding of the default Ant Design theme with the `LESS` variables defined [here]("https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less").

### Testing that override works

Add the following content to `src/theme/override.less`:

```less
@heading-color: firebrick;
@text-color: #2980b9;
@btn-primary-color: rgb(14, 14, 14);
@btn-primary-bg: hsl(16, 100%, 73%);
```

Change `App.css` to `App.less` and add `@import "~antd/dist/antd.less";` at the top.

Change `App.tsx` to have the following content:

```typescript
import React from "react";
import { Button, Typography } from "antd";
import "./App.less";

const { Title, Paragraph } = Typography;

const App = (): JSX.Element => (
  <div className="App">
    <Typography>
      <Title>This title should be red instead of black</Title>
      <Paragraph>
        This paragraph should be blue instead of black. The button below should be orange with black text,
        instead of blue with white text
      </Paragraph>
    </Typography>
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```

You can now check that the resulting app has the right colors.

## Adding ESLint support

### Dependencies

Install the needed devDependencies:

```shell
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react
```

### Configuration

Add an `.eslintrc.js` file with the following content:

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended", // Make sure this is always the last configuration in the extends array
  ],
  overrides: [
    {
      files: "**/*.js",
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
```
