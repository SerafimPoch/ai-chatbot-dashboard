import Image from "next/image";
import { TimeSwitcher } from "@/src/4_features/TimeSwitcher";
import { PercentIndicator } from "@/src/6_shared/ui/components/PercentIndicator";
import { ProgressBar } from "@/src/6_shared/ui/components/ProgressBar";
import { Loader } from "@/src/6_shared/ui/components/Loader/view";
import {
  EarningsContainer,
  EarningsTitleWrapper,
  EarningsTitle,
  EarningsContent,
  EarningsContentHeadlines,
  EarningsContentBoldText,
  EarningsContentLifeWrapper,
  EarningsContentCapacity,
  EarningsContentLightText,
  EarningsItemWrapper,
  EarningsChatBotContainer,
  EarningsChatBotName,
  EarningsChatBotModel,
  EarningsProgressBarWrapper,
  EarningsPercentIndicatorWrapper,
  EarningsTimeSwitcherWrapper,
} from "./styles";
import chatBotIcon from "./assets/chatbot.svg?url";
import chatBotRedIcon from "./assets/chatbot-red.svg?url";
import { useEarnings } from "./api";

export default function Earnings() {
  const { data, isLoading } = useEarnings();
  return (
    <EarningsContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <EarningsTitleWrapper>
            <EarningsTitle>Earnings</EarningsTitle>
            <EarningsTimeSwitcherWrapper>
              <TimeSwitcher />
            </EarningsTimeSwitcherWrapper>
          </EarningsTitleWrapper>
          <EarningsContent>
            <EarningsContentHeadlines>Chatbot</EarningsContentHeadlines>
            <EarningsContentHeadlines>Current pledge</EarningsContentHeadlines>
            <EarningsContentHeadlines>
              Lifetime support
            </EarningsContentHeadlines>
            <EarningsContentHeadlines>
              Available storage
            </EarningsContentHeadlines>
            <div />
          </EarningsContent>
          {data?.map(({ id, version, pledge, lifetime, storage, space }) => (
            <EarningsItemWrapper key={id}>
              <EarningsChatBotContainer>
                {version === 4 ? (
                  <Image
                    src={chatBotIcon}
                    alt="chatbot"
                    width={64}
                    height={64}
                  />
                ) : (
                  <Image
                    src={chatBotRedIcon}
                    alt="chatbot-red"
                    width={64}
                    height={64}
                  />
                )}
                <div>
                  <EarningsChatBotName>EchoBot</EarningsChatBotName>
                  <EarningsChatBotModel>{`GPT${version}-based`}</EarningsChatBotModel>
                </div>
              </EarningsChatBotContainer>
              <EarningsContentBoldText>${pledge}</EarningsContentBoldText>
              <EarningsContentLifeWrapper>
                <EarningsContentBoldText>
                  ${lifetime.price}
                </EarningsContentBoldText>
                <EarningsPercentIndicatorWrapper>
                  <PercentIndicator percent={lifetime.percent} />
                </EarningsPercentIndicatorWrapper>
              </EarningsContentLifeWrapper>
              <EarningsProgressBarWrapper>
                <ProgressBar storage={storage.used} color={storage.color} />
              </EarningsProgressBarWrapper>
              <EarningsContentCapacity>
                <EarningsContentBoldText>{space.used}</EarningsContentBoldText>
                <EarningsContentLightText>
                  /{space.all}Gb
                </EarningsContentLightText>
              </EarningsContentCapacity>
            </EarningsItemWrapper>
          ))}
        </>
      )}
    </EarningsContainer>
  );
}
