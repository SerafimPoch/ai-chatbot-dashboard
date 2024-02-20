import { useMemo } from "react";
import {
  PercentIndicatorContainer,
  PercentIndicatorTriangle,
  PercentIndicatorValue,
} from "./styles";

interface TPercentIndicator {
  percent: number;
}

export default function PercentIndicator({ percent }: TPercentIndicator) {
  const isPercentNegative = useMemo(() => percent <= 0, [percent]);

  return (
    <PercentIndicatorContainer>
      <PercentIndicatorTriangle isPercentNegative={isPercentNegative} />
      <PercentIndicatorValue isPercentNegative={isPercentNegative}>
        {percent}%
      </PercentIndicatorValue>
    </PercentIndicatorContainer>
  );
}
