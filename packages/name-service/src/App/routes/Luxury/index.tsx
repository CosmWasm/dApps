import { Input, Typography } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import YourAccount from "../../components/YourAccount";
import "./Luxury.less";
import SearchResult from "./SearchResult";

const { Title, Text } = Typography;
const { Search } = Input;

function Luxury(): JSX.Element {
  const { address } = useParams();

  const [loading, setLoading] = useState(false);
  const [searchedName, setSearchedName] = useState("");

  return (
    (loading && <Loading />) ||
    (!loading && (
      <Center tag="main" className="Luxury">
        <Stack>
          <BackButton />
          <Stack className="SearchAndResultStack">
            <Stack className="SearchStack">
              <Title>Luxury</Title>
              <Text>({address})</Text>
              <Search
                placeholder="Name"
                enterButton
                className="SearchBox"
                onSearch={(name) => {
                  setSearchedName(name);
                }}
              />
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

export default Luxury;
