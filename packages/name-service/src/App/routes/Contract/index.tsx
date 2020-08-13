import { Typography } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import YourAccount from "../../components/YourAccount";
import FormSearchName from "./components/FormSearchName";
import SearchResult from "./components/SearchResult";
import "./Contract.less";

const { Title, Text } = Typography;

interface ContractParams {
  readonly label: string;
  readonly address: string;
  readonly name?: string;
}

function Contract(): JSX.Element {
  const { label, address, name } = useParams() as ContractParams;

  const [loading, setLoading] = useState(false);
  const [searchedName, setSearchedName] = useState(name);

  return (
    (loading && <Loading loadingText={`Registering name: ${searchedName}...`} />) ||
    (!loading && (
      <Center tag="main" className="Contract">
        <Stack>
          <BackButton />
          <Stack className="SearchAndResultStack">
            <Stack className="SearchStack">
              <Title>{label}</Title>
              <Text>({address})</Text>
              <FormSearchName initialName={name} setSearchedName={setSearchedName} />
            </Stack>
            {searchedName && (
              <SearchResult
                contractLabel={label}
                contractAddress={address}
                name={searchedName}
                setLoading={setLoading}
              />
            )}
          </Stack>
          <YourAccount tag="footer" />
        </Stack>
      </Center>
    ))
  );
}

export default Contract;
