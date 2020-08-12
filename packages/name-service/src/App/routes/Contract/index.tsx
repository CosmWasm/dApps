import { Typography } from "antd";
import { Formik } from "formik";
import { Form, FormItem, Input } from "formik-antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Center from "../../../theme/layout/Center";
import Stack from "../../../theme/layout/Stack";
import BackButton from "../../components/BackButton";
import Loading from "../../components/Loading";
import YourAccount from "../../components/YourAccount";
import { SearchValidationSchema } from "../../forms/validationSchemas";
import "./Contract.less";
import SearchResult from "./SearchResult";

const { Title, Text } = Typography;

interface ContractState {
  readonly label: string;
  readonly address: string;
}

function Contract(): JSX.Element {
  const { label, address } = useParams() as ContractState;

  const [loading, setLoading] = useState(false);
  const [searchedName, setSearchedName] = useState("");

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
              <Formik
                initialValues={{ name: "" }}
                validationSchema={SearchValidationSchema}
                onSubmit={(values) => {
                  setSearchedName(values.name);
                }}
              >
                <Form>
                  <FormItem name="name">
                    <Input name="name" placeholder="Name" />
                  </FormItem>
                </Form>
              </Formik>
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
