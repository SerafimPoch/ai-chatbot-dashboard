import { PercentIndicator } from "../../../../5_entities/PercentIndicator";
import {
  StatisticInfoContainer,
  StatisticInfoNumbersWrapper,
  StatisticInfoTitle,
  StatisticInfoValue,
} from "./StatisticInfo.styles";
import { STATISTIC_DATA_VALUES } from "./constants";

export default function StatisticInfo() {
  return (
    <StatisticInfoContainer>
      {STATISTIC_DATA_VALUES.map((e) => (
        <div key={e.id}>
          <StatisticInfoTitle>{e.name}</StatisticInfoTitle>
          <StatisticInfoNumbersWrapper>
            <StatisticInfoValue>{e.value}</StatisticInfoValue>
            <PercentIndicator percent={e.percent} />
          </StatisticInfoNumbersWrapper>
        </div>
      ))}
    </StatisticInfoContainer>
  );
}
