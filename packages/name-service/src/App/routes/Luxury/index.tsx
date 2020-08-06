import { Input, Typography } from "antd";
import React, { useState } from "react";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import YourAccount from "../../components/YourAccount";
import "./Luxury.less";
import SearchResult from "./SearchResult";

const { Title, Text } = Typography;
const { Search } = Input;

function Luxury(): JSX.Element {
  const [searchedName, setSearchedName] = useState("");

  return (
    <Center tag="main" className="Luxury">
      <Stack className="MainStack">
        <Stack className="SearchAndResultStack">
          <Stack className="SearchStack">
            <Title>Luxury</Title>
            <Text>(cosmos1ym5m5dw7ptt7jkf8f0k3k3o30889ju</Text>
            <Search
              placeholder="Name"
              enterButton
              className="SearchBox"
              onSearch={(name) => {
                setSearchedName(name);
              }}
            />
          </Stack>
          {searchedName && <SearchResult name={searchedName} />}
        </Stack>
        <YourAccount tag="footer" />
      </Stack>
    </Center>
  );
}

export default Luxury;
