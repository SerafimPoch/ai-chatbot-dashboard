import { PercentIndicator } from "@/src/6_shared/ui/components/PercentIndicator";
import {
  StatisticInfoContainer,
  StatisticInfoNumbersWrapper,
  StatisticInfoTitle,
  StatisticInfoValue,
} from "./StatisticInfo.styles";
import { useStatistics } from "./StatisticInfo.api";

export default function StatisticInfo() {
  const { data } = useStatistics();

  return (
    <StatisticInfoContainer>
      {data?.map(({ id, name, value, percent }) => (
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
