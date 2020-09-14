import { BackButton, Loading, PageLayout, YourAccount } from "@cosmicdapp/design";
import { Typography } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import backArrowIcon from "../../assets/backArrow.svg";
import { pathHome } from "../../paths";
import { FormSearchName } from "./components/FormSearchName";
import { SearchResult } from "./components/SearchResult";
import { BackSearchResultStack, MainStack, SearchStack } from "./style";

const { Title, Text } = Typography;

interface ContractParams {
  readonly label: string;
  readonly address: string;
  readonly name?: string;
}

export function Contract(): JSX.Element {
  const { label, address, name } = useParams() as ContractParams;

  const [loading, setLoading] = useState(false);
  const [searchedName, setSearchedName] = useState(name);

  function setLowercaseSearchedName(newName: string) {
    setSearchedName(newName.toLowerCase());
  }

  return (
    (loading && <Loading loadingText={`Registering name: ${searchedName}...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <BackSearchResultStack>
            <BackButton icon={backArrowIcon} path={pathHome} />
            <SearchStack>
              <Title>{label}</Title>
              <Text>({address})</Text>
              <FormSearchName initialName={name} setSearchedName={setLowercaseSearchedName} />
            </SearchStack>
            {searchedName && (
              <SearchResult
                contractLabel={label}
                contractAddress={address}
                name={searchedName}
                setLoading={setLoading}
              />
            )}
          </BackSearchResultStack>
          <YourAccount tag="footer" />
        </MainStack>
      </PageLayout>
    ))
  );
}
