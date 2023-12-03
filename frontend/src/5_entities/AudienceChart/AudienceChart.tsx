import Image from "next/image";
import { useStore } from "@nanostores/react";
import { $activeAudienceChart } from "@/src/6_shared/store";
import {
  AudienceChartContainer,
  AudienceChartLabel,
  AudienceChartLabelText,
  AudienceChartLabelWrapper,
  AudienceChartPercent,
  AudienceChartStatisticPercent,
  AudienceChartStatisticTriangle,
  AudienceChartStatisticWrapper,
} from "./AudienceChart.styles";
import chartMockIcon from "./ui/circle.svg?url";
import { AUDIENCE_DATA } from "./constants";

export default function AudienceChart() {
  const activeId = useStore($activeAudienceChart);
  return (
    <AudienceChartContainer>
      <Image src={chartMockIcon} alt="chart-mock" width={138} height={138} />
      {AUDIENCE_DATA.filter((el) => el.id === activeId).map(
        ({ id, percent, info }) => (
          <div key={id}>
            <AudienceChartPercent>{percent}%</AudienceChartPercent>
            {info.map(({ name, color, percent }) => (
              <AudienceChartLabelWrapper key={name}>
                <AudienceChartLabel color={color} />
                <AudienceChartLabelText>{name}</AudienceChartLabelText>
                <AudienceChartStatisticWrapper>
                  <AudienceChartStatisticTriangle />
                  <AudienceChartStatisticPercent>
                    {percent}%
                  </AudienceChartStatisticPercent>
                </AudienceChartStatisticWrapper>
              </AudienceChartLabelWrapper>
            ))}
          </div>
        )
      )}
    </AudienceChartContainer>
  );
}
