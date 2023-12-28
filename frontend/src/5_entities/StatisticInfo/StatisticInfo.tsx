import { PercentIndicator } from "@/src/6_shared/ui/components/PercentIndicator";
import {
  StatisticInfoContainer,
  StatisticInfoNumbersWrapper,
  StatisticInfoTitle,
  StatisticInfoValue,
} from "./StatisticInfo.styles";
import { STATISTIC_DATA_VALUES } from "./StatisticInfo.constants";

export default function StatisticInfo() {
  return (
    <StatisticInfoContainer>
      {STATISTIC_DATA_VALUES.map(({ id, name, value, percent }) => (
        <div key={id}>
          <StatisticInfoTitle>{name}</StatisticInfoTitle>
          <StatisticInfoNumbersWrapper>
            <StatisticInfoValue>{value}</StatisticInfoValue>
            <PercentIndicator percent={percent} />
          </StatisticInfoNumbersWrapper>
        </div>
      ))}
    </StatisticInfoContainer>
  );
}
