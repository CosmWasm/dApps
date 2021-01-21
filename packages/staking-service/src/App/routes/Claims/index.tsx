import { Loading, PageLayout } from "@cosmicdapp/design";
import { CW20, displayAmountToNative, getErrorFromStackTrace, useSdk } from "@cosmicdapp/logic";
import { Decimal } from "@cosmjs/math";
import { Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { config } from "../../../config";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathClaims, pathOperationResult, pathWallet } from "../../paths";
import { ClaimDetail } from "./components/ClaimDetail";
import { ClaimList } from "./components/ClaimList";
import { HeaderTitleStack, MainStack } from "./style";

const { Title } = Typography;

export interface ClaimData {
  readonly date: Date;
  readonly balance: string;
}

interface ClaimsParams {
  readonly validatorAddress: string;
}

export function Claims(): JSX.Element {
  const [loading, setLoading] = useState(false);
  const [claimIndex, setClaimIndex] = useState<number>();

  const history = useHistory();
  const { validatorAddress } = useParams<ClaimsParams>();
  const { getClient, address, refreshBalance } = useSdk();

  const [validatorName, setValidatorName] = useState("");
  const [claimsData, setClaimsData] = useState<readonly ClaimData[]>([]);
  const [balanceToClaim, setBalanceToClaim] = useState("0");

  useEffect(() => {
    const client = getClient();

    (async function updateNameAndClaims() {
      const contract = await client.getContract(validatorAddress);
      const cw20Contract = CW20(client).use(contract.address);

      const [{ name }, { claims }] = await Promise.all([
        cw20Contract.tokenInfo(),
        cw20Contract.claims(address),
      ]);

      setValidatorName(name);

      const claimsData: ClaimData[] = claims.map((claim) => {
        const date = new Date(claim.release_at.at_time * 1000);

        const decimals = config.coinMap[config.stakingToken].fractionalDigits;
        const balance = Decimal.fromAtomics(claim.amount, decimals).toString();

        return { date, balance };
      });

      setClaimsData(claimsData.sort((a, b) => a.date.valueOf() - b.date.valueOf()));
    })();
  }, [getClient, validatorAddress, address]);

  useEffect(() => {
    const decimals = config.coinMap[config.stakingToken].fractionalDigits;
    const now = new Date().valueOf();

    const readyClaims = claimsData.filter((claim) => claim.date.valueOf() < now);

    const balances = readyClaims.map((claim) =>
      Decimal.fromAtomics(
        displayAmountToNative(claim.balance, config.coinMap, config.stakingToken),
        decimals,
      ),
    );

    const balanceToClaim = balances.reduce(
      (previous, current) => previous.plus(current),
      Decimal.fromAtomics("0", decimals),
    );
    setBalanceToClaim(balanceToClaim.toString());
  }, [claimsData]);

  async function claimAll() {
    setLoading(true);

    const client = getClient();
    const contract = await client.getContract(validatorAddress);
    const cw20Contract = CW20(client).use(contract.address);

    try {
      const txHash = await cw20Contract.claim(address);
      if (!txHash) {
        throw Error("Claim failed");
      }

      refreshBalance();

      history.push({
        pathname: pathOperationResult,
        state: {
          success: true,
          message: `Successfully claimed`,
          customButtonText: "Wallet",
          customButtonActionPath: `${pathWallet}/${validatorAddress}`,
        },
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Claim transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathClaims}/${validatorAddress}`,
        },
      });
    }
  }

  const showClaimList = claimIndex === undefined;
  const showClaimDetail = claimIndex !== undefined;

  return (
    (loading && <Loading loadingText={`Claiming...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <HeaderTitleStack>
            <HeaderBackMenu path={`${pathWallet}/${validatorAddress}`} />
            <Title>Pending Claims</Title>
            <Title level={2}>{validatorName}</Title>
          </HeaderTitleStack>
          {showClaimList && (
            <ClaimList
              claimsData={claimsData}
              setClaimIndex={setClaimIndex}
              balanceToClaim={balanceToClaim}
              claimAll={claimAll}
            />
          )}
          {showClaimDetail && (
            <ClaimDetail claimsData={claimsData} claimIndex={claimIndex} setClaimIndex={setClaimIndex} />
          )}
        </MainStack>
      </PageLayout>
    ))
  );
}
