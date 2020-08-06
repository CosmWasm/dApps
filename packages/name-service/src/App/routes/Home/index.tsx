import { Button, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import YourAccount from "../../components/YourAccount";
import { pathLuxury } from "../../paths";
import "./Home.less";

const { Title } = Typography;

function Home(): JSX.Element {
  return (
    <Center tag="main" className="Home">
      <Stack>
        <Title>Name Service</Title>
        <Stack tag="nav">
          <Button disabled type="primary">
            Free
          </Button>
          <Link to={pathLuxury}>
            <Button type="primary">Luxury</Button>
          </Link>
          <Button disabled type="primary">
            Tokens
          </Button>
        </Stack>
        <YourAccount tag="footer" />
      </Stack>
    </Center>
  );
}

export default Home;
