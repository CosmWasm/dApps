import { Center, Stack, YourAccount } from "@cosmicdapp/design";
import { useError, useSdk } from "@cosmicdapp/logic";
import { Contract } from "@cosmjs/cosmwasm";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../config";
import { pathContract } from "../../paths";
import "./Home.less";

const { Title } = Typography;

function Home(): JSX.Element {
  const { setError } = useError();
  const { getClient } = useSdk();

  const [contracts, setContracts] = useState<readonly Contract[]>([]);

  useEffect(() => {
    getClient()
      .getContracts(config.codeId)
      .then((contracts) => setContracts(contracts))
      .catch(setError);
  }, [getClient, setError]);

  return (
    <Center tag="main" className="Center Home">
      <Stack className="Stack">
        <Title>Name Service</Title>
        <Stack tag="nav" className="Stack">
          {contracts.map(({ label, address }) => (
            <Link key={address} to={`${pathContract}/${label.toLowerCase()}/${address}`}>
              <Button type="primary">{label}</Button>
            </Link>
          ))}
        </Stack>
        <YourAccount tag="footer" />
      </Stack>
    </Center>
  );
}

export default Home;
