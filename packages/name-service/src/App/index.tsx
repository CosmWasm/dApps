import React from "react";
import { Button, Typography } from "antd";
import "./App.less";

const { Title, Paragraph } = Typography;

const App = (): JSX.Element => (
  <div className="App">
    <Typography>
      <Title>This text should be red instead of black</Title>
      <Paragraph>
        This text should be blue instead of black and the button should be green instead of blue
      </Paragraph>
    </Typography>
    <Button type="primary">Button</Button>
  </div>
);

export default App;
