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
