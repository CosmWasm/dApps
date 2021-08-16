import { Loading, PageLayout } from "@cosmicdapp/design";
import { AppConfig, getErrorFromStackTrace, nativeCoinToDisplay, useSdk } from "@cosmicdapp/logic";
import { Coin, coins } from "@cosmjs/stargate";
import { isBroadcastTxFailure } from "@cosmjs/stargate";
import { Button, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { DataList } from "../../components/DataList";
import { HeaderBackMenu } from "../../components/HeaderBackMenu";
import { pathOperationResult, pathRewards, pathValidators } from "../../paths";
import { EncodeMsgWithdrawDelegatorReward, useStakingValidator } from "../../utils/staking";
import { HeaderTitleStack, MainStack } from "./style";

const { Title, Text } = Typography;

function getRewardsMap(config: Partial<AppConfig>, rewards: readonly Coin[]) {
  if (!config.coinMap) return {};

  const rewardsMap = {};
  for (const coin of rewards) {
    const coinToDisplay = nativeCoinToDisplay(coin, config.coinMap);
    rewardsMap[coinToDisplay.denom] = coinToDisplay.amount;
  }
  return rewardsMap;
}

interface RewardsParams {
  readonly validatorAddress: string;
}

export function Rewards(): JSX.Element {
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const { validatorAddress } = useParams<RewardsParams>();

  const { config, getClient, getStakingClient, address, refreshBalance } = useSdk();

  const validator = useStakingValidator(validatorAddress);
  const [rewards, setRewards] = useState<readonly Coin[]>([]);

  useEffect(() => {
    (async function updateRewards() {
      try {
        const { rewards } = await getStakingClient().distribution.delegationRewards(
          address,
          validatorAddress,
        );
        const nonNullRewards: readonly Coin[] = rewards
          .map((coin) => ({
            amount: coin.amount ? coin.amount.slice(0, -18) : "",
            denom: coin.denom || "",
          }))
          .filter((coin) => coin.amount.length && coin.denom.length);

        setRewards(nonNullRewards);
      } catch (error) {
        console.error(error.message);
      }
    })();
  }, [getStakingClient, address, validatorAddress]);

  async function withdrawRewards() {
    setLoading(true);

    const withdrawRewardsMsg: EncodeMsgWithdrawDelegatorReward = {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: {
        delegatorAddress: address,
        validatorAddress: validatorAddress,
      },
    };

    const fee = {
      amount: coins(
        config.gasPrice * 10 ** config.coinMap[config.feeToken].fractionalDigits,
        config.feeToken,
      ),
      gas: "1500000",
    };

    try {
      const response = await getClient().signAndBroadcast(address, [withdrawRewardsMsg], fee);
      if (isBroadcastTxFailure(response)) {
        throw Error("Rewards withdrawal failed");
      }

      refreshBalance();

      history.push({
        pathname: pathOperationResult,
        state: {
          success: true,
          message: `Successfully withdrawn`,
          customButtonText: "Validator home",
          customButtonActionPath: `${pathValidators}/${validatorAddress}`,
        },
      });
    } catch (stackTrace) {
      console.error(stackTrace);

      history.push({
        pathname: pathOperationResult,
        state: {
          success: false,
          message: "Rewards withdrawal transaction failed:",
          error: getErrorFromStackTrace(stackTrace),
          customButtonActionPath: `${pathValidators}/${validatorAddress}${pathRewards}`,
        },
      });
    }
  }

  return (
    (loading && <Loading loadingText={`Withdrawing rewards...`} />) ||
    (!loading && (
      <PageLayout>
        <MainStack>
          <HeaderTitleStack>
            <HeaderBackMenu path={`${pathValidators}/${validatorAddress}`} />
            <Title>Pending rewards</Title>
            <Title level={2}>{validator?.description.moniker ?? ""}</Title>
          </HeaderTitleStack>
          {rewards.length ? (
            <>
              <DataList {...getRewardsMap(config, rewards)} />
              <Button type="primary" onClick={withdrawRewards}>
                Withdraw rewards
              </Button>
            </>
          ) : (
            <Text>No rewards found</Text>
          )}
        </MainStack>
      </PageLayout>
    ))
  );
}
