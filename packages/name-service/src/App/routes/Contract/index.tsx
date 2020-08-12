import { Typography } from "antd";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import YourAccount from "../../components/YourAccount";
import FormSearchName from "./components/FormSearchName";
import SearchResult from "./components/SearchResult";
import "./Contract.less";
import { useError } from "../../../service";

const { Title, Text } = Typography;

interface ContractParams {
  readonly label: string;
  readonly address: string;
}

function Contract(): JSX.Element {
  const { label, address } = useParams() as ContractParams;
  const { error, setError, clearError } = useError();

  const [loading, setLoading] = useState(false);
  const [searchedName, setSearchedName] = useState("");

  useEffect(() => {
    console.log(error);
    setError("Effect error");
  }, [error, setError]);

  return (
    (loading && <Loading loadingText={`Registering name: ${searchedName}...`} />) ||
    (!loading && (
      <Center tag="main" className="Contract">
        <Stack>
          <BackButton />
          <Stack className="SearchAndResultStack">
            <Stack className="SearchStack">
              <div
                onClick={() => {
                  clearError();
                }}
              >
                <Title>{label}</Title>
              </div>
              <div
                onClick={() => {
                  setError("asd");
                }}
              >
                <Title>{error}</Title>
              </div>
              <Text>({address})</Text>
              <FormSearchName setSearchedName={setSearchedName} />
            </Stack>
            {searchedName && (
              <SearchResult name={searchedName} contractAddress={address} setLoading={setLoading} />
            )}
          </Stack>
          <YourAccount tag="footer" />
        </Stack>
      </Center>
    ))
  );
}

export default Contract;
