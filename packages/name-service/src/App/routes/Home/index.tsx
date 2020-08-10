import { Contract } from "@cosmjs/cosmwasm";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../config";
import { useAccount, useError, useSdk } from "../../../service";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import Loading from "../../components/Loading";
import YourAccount from "../../components/YourAccount";
import "./Home.less";

const { Title } = Typography;

function Home(): JSX.Element {
  const sdk = useSdk();
  const accountProvider = useAccount();
  const { setError } = useError();
  const [contracts, setContracts] = useState<readonly Contract[]>([]);

  useEffect(() => {
    sdk.init();
    accountProvider.refreshAccount();
  }, [sdk, accountProvider]);

  useEffect(() => {
    !sdk.loading &&
      sdk
        .getClient()
        .getContracts(config.codeId)
        .then((contracts) => setContracts(contracts))
        .catch(setError);
  }, [sdk, setError]);

  return sdk.loading ? (
    <Loading loadingText="Initializing app..." />
  ) : (
    <Center tag="main" className="Home">
      <Stack>
        <Title>Name Service</Title>
        <Stack tag="nav">
          {contracts.map(({ label, address }) => (
            <Link key={address} to={`/${label.toLowerCase()}/${address}`}>
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
