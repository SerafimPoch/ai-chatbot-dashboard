import { TimeSwitcher } from "@/src/4_features/TimeSwitcher";
import { PercentIndicator } from "@/src/5_entities/PercentIndicator";
import { ProgressBar } from "@/src/5_entities/ProgressBar";
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
} from "./Earnings.styles";
import EarningsChatBot from "./components/EarningsChatBot/EarningsChatBot";
import { EARNINGS_DATA } from "./constants";

export default function Earnings() {
  return (
    <EarningsContainer>
      <EarningsTitleWrapper>
        <EarningsTitle>Earnings</EarningsTitle>
        <TimeSwitcher />
      </EarningsTitleWrapper>
      <EarningsContent>
        <EarningsContentHeadlines>Chatbot</EarningsContentHeadlines>
        <EarningsContentHeadlines>Current pledge</EarningsContentHeadlines>
        <EarningsContentHeadlines>Lifetime support</EarningsContentHeadlines>
        <EarningsContentHeadlines>Available storage</EarningsContentHeadlines>
        <div />
      </EarningsContent>
      {EARNINGS_DATA.map(
        ({ id, version, pledge, lifetime, storage, space }) => (
          <EarningsItemWrapper key={id}>
            <EarningsChatBot version={version} />
            <EarningsContentBoldText>${pledge}</EarningsContentBoldText>
            <EarningsContentLifeWrapper>
              <EarningsContentBoldText>
                ${lifetime.price}
              </EarningsContentBoldText>
              <PercentIndicator percent={lifetime.percent} />
            </EarningsContentLifeWrapper>
            <ProgressBar storage={storage.used} color={storage.color} />
            <EarningsContentCapacity>
              <EarningsContentBoldText>{space.used}</EarningsContentBoldText>
              <EarningsContentLightText>
                /{space.all}Gb
              </EarningsContentLightText>
            </EarningsContentCapacity>
          </EarningsItemWrapper>
        )
      )}
    </EarningsContainer>
  );
}
